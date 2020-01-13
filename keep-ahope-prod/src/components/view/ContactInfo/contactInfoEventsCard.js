import React, { Component } from 'react';

import { Card, CardHeader, CardText } from 'material-ui/Card';
import { List } from 'material-ui/List';

import { ContactInfoEventDetailsCard } from './contactInfoEventDetailsCard';

export default class ContactInfoEventsCard extends Component {

    /*
    * convert event uid to date format
    * @param uid {String} event uid of format 201803009-00-00-aaa
    * @return {string} dd/mm/yyyy
    */
    formatUidToDate(uid) {
        const splitUid = uid.split('');
        // extracting dd / mm / yyyy from UID
        return `${splitUid.slice(4,6).join('')}/${splitUid.slice(7,9).join('')}/${splitUid.slice(0,4).join('')}`
    }

    render() {
        const { events, palette } = this.props

        const cardHeaderProps = {
            title: 'Events',
            actAsExpander: true,
            showExpandableButton: true,
            titleColor: palette.primary1Color
        }

        return (
            <Card initiallyExpanded={true}>
                <CardHeader {...cardHeaderProps} />
                <CardText expandable={true}>
                    <List
                        style={{padding: 0}}
                    >
                    {!!events ? (
                        // if there are events, list each one
                        events.map(event => {

                            return (
                                <ContactInfoEventDetailsCard
                                    key={event.id}
                                    event={event}
                                    palette={palette}
                                    >
                                </ContactInfoEventDetailsCard>
                            );
                        })
                    ) : (
                        'There are no events for this user'
                    )}
                    </List>
                </CardText>
            </Card>
        );
    }
}
