import React, { Component } from 'react';

import { Card, CardHeader, CardText } from 'material-ui/Card';

import { ContactInfoEventDetailsSection } from './contactInfoEventDetailsSection';

export class ContactInfoEventDetailsCard extends Component {

    // constructor(props) {
    //     super(props);
    // }

    upperCase(str){
        return str.toUpperCase();
    }

    convertCamelCaseToTitleCase(str) {
        str = str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, '$1 $2');
        str = str.toLowerCase(); //add space between camelCase text
        str = str.replace(/^\w|\s\w/g, this.upperCase);
        return str;
    }

    render() {

        const { event, palette } = this.props;

        const eventDate = new Date(event.attributes.date).toLocaleDateString();
        const updatedDate = new Date(event.updatedAt).toLocaleDateString();

        let primaryDateString = eventDate;
        let secondaryDateString = '';

        if (eventDate !== updatedDate) {
            primaryDateString = 'event date: ' + eventDate;
            secondaryDateString = 'log date: ' + updatedDate;
        }
        
        const attrCollection = Object.keys(event.attributes).map( key => {

            let label = this.convertCamelCaseToTitleCase( key );
            let value = event.attributes[key];

            return {
                value,
                key,
                label,
            };
        });

        const sortedAttrCollections = {
            eventMeta: {
                label: 'Log',
                data: [],
            },
            persistent: {
                label: 'Profile Updates',
                data: [],
            },
            temporal: {
                label: 'Event Fields',
                data: [],
            },
            chemical: {
                label: 'Chemical Use',
                data: [],
            },
            other: {
                label: 'Other',
                data: [],
            },
        };

        attrCollection.forEach( attrObj => {
            switch (attrObj.key) {

                // skip these
                case 'updatedAt':
                    break;

                // event meta
                case 'contactGivesDataConsent':
                    sortedAttrCollections.eventMeta.data.push(attrObj);
                    break;
                case 'date':
                    attrObj.label = 'Effective Date';
                    sortedAttrCollections.eventMeta.data.push(attrObj);
                    break;
                case 'createdAt':
                    attrObj.label = 'Log Date';
                    sortedAttrCollections.eventMeta.data.push(attrObj);
                    break;
                    
                    // persistent
                case 'newContactDate':
                    attrObj.label = 'Contact\'s First Visit';
                    sortedAttrCollections.persistent.data.push(attrObj);
                    break;
                case 'ageOfFirstInjection':
                case 'countryOfBirth':
                case 'dateOfBirth':
                case 'dateOfLastVisit':
                case 'ethnicity':
                case 'genderIdentity':
                case 'hasHealthInsurance':
                case 'hispanic':
                case 'housingStatus':
                case 'isEnrolled':
                case 'profileNotes':
                    sortedAttrCollections.persistent.data.push(attrObj);
                    break;
                
                // temporal
                case 'eventNotes':
                case 'isOutreach':
                case 'narcanWasOffered':
                case 'narcanWasTaken':
                case 'numberOfOthersHelping':
                case 'referrals':
                case 'syringesGiven':
                case 'syringesTaken':
                    sortedAttrCollections.temporal.data.push(attrObj);
                    break;

                // chemical use
                case 'didOdLastYear':
                case 'hepCStatus':
                case 'hivStatus':
                case 'isInCareForHepC':
                case 'isInCareForHiv':
                case 'otherDrugs':
                case 'otherDrugsAggregate':
                case 'primaryDrug':
                    sortedAttrCollections.chemical.data.push(attrObj);
                    break;

                // other
                default:
                    sortedAttrCollections.other.data.push(attrObj);
            }
        });

        return (
            <Card>
                <CardHeader
                    title={primaryDateString}
                    subtitle={secondaryDateString}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText expandable={true}>
                    <ContactInfoEventDetailsSection 
                        eventDetailsSectionData={ sortedAttrCollections.persistent } 
                        palette={ palette } 
                        className="col-xs-12 col-sm-6"
                        />
                    <ContactInfoEventDetailsSection 
                        eventDetailsSectionData={ sortedAttrCollections.eventMeta } 
                        palette={ palette } 
                        className="col-xs-12 col-sm-6"
                        />
                    <ContactInfoEventDetailsSection 
                        eventDetailsSectionData={ sortedAttrCollections.chemical } 
                        palette={ palette } 
                        className="col-xs-12 col-sm-6"
                        />
                    <ContactInfoEventDetailsSection 
                        eventDetailsSectionData={ sortedAttrCollections.temporal } 
                        palette={ palette } 
                        className="col-xs-12 col-sm-6"
                        />
                    <ContactInfoEventDetailsSection 
                        eventDetailsSectionData={ sortedAttrCollections.other } 
                        palette={ palette } 
                        className="col-xs-12 col-sm-6"
                        />
                    <div style={{ clear: 'both' }}> </div>
                </CardText>
            </Card>
        );
    }
}