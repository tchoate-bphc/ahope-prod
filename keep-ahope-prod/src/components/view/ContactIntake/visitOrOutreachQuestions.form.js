import React, { Component } from 'react'

import { FieldWithManualOption } from '../common/FieldWithManualOption';

import { Card, CardTitle } from 'material-ui/Card';

import { referralsSelectOptionsList, enrollmentRadioOptions } from '../../../utils/fieldValueLists';

class VisitOrOutreachQuestions extends Component {

    constructor(props) {
        super(props);
        this.buildSelectField = this.props.buildSelectField.bind(this);
        this.buildRadio = this.props.buildRadio.bind(this);
        this.buildToggle = this.props.buildToggle.bind(this);
        this.buildSlider = this.props.buildSlider.bind(this);
    };

    render() {

        const { updateIntakeFormField, fieldStyles } = this.props;

        const numberOfOthersHelpingStepDetails = {
            defaultValue: 0,
            step: 1,
            min: 0,
            max: 12,
        }
        return (
            <Card style={{ paddingBottom: '1rem' }}>
                <CardTitle title='Visit or Outreach' titleColor={this.props.palette.primary1Color}/>
                <div style={{...fieldStyles}}>
                    {this.buildToggle('Outreach', 'isOutreach', this.props.handleChildToggleChange)}
                </div>
                <div style={{...fieldStyles}}>
                    <FieldWithManualOption
                        showManual={this.props.referrals != null && this.props.referrals.indexOf('other') > -1}
                        onManualChange={({manualVal, defaultFieldVal}) => {
                            const validDropdownOptions = referralsSelectOptionsList.map( obj => obj.value );
                            updateIntakeFormField({
                                key: 'referrals', 
                                val: [
                                    ...defaultFieldVal.filter( val => validDropdownOptions.indexOf(val) > -1 ),
                                    manualVal,
                                ]
                            })
                        }}
                        defaultFieldProps={{
                            title: 'Referrals',
                            val: this.props.referrals,
                            validOptionsList: referralsSelectOptionsList.map( obj => obj.value ),
                        }}
                        defaultFieldEl={ this.buildSelectField({ title: 'Referrals', selectOptionsList: referralsSelectOptionsList, name: 'referrals', val: this.props.referrals, updateCallback: this.props.handleSelectChange, multiple: true }) }
                    />  
                </div>
                <div style={{...fieldStyles}}>
                    {this.buildSlider('syringesGiven', 'Syringes Given', this.props.syringesGiven, this.props.handleSliderChange)}
                </div>
                <div style={{...fieldStyles}}>
                    {this.buildSlider('syringesTaken', 'Syringes Collected', this.props.syringesTaken, this.props.handleSliderChange)}
                </div>
                <div style={{...fieldStyles}}>
                    {this.buildToggle('Narcan was offered', 'narcanWasOffered', this.props.handleChildToggleChange)}
                </div>
                <div style={{...fieldStyles}}>
                    {this.buildToggle('Narcan was given', 'narcanWasTaken', this.props.handleChildToggleChange)}
                </div>
                <div style={{...fieldStyles}}>
                    {this.buildRadio('Enrollment', enrollmentRadioOptions, 'enrollment', this.props.handleChange)}
                </div>
                <div style={{...fieldStyles}}>
                    {this.buildSlider('numberOfOthersHelping', 'Number of others helping', this.props.numberOfOthersHelping, this.props.handleSliderChange, numberOfOthersHelpingStepDetails)}
                </div>
            </Card>
        )
    }
}

export default VisitOrOutreachQuestions;
