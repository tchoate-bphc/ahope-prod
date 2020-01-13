import {
    UPDATE_INTAKE_FORM_FIELD,
    UPDATE_INTAKE_FORM_WITH_CONTACT,
    SET_INTAKE_FORM_TO_INITIAL_STATE,
} from '../constants';

const INITIAL_FORM_STATE = {
    // which sections to show
    visitOrOutreach: null, // true
    showPeriodic: null, // false,
    showNewContactQuestions: null, // false,
    dateOfLastVisit: null, // null
    
    // form
    contactGivesDataConsent: null, 
    eventDate: null,
    eventNotes: null, // '',
    profileNotes: null,

    // periodic
    housingStatus: null, // 'homeless',
    hivStatus: null, // 'neverTested',
    isInCareForHiv: null, //false,
    hepCStatus: null, // 'neverTested',
    isInCareForHepC: null, // false,
    healthInsurer: null,
    primaryDrug: null,
    didOdLastYear: null, // true,
    didSeeOdLastYear: null, // true,
    hasHealthInsurance: null, // false,
    otherDrugs: [null],
    zipCode: null,

    // new contact
    newContactDate: null,
    contactDateOfBirth: null, // new Date(1980, 0, 1),
    contactGenderIdentity: null, // 'male',
    contactEthnicity: null, // 'White',
    contactIsHispanic: null, // true,
    contactCountryOfBirth: null, // '',
    contactAgeOfFirstInjection: null, // 0,

    // visit or isOutreach
    uid: null, // params.uid,
    isOutreach: null, // false,
    referrals: [null],
    syringesGiven: null, // 0,
    syringesTaken: null, // 0,
    narcanWasOffered: null, // false,
    narcanWasTaken: null, // false,
    enrollment: null, // '',
    numberOfOthersHelping: null, // 0,
};

const intakeFormState = {
    userState: INITIAL_FORM_STATE,
    initialState : INITIAL_FORM_STATE,
};

function intakeForm(state = intakeFormState, action) {

    const { key, val, contact } = action;
    
    switch (action.type) {
        case SET_INTAKE_FORM_TO_INITIAL_STATE:
            return {
                ...state,
                initialState: {...INITIAL_FORM_STATE},
                userState: {...INITIAL_FORM_STATE},
            };

        case UPDATE_INTAKE_FORM_FIELD:

            let updatedStateValObj = {};
            updatedStateValObj[key] = val;

            return {
                ...state,
                ...{userState: {
                    ...state.userState,
                    ...updatedStateValObj,
                }}
            };

        case UPDATE_INTAKE_FORM_WITH_CONTACT:
            
            const { initialStateWithContactInfo , userStateWithContactInfo } = getStateWithContactInfo({contact, initialState: state.initialState, userState: state.userState});

            return {
                ...state,
                ...{initialState: {
                    ...state.initialState,
                    ...initialStateWithContactInfo,
                }},
                ...{userState: {
                    ...state.userState,
                    ...userStateWithContactInfo,
                    // ...initialStateWithContactInfo // TODO ADD SOMETHING HERE!
                }}
            };

        default:
            return state;

    }
}

export default intakeForm;

function getStateWithContactInfo({contact, initialState, userState}) {

    let initialStateWithContactInfo = {}, 
        userStateWithContactInfo = {};

    const initialStateFieldToContactFieldMapping = {
        uid: 'uid',
        profileNotes: 'profileNotes',
        contactGivesDataConsent: 'contactGivesDataConsent',
        dateOfLastVisit: 'dateOfLastVisit',

        // new contact
        newContactDate: 'createdAt',
        contactDateOfBirth: 'dateOfBirth',
        contactGenderIdentity: 'genderIdentity',
        contactEthnicity: 'ethnicity',
        contactIsHispanic: 'isHispanic',
        contactCountryOfBirth: 'birthCountry',
        contactAgeOfFirstInjection: 'ageOfFirstInjection',

        // periodic
        housingStatus: 'housingStatus',
        hivStatus: 'hivStatus',
        isInCareForHiv: 'isInCareForHiv',
        hepCStatus: 'hepCStatus',
        isInCareForHepC: 'isInCareForHepC',
        healthInsurer: 'healthInsurer',
        primaryDrug: 'primaryDrug',
        didOdLastYear: 'didOdLastYear',
        didSeeOdLastYear: 'didSeeOdLastYear',
        hasHealthInsurance: 'hasHealthInsurance',
        otherDrugs: 'otherDrugs',
    }

    // if initialState val is default, then use val from contact, else don't return that prop
    Object.keys(initialState).forEach( initialStateKey => {
        if ( contact[ initialStateFieldToContactFieldMapping[initialStateKey] ] ) {

            initialStateWithContactInfo[ initialStateKey ] = contact[ initialStateFieldToContactFieldMapping[initialStateKey] ];

            // only override if user has not yet set the value
            if ( userState[ initialStateKey ] === INITIAL_FORM_STATE[ initialStateKey ]) {
                userStateWithContactInfo[ initialStateKey ] = contact[ initialStateFieldToContactFieldMapping[initialStateKey] ];
            } else {
                return;
            }
        }
    });

    if (Object.keys(contact) && Object.keys(contact).length === 1) {
        initialStateWithContactInfo.newContact = true;
        userStateWithContactInfo.newContact = true;
    }

    return { initialStateWithContactInfo , userStateWithContactInfo };
}