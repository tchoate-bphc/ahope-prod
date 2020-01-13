import React, { Component } from 'react';

import muiThemeable from 'material-ui/styles/muiThemeable';
import moment from 'moment';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import PersonIcon from 'material-ui/svg-icons/social/person';
import PersonAddIcon from 'material-ui/svg-icons/social/person-add';
import Divider from 'material-ui/Divider';

import { setIntakeFormToInitialState } from 'actions';
import { DarkRawTheme } from 'material-ui/styles';

class ContactSearchResults extends Component {

    handleNavigationToContact(contactUid) {
        this.props.getContact(contactUid);
        this.props.setCurrentSearchQuery(contactUid || '');
        this.props.history.push(`/contact/${contactUid}/intake`);
    }

    isValidDate(uid) {
        // can't test that date is "before" because interpretation of YY could be 19YY or 20YY based on '68
        return moment(uid.match(/\d{6}/), 'MMDDYY') && 
            moment(uid.match(/\d{6}/), 'MMDDYY').isValid();
    }

    render() {
        const { searchResults, contactSearchQuery, currentContactUid, muiTheme: {palette} } = this.props;

        const regex = new RegExp(/\w{4}\d{6}\w{3}/);
        const isDateValid = this.isValidDate(contactSearchQuery);
        const isValidSearchQuery = contactSearchQuery && contactSearchQuery.length === 13 && regex.test(contactSearchQuery) && isDateValid;

        const uidUpper = contactSearchQuery.toUpperCase();

        return (
            <div>
                {/* only show if there is nothing else showing */}
                {(searchResults.length === 0 && contactSearchQuery.length < 1 && !currentContactUid) && (
                    <Subheader>
                        Enter User ID {contactSearchQuery}
                    </Subheader>
                )}

                {currentContactUid && (
                    <div>
                        <Subheader>Most Recent Contact</Subheader>
                        <ListItem
                            primaryText={currentContactUid}
                            leftIcon={<PersonIcon />}
                            onClick={() => this.handleNavigationToContact(currentContactUid)}
                        />
                        <Divider/>
                    </div>
                )}

                {(searchResults.length === 0 && contactSearchQuery.length > 1) && (
                    <div>
                        <Subheader>
                            { !isValidSearchQuery ?
                                'No results for contact ID: "' + contactSearchQuery.toUpperCase() + '"' :
                                'Create new contact'
                            }
                        </Subheader>
                        {contactSearchQuery.length >= 10 && !isDateValid && (
                            <Subheader style={{ color: palette.errorColor }}>
                                Date is not valid. Date must be in the past and follow the format: MM DD YY
                            </Subheader>
                        )}
                        { !isValidSearchQuery ? (
                            <ListItem
                                key='invalid'
                                primaryText='Enter a valid new ID to create a new contact: CODE 12 31 99 MOM'
                            />
                        ) : (
                            <ListItem
                                key='createNew'
                                primaryText={(
                                    <span>
                                        <span>CREATE</span>
                                        <span style={{ fontFamily: 'monospace', color: palette.primary1Color, marginLeft: '2em', whiteSpace: 'nowrap' }}>
                                            {`${uidUpper.slice(0,2)} ${uidUpper.slice(2,4)} ${uidUpper.slice(4,6)}/${uidUpper.slice(6,8)}/${uidUpper.slice(8,10)} ${uidUpper.slice(10,13)}`}
                                        </span>
                                    </span>
                                )}
                                leftIcon={<PersonAddIcon />}
                                onClick={() => {

                                    // clear the old form
                                    window._UI_STORE_.dispatch( setIntakeFormToInitialState( ));
                                    this.handleNavigationToContact(contactSearchQuery)
                                }}
                            />
                        )}
                        <Divider/>
                    </div>
                )}

                {searchResults.length > 0 && (
                    <div>
                        <List>
                            <Subheader>Results (Top 10)</Subheader>
                            {searchResults.map((contact, i) => {
                                const age = !contact.dateOfBirth ? '' : moment(contact.dateOfBirth).toNow(true).replace('years', 'y/o');
                                const genderIdentity = !contact.genderIdentity ? '' : contact.genderIdentity.match('refused') ? 'gender:refused' : contact.genderIdentity;
                                const identifiers = [
                                    <span>{age} <span style={{color:palette.disabledColor}}>({contact.dateOfBirth && moment(contact.dateOfBirth).format('YYYY-MMM-DD')})</span></span>,
                                    `${genderIdentity}`,
                                ]
                                    .map((str, i) => <span key={i} style={{paddingRight: '1em'}} >{str}</span>);
                                return (
                                    <ListItem
                                        key={i}
                                        primaryText={contact && contact.uid && contact.uid.toUpperCase()}
                                        leftIcon={<PersonIcon />}
                                        onClick={() => this.handleNavigationToContact(contact.uid)}
                                        secondaryText={<span>{identifiers}</span>}
                                    />
                                )
                            })}
                            </List>
                        <Divider />
                    </div>
                )}
            </div>
        );
    }
}

export default muiThemeable()(ContactSearchResults);
