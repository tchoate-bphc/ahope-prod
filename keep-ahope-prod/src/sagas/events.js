import { takeEvery } from 'redux-saga/effects';

import {
    CREATE_EVENT,
    NOTIFICATION_SAVE_SUCCESS,
    NOTIFICATION_SAVE_FAIL,
} from '../constants';

import { getContact, newNotification, setIntakeFormToInitialState } from '../actions';

function* createEvent({ eventData, history }) {
    const Event = window._Parse_.Object.extend("event");
    var event = new Event();

    const Contact = window._Parse_.Object.extend("contacts")
    const query = new window._Parse_.Query(Contact);
    query.matches('uid', new RegExp(eventData.contactUid, 'i'));
    query.first().then( parseContact => {

        const regex = new RegExp(/\w{4}\d{6}\w{3}/);
        const isValidSearchQuery = eventData.contactUid && eventData.contactUid.length === 13 && regex.test(eventData.contactUid);
        if (!isValidSearchQuery || !eventData.contactGivesDataConsent) {
            console.log('Invalid contact search query');
            return;
        }

        // if contact doesn't yet exist, create it
        if (!parseContact) {
            parseContact = new Contact();
            parseContact.set('uid', eventData.contactUid.toUpperCase());
        }

        // event data with most fields filled out
        // eventData = {
        //     "contactAgeOfFirstInjection": 56,
        //     "contactCountryOfBirth": "Other",
        //     "contactDateOfBirth": new Date("1980-01-01T05:00:00.000Z"),
        //     "contactEthnicity": "Other",
        //     "contactGenderIdentity": "mtf",
        //     "contactIsHispanic": false,
        //     "contactUid": "aaaa651945aaa",
        //     "date": new Date(),
        //     "didOdLastYear": false,
        //     "didSeeOdLastYear": false,
        //     "enrollment": "enrolled",
        //     "hasHealthInsurance": true,
        //     "healthInsurer": "NHP",
        //     "hepCStatus": "positive",
        //     "hivStatus": "positive",
        //     "housingStatus": "housed",
        //     "isInCareForHepC": true,
        //     "isInCareForHiv": true,
        //     "isOutreach": true,
        //     "narcanWasOffered": true,
        //     "narcanWasTaken": true,
        //     "newContactDate": new Date("2018-11-03T04:00:00.000Z"),
        //     "numberOfOthersHelping": 54,
        //     "otherDrugs": [ "meth", "cocaine", "benzos"],
        //     "primaryDrug": "meth",
        //     "referrals": [ "Beth Israel" ],
        //     "syringesGiven": 20,
        //     "syringesTaken": 20,
        //   };

        const prevOtherDrugsAggregate = parseContact.get('otherDrugsAggregate') ? parseContact.get('otherDrugsAggregate') : [];
        const eventDataOtherDrugs = eventData.otherDrugs || [];
        const otherDrugsAggregate = Array.from(new Set([
            ...eventDataOtherDrugs, 
            eventData.primaryDrug,
            parseContact.get('primaryDrug'),
            ...prevOtherDrugsAggregate,
        ])).filter( item => !!item );

        // ----------------------------------------------
        // update CONTACT
        // ----------------------------------------------
        parseContact.set('dateOfLastVisit', eventData.date);
        // aggregate fields
        eventData.syringesGiven && parseContact.set('syringesGivenAggregate', 
        (parseContact.get('syringesGivenAggregate') || 0) + eventData.syringesGiven
        );
        eventData.syringesTaken && parseContact.set('syringesTakenAggregate', 
        (parseContact.get('syringesTakenAggregate') || 0) + eventData.syringesTaken
        );
        if (eventData.primaryDrug || eventData.otherDrugs) {
            parseContact.set('otherDrugsAggregate', otherDrugsAggregate); // TODO: aggregate all drugs here (or on server)
        }
        // conditional fields
        eventData.contactAgeOfFirstInjection && parseContact.set('ageOfFirstInjection', eventData.contactAgeOfFirstInjection); // TODO: on server check if this changes to a LATER date
        eventData.contactCountryOfBirth && parseContact.set('countryOfBirth', eventData.contactCountryOfBirth); // TODO: on server check if this changes (once no longer null) then flag to user
        eventData.contactDateOfBirth && parseContact.set('dateOfBirth', eventData.contactDateOfBirth.toDate()); // TODO: on server check if this changes (once no longer null) then flag to user
        eventData.contactEthnicity && parseContact.set('ethnicity', eventData.contactEthnicity); // TODO: on server check if this changes (once no longer null) then flag to user
        eventData.contactGenderIdentity && parseContact.set('genderIdentity', eventData.contactGenderIdentity); 
        eventData.contactGivesDataConsent && parseContact.set('contactGivesDataConsent', eventData.contactGivesDataConsent);
        eventData.contactIsHispanic && parseContact.set('hispanic', eventData.contactIsHispanic);
        eventData.didOdLastYear && parseContact.set('didOdLastYear', eventData.didOdLastYear);
        eventData.hasHealthInsurance && parseContact.set('hasHealthInsurance', eventData.hasHealthInsurance);
        eventData.healthInsurer && parseContact.set('healthInsurer', eventData.healthInsurer);
        eventData.hepCStatus && parseContact.set('hepCStatus', eventData.hepCStatus); 
        eventData.hivStatus && parseContact.set('hivStatus', eventData.hivStatus); // TODO: on server ensure this can't go from `true` to `false`
        eventData.housingStatus && parseContact.set('housingStatus', eventData.housingStatus);
        eventData.isInCareForHepC && parseContact.set('isInCareForHepC', eventData.isInCareForHepC);
        eventData.isInCareForHiv && parseContact.set('isInCareForHiv', eventData.isInCareForHiv);
        eventData.otherDrugs && parseContact.set('otherDrugs', eventData.otherDrugs); // TODO: aggregate all drugs here (or on server)
        eventData.primaryDrug && parseContact.set('primaryDrug', eventData.primaryDrug); 
        eventData.profileNotes && parseContact.set('profileNotes', eventData.profileNotes); // TODO: on server check if this changes to a LATER date
        eventData.zipCode && parseContact.set('zipCode', eventData.zipCode); 
        
        // ----------------------------------------------
        // update EVENT
        // ----------------------------------------------
        event.set('date', eventData.date);
        // add event pointer to contact
        event.set('contactUidPointer', parseContact);
        // conditional fields
        eventData.contactGivesDataConsent && event.set('contactGivesDataConsent', eventData.contactGivesDataConsent);
        eventData.contactAgeOfFirstInjection && event.set('ageOfFirstInjection', eventData.contactAgeOfFirstInjection);
        eventData.contactCountryOfBirth && event.set('countryOfBirth', eventData.contactCountryOfBirth);
        eventData.contactDateOfBirth && event.set('dateOfBirth', eventData.contactDateOfBirth.toDate());
        eventData.contactEthnicity && event.set('ethnicity', eventData.contactEthnicity);
        eventData.contactGenderIdentity && event.set('genderIdentity', eventData.contactGenderIdentity);
        eventData.contactIsHispanic && event.set('hispanic', eventData.contactIsHispanic);
        eventData.didOdLastYear && event.set('didOdLastYear', eventData.didOdLastYear);
        eventData.eventNotes && event.set('eventNotes', eventData.eventNotes);
        eventData.hasHealthInsurance && event.set('hasHealthInsurance', eventData.hasHealthInsurance);
        eventData.healthInsurer && event.set('healthInsurer', eventData.healthInsurer);
        eventData.hepCStatus && event.set('hepCStatus', eventData.hepCStatus);
        eventData.hivStatus && event.set('hivStatus', eventData.hivStatus);
        eventData.housingStatus && event.set('housingStatus', eventData.housingStatus);
        eventData.isInCareForHepC && event.set('isInCareForHepC', eventData.isInCareForHepC);
        eventData.isInCareForHiv && event.set('isInCareForHiv', eventData.isInCareForHiv);
        eventData.isOutreach && event.set('isOutreach', eventData.isOutreach);
        eventData.narcanWasOffered && event.set('narcanWasOffered', eventData.narcanWasOffered);
        eventData.narcanWasTaken && event.set('narcanWasTaken', eventData.narcanWasTaken);
        eventData.newContactDate && event.set('newContactDate', eventData.newContactDate);
        eventData.numberOfOthersHelping && event.set('numberOfOthersHelping', eventData.numberOfOthersHelping);
        eventData.otherDrugs && event.set('otherDrugs', eventData.otherDrugs);
        eventData.primaryDrug && event.set('primaryDrug', eventData.primaryDrug);
        eventData.profileNotes && event.set('profileNotes', eventData.profileNotes);
        eventData.referrals && event.set('referrals', eventData.referrals);
        eventData.syringesGiven && event.set('syringesGiven', eventData.syringesGiven);
        eventData.syringesTaken && event.set('syringesTaken', eventData.syringesTaken);
        eventData.zipCode && event.set('zipCode', eventData.zipCode);

        debugger;

        return event.save()
            .then( successfulSave => {

                // TODO: Ensure that 200 response with { err: '' } goes to `catch`
                // To replicate above: try to add a new field

                // clear the old form
                window._UI_STORE_.dispatch( setIntakeFormToInitialState( ));

                // TODO: show save success message
                window._UI_STORE_.dispatch( newNotification( { newNotification: { notificationType: NOTIFICATION_SAVE_SUCCESS } } ));

                // fetch new contact data
                // TODO: include events
                window._UI_STORE_.dispatch( getContact( eventData.contactUid ) );
                // TODO: show spinner on contact info

                // navigate to contact info
                history.push(`/contact/${eventData.contactUid}/info`);
                
            })
            .catch( err => {
                window._UI_STORE_.dispatch( newNotification( { newNotification: { notificationType: NOTIFICATION_SAVE_FAIL, message: err.toString() } } ));
            } );
    })
    .catch( err => {
        console.log('error saving', err);
    })
    yield;
}


export default function* () {
    yield [
        takeEvery(CREATE_EVENT, createEvent),
    ];
}
