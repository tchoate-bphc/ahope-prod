import {
    UPDATE_REPORTS_DATA,
} from '../constants';

const defaultState = {
    // array of filtered contacts based on user search
    contacts: {},
    events: {}
};

function reportsData(state = defaultState, action) {

    const {
        reportsData,
    } = action;

    switch (action.type) {
        case UPDATE_REPORTS_DATA:
            return {
                ...state,
                ...reportsData,
            };
        default:
            return state;
    }
}

export default reportsData;
