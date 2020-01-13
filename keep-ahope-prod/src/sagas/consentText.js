import { takeEvery } from 'redux-saga/effects';

import {
    GET_CONSENT_TEXT,
} from '../constants';

import { updateConsentText } from 'actions';

function* getConsentText( { consentVersion } ) {

    const consentVersionArr = consentVersion.split('.');
    const semVer = {
        major: consentVersionArr[0],
        minor: consentVersionArr[1],
        patch: consentVersionArr[2],
    };

    const contact = window._Parse_.Object.extend("consent")
    const query = new window._Parse_.Query(contact);
    query.equalTo('versionMajor', semVer.major)
    query.equalTo('versionMinor', semVer.minor);
    query.equalTo('versionPatch', semVer.patch);
    query.first().then( consentObj => {
        window._UI_STORE_.dispatch( updateConsentText( { consentText: consentObj.get('text') } ) );
    });

    yield;
}

export default function* () {
    yield [
        takeEvery(GET_CONSENT_TEXT, getConsentText),
    ];
}
