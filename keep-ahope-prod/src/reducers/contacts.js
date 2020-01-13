import {
    SET_CONTACT_SEARCH_RESULTS,
    SET_CURRENT_SEARCH_QUERY,
} from '../constants'

const defaultState = {
    // array of filtered contacts based on user search
    searchResults: [],
    searchQuery: '',
    selectedContact: '',
};

function contacts(state = defaultState, action) {

    const {
        searchResultArray,
        searchQuery,
    } = action;

    switch (action.type) {
        case SET_CONTACT_SEARCH_RESULTS:
            return Object.assign({}, state, {
                searchResults: searchResultArray,
            });
        case SET_CURRENT_SEARCH_QUERY:
            return Object.assign({}, state, {
                searchQuery: searchQuery || '',
            })
        default:
            return state
    }
}

export default contacts
