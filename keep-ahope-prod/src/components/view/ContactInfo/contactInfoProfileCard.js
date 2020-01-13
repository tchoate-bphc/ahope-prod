
import React from 'react';

import { Card, CardHeader, CardText } from 'material-ui/Card';

import { ContactInfoEventDetailsSection } from './contactInfoEventDetailsSection';

class ContactInfo extends React.Component {

  upperCase(str) {
    return str.toUpperCase();
  }

  convertCamelCaseToTitleCase(str) {
    str = str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, '$1 $2');
    str = str.toLowerCase(); //add space between camelCase text
    str = str.replace(/^\w|\s\w/g, this.upperCase);
    return str;
  }

  render() {
    const { contact, palette } = this.props;

    let attrCollection = Object.keys(contact).map(key => {

      let label = this.convertCamelCaseToTitleCase(key);
      let value = contact[key];

      return {
        value,
        key,
        label,
      };
    });

    const sortedAttrCollections = {
      meta: {
        label: 'Log',
        data: [],
      },
      profile: {
        label: 'Profile',
        data: [],
      },
      chemical: {
        label: 'Chemical Use',
        data: [],
      },
      syringes: {
        label: 'Syringe Exchange',
        data: [],
      },
      other: {
        label: 'Other',
        data: [],
      },
    };

    attrCollection.forEach(attrObj => {
      switch (attrObj.key) {

        // skip these
        case 'profileNotes':
        case 'uid':
        case 'events':
        case 'updatedAt':
          break;

        // meta
        case 'createdAt':
          attrObj.label = 'First logged event'
          sortedAttrCollections.meta.data.push(attrObj);
          break;
        case 'dateOfLastVisit':
          sortedAttrCollections.meta.data.push(attrObj);
          break;

        // profile
        case 'birthCountry':
        case 'countryOfBirth':
        case 'dateOfBirth':
        case 'ethnicity':
        case 'genderIdentity':
        case 'hispanic':
        case 'housingStatus':
        case 'zipCode':
          sortedAttrCollections.profile.data.push(attrObj);
          break;

        // chemical usage
        case 'ageOfFirstInjection':
        case 'didOdLastYear':
        case 'hasHealthInsurance':
        case 'hepCStatus':
        case 'hivStatus':
        case 'isEnrolled':
        case 'isInCareForHepC':
        case 'isInCareForHiv':
        case 'otherDrugs':
        case 'otherDrugsAggregate':
        case 'primaryDrug':
          sortedAttrCollections.chemical.data.push(attrObj);
          break;
          
        // syrings
        case 'syringesGivenAggregate':
        case 'syringesTakenAggregate':
          sortedAttrCollections.syringes.data.push(attrObj);
          break;

        // other
        default:
          sortedAttrCollections.other.data.push(attrObj);
      }
    });

    return (
      <div>
        <Card initiallyExpanded={ true } >
          <CardHeader
            title={ contact.uid }
            titleColor={ palette.primary1Color }
            // subtitle={contact.uid}
            subtitleColor={ palette.titleColor }
            actAsExpander={ true }
            showExpandableButton={ true }
          />
          <CardText expandable={true}>

            <ContactInfoEventDetailsSection
              eventDetailsSectionData={ sortedAttrCollections.profile }
              palette={ palette }
              className="col-xs-12 col-sm-6"
            />
            <ContactInfoEventDetailsSection
              eventDetailsSectionData={ sortedAttrCollections.meta }
              palette={ palette }
              className="col-xs-12 col-sm-6"
            />
            <ContactInfoEventDetailsSection
              eventDetailsSectionData={ sortedAttrCollections.chemical }
              palette={ palette }
              className="col-xs-12 col-sm-6"
            />
            <ContactInfoEventDetailsSection
              eventDetailsSectionData={ sortedAttrCollections.syringes }
              palette={ palette }
              className="col-xs-12 col-sm-6"
            />
            <ContactInfoEventDetailsSection
              eventDetailsSectionData={ sortedAttrCollections.other }
              palette={palette}
              className="col-xs-12 col-sm-6"
            />
            <div style={{ clear: 'both' }}> </div>

          </CardText>
        </Card>
      </div>
    )
  }
}

export default ContactInfo;
