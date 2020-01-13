import config from './config';
import consent from './consent';
import contact from './contact';
import contacts from './contacts';
import intakeForm from './intakeForm';
import notificationSingleton from './notificationSingleton';
import reportsData from './reportsData';
import searchByCriteriaResults from './searchByCriteriaResults';
import user from './user';

function isLoggedIn(state = false) {
    return state;
}

const reducers = {
    config,
    consent,
    contact,
    contacts,
    intakeForm,
    isLoggedIn,
    notificationSingleton,
    reportsData,
    searchByCriteriaResults,
    user,
};

export default reducers;
