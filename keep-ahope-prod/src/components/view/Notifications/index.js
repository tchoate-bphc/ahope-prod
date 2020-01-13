import React from 'react';

import muiThemeable from 'material-ui/styles/muiThemeable';

import Snackbar from 'material-ui/Snackbar'

import { closeNotification } from 'actions';

class Notifications extends React.Component {

    // constructor(props) {
    //     super(props);
    //     // this.themePalette = this.props.muiTheme.palette;
    // }

    handleClose = notificationId => {
        window._UI_STORE_.dispatch( closeNotification( { notificationId } ) );
    };

    render() {
        const { notificationSingleton } = this.props;
        return (
            <div style={{position:'relative'}}>
                <Snackbar
                    open={notificationSingleton.open}
                    message={(
                        <span id={notificationSingleton.id}>
                            {notificationSingleton.message}
                        </span>
                    )}
                    action='X'
                    autoHideDuration={4000}
                    onActionTouchTap={ () => {
                        this.handleClose({ notificationId: notificationSingleton.id })
                    }}
                    onRequestClose={ () => {
                        this.handleClose({ notificationId: notificationSingleton.id })
                    }}
                    style={{
                        top:'0px',
                        position: 'absolute',
                    }}
                />
            </div>
        );
    }
}

export default muiThemeable()(Notifications);