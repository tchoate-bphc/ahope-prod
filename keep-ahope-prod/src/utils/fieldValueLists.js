// New Contact ------------------------------------------------

export const genderOptionsList = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'MtF', value: 'mtf'},
    {label: 'FtM', value: 'ftm'},
    {label: 'Refused', value: 'refused'},
    {label: 'Custom', value: 'other'},
];

export const enthnicityOptionsList = [
    {label: 'American Indian', value: 'AI'},
    {label: 'Asian', value: 'Asian'},
    {label: 'Black/African American', value: 'BAA'},
    {label: 'Hawaiin/Pacific Islander', value: 'HPI'},
    {label: 'White', value: 'White'},
    {label: 'Prefer not to say', value: 'Refuse'},
    {label: 'Other', value: 'other'},
];

export const countryOfBirthList = [
    {label: 'US', value: 'US'},
    {label: 'Puerto Rico', value: 'PR'},
    // TODO: user needs to be able to click this and enter in their own custom entry
    {label: 'Other', value: 'other'},
];

// Periodic ------------------------------------------------

export const housingStatusOptionsList = [
    { name: 'housed', label: 'Housed', value: 'housed' },
    { name: 'homeless', label: 'Homeless', value: 'homeless' },
    { name: 'unstable', label: 'Unstable Housed', value: 'unstable' },
];

export const hivRadioOptions = [
    { name: 'positive', label: 'Positive', value: 'positive' },
    { name: 'negative', label: 'Negative', value: 'negative' },
    { name: 'neverTested', label: 'Never Tested', value: 'neverTested' },
]

export const hepCStatusOptionsList = [
    { name: 'positive', label: 'Positive', value: 'positive' },
    { name: 'negative', label: 'Negative', value: 'negative' },
    { name: 'neverTested', label: 'Never Tested', value: 'neverTested' },
];

export const insurerOptionsList = [
    {label: 'Mass Health', value: 'MH'},
    {label: 'Neighborhood Health Program', value: 'NHP'},
    {label: 'Blue Cross Blue Shield', value: 'BCBS'},
    {label: 'Tufts', value: 'TF'},
    // TODO: user needs to be able to click this and enter in their own custom entry
    {label: 'Other', value: 'other'},
];

export const primaryDrugOptionsList = [
    {label: '-none-', value: null},
    {label: 'Heroin', value: 'heroin'},
    {label: 'Methamphetamine', value: 'meth'},
    {label: 'Cocaine', value: 'cocaine'},
    // TODO: user needs to be able to click this and enter in their own custom entry
    {label: 'Other', value: 'other'},
];

export const otherDrugOptionsList = [
    {label: '-none-', value: null},
    {label: 'Heroin', value: 'heroin'},
    {label: 'Methamphetamine', value: 'meth'},
    {label: 'Cocaine', value: 'cocaine'},
    {label: 'Crack', value: 'crack'},
    {label: 'Benzos', value: 'benzos'},
    {label: 'Suboxone (not RX)', value: 'suboxone'},
    {label: 'Methadone (not RX)', value: 'methadone'},
    // TODO: user needs to be able to click this and enter in their own custom entry
    {label: 'Other', value: 'other'},
];

// Visit or Outreach ------------------------------------------------

export const referralsSelectOptionsList = [
    {label: 'No Referrals', value: null},
    {label: 'Medical attention', value: 'Medical attention'},
    {label: 'Mental health', value: 'Mental health'},
    {label: 'Other', value: 'other'},
];
export const enrollmentRadioOptions = [
    { name: 'enrollment', label: 'Enrollment', value: 'enrolled' },
    { name: 'refill', label: 'Refill', value: 'refill' },
];