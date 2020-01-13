import {
    UPDATE_NOTIFICATION_SINGLETON,
} from '../constants';

const defaultState = {
    message: '',
    open: false,
    priority: 0,
    id: '',
};

function notificationSingleton(state = defaultState, action) {

    const {
        notificationSingleton,
    } = action;

    switch (action.type) {
        case UPDATE_NOTIFICATION_SINGLETON:
            return {
                ...notificationSingleton,
                open: !!notificationSingleton.open
            };
        default:
            return state;
    }
}

export default notificationSingleton;
