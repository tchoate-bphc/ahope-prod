import { takeEvery } from 'redux-saga/effects';

import {
    OFFLINE_MODE,
    FETCH_REPORTS_DATA,
} from '../constants';

import { getDateBoundsFromRangeKey } from '../utils/dateRangeUtils';

import { updateReportsData } from '../actions';

import {
    stubContactsAllQueryCountResults,
    stubEventsAllQueryCountResults,
    stubEventsFilteredQueryFindResults,
    stubContactsFilteredQueryFindResults,
} from '../endpointStubs/reports_data';

function* fetchReportsData({ dateRange }) {

    // db needs
    // - count of all contacts total
    // - count of all events total
    // - all events in range
    // - all contacts for events in range

    // all events
    const eventsAll = window._Parse_.Object.extend("event");
    const eventsAllQuery = new window._Parse_.Query(eventsAll);

    // all contacts
    const contactsAll = window._Parse_.Object.extend("contacts");
    const contactsAllQuery = new window._Parse_.Query(contactsAll);
    
    // date range selector
    const dateBoundsMinMax = getDateBoundsFromRangeKey({rangeKey: dateRange});

    // events in date range
    const eventsFilteredQuery = new window._Parse_.Query(eventsAll);
    eventsFilteredQuery.greaterThanOrEqualTo('date', dateBoundsMinMax.min);
    eventsFilteredQuery.lessThanOrEqualTo('date', dateBoundsMinMax.max);

    // contacts with events in date range    
    const contactsFilteredQuery = new window._Parse_.Query(contactsAll);
    contactsFilteredQuery.greaterThanOrEqualTo('updatedAt', dateBoundsMinMax.min);
    contactsFilteredQuery.lessThanOrEqualTo('updatedAt', dateBoundsMinMax.max);
    
    // async queries
    const contactsAllQueryCount = contactsAllQuery.count();
    const eventsAllQueryCount = eventsAllQuery.count();
    const eventsFilteredQueryFind = eventsFilteredQuery.find();
    const contactsFilteredQueryFind = contactsFilteredQuery.find();

    console.log('dateRange', dateRange)

    Promise.all([
        contactsAllQueryCount,
        eventsAllQueryCount,
        eventsFilteredQueryFind,
        contactsFilteredQueryFind,
    ]).then(([
        contactsAllQueryCountResults,
        eventsAllQueryCountResults,
        eventsFilteredQueryFindResults,
        contactsFilteredQueryFindResults,
    ]) => {
        /** 
         * object definition: eventsFilteredQueryFindResults
         * 
         * {
         *      className: "event"
         *      id: "kuemd3hLtq"
         *      _objCount: 105
         *      attributes: Object
         *      createdAt: Object
         *      updatedAt: Object
         * }
         */

        const eventAggregations = getEventAggregations(eventsFilteredQueryFindResults);
        const contactBreakdownData = getContactBreakdownData(contactsFilteredQueryFindResults);
        
        /** Example: */
        // contacts: {
        //     meta: {
        //         total: 100,
        //     },
        //     total: 0,
        //     birthCountry: [
        //         {
        //             label: 'US',
        //             count: 0
        //         }
        //     ],
        // }

        window._UI_STORE_.dispatch(updateReportsData({ 
            reportsData: {
                events: {
                    _meta: {
                        count: eventsFilteredQueryFindResults.length,
                        unfilteredCount: eventsAllQueryCountResults,
                    },
                    ...eventAggregations,
                },
                contacts: {
                    _meta: {
                        count: contactsFilteredQueryFindResults.length,
                        unfilteredCount: contactsAllQueryCountResults,
                    },
                    ...contactBreakdownData,
                },
            } 
        }));
    });

    yield;
}

function* stubFetchReportsData() {
    const eventAggregations = getEventAggregations(stubEventsFilteredQueryFindResults);
    const contactBreakdownData = getContactBreakdownData(stubContactsFilteredQueryFindResults);
    window._UI_STORE_.dispatch(updateReportsData({ 
        reportsData: {
            events: {
                _meta: {
                    count: stubEventsFilteredQueryFindResults.length,
                    unfilteredCount: stubEventsAllQueryCountResults,
                },
                ...eventAggregations,
            },
            contacts: {
                _meta: {
                    count: stubContactsFilteredQueryFindResults.length,
                    unfilteredCount: stubContactsAllQueryCountResults,
                },
                ...contactBreakdownData,
            },
        } 
    }));
    yield;
}

export default function* () {
    if (OFFLINE_MODE) {
        yield [
            takeEvery(FETCH_REPORTS_DATA, stubFetchReportsData),
        ];
    } else {
        yield [
            takeEvery(FETCH_REPORTS_DATA, fetchReportsData),
        ];
    }
}

function getEventAggregations ( events ) {

    return !events ? [] : events.reduce( (agg, event) => {
        return {
            narcanWasOffered: agg.narcanWasOffered + ( event.attributes.narcanWasOffered ? 1 : 0 ),
            narcanWasTaken: agg.narcanWasTaken + ( event.attributes.narcanWasTaken ? 1 : 0 ),
            syringesGiven: agg.syringesGiven + parseInt( event.attributes.syringesGiven || 0, 10),
            syringesTaken: agg.syringesTaken + parseInt( event.attributes.syringesTaken || 0, 10),
        };
    }, {
        narcanWasOffered: 0,
        narcanWasTaken: 0,
        syringesGiven: 0,
        syringesTaken: 0,
    });
}

function getContactBreakdownData ( contacts ) {

    const contactBreakdowns = [
        'countryOfBirth',
        'ethnicity', // from contact
        'hispanic', // from contact
        'ageOfFirstInjection',
        'genderIdentity',
    ];

    return !contacts ? [] : contactBreakdowns.reduce((agg, breakdownField) => {

        const breakdownFieldValsAsKeys = contacts.reduce((breakdownFieldValAgg, contact) => {

            // { 'US' : 123, ...  }
            breakdownFieldValAgg[contact.attributes[breakdownField]] = !breakdownFieldValAgg[contact.attributes[breakdownField]] ? 1 : breakdownFieldValAgg[contact.attributes[breakdownField]] + 1;

            return breakdownFieldValAgg;
        }, {});

        agg[breakdownField] = Object.keys(breakdownFieldValsAsKeys).map(breakdownFieldVal => {

            return {
                label: breakdownFieldVal,
                count: breakdownFieldValsAsKeys[breakdownFieldVal]
            };
        });

        return agg;
    }, {});
}
