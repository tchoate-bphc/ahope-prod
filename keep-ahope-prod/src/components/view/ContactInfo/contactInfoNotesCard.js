
import React from 'react';

import {Card, CardHeader, CardText} from 'material-ui/Card';

class ContactInfoNotesCard extends React.Component {

  render() {
    
    const { contact, palette} = this.props;
    
    return (
      <div>
        <Card initiallyExpanded={true} >
          <CardHeader
              title='Profile Notes'
              titleColor={palette.primary1Color}
              actAsExpander={true}
              showExpandableButton={true}
          />
          <CardText expandable={true}>
            { contact && contact.profileNotes}
          </CardText>
        </Card>
      </div>
    )
  }
}

export default ContactInfoNotesCard;
