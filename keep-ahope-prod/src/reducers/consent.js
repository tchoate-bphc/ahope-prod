import {
    UPDATE_CONSENT_TEXT
} from '../constants'

const defaultState = {
    text: '',
};

function consent(state = defaultState, action) {

    const { consentText } = action;

    switch (action.type) {
        case UPDATE_CONSENT_TEXT:

            return {
                ...state,
                text: consentText,
            };

        default:
            return state;
    }
}

export default consent;
