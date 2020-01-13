import React, { Component } from 'react'

import { FieldWithManualOption } from '../common/FieldWithManualOption';

import { Card, CardTitle } from 'material-ui/Card';

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import '../common/react-datepicker-override.css'

import moment from 'moment';

import {genderOptionsList, enthnicityOptionsList, countryOfBirthList } from '../../../utils/fieldValueLists';


class NewContactQuestionsForm extends Component {

    constructor(props) {
        super(props);

        this.buildSelectField = this.props.buildSelectField.bind(this);
        this.buildRadio = this.props.buildRadio.bind(this);
        this.buildToggle = this.props.buildToggle.bind(this);
        this.buildSlider = this.props.buildSlider.bind(this);
    };

    getUniquePrimaryTextList({collection, realValue}) {
        const isManualInCollection = collection.find( obj => obj.label === realValue || obj.value === realValue );
        const collectionCopy = collection.map(item => ({ 
            label: item.label, 
            value: item.value
        }));
        if (!isManualInCollection) {
            // deep clone the collection
            const indexOfItemOther = collectionCopy.findIndex(item => item.value === 'other');
            collectionCopy[indexOfItemOther] = {label: 'Other', value: realValue};
        }
        return collectionCopy;
    }

    render() {

        const { palette, updateIntakeFormField, fieldStyles } = this.props;

        const options = {
            defaultValue: 0,
            step: 1,
            min: 0,
            max: 100,
        }

        // rest of the stuff for this form
        return (
            <Card style={{ paddingBottom: '1rem' }}>
                <CardTitle title='First Contact' titleColor={palette.primary1Color}/>

                <div style={{...fieldStyles}}>
                    <div style={{ padding: '.5em', color: palette.disabledColor }}>
                        Date of Birth
                    </div>
                    <DatePicker
                        selected={this.props.contactDateOfBirth ? moment(this.props.contactDateOfBirth) : null}
                        onChange={(date) => this.updateIntakeFormField({key: 'contactDateOfBirth', val: date})}
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                    />
                </div>

                <div style={{...fieldStyles}}>
                    {this.buildSlider('contactAgeOfFirstInjection', 'Age of First Injection', this.props.contactAgeOfFirstInjection, this.props.handleSliderChange, options)}
                </div>
                <div style={{...fieldStyles}}>
                    <FieldWithManualOption
                        showManual={this.props.contactGenderIdentity != null && ( this.props.contactGenderIdentity === 'other' || genderOptionsList.findIndex( ddObj => ddObj.value === this.props.contactGenderIdentity ) < 0 ) }
                        onManualChange={({manualVal, defaultFieldVal}) => {
                            updateIntakeFormField({
                                key: 'contactGenderIdentity', 
                                val: manualVal
                            })
                        }}
                        defaultFieldProps={{
                            title: 'Gender Identity',
                            val: this.props.contactGenderIdentity,
                            validOptionsList: [ 
                                    ...genderOptionsList, 
                                    { label: this.props.contactGenderIdentity || 'Enter custom text', value: this.props.contactGenderIdentity || 'Enter custom text' }
                                ]
                                .filter( obj => obj.value.length > 0 )
                                .map( obj => obj.value ),
                        }}
                        defaultFieldEl={
                            this.buildRadio(
                                'Gender Identity', 
                                this.props.contactGenderIdentity === 'other' || genderOptionsList.findIndex( valid => valid.value === this.props.contactGenderIdentity) > -1 ?
                                    genderOptionsList : [ 
                                        ...genderOptionsList, 
                                        { label: this.props.contactGenderIdentity || 'Enter custom text', value: this.props.contactGenderIdentity || 'Enter custom text' }
                                    ]
                                    .filter( obj => obj.value.length > 0 )
                                , 
                                'contactGenderIdentity', 
                                this.props.handleChange
                            )
                        }
                    />
                </div>
                <div style={{...fieldStyles}}>
                    <FieldWithManualOption
                        showManual={this.props.contactEthnicity != null && ( this.props.contactEthnicity === 'other' || enthnicityOptionsList.findIndex( ddObj => ddObj.value === this.props.contactEthnicity ) < 0 ) }
                        onManualChange={({manualVal, defaultFieldVal}) => {
                            updateIntakeFormField({
                                key: 'contactEthnicity', 
                                val: manualVal
                            })
                        }}
                        defaultFieldProps={{
                            title: 'Ethnicity',
                            val: this.props.contactEthnicity,
                            validOptionsList: enthnicityOptionsList.map( obj => obj.value ),
                        }}
                        defaultFieldEl={this.buildSelectField({
                            title: 'Ethnicity', 
                            selectOptionsList: this.getUniquePrimaryTextList({
                                collection: enthnicityOptionsList, 
                                realValue: this.props.contactEthnicity,
                            }),
                            name: 'contactEthnicity', 
                            val: this.props.contactEthnicity, 
                            updateCallback: this.props.handleSelectChange, 
                            multiple: false 
                        })}
                    />
                </div>
                <div style={{...fieldStyles}}>
                    <FieldWithManualOption
                        showManual={this.props.contactCountryOfBirth != null && ( this.props.contactCountryOfBirth === 'other' || countryOfBirthList.findIndex( ddObj => ddObj.value === this.props.contactCountryOfBirth ) < 0 ) }
                        onManualChange={({manualVal, defaultFieldVal}) => {
                            updateIntakeFormField({
                                key: 'contactCountryOfBirth', 
                                val: manualVal
                            })
                        }}
                        defaultFieldProps={{
                            title: 'Country of Birth',
                            val: this.props.contactCountryOfBirth,
                            validOptionsList: [ 
                                    ...countryOfBirthList, 
                                    { label: this.props.contactCountryOfBirth|| 'Enter custom text', value: this.props.contactCountryOfBirth|| 'Enter custom text' }
                                ]
                                .filter( obj => obj.value.length > 0 )
                                .map( obj => obj.value ),
                        }}
                        defaultFieldEl={
                            this.buildRadio(
                                'Country of Birth', 
                                this.props.contactCountryOfBirth === 'other' || countryOfBirthList.findIndex( valid => valid.value === this.props.contactCountryOfBirth) > -1 ?
                                    countryOfBirthList : [ 
                                        ...countryOfBirthList, 
                                        { label: this.props.contactCountryOfBirth|| 'Enter custom text', value: this.props.contactCountryOfBirth|| 'Enter custom text' }
                                    ]
                                    .filter( obj => obj.value.length > 0 )
                                , 
                                'contactCountryOfBirth', 
                                this.props.handleChange
                            )
                        }
                    />
                </div>
                <div style={{...fieldStyles}}>
                    {this.buildToggle('Hispanic?', 'contactIsHispanic', this.props.handleChildToggleChange)}
                </div>
            </Card>
        )
    }

}

export default NewContactQuestionsForm;
