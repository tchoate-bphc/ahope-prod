import React from 'react';
import './styles.css';

import Login from 'components/controller/Login'

import FlatButton from 'material-ui/FlatButton';
import ExitToAppIcon from 'material-ui/svg-icons/action/exit-to-app';

const NotAuthorizedView = props => {

    const { user, logout } = props;

    return (
        <div className="page">
            <div className='text-content'>
                {!user || Object.keys(user.permissions).length < 1 ? <Login /> : 
                    !user.permissions || (!user.permissions.basic && user.permissions.googleAuth) ? (
                        <div>
                            <h2>Please contact the app administrator to request access permissions for your associated Google account.</h2>
                            <div className="row">
                                <p className="col-xs-12 col-sm-9">
                                    Logged in as:
                                    <span style={{marginLeft:'1em', whiteSpace:'nowrap'}}>
                                        {user.name} ({user.email})
                                    </span>
                                </p>
                                <div className="col-xs-12 col-sm-3"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'right',
                                    }}>
                                    <FlatButton
                                        primary={true}
                                        onClick={ logout }
                                        style={{width: '10em' }}
                                        icon={<ExitToAppIcon style={{marginLeft: '1em'}}/>}
                                        >
                                        Logout
                                    </FlatButton>
                                </div>
                            </div>
                        </div>
                        ) : ''}
            </div>
        </div>
    );
};

export default NotAuthorizedView;