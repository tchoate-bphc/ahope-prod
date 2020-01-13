import { fork } from 'redux-saga/effects';
import authentication from './authentication';
import config from './config';
import consentText from './consentText';
import contact from './contact';
import events from './events';
import notifications from './notifications';
import reports from './reports';
import searchByCriteriaResults from './searchByCriteriaResults';
import searchContacts from './searchContacts';

/**
 * use one root saga to yield all other side effect sagas
 */
function* sagas() {
    yield [
        fork(authentication),
        fork(config),
        fork(consentText),
        fork(contact),
        fork(events),
        fork(notifications),
        fork(reports),
        fork(searchByCriteriaResults),
        fork(searchContacts),
    ];
}

export default sagas;
