import {
    // AUTHENTICATION
    LOGIN_GOOGLE_REQUEST,
    LOGOUT_USER_REQUEST,

    // USER
    SET_CURRENT_USER,
    SHOW_LOGIN_SPINNER,

    // CONTACT
    GET_CONTACT,
    UPDATE_CURRENT_CONTACT,
    SEARCH_CONTACTS,
    UPDATE_CURRENT_CONTACT_WITH_EVENTS,
    
    // CONTACTS
    SET_CONTACT_SEARCH_RESULTS,
    SET_CURRENT_SEARCH_QUERY,
    GET_EVENTS_FOR_CONTACT,

    // CONFIG
    FETCH_CONFIG,
    REFRESH_CONFIG,

    // INTAKE
    UPDATE_INTAKE_FORM_FIELD,
    UPDATE_INTAKE_FORM_WITH_CONTACT,
    SET_INTAKE_FORM_TO_INITIAL_STATE,

    // EVENTS
    ASYNC_FORM_STATUS_UPDATE,
    FETCH_EVENTS,
    GET_EVENTS, // why set and get?
    REFRESH_EVENTS,
    CREATE_EVENT,

    // NOTIFICATIONS
    NEW_NOTIFICATION,
    UPDATE_NOTIFICATION_SINGLETON,
    CLOSE_NOTIFICATION,

    // SEARCH
    REQUEST_SEARCH_BY_CRITERIA,
    UPDATE_SEARCH_BY_CRITERIA_CRITERIA,
    UPDATE_SEARCH_BY_CRITERIA_RESULTS,

    // CONSENT
    GET_CONSENT_TEXT,
    UPDATE_CONSENT_TEXT,
    
    // REPORTS
    FETCH_REPORTS_DATA,
    UPDATE_REPORTS_DATA,

} from '../constants';

/** AUTHENTICATION **/
export function loginGoogleRequest() {
    return { 
        type: LOGIN_GOOGLE_REQUEST,
     };
}

/** USER **/
export function setCurrentUser(userData) {
    return {
        type: SET_CURRENT_USER,
        ...userData
    };
}

export function logoutUserRequest() {
    return {
        type: LOGOUT_USER_REQUEST,
    };
}

export function showLoginSpinner(showLoginSpinner) {
    return {
        type: SHOW_LOGIN_SPINNER,
        showLoginSpinner,
    }
}


/** ASYNC FORM */
export function asyncFormStatusUpdate({status, success}) {
    return {
        type: ASYNC_FORM_STATUS_UPDATE,
        status,
        success,
    }
}

/** CONFIG */
export function fetchConfig() {
    return {
        type: FETCH_CONFIG
    }
}
export function refreshConfig(config) {
    return {
        type: REFRESH_CONFIG,
        config,
    }
}

/** CONTACT */
export function getContact(uid) {
    return {
        type: GET_CONTACT,
        uid,
    }
}

export function updateCurrentContact(contact) {
    return {
        type: UPDATE_CURRENT_CONTACT,
        contact,
    }
}

export function updateCurrentContactWithEvents({eventsForContact}) {
    return {
        type: UPDATE_CURRENT_CONTACT_WITH_EVENTS,
        eventsForContact,
    }
}

/** CONTACTS */
export function searchContacts(searchStringUid) {
    return {
        type: SEARCH_CONTACTS,
        searchStringUid,
    }
}

export function setContactSearchResults(searchResultArray) {
    return {
        type: SET_CONTACT_SEARCH_RESULTS,
        searchResultArray,
    }
}

export function setCurrentSearchQuery(searchQuery) {
    return {
        type: SET_CURRENT_SEARCH_QUERY,
        searchQuery,
    }
}
export function getEventsForContact({uid}) {
    return {
        type: GET_EVENTS_FOR_CONTACT,
        uid,
    };
}

/** INTAKE FORM */
export function updateIntakeFormField({key, val}) {
    // console.log('UPDATE_INTAKE_FORM_FIELD', UPDATE_INTAKE_FORM_FIELD, key, val)
    return {
        type: UPDATE_INTAKE_FORM_FIELD,
        key,
        val,
    };
}
export function updateIntakeFormWithContact({contact}) {
    // console.log('UPDATE_INTAKE_FORM_WITH_CONTACT', contact)
    return {
        type: UPDATE_INTAKE_FORM_WITH_CONTACT,
        contact,
    };
}
export function setIntakeFormToInitialState() {
    return {
        type: SET_INTAKE_FORM_TO_INITIAL_STATE,
    };
}


/** EVENTS */
export function fetchEvents() {
    return {
        type: FETCH_EVENTS
    }
}

export function getEvents() {
    return {
        type: GET_EVENTS,
    };
}

export function refreshEvents(eventCollection) {
    return {
        type: REFRESH_EVENTS,
        eventCollection,
    }
}

export function createEvent({ eventData, history }) {
    return {
        type: CREATE_EVENT,
        eventData,
        history,
    };

}

/** NOTIFICATIONS */

export function updateNotificationSingleton({notificationSingleton}) {
    return {
        type: UPDATE_NOTIFICATION_SINGLETON,
        notificationSingleton,
    };
}

export function newNotification({newNotification}) {
    return {
        type: NEW_NOTIFICATION,
        newNotification,
    };
}

export function closeNotification({notificationId}) {
    return {
        type: CLOSE_NOTIFICATION,
        notificationId
    };
}

/** SEARCH */

export function requestSearchByCriteria({searchCriteria}) {
    return {
        type: REQUEST_SEARCH_BY_CRITERIA,
        searchCriteria,
    };
}

export function updateSearchByCriteriaCriteria({searchCriteria}) {
    return {
        type: UPDATE_SEARCH_BY_CRITERIA_CRITERIA,
        searchCriteria,
    };
}

export function updateSearchByCriteriaResults({searchResults, searchCriteria}) {
    return {
        type: UPDATE_SEARCH_BY_CRITERIA_RESULTS,
        searchResults,
        searchCriteria
    };
}

/** CONSENT */

export function updateConsentText({consentText}) {
    return {
        type: UPDATE_CONSENT_TEXT,
        consentText,
    };
}
export function getConsentText({consentVersion}) {
    return {
        type: GET_CONSENT_TEXT,
        consentVersion,
    };
}

/** REPORTS PAGE */

export function fetchReportsData({dateRange}) {
    return {
        type: FETCH_REPORTS_DATA,
        dateRange,
    };
}

export function updateReportsData({reportsData}) {
    return {
        type: UPDATE_REPORTS_DATA,
        reportsData,
    }
}