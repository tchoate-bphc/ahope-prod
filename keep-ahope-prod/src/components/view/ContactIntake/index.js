import React, { Component } from 'react'

import moment from 'moment';

import muiThemeable from 'material-ui/styles/muiThemeable';

import { Card, CardTitle } from 'material-ui/Card';
import { RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton'
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
// import Slider from 'material-ui/Slider';
import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle';

import RemoveCircleIcon from 'material-ui/svg-icons/content/remove-circle';
import AddBoxIcon from 'material-ui/svg-icons/content/add-box';

import PeriodicQuestionsForm from 'components/view/ContactIntake/periodicQuestions.form';
import NewContactQuestionsForm from 'components/view/ContactIntake/newContactQuestions.form';
import VisitOrOutreachQuestions from 'components/view/ContactIntake/visitOrOutreachQuestions.form';

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import '../common/react-datepicker-override.css'

import DescriptionIcon from 'material-ui/svg-icons/action/description';

import './styles.css';

class IntakeForm extends Component {

    constructor(props) {
        super(props);

        this.submitForm = this.submitForm.bind(this);
        this.updateIntakeFormField = this.props.updateIntakeFormField;
        this.createEvent = this.props.createEvent;

        this.state = {
            consentDialogOpen: false,
        };
    }

    // i'm sure we'll want to change names on the db in the future at some time
    // or locally within state. so I'm abstracting this call to make it clear what data
    // we send in event creation
    packageFormDataForSubmission({initialState, userStateForDisplay}) {
        const visitOrOutreach = {
            isOutreach: userStateForDisplay.isOutreach,
            referrals: userStateForDisplay.referrals,
            syringesGiven: userStateForDisplay.syringesGiven,
            syringesTaken: userStateForDisplay.syringesTaken,
            narcanWasOffered: userStateForDisplay.narcanWasOffered,
            narcanWasTaken: userStateForDisplay.narcanWasTaken,
            enrollment: userStateForDisplay.enrollment,
            numberOfOthersHelping: userStateForDisplay.numberOfOthersHelping,
        }
        
        const periodic = userStateForDisplay.showPeriodic ? {
            housingStatus: userStateForDisplay.housingStatus,
            hivStatus: userStateForDisplay.hivStatus,
            isInCareForHiv: userStateForDisplay.isInCareForHiv,
            hepCStatus: userStateForDisplay.hepCStatus,
            isInCareForHepC: userStateForDisplay.isInCareForHepC,
            healthInsurer: userStateForDisplay.healthInsurer,
            primaryDrug: userStateForDisplay.primaryDrug,
            didOdLastYear: userStateForDisplay.didOdLastYear,
            didSeeOdLastYear: userStateForDisplay.didSeeOdLastYear,
            hasHealthInsurance: userStateForDisplay.hasHealthInsurance,
            otherDrugs: userStateForDisplay.otherDrugs,
            zipCode: userStateForDisplay.zipCode,
        } : null;
        
        const contactData = initialState.newContact || userStateForDisplay.showNewContactQuestions ? {
            newContactDate: userStateForDisplay.newContactDate,
            contactDateOfBirth: userStateForDisplay.contactDateOfBirth,
            contactGenderIdentity: userStateForDisplay.contactGenderIdentity,
            contactEthnicity: userStateForDisplay.contactEthnicity,
            contactIsHispanic: userStateForDisplay.contactIsHispanic,
            contactCountryOfBirth: userStateForDisplay.contactCountryOfBirth,
            contactAgeOfFirstInjection: userStateForDisplay.contactAgeOfFirstInjection,
        } : null;

        // dirty check to only submit data for visible forms
        let prunedEventData = {
            ...visitOrOutreach,
            ...periodic,
            ...contactData,
            contactGivesDataConsent: userStateForDisplay.contactGivesDataConsent,
            profileNotes: userStateForDisplay.profileNotes,
            eventNotes: userStateForDisplay.eventNotes,
            date: userStateForDisplay.eventDate,
            contactUid: initialState.uid,
        };
        return prunedEventData;
    }

    submitForm({initialState, userStateForDisplay}) {
        // TODO: Ultimately should change these cases to prompts, not alert; but React errors for now
        // TODO: what about validation?
        if (initialState === userStateForDisplay) {
            alert("Cannot post empty form");
        } else {
            // TODO: should call an action 'SUBMIT_FORM' or something
            // which should take the event and contact info, and call the update contact
            // action from within
            let eventData = this.packageFormDataForSubmission({initialState, userStateForDisplay});
            this.createEvent( { eventData, history: this.props.history } );
        }
    }

    // helpers to build controlled input elements
    buildRadio(title, radioOptionsList, name, updateCallback) {
        let radioControls = radioOptionsList.map(option => (
            <RadioButton
                key={option.label}
                name={option.name}
                label={option.label}
                value={option.value}
            />
        ));

        let labelStyle = {
            color: this.props.palette.accent3Color,
            margin: '0 0 0.5rem 0'
        };

        return (
            <div>
                <div style={labelStyle}>{title}</div>
                <RadioButtonGroup
                    name={name}
                    onChange={updateCallback}
                    defaultSelected={this.props[name]}
                    valueSelected={this.props[name]}
                >
                    {radioControls}
                </RadioButtonGroup>
            </div>
        )
    };

    buildToggle(toggleName, stateName, updateCallback) {
        return (
            <Toggle
                label={toggleName}
                labelPosition="right"
                toggled={this.props[stateName]}
                onToggle={(event, isInputChecked) => {
                    updateCallback(stateName, isInputChecked)
                }}
            />
        )
    };

    buildSelectField({ title, selectOptionsList, name, val, updateCallback, multiple=false}) {
        const selectControls = selectOptionsList.map(selectOption => (
            <MenuItem
                key={name + '-' + selectOption.value}
                primaryText={selectOption.label}
                value={selectOption.value}
                name={name}
            />
        ));

        const labelStyle = {
            color: this.props.palette.accent3Color,
        };

        return (
            <div>
                <div style={labelStyle}>{title}</div>
                <SelectField
                    multiple={multiple}
                    value={ val }
                    key={name}
                    style={{color: this.props.palette.primary1Color}}
                    name={name}
                    onChange={(e, index, value) => {
                        updateCallback(name, value, multiple, val )
                    }}
                >
                    {selectControls}
                </SelectField>
            </div>
        )
    };

    buildSlider(sliderName, labelText, sliderValue, updateCallback, overrides = {}) {
        let labelStyle = {
            color: this.props.palette.accent3Color,
            // margin: '2rem 0 1rem 0'
        };
        
        const options = {
            defaultValue: overrides.defaultValue || 0,
            step: overrides.step || 10,
            min: overrides.min || 0,
            max: overrides.max || 50,
        }

        const value = !this.props[sliderName] || this.props[sliderName] < 0 ? 0 : this.props[sliderName];

        return (
            <div id={sliderName}>
                <div style={labelStyle}>
                    {labelText}
                </div>
                <FlatButton
                    style={{ minWidth: '3em' }}
                    onClick={() => updateCallback(sliderName, value === 0 ? 0 : value - 10 )}
                    icon={<RemoveCircleIcon style={{ fill: this.props.palette.softPrimaryColor}} />}
                    >
                </FlatButton>
                <div style={{
                    fontWeight: 'bold', 
                    color: this.props.palette.primary1Color, 
                    letterSpacing: '1px', 
                    width: '3em',
                    display: 'inline-block',
                    textAlign: 'center',
                }}>
                    {sliderValue}
                </div>
                <FlatButton
                    style={{ minWidth: '3em' }}
                    icon={<AddBoxIcon style={{ fill: this.props.palette.softPrimaryColor}} />}
                    onClick={() => updateCallback(sliderName, value + 10)}
                    >
                </FlatButton>
            </div>
        )
    }

    handleSliderChange(name, value) {
        this.updateIntakeFormField({
            key: name,
            val: value,
        });
    };

    handleChildInputChange(event, value) {
        const target = event.target;
        const name = target.name;

        this.updateIntakeFormField({
            key: name,
            val: value,
        });
    };

    handleChildSelectChange(name, value, multiple = false, prevVal) {

        if (multiple) {
            value = this.handleMultiSelectChangeWithNull({newVal: value, prevVal});
        }

        this.updateIntakeFormField({
            key: name,
            val: value,
        });
    };

    handleMultiSelectChangeWithNull({newVal, prevVal}) {
        
        const selectedCount = newVal.length;
        const indexOfNullInCurr = newVal.findIndex( item => item === null );
        const indexOfNullInPrev = prevVal.findIndex( item => item === null );

        // if only one item selected, no action to take
        if (selectedCount === 1) {
            return newVal;
        } else if (selectedCount > 1 && indexOfNullInCurr > -1 ) {
            // if greater than 1 item and has null, then either return null or the other values
            if (indexOfNullInPrev > -1) {
                // if previously had null, then remove it
                return newVal.filter( item => item !== null );
            } else {
                // if previously didn't have null, then remove all others
                return newVal.filter( item => item === null );
            }
        } else {
            // else no changes needed
            return newVal;
        }
    }

    handleChildToggleChange(name, isInputChecked) {
        this.updateIntakeFormField({
            key: name,
            val: isInputChecked,
        })
    }

    addDefaultValuesToIntakeForm({uid, initialState, userState}) {

        return {
            visitOrOutreach: userState.visitOrOutreach !== null ? userState.visitOrOutreach : true,
            showPeriodic: userState.showPeriodic !== null ? userState.showPeriodic : true,
            showNewContactQuestions: userState.showNewContactQuestions !== null ? userState.showNewContactQuestions : false,
        
            eventNotes: userState.eventNotes !== null ? userState.eventNotes : '',
            profileNotes: userState.profileNotes !== null ? userState.profileNotes : '',
        
            // form
            eventDate: userState.eventDate !== null ? userState.eventDate : new Date(),
            contactGivesDataConsent: userState !== null ? userState.contactGivesDataConsent : false,
        
            // periodic
            dateOfLastVisit: userState.dateOfLastVisit !== null ? userState.dateOfLastVisit : null,
            zipCode: userState.zipCode !== null ? userState.zipCode : '',
            didOdLastYear: userState.didOdLastYear !== null ? userState.didOdLastYear : false,
            didSeeOdLastYear: userState.didSeeOdLastYear !== null ? userState.didSeeOdLastYear : false,
            hasHealthInsurance: userState.hasHealthInsurance !== null ? userState.hasHealthInsurance : false,
            healthInsurer: userState.healthInsurer !== null ? userState.healthInsurer : null,
            hepCStatus: userState.hepCStatus !== null ? userState.hepCStatus : null,
            hivStatus: userState.hivStatus !== null ? userState.hivStatus : null,
            housingStatus: userState.housingStatus !== null ? userState.housingStatus : null,
            isInCareForHepC: userState.isInCareForHepC !== null ? userState.isInCareForHepC : null,
            isInCareForHiv: userState.isInCareForHiv !== null ? userState.isInCareForHiv : null,
            otherDrugs: userState.otherDrugs || [null],
            primaryDrug: userState.primaryDrug !== null ? userState.primaryDrug : null,
        
            // new contact
            contactAgeOfFirstInjection: userState.contactAgeOfFirstInjection !== null ? userState.contactAgeOfFirstInjection : 0,
            contactCountryOfBirth: userState.contactCountryOfBirth !== null ? userState.contactCountryOfBirth : '',
            contactDateOfBirth: userState.contactDateOfBirth !== null ? userState.contactDateOfBirth : moment(uid.match(/\d{6}/)[0], 'MMDDYY'),
            contactEthnicity: userState.contactEthnicity !== null ? userState.contactEthnicity : null,
            contactGenderIdentity: userState.contactGenderIdentity !== null ? userState.contactGenderIdentity : null,
            contactIsHispanic: userState.contactIsHispanic !== null ? userState.contactIsHispanic : false,
            newContactDate: userState.newContactDate !== null ? userState.newContactDate : new Date(),
        
            // visit or isOutreach
            enrollment: userState.enrollment !== null ? userState.enrollment : '',
            isOutreach: userState.isOutreach !== null ? userState.isOutreach : false,
            narcanWasOffered: userState.narcanWasOffered !== null ? userState.narcanWasOffered : false,
            narcanWasTaken: userState.narcanWasTaken !== null ? userState.narcanWasTaken : false,
            numberOfOthersHelping: userState.numberOfOthersHelping !== null ? userState.numberOfOthersHelping : 0,
            referrals: userState.referrals || [null],
            syringesGiven: userState.syringesGiven !== null ? userState.syringesGiven : 0,
            syringesTaken: userState.syringesTaken !== null ? userState.syringesTaken : 0,
            uid: initialState.uid,
        };
    }

    handleConsentDialogOpen = () => {
        this.setState({ consentDialogOpen: true });
    };

    handleConsentDialogClose = () => {
        this.setState({ consentDialogOpen: false });
    };

    render() {

        const { intakeForm: {userState, initialState }, muiTheme: {palette}, consentText, uid } = this.props;
        
        const userStateForDisplay = this.addDefaultValuesToIntakeForm({uid, initialState, userState});

        const clearLabelStyle = {
            color: palette.errorColor
        }

        const fieldStyles = {
            padding: '1rem 2rem',
        };

        const contactDateOfBirthConverted = !userStateForDisplay.contactDateOfBirth ? null : moment(userStateForDisplay.contactDateOfBirth).startOf('day').toDate();
        const dateOfLastVisitConverted = !userStateForDisplay.dateOfLastVisit ? null : moment(userStateForDisplay.dateOfLastVisit).startOf('day').toDate();

        // checkboxes to select which forms to show
        const formCheckboxOptionsArray = [
            {
                label: 'First Contact',
                key: 'showNewContactQuestions',
                defaultChecked: initialState.newContact === true ? true : false, 
                disabled: initialState.newContact === true ? true : false, 
                checked: initialState.newContact === true ? true : userStateForDisplay.showNewContactQuestions,
                onCheckCallback: () => this.updateIntakeFormField({key: 'showNewContactQuestions', val: !userStateForDisplay.showNewContactQuestions})
            },
            {
                label: 'Visit or Outreach',
                key: 'visitOrOutreach',
                defaultChecked: true, 
                disabled: true,
                checked: userStateForDisplay.visitOrOutreach,
            },
            {
                label: (<div>Periodic {dateOfLastVisitConverted && (
                    <span style={{ color: palette.disabledColor, whiteSpace: 'nowrap' }}>
                        (last visit: {moment(dateOfLastVisitConverted).format('ddd, MMM DD, YYYY')})
                    </span>
                )}</div>),
                key: 'showPeriodic',
                defaultChecked: true, 
                disabled: false, 
                checked: userStateForDisplay.showPeriodic,
                onCheckCallback: () => this.updateIntakeFormField({key: 'showPeriodic', val: !userStateForDisplay.showPeriodic})
            },
        ];
        
        const consentDialogActions = [
            <FlatButton
                label="Send by Email"
                secondary={true}
                onClick={ () => {
                    window.open(
                        'mailto:?cc=ahopeconsent@bphc.com&subject=AHOPE%20Data%20Collection%20Consent%20Form&body=' + 
                        this.convertConsentText({ format: 'email', text: consentText })
                    )
                }}
            />,
            <FlatButton
                label="Close"
                primary={true}
              onClick={this.handleConsentDialogClose}
            />,
          ];

        return (
            <form className="form">

                <Card>
                    <CardTitle title='Form Questions' titleColor={palette.primary1Color}/>
                    
                    <Dialog
                        title="Data Collection Consent"
                        actions={consentDialogActions}
                        modal={false}
                        open={this.state.consentDialogOpen}
                        onRequestClose={this.handleConsentDialogClose}
                        autoScrollBodyContent={true}
                        >
                        { this.convertConsentText({ text: consentText }) }
                    </Dialog>
                    <div style={ fieldStyles }>
                        <div className="row">
                            <Toggle
                                className="col-xs-9 col-sm-10 col-lg-11"
                                label={(
                                    <span>
                                        Contact gives consent to record this interaction and understands their data rights
                                        <span style={{ paddingLeft: '1em', color: palette.warningColor}}>(required)</span>
                                    </span>
                                )}
                                labelPosition="right"
                                value={!!userStateForDisplay.contactGivesDataConsent}
                                onToggle={(event, isInputChecked) => {
                                    this.handleChildToggleChange('contactGivesDataConsent', isInputChecked);
                                }}
                            />
                            <div 
                                className="col-xs-3 col-sm-2 col-lg-1"
                                >
                                <RaisedButton 
                                    // labelStyle={{
                                    //     fontSize: 36
                                    // }}
                                    style={{ width: '100%', height: '2.5em' }}
                                    // primary={true}
                                    icon={<DescriptionIcon 
                                            style={{
                                                fill: palette.tertiaryTextColor,
                                                width: 36,
                                                height: 36,
                                                margin: '.125em'
                                            }}
                                            hoverColor={palette.primary1Color}
                                        />
                                    }
                                    onClick={this.handleConsentDialogOpen}
                                    />
                            </div>
                        </div>
                    </div>

                    <div style={{ ...fieldStyles, paddingTop: 0 }}>
                        <div style={{ padding: '.5em', color: palette.disabledColor }}>
                            Event Date
                        </div>
                        <DatePicker
                            selected={userStateForDisplay.eventDate ? moment(userStateForDisplay.eventDate) : null}
                            onChange={(date) => this.updateIntakeFormField({key: 'eventDate', val: date})}
                            peekNextMonth
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                        />
                    </div>
                    <div
                        className="row"
                        style={{ ...fieldStyles, paddingTop: 0 }}
                        >
                        {formCheckboxOptionsArray.map(option => (
                            <Checkbox
                                className="col-xs-6 col-sm-6 col-md-3"
                                key={option.key}
                                labelStyle={option.labelStyle}
                                style={option.style}
                                label={option.label}
                                checked={option.checked}
                                // defaultChecked={option.defaultChecked}
                                disabled={option.disabled}
                                onCheck={option.onCheckCallback}
                                />
                            ))}
                    </div>
                </Card>

                <Card>
                    <CardTitle 
                        title='Contact Profile Notes' 
                        subtitle='Notes about this individual, visible for future interactions'
                        titleColor={palette.primary1Color} 
                        />
                    <div className="textAreaContainer">
                        <TextField
                            multiLine={true}
                            rows={5}
                            fullWidth={true}
                            id="profileNotes"
                            // floatingLabelText="Notes about this individual"
                            value={userStateForDisplay.profileNotes}
                            onChange={(e, value) => this.updateIntakeFormField({key: 'profileNotes', val: value})}
                        />
                    </div>
                </Card>


                <VisitOrOutreachQuestions
                    // helpers
                    buildRadio={this.buildRadio}
                    buildSelectField={this.buildSelectField}
                    buildSlider={this.buildSlider}
                    buildToggle={this.buildToggle}
                    fieldStyles={fieldStyles}
                    handleChange={this.handleChildInputChange.bind(this)}
                    handleChildToggleChange={this.handleChildToggleChange.bind(this)}
                    handleSelectChange={this.handleChildSelectChange.bind(this)}
                    handleSliderChange={this.handleSliderChange.bind(this)}
                    palette={palette}
                    updateIntakeFormField={this.updateIntakeFormField}
                    // form data
                    isOutreach={userStateForDisplay.isOutreach}
                    referrals={userStateForDisplay.referrals}
                    syringesGiven={userStateForDisplay.syringesGiven}
                    syringesTaken={userStateForDisplay.syringesTaken}
                    narcanWasOffered={userStateForDisplay.narcanWasOffered}
                    narcanWasTaken={userStateForDisplay.narcanWasTaken}
                    enrollment={userStateForDisplay.enrollment}
                    numberOfOthersHelping={userStateForDisplay.numberOfOthersHelping}
                />

                {(initialState.newContact === true || userStateForDisplay.showNewContactQuestions) && <NewContactQuestionsForm
                    // helpers
                    buildRadio={this.buildRadio}
                    buildSelectField={this.buildSelectField}
                    buildSlider={this.buildSlider}
                    buildToggle={this.buildToggle}
                    fieldStyles={fieldStyles}
                    handleChange={this.handleChildInputChange.bind(this)}
                    handleChildToggleChange={this.handleChildToggleChange.bind(this)}
                    handleSelectChange={this.handleChildSelectChange.bind(this)}
                    handleSliderChange={this.handleSliderChange.bind(this)}
                    palette={palette}
                    updateIntakeFormField={this.updateIntakeFormField}
                    // form data
                    contactDateOfBirth={contactDateOfBirthConverted}
                    contactGenderIdentity={userStateForDisplay.contactGenderIdentity}
                    contactEthnicity={userStateForDisplay.contactEthnicity}
                    contactIsHispanic={userStateForDisplay.contactIsHispanic}
                    contactCountryOfBirth={userStateForDisplay.contactCountryOfBirth}
                    contactAgeOfFirstInjection={userStateForDisplay.contactAgeOfFirstInjection}
                />}

                {userStateForDisplay.showPeriodic && <PeriodicQuestionsForm
                    // helpers
                    buildRadio={this.buildRadio}
                    buildSelectField={this.buildSelectField}
                    buildToggle={this.buildToggle}
                    fieldStyles={fieldStyles}
                    handleChange={this.handleChildInputChange.bind(this)}
                    handleChildToggleChange={this.handleChildToggleChange.bind(this)}
                    handleSelectChange={this.handleChildSelectChange.bind(this)}
                    palette={palette}
                    updateIntakeFormField={this.updateIntakeFormField}
                    // form data
                    zipCode={userStateForDisplay.zipCode}
                    housingStatus={userStateForDisplay.housingStatus}
                    hivStatus={userStateForDisplay.hivStatus}
                    isInCareForHiv={userStateForDisplay.isInCareForHiv}
                    hepCStatus={userStateForDisplay.hepCStatus}
                    isInCareForHepC={userStateForDisplay.isInCareForHepC}
                    hasHealthInsurance={userStateForDisplay.hasHealthInsurance}
                    healthInsurer={userStateForDisplay.healthInsurer}
                    primaryDrug={userStateForDisplay.primaryDrug}
                    otherDrugs={userStateForDisplay.otherDrugs}
                    didOdLastYear={userStateForDisplay.didOdLastYear}
                    didSeeOdLastYear={userStateForDisplay.didSeeOdLastYear}
                    />}

                <Card>
                    <CardTitle 
                        title='Event Notes' 
                        subtitle='Notes about this specific event'
                        titleColor={palette.primary1Color} 
                        />
                    <div className="textAreaContainer">
                        <TextField
                            multiLine={true}
                            rows={5}
                            fullWidth={true}
                            id="eventNotes"
                            // floatingLabelText="Event Notes"
                            value={userStateForDisplay.eventNotes}
                            onChange={(e, value) => this.updateIntakeFormField({key: 'eventNotes', val: value})}
                            />
                    </div>
                </Card>

                <Card>
                    <div style={{textAlign:'right', color: palette.warningColor}} hidden={userStateForDisplay.contactGivesDataConsent}>User must consent before data can be saved.</div>
                    <div className="submitButtons">
                        {/* TODO: handle this in a more elegant way than just reloading the page */}
                        <FlatButton label="Clear Form" labelStyle={clearLabelStyle} onClick={() => window.location.reload()} />
                        <FlatButton label="Save" disabled={!userStateForDisplay.contactGivesDataConsent} primary={true} onClick={() => this.submitForm({initialState, userStateForDisplay})} />
                    </div>
                </Card>
            </form>
        )
    }

    convertConsentText({format, text}) {

        const paragraphs = !text || !text.length ? [] : text.split(/(\r\n)+|\r+|\n+/);

        if (format === 'email') {
            return paragraphs.join('\r\n %0D%0A %0D%0A \r\n');
        }

        return (
            <section>
                { paragraphs.map( (pContent, i) => <p key={i}>{pContent}</p> ) }
            </section>
        );
    }
}

export default muiThemeable()(IntakeForm);
