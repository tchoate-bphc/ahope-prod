import { takeEvery } from 'redux-saga/effects';
import { OFFLINE_MODE } from '../constants'

import {
    GET_CONTACT,
    GET_EVENTS_FOR_CONTACT,
} from '../constants';

import { updateCurrentContact, updateCurrentContactWithEvents, getEventsForContact as getEventsForContactAction, updateIntakeFormWithContact } from 'actions';

import stubbedContactJson from '../endpointStubs/contacts_intake.json';
import stubbedEventJson from '../endpointStubs/event.json';
function* stubbedGetContact() {
    const stubbedContactJsonWithUid = {
        ...stubbedContactJson.results[0],
        uid: 'aaaa236889aaa',
    };
    window._UI_STORE_.dispatch( updateCurrentContact( stubbedContactJsonWithUid ) );
    window._UI_STORE_.dispatch( updateIntakeFormWithContact( {contact: stubbedContactJsonWithUid}) );
    yield;
}
function* stubbedGetEventsForContact() {
    window._UI_STORE_.dispatch( updateCurrentContactWithEvents( { eventsForContact: stubbedEventJson.results } ) );
    yield;
}

function* getContact( { uid } ) {

    if (uid) {
        // fetch events (has to go through uni-directional data flow)
        window._UI_STORE_.dispatch( getEventsForContactAction( { uid } ) );

        const contact = window._Parse_.Object.extend("contacts")
        const query = new window._Parse_.Query(contact);
        query.matches('uid', new RegExp(uid, 'i'));
        query.first().then( parseContact => {
            // if contact exists
            if (parseContact) {
                const contactDataPlusUid = {
                    ...parseContact.attributes, 
                    uid,
                };
                window._UI_STORE_.dispatch( updateCurrentContact( contactDataPlusUid ) );
                window._UI_STORE_.dispatch( updateIntakeFormWithContact( {contact: contactDataPlusUid}) );
            } else {
                window._UI_STORE_.dispatch( updateCurrentContact( {} ) );
                window._UI_STORE_.dispatch( updateIntakeFormWithContact( {contact: { uid }} ) );
            }
        });
    } else {
        window._UI_STORE_.dispatch( updateCurrentContact( {} ) );
        window._UI_STORE_.dispatch( updateIntakeFormWithContact( {contact: {}} ) );
    }

    yield;
}

function* getEventsForContact({ uid }) {

    if (uid) {

        const contact = window._Parse_.Object.extend("contacts")
        const contactQuery = new window._Parse_.Query(contact);
        contactQuery.equalTo('uid', uid);
        contactQuery.first().then( parseContactPointer => {
            
            const events = window._Parse_.Object.extend("event")
            const eventsQuery = new window._Parse_.Query(events);

            eventsQuery.equalTo('contactUidPointer', parseContactPointer);
            eventsQuery.find().then( eventsForContact => {

                const parsedEventsForContact = eventsForContact.map( event => { 

                    let mutableAttrs = { ...event.attributes };

                    // remove because it's not useful to the UI
                    if (mutableAttrs && mutableAttrs.contactUidPointer) {
                        delete mutableAttrs.contactUidPointer; // why won't this work?
                        // event.attributes.contactUidPointer = undefined;
                    }

                    return { 
                        id: event.id, 
                        createdAt: event.createdAt, 
                        updatedAt: event.updatedAt, 
                        attributes: mutableAttrs,
                    }; 
                })
                // sort these events to be most recent first, based on manually input date
                .sort( (a, b) => (b.attributes || {date:0}).date - (a.attributes || {date:0}).date );

                window._UI_STORE_.dispatch( updateCurrentContactWithEvents( { eventsForContact: parsedEventsForContact } ) );
            });
        });


    }

    yield;
}

export default function* () {
    if (OFFLINE_MODE) {
        yield [
            takeEvery(GET_CONTACT, stubbedGetContact),
            takeEvery(GET_EVENTS_FOR_CONTACT, stubbedGetEventsForContact),
        ];
    } else {
        yield [
            takeEvery(GET_CONTACT, getContact),
            takeEvery(GET_EVENTS_FOR_CONTACT, getEventsForContact),
        ];
    }
}
