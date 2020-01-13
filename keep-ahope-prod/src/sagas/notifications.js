import { takeEvery } from 'redux-saga/effects';

import {
    NEW_NOTIFICATION,
    NOTIFICATION_SAVE_SUCCESS,
    NOTIFICATION_SAVE_FAIL,
    CLOSE_NOTIFICATION,
} from '../constants';

import { updateNotificationSingleton } from 'actions';

let activeNotification = {},
    queuedNotifications = [];

function* newNotification({ newNotification }) {

    let notificationSingleton = {}

    switch (newNotification.notificationType) {
        case NOTIFICATION_SAVE_SUCCESS:
            notificationSingleton = {
                message: 'Event has been recorded',
                open: true,
                priority: 0,
                id: 'event--save-success--' + new Date().getTime(),
            }
            break;
        case NOTIFICATION_SAVE_FAIL:
            notificationSingleton = {
                message: newNotification.message,
                open: true,
                priority: 0,
                id: 'event--save-fail--' + new Date().getTime(),
            }
            break;
        default:
            break;
    }

    activeNotification = notificationSingleton;
    queuedNotifications.push(activeNotification);
    window._UI_STORE_.dispatch( updateNotificationSingleton( { notificationSingleton } ) );

    yield;
}

function* closeNotification({ notificationId }) {
    
    queuedNotifications.splice( queuedNotifications.findIndex( notification => notification.id === notificationId ), 1);
    
    if (queuedNotifications.length) {
        activeNotification = queuedNotifications.pop();
    } else {
        activeNotification = {
            message: '-',
            open: false,
            priority: 0,
            id: '',
        }
    }
    
    window._UI_STORE_.dispatch( updateNotificationSingleton( { notificationSingleton: activeNotification } ) );
    yield;
}

export default function* () {
    yield [
        takeEvery(NEW_NOTIFICATION, newNotification),
        takeEvery(CLOSE_NOTIFICATION, closeNotification),
    ];
}
