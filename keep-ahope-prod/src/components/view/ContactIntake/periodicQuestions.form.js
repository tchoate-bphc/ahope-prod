import React, { Component } from 'react'

import { FieldWithManualOption } from '../common/FieldWithManualOption';

import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';

import { housingStatusOptionsList, hivRadioOptions, hepCStatusOptionsList, insurerOptionsList, primaryDrugOptionsList, otherDrugOptionsList } from '../../../utils/fieldValueLists';

class PeriodicIntakeForm extends Component {

    constructor(props) {
        super(props);

        this.buildSelectField = this.props.buildSelectField.bind(this);
        this.buildRadio = this.props.buildRadio.bind(this);
        this.buildToggle = this.props.buildToggle.bind(this);
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

        const { updateIntakeFormField, fieldStyles } = this.props;

        // rest of the stuff for this form
        return (
            <Card style={{ paddingBottom: '1rem' }}>
                <CardTitle title='Periodic' titleColor={this.props.palette.primary1Color}/>

                <TextField
                    style={{paddingTop: '2rem', paddingLeft: '2rem', paddingRight: '2rem'}}
                    floatingLabelText="Zip Code"
                    value={this.props.zipCode}
                    name='zipCode'
                    onChange={this.props.handleChange}
                />

                <div style={{...fieldStyles}}>
                    {this.buildRadio('Housing Status', housingStatusOptionsList, 'housingStatus', this.props.handleChange)}
                </div>

                <div style={{...fieldStyles}}>
                    {this.buildRadio('HIV Status', hivRadioOptions, 'hivStatus', (evt, val) => {
                        this.props.handleChange(evt, val);
                        this.props.handleChildToggleChange('isInCareForHiv', val === 'negative' ? false : this.props.isInCareForHiv );
                    })}
                </div>

                {this.props.hivStatus === 'positive' && <div style={{...fieldStyles}}>
                    {this.buildToggle('In care for HIV?', 'isInCareForHiv', this.props.handleChildToggleChange)}
                </div>}

                <div style={{...fieldStyles}}>
                    {this.buildRadio('Hepatitus C Status', hepCStatusOptionsList, 'hepCStatus', (evt, val) => {
                        this.props.handleChange(evt, val);
                        this.props.handleChildToggleChange('isInCareForHepC', val === 'negative' ? false : this.props.isInCareForHepC );
                    })}
                </div>

                {this.props.hepCStatus === 'positive' &&  <div style={{...fieldStyles}}>
                    {this.buildToggle('In care for Hepatitis C?', 'isInCareForHepC', this.props.handleChildToggleChange)}
                </div>}

                <div style={{...fieldStyles}}>
                    {this.buildToggle('Health Insurance?', 'hasHealthInsurance', (evt, val, multiple) => {
                        this.props.handleChildToggleChange(evt, val, multiple);
                        this.props.handleSelectChange('healthInsurer', val ? null : this.props.healthInsurer );
                    })}
                </div>

                {this.props.hasHealthInsurance && <div style={{...fieldStyles}}>
                    {this.buildSelectField({ title: 'Health Insurer', selectOptionsList: insurerOptionsList, name: 'healthInsurer', val: this.props.healthInsurer, updateCallback: this.props.handleSelectChange, multiple: false })}
                </div>}

                <div style={{...fieldStyles}}>
                    {this.buildToggle('OD In Last Year?', 'didOdLastYear', this.props.handleChildToggleChange)}
                </div>

                <div style={{...fieldStyles}}>
                    {this.buildToggle('Witness an OD in Last Year?', 'didSeeOdLastYear', this.props.handleChildToggleChange)}
                </div>

                <div style={{...fieldStyles}}>
                    <FieldWithManualOption
                        showManual={this.props.primaryDrug != null && ( this.props.primaryDrug === 'other' || primaryDrugOptionsList.findIndex( ddObj => ddObj.value === this.props.primaryDrug ) < 0 ) }
                        onManualChange={({manualVal, defaultFieldVal}) => {
                            updateIntakeFormField({
                                key: 'primaryDrug', 
                                val: manualVal
                            })
                        }}
                        defaultFieldProps={{
                            title: 'Primary Drug',
                            val: this.props.primaryDrug,
                            validOptionsList: primaryDrugOptionsList.map( obj => obj.value ),
                        }}
                        defaultFieldEl={this.buildSelectField({
                            title: 'Primary Drug', 
                            selectOptionsList: this.getUniquePrimaryTextList({
                                collection: primaryDrugOptionsList, 
                                realValue: this.props.primaryDrug,
                            }),
                            name: 'primaryDrug', 
                            val: this.props.primaryDrug, 
                            updateCallback: this.props.handleSelectChange, 
                            multiple: false 
                        })}
                    />
                </div>

                <div style={{...fieldStyles}}>
                    <FieldWithManualOption
                        showManual={this.props.otherDrugs != null && this.props.otherDrugs.indexOf('other') > -1 }
                        onManualChange={({manualVal, defaultFieldVal}) => {
                            const validDropdownOptions = otherDrugOptionsList.map( obj => obj.value );
                            updateIntakeFormField({
                                key: 'otherDrugs', 
                                val: [
                                    ...defaultFieldVal.filter( val => validDropdownOptions.indexOf(val) > -1 ),
                                    manualVal,
                                ]
                            })
                        }}
                        defaultFieldProps={{
                            title: 'Other Drugs',
                            val: this.props.otherDrugs,
                            validOptionsList: otherDrugOptionsList.map( obj => obj.value ),
                        }}
                        defaultFieldEl={this.buildSelectField({ 
                            title: 'Other Drugs', 
                            selectOptionsList: otherDrugOptionsList,
                            name: 'otherDrugs', 
                            val: this.props.otherDrugs, 
                            updateCallback: this.props.handleSelectChange, 
                            multiple: true 
                        })}
                    />
                </div>

            </Card>
        )
    }

}

export default PeriodicIntakeForm;
