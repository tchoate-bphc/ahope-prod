import {
    UPDATE_SEARCH_BY_CRITERIA_CRITERIA,
    UPDATE_SEARCH_BY_CRITERIA_RESULTS,
    RANGE_CURRENT_WEEK,
} from '../constants';

const defaultSearchCriteria = () => ({
    isFirstRequest: true,
    indexStart: 0,
    pageSize: 20,

    ageOfFirstInjection: null,
    countryOfBirth: null,
    dateOfBirth: null,
    dateOfLastVisit: null,
    didOdLastYear: null,
    ethnicity: null,
    genderIdentity: null,
    hasHealthInsurance: null,
    hepCStatus: null,
    hispanic: null,
    hivStatus: null,
    housingStatus: null,
    isInCareForHepC: null,
    isInCareForHiv: null,
    mothersFirstThree: null,
    primaryDrug: null,
});

export const defaultState = () => ({
    lastSearchCriteria: { ...defaultSearchCriteria() },
    searchCriteria: { ...defaultSearchCriteria() },
    searchResults: []
});

function searchByCriteria(state = { ...defaultState() }, action) {

    const {
        searchResults,
        searchCriteria,
    } = action;

    switch (action.type) {
        case UPDATE_SEARCH_BY_CRITERIA_CRITERIA:
            return {
                ...state,
                searchCriteria,
            };
        case UPDATE_SEARCH_BY_CRITERIA_RESULTS:
            return {
                ...state,
                lastSearchCriteria: searchCriteria,
                searchCriteria,
                searchResults,
            };
        default:
            return state;
    }
}

export default searchByCriteria;
