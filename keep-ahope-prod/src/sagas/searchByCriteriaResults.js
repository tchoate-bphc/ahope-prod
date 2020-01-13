import { takeEvery } from 'redux-saga/effects';

import Moment from 'moment';

import {
    REQUEST_SEARCH_BY_CRITERIA,
} from '../constants';

import { updateSearchByCriteriaResults } from 'actions';

import { getDateBoundsFromRangeKey } from '../utils/dateRangeUtils';

function* requestSearchByCriteria( { searchCriteria } ) {

    // const query = {
    //     dateOfBirth: null, date
    //     hepCStatus: null,
    //     hivStatus: null,
    //     housingStatus: null,
    //     indexStart: 0,
    //     lastVisitRangeEnd: null,
    //     lastVisitRangeStart: null,
    // }

    const contact = window._Parse_.Object.extend('contacts')
    const query = new window._Parse_.Query(contact);


    // pagination
    // skip some indexes if indexStart is truthy and a number
    if (searchCriteria.indexStart && typeof searchCriteria.indexStart === 'number') {
        query.skip( searchCriteria.indexStart );
    } 
    
    const pageSize = (searchCriteria.pageSize && typeof searchCriteria.pageSize === 'number') ? searchCriteria.pageSize : 20;

    // search criteria
    
    if (searchCriteria.mothersFirstThree !== undefined && searchCriteria.mothersFirstThree !== null && searchCriteria.mothersFirstThree !== '' && searchCriteria.mothersFirstThree.length === 3) {
        query.matches('uid', searchCriteria.mothersFirstThree + '$');
    } 
    if (searchCriteria.dateOfBirth !== undefined && searchCriteria.dateOfBirth !== null) {
        query.greaterThanOrEqualTo('dateOfBirth', Moment(searchCriteria.dateOfBirth).startOf('day').toDate());
        query.lessThanOrEqualTo('dateOfBirth', Moment(searchCriteria.dateOfBirth).startOf('day').add(1, 'day').toDate());
    } 
    if (searchCriteria.hepCStatus !== undefined && searchCriteria.hepCStatus !== null) {
        query.equalTo('hepCStatus', searchCriteria.hepCStatus);
    } 
    if (searchCriteria.hivStatus !== undefined && searchCriteria.hivStatus !== null) {
        query.equalTo('hivStatus', searchCriteria.hivStatus);
    } 
    if (searchCriteria.housingStatus !== undefined && searchCriteria.housingStatus !== null) {
        query.equalTo('housingStatus', searchCriteria.housingStatus);
    } 
    if (searchCriteria.countryOfBirth !== undefined && searchCriteria.countryOfBirth !== null) {
        query.equalTo('countryOfBirth', searchCriteria.countryOfBirth);
    } 
    if (searchCriteria.ethnicity !== undefined && searchCriteria.ethnicity !== null) {
        query.equalTo('ethnicity', searchCriteria.ethnicity);
    }
    if (searchCriteria.hispanic !== undefined && searchCriteria.hispanic !== null) {
        query.equalTo('hispanic', searchCriteria.hispanic);
    }
    if (searchCriteria.housingStatus !== undefined && searchCriteria.housingStatus !== null) {
        query.equalTo('housingStatus', searchCriteria.housingStatus);
    }
    if (searchCriteria.primaryDrug !== undefined && searchCriteria.primaryDrug !== null) {
        query.equalTo('primaryDrug', searchCriteria.primaryDrug);
    }
    if (searchCriteria.genderIdentity !== undefined && searchCriteria.genderIdentity !== null) {
        query.equalTo('genderIdentity', searchCriteria.genderIdentity);
    } 
    if (searchCriteria.dateOfLastVisit !== undefined && searchCriteria.dateOfLastVisit !== null) {
        const { min, max } = getDateBoundsFromRangeKey({ rangeKey: searchCriteria.dateOfLastVisit });
        query.greaterThanOrEqualTo('dateOfLastVisit', min);
        query.lessThanOrEqualTo('dateOfLastVisit', max);
    } 
    // if (searchCriteria.lastVisitRangeEnd !== undefined && searchCriteria.lastVisitRangeEnd !== null) {
    //     query.greaterThanOrEqualTo('dateOfLastVisit', Moment(searchCriteria.lastVisitRangeEnd).startOf('day').add(1, 'day').toDate());
    // } 
    
    const getTotalCount = query.count();

    query.limit(pageSize)
    query.descending('dateOfLastVisit')

    const getResults = query.find();

    Promise.all([
        getTotalCount,
        getResults,
    ])
        .then( ([
            totalCount,
            contactsObj,
        ]) => {
            const searchResults = { 
                totalCount: totalCount,
                indexStart: searchCriteria.indexStart || 0,
                pageSize: searchCriteria.pageSize,
                contacts: contactsObj.map( c => c.attributes)
            };
            window._UI_STORE_.dispatch( updateSearchByCriteriaResults( { 
                searchCriteria,
                searchResults,
            }));
        });

    yield;
}

export default function* () {
    yield [
        takeEvery(REQUEST_SEARCH_BY_CRITERIA, requestSearchByCriteria),
    ];
}
