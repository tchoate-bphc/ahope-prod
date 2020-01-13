import React, { Component } from 'react';

import ContactInfoProfileCard from './contactInfoProfileCard';
import ContactInfoNotesCard from './contactInfoNotesCard';
import ContactInfoEventsCard from './contactInfoEventsCard';
import muiThemeable from 'material-ui/styles/muiThemeable';

class ContactInfo extends Component {

    render() {

        const { contact, muiTheme: {palette} } = this.props;

        return (
            <div>
                <ContactInfoProfileCard palette={palette} contact={contact} />
                <ContactInfoNotesCard palette={palette} contact={contact}/>
                <ContactInfoEventsCard palette={palette} contact={contact} events={contact.events} />
            </div>
        );
    }
}

export default muiThemeable()(ContactInfo);
