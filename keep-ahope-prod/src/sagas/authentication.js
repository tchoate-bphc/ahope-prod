import { takeEvery } from 'redux-saga/effects';
import { OFFLINE_MODE } from '../constants'

import {
    LOGIN_GOOGLE_REQUEST,
    LOGOUT_USER_REQUEST,
} from '../constants';

import { setCurrentUser, showLoginSpinner, logoutUserRequest as logoutUserRequestAction } from 'actions';

import stubUserJson from '../endpointStubs/users.json'

function* stubLoginGoogleRequest() {
    window._UI_STORE_.dispatch(showLoginSpinner(false));
    window._UI_STORE_.dispatch(setCurrentUser({
        permissions: { basic: true, googleAuth: true },
        email: stubUserJson.email,
        name: stubUserJson.fullName,
        uid: 'aaaa236889aaa',
    }));
    yield;
}

function* loginGoogleRequest( ) {

    window._UI_STORE_.dispatch(showLoginSpinner(true));
    
    window.gapi.load('auth2', function() {
        window.gapi.auth2.init({
            client_id: "224779111920-tausvu4e2d84ldt8pbvhuv4637tk0rd3.apps.googleusercontent.com",
            scope: "profile email" // this isn't required, I think?
        })
        .then(function(auth2) {

            window._GOOGLE_CLOUD_AUTH2_ = auth2;
            // console.log( "is signed in with google: " + auth2.isSignedIn.get());

            // if signed in with google 
            if ( window._GOOGLE_CLOUD_AUTH2_.isSignedIn.get() ) {

                // console.log('signed in with google');

                // sign in with parse

                // console.log('not a current parse user')

                const googleUser = window._GOOGLE_CLOUD_AUTH2_.currentUser.get();
                const googleUserProfile = googleUser.getBasicProfile();
        
                // The ID token you need to pass to your backend:
                const google_id = googleUserProfile.getId();

                const authResp = googleUser.getAuthResponse();
                const parseUser = new window._Parse_.User();
                parseUser.setEmail(googleUserProfile.getEmail());
                parseUser._linkWith('google', { 
                    authData: {
                        id: google_id, 
                        id_token: authResp.id_token, 
                        access_token: authResp.access_token,
                    }
                })
                .then( linkedParseUser => {

                    return new Promise( (resolve, reject) => {

                        if ( linkedParseUser.get('givenName') === googleUserProfile.getGivenName() ) {
                            resolve(linkedParseUser);
                        } else {
                            linkedParseUser.set('givenName', googleUserProfile.getGivenName() );
                            linkedParseUser.set('lastName', googleUserProfile.getFamilyName() );
                            linkedParseUser.set('fullName', googleUserProfile.getGivenName() + ' ' + googleUserProfile.getFamilyName() );
                            
                            linkedParseUser.save()
                                .then( updatedLinkedParseUser => resolve(updatedLinkedParseUser) );
                        }
                    });

                })
                .then( linkedParseUser => {

                    // console.log('current parse user');
                    const parseRole = window._Parse_.Object.extend('_Role');
                    const roleQuery = new window._Parse_.Query(parseRole).equalTo('users', linkedParseUser);
    
                    roleQuery.first()
                        .then(result => {
                            if(result) {
                                // console.log('user is logged in and has permissions')
                                
                                // for now we can equate Admin role with basic permissions
                                window._UI_STORE_.dispatch(setCurrentUser({
                                    permissions: { basic: true, googleAuth: true },
                                    email: linkedParseUser.attributes.email,
                                    name: linkedParseUser.attributes.fullName,
                                    uid: linkedParseUser.id,
                                }));
                            } else {
                                // console.log('user is logged in but doesn\'t have permissions')
                                window._UI_STORE_.dispatch(setCurrentUser({
                                    permissions: { basic: false, googleAuth: true },
                                    email: linkedParseUser.attributes.email,
                                    name: linkedParseUser.attributes.fullName,
                                    uid: linkedParseUser.id,
                                }));
                            }
                        })
                        .catch( err => {
                            console.log('error performing role query', err)
                        });

                })
                .catch( err => {

                    // TODO: handle 400 response from Parse "{ code: 209, error: 'invalid session token'}"

                    window._UI_STORE_.dispatch( logoutUserRequestAction() );

                    alert('An error occured during login with Parse');
                    window._UI_STORE_.dispatch(showLoginSpinner(false));
                });

            } else {

                // console.log('not signed in with google')
                // sign in with google
                window._GOOGLE_CLOUD_AUTH2_.signIn().then(googleUser => {
                    // console.log('restarting the login process')

                    window._UI_STORE_.dispatch({ type: LOGIN_GOOGLE_REQUEST })  // call self to restart flow (to be refactored for better pattern)
                })
                .catch(() => {
                    alert('An error occured during login');
                    window._UI_STORE_.dispatch(showLoginSpinner(false));
                })
            }

        });
    });

    yield;
}

function* logoutUserRequest() {
    window._GOOGLE_CLOUD_AUTH2_.signOut()
        .then( () => {
            window._Parse_.User.logOut()
                .then( () => {
                    window._UI_STORE_.dispatch( 
                        setCurrentUser({
                            displayName: null,
                            email: null,
                            permissions: {},
                            uid: null        
                        })
                    )
                    console.log('You have been logged out');
                    window._UI_STORE_.dispatch(showLoginSpinner(false));
                });
        });

    yield;
}

export default function* () {
    if (OFFLINE_MODE) {
        yield [
            takeEvery(LOGIN_GOOGLE_REQUEST, stubLoginGoogleRequest),
            // same for both
            takeEvery(LOGOUT_USER_REQUEST, logoutUserRequest)
        ];
    } else {
        yield [
            takeEvery(LOGIN_GOOGLE_REQUEST, loginGoogleRequest),
            // same for both
            takeEvery(LOGOUT_USER_REQUEST, logoutUserRequest)
        ];
    }
}
