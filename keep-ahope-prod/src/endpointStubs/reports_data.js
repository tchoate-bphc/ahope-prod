const rawStubContactsAllQueryCountResults = { "results": [], "count": 26 };

const rawStubEventsAllQueryCountResults = { "results": [], "count": 128 };

const rawStubEventsFilteredQueryFindResults = {
    "results": [
        {
            "objectId": "8HgNjcXa0p",
            "createdAt": "2019-01-07T17:49:56.107Z",
            "updatedAt": "2019-01-07T17:49:56.107Z",
            "ageOfFirstInjection": 1,
            "countryOfBirth": "US",
            "dateOfBirth": {
                "__type": "Date",
                "iso": "2000-01-01T05:00:00.000Z"
            },
            "date": {
                "__type": "Date",
                "iso": "2019-01-07T17:49:51.829Z"
            },
            "newContactDate": {
                "__type": "Date",
                "iso": "2018-10-10T03:57:40.036Z"
            },
            "ethnicity": "AI",
            "genderIdentity": "male",
            "isOutreach": true,
            "hispanic": true,
            "contactUidPointer": {
                "objectId": "sBXZdZTA6c",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "prof notes 2",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "XwHN2AT2Xk",
            "createdAt": "2019-01-07T23:50:38.407Z",
            "updatedAt": "2019-01-07T23:50:38.407Z",
            "date": {
                "__type": "Date",
                "iso": "2019-01-07T23:50:31.589Z"
            },
            "narcanWasOffered": true,
            "narcanWasTaken": true,
            "contactUidPointer": {
                "objectId": "sBXZdZTA6c",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "prof notes 2",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "7IcaAnijpj",
            "createdAt": "2019-01-07T23:58:34.262Z",
            "updatedAt": "2019-01-07T23:58:34.262Z",
            "syringesGiven": 10,
            "syringesTaken": 10,
            "date": {
                "__type": "Date",
                "iso": "2019-01-07T23:58:30.019Z"
            },
            "narcanWasOffered": true,
            "narcanWasTaken": true,
            "contactUidPointer": {
                "objectId": "sBXZdZTA6c",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "prof notes 2",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "alokvBucbB",
            "createdAt": "2019-01-08T00:09:39.049Z",
            "updatedAt": "2019-01-08T00:09:39.049Z",
            "syringesGiven": 40,
            "date": {
                "__type": "Date",
                "iso": "2019-01-08T00:09:35.721Z"
            },
            "narcanWasOffered": true,
            "contactUidPointer": {
                "objectId": "sBXZdZTA6c",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "prof notes 2",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "1TY6PM2Rql",
            "createdAt": "2019-01-02T17:36:46.932Z",
            "updatedAt": "2019-01-02T17:36:46.932Z",
            "syringesGiven": 20,
            "syringesTaken": 30,
            "countryOfBirth": "US",
            "otherDrugs": [
                "heroin",
                "meth"
            ],
            "dateOfBirth": {
                "__type": "Date",
                "iso": "1980-01-01T05:00:00.000Z"
            },
            "date": {
                "__type": "Date",
                "iso": "2019-01-02T17:36:40.100Z"
            },
            "newContactDate": {
                "__type": "Date",
                "iso": "2018-10-10T03:56:40.537Z"
            },
            "ethnicity": "White",
            "primaryDrug": "heroin",
            "genderIdentity": "male",
            "hivStatus": "negative",
            "hepCStatus": "neverTested",
            "housingStatus": "housed",
            "narcanWasOffered": true,
            "narcanWasTaken": true,
            "didOdLastYear": true,
            "hasHealthInsurance": true,
            "hispanic": true,
            "contactUidPointer": {
                "objectId": "mEYcjq1eih",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "prof notes",
            "healthInsurer": "BCBS",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "U5cBa9NYN0",
            "createdAt": "2019-01-07T02:46:52.363Z",
            "updatedAt": "2019-01-07T02:46:52.363Z",
            "otherDrugs": [
                "crack",
                "benzos"
            ],
            "date": {
                "__type": "Date",
                "iso": "2019-01-07T02:46:47.942Z"
            },
            "primaryDrug": "heroin",
            "hivStatus": "positive",
            "hepCStatus": "positive",
            "housingStatus": "housed",
            "isInCareForHepC": true,
            "isInCareForHiv": true,
            "didOdLastYear": true,
            "hasHealthInsurance": true,
            "contactUidPointer": {
                "objectId": "sBXZdZTA6c",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "prof notes 2",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "96WnEQFhnt",
            "createdAt": "2019-01-07T02:48:05.015Z",
            "updatedAt": "2019-01-07T02:48:05.015Z",
            "otherDrugs": [
                "crack",
                "benzos"
            ],
            "date": {
                "__type": "Date",
                "iso": "2019-01-07T02:48:01.673Z"
            },
            "primaryDrug": "heroin",
            "hivStatus": "positive",
            "hepCStatus": "positive",
            "housingStatus": "housed",
            "isInCareForHepC": true,
            "isInCareForHiv": true,
            "didOdLastYear": true,
            "hasHealthInsurance": true,
            "contactUidPointer": {
                "objectId": "sBXZdZTA6c",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "prof notes 2",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "PpHWJV3QfP",
            "createdAt": "2019-01-07T02:57:36.891Z",
            "updatedAt": "2019-01-07T02:57:36.891Z",
            "otherDrugs": [
                "crack",
                "benzos"
            ],
            "date": {
                "__type": "Date",
                "iso": "2019-01-07T02:57:33.923Z"
            },
            "primaryDrug": "heroin",
            "hivStatus": "positive",
            "hepCStatus": "positive",
            "housingStatus": "housed",
            "isInCareForHepC": true,
            "isInCareForHiv": true,
            "didOdLastYear": true,
            "hasHealthInsurance": true,
            "contactUidPointer": {
                "objectId": "sBXZdZTA6c",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "prof notes 2",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "EZaElmfU88",
            "createdAt": "2019-01-07T02:57:59.067Z",
            "updatedAt": "2019-01-07T02:57:59.067Z",
            "otherDrugs": [
                "crack",
                "benzos"
            ],
            "date": {
                "__type": "Date",
                "iso": "2019-01-07T02:57:50.162Z"
            },
            "primaryDrug": "heroin",
            "hivStatus": "positive",
            "hepCStatus": "positive",
            "housingStatus": "housed",
            "isInCareForHepC": true,
            "isInCareForHiv": true,
            "didOdLastYear": true,
            "hasHealthInsurance": true,
            "contactUidPointer": {
                "objectId": "sBXZdZTA6c",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "prof notes 2",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "UqeFGFcFHb",
            "createdAt": "2019-01-07T03:02:45.639Z",
            "updatedAt": "2019-01-07T03:02:45.639Z",
            "otherDrugs": [
                "crack",
                "benzos"
            ],
            "date": {
                "__type": "Date",
                "iso": "2019-01-07T03:02:13.451Z"
            },
            "primaryDrug": "heroin",
            "hivStatus": "positive",
            "hepCStatus": "positive",
            "housingStatus": "housed",
            "isInCareForHepC": true,
            "isInCareForHiv": true,
            "didOdLastYear": true,
            "hasHealthInsurance": true,
            "contactUidPointer": {
                "objectId": "sBXZdZTA6c",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "prof notes 2",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "Qpy0L8bc6c",
            "createdAt": "2019-01-07T03:04:20.765Z",
            "updatedAt": "2019-01-07T03:04:20.765Z",
            "otherDrugs": [
                "crack",
                "benzos"
            ],
            "date": {
                "__type": "Date",
                "iso": "2019-01-07T03:04:18.412Z"
            },
            "primaryDrug": "heroin",
            "hivStatus": "positive",
            "hepCStatus": "positive",
            "housingStatus": "housed",
            "isInCareForHepC": true,
            "isInCareForHiv": true,
            "didOdLastYear": true,
            "hasHealthInsurance": true,
            "contactUidPointer": {
                "objectId": "sBXZdZTA6c",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "prof notes 2",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "zfxRqO0PFo",
            "createdAt": "2019-01-07T03:06:33.667Z",
            "updatedAt": "2019-01-07T03:06:33.667Z",
            "otherDrugs": [
                "crack",
                "benzos"
            ],
            "date": {
                "__type": "Date",
                "iso": "2019-01-07T03:05:00.086Z"
            },
            "primaryDrug": "heroin",
            "hivStatus": "positive",
            "hepCStatus": "positive",
            "housingStatus": "housed",
            "isInCareForHepC": true,
            "isInCareForHiv": true,
            "didOdLastYear": true,
            "hasHealthInsurance": true,
            "contactUidPointer": {
                "objectId": "sBXZdZTA6c",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "prof notes 2",
            "zipCode": "02118a",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "NHGHeA49UT",
            "createdAt": "2019-01-07T03:06:39.848Z",
            "updatedAt": "2019-01-07T03:06:39.848Z",
            "otherDrugs": [
                "crack",
                "benzos"
            ],
            "date": {
                "__type": "Date",
                "iso": "2019-01-07T03:05:00.086Z"
            },
            "primaryDrug": "heroin",
            "hivStatus": "positive",
            "hepCStatus": "positive",
            "housingStatus": "housed",
            "isInCareForHepC": true,
            "isInCareForHiv": true,
            "didOdLastYear": true,
            "hasHealthInsurance": true,
            "contactUidPointer": {
                "objectId": "sBXZdZTA6c",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "prof notes 2",
            "zipCode": "02118a",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "IpPBhRPthS",
            "createdAt": "2019-01-07T03:08:36.417Z",
            "updatedAt": "2019-01-07T03:08:36.417Z",
            "otherDrugs": [
                "crack",
                "benzos"
            ],
            "date": {
                "__type": "Date",
                "iso": "2019-01-07T03:08:32.462Z"
            },
            "primaryDrug": "heroin",
            "hivStatus": "positive",
            "hepCStatus": "positive",
            "housingStatus": "housed",
            "isInCareForHepC": true,
            "isInCareForHiv": true,
            "didOdLastYear": true,
            "hasHealthInsurance": true,
            "contactUidPointer": {
                "objectId": "sBXZdZTA6c",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "prof notes 2",
            "zipCode": "02118a",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "JEuJPONI7o",
            "createdAt": "2019-01-07T03:31:23.176Z",
            "updatedAt": "2019-01-07T03:31:23.176Z",
            "ageOfFirstInjection": 1,
            "countryOfBirth": "PR",
            "otherDrugs": [
                "other",
                "benzos"
            ],
            "dateOfBirth": {
                "__type": "Date",
                "iso": "2000-01-01T05:00:00.000Z"
            },
            "date": {
                "__type": "Date",
                "iso": "2019-01-07T03:31:18.387Z"
            },
            "newContactDate": {
                "__type": "Date",
                "iso": "2018-10-10T03:57:40.036Z"
            },
            "ethnicity": "AI",
            "primaryDrug": "meth",
            "genderIdentity": "male",
            "hivStatus": "negative",
            "hepCStatus": "negative",
            "housingStatus": "homeless",
            "isInCareForHepC": true,
            "isInCareForHiv": true,
            "contactUidPointer": {
                "objectId": "sBXZdZTA6c",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "prof notes 2",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "HSlUyBHJ6Y",
            "createdAt": "2019-01-07T11:50:34.586Z",
            "updatedAt": "2019-01-07T11:50:34.586Z",
            "numberOfOthersHelping": 4,
            "date": {
                "__type": "Date",
                "iso": "2019-01-07T11:50:16.369Z"
            },
            "contactUidPointer": {
                "objectId": "sBXZdZTA6c",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "prof notes 2",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "drNxxJLwEX",
            "createdAt": "2019-01-07T17:48:14.126Z",
            "updatedAt": "2019-01-07T17:48:14.126Z",
            "syringesGiven": 10,
            "date": {
                "__type": "Date",
                "iso": "2019-01-07T17:48:07.186Z"
            },
            "contactUidPointer": {
                "objectId": "sBXZdZTA6c",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "prof notes 2",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "k2KMFyIlSi",
            "createdAt": "2019-01-08T00:14:16.451Z",
            "updatedAt": "2019-01-08T00:14:16.451Z",
            "ageOfFirstInjection": 24,
            "numberOfOthersHelping": 4,
            "syringesGiven": 10,
            "syringesTaken": 10,
            "countryOfBirth": "PR",
            "otherDrugs": [
                "other",
                "benzos",
                "meth"
            ],
            "dateOfBirth": {
                "__type": "Date",
                "iso": "1977-01-22T05:00:00.000Z"
            },
            "date": {
                "__type": "Date",
                "iso": "2019-01-08T00:14:13.935Z"
            },
            "newContactDate": {
                "__type": "Date",
                "iso": "2018-10-10T03:57:40.036Z"
            },
            "ethnicity": "HPI",
            "primaryDrug": "heroin",
            "genderIdentity": "refused",
            "hivStatus": "neverTested",
            "hepCStatus": "negative",
            "housingStatus": "housed",
            "isInCareForHepC": true,
            "isInCareForHiv": true,
            "narcanWasOffered": true,
            "narcanWasTaken": true,
            "didOdLastYear": true,
            "hasHealthInsurance": true,
            "hispanic": true,
            "contactUidPointer": {
                "objectId": "Q0x2OBm14M",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                "Medical attention"
            ],
            "eventNotes": "New event notes",
            "profileNotes": "Persistent profile notes",
            "healthInsurer": "other",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "7pvTltHdsz",
            "createdAt": "2019-01-08T00:16:26.697Z",
            "updatedAt": "2019-01-08T00:16:26.697Z",
            "ageOfFirstInjection": 24,
            "countryOfBirth": "Other",
            "otherDrugs": [
                "other",
                "benzos",
                "meth"
            ],
            "dateOfBirth": {
                "__type": "Date",
                "iso": "1977-01-22T05:00:00.000Z"
            },
            "date": {
                "__type": "Date",
                "iso": "2019-01-08T00:16:22.004Z"
            },
            "newContactDate": {
                "__type": "Date",
                "iso": "2018-12-09T23:14:48.888Z"
            },
            "ethnicity": "HPI",
            "primaryDrug": "heroin",
            "genderIdentity": "refused",
            "hivStatus": "neverTested",
            "hepCStatus": "negative",
            "housingStatus": "housed",
            "isInCareForHepC": true,
            "isInCareForHiv": true,
            "didOdLastYear": true,
            "hasHealthInsurance": true,
            "hispanic": true,
            "contactUidPointer": {
                "objectId": "Q0x2OBm14M",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "Persistent profile notes",
            "healthInsurer": "other",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "Ez4jBjrs1w",
            "createdAt": "2019-01-08T00:18:29.686Z",
            "updatedAt": "2019-01-08T00:18:29.686Z",
            "ageOfFirstInjection": 37,
            "countryOfBirth": "PR",
            "otherDrugs": [
                "other",
                "benzos",
                "meth"
            ],
            "dateOfBirth": {
                "__type": "Date",
                "iso": "1977-01-22T05:00:00.000Z"
            },
            "date": {
                "__type": "Date",
                "iso": "2019-01-08T00:18:25.130Z"
            },
            "newContactDate": {
                "__type": "Date",
                "iso": "2018-12-09T23:14:48.888Z"
            },
            "ethnicity": "HPI",
            "primaryDrug": "heroin",
            "genderIdentity": "refused",
            "hivStatus": "neverTested",
            "hepCStatus": "negative",
            "housingStatus": "housed",
            "isInCareForHepC": true,
            "isInCareForHiv": true,
            "didOdLastYear": true,
            "hasHealthInsurance": true,
            "hispanic": true,
            "contactUidPointer": {
                "objectId": "Q0x2OBm14M",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "Persistent profile notes",
            "healthInsurer": "other",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "ECLafbMD6h",
            "createdAt": "2019-01-08T00:44:50.095Z",
            "updatedAt": "2019-01-08T00:44:50.095Z",
            "otherDrugs": [
                "heroin",
                "meth"
            ],
            "dateOfBirth": {
                "__type": "Date",
                "iso": "1980-01-01T05:00:00.000Z"
            },
            "date": {
                "__type": "Date",
                "iso": "2019-01-08T00:44:46.022Z"
            },
            "newContactDate": {
                "__type": "Date",
                "iso": "2018-10-10T03:56:40.537Z"
            },
            "ethnicity": "White",
            "primaryDrug": "heroin",
            "genderIdentity": "male",
            "hivStatus": "negative",
            "hepCStatus": "neverTested",
            "housingStatus": "housed",
            "didOdLastYear": true,
            "hasHealthInsurance": true,
            "hispanic": true,
            "contactUidPointer": {
                "objectId": "mEYcjq1eih",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "prof notes",
            "healthInsurer": "BCBS",
            "zipCode": "02118",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "D9i4lL8B2w",
            "createdAt": "2019-01-08T01:18:09.421Z",
            "updatedAt": "2019-01-08T01:18:09.421Z",
            "ageOfFirstInjection": 24,
            "numberOfOthersHelping": 4,
            "syringesGiven": 10,
            "syringesTaken": 10,
            "countryOfBirth": "PR",
            "dateOfBirth": {
                "__type": "Date",
                "iso": "1987-01-09T05:00:00.000Z"
            },
            "date": {
                "__type": "Date",
                "iso": "2019-01-08T01:18:06.640Z"
            },
            "newContactDate": {
                "__type": "Date",
                "iso": "2018-10-10T03:56:40.537Z"
            },
            "ethnicity": "BAA",
            "genderIdentity": "female",
            "isOutreach": true,
            "narcanWasOffered": true,
            "narcanWasTaken": true,
            "hispanic": true,
            "contactUidPointer": {
                "objectId": "mEYcjq1eih",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                "Medical attention"
            ],
            "eventNotes": "First event notes",
            "profileNotes": "Profile Notes",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "Tnb5F5gvLw",
            "createdAt": "2019-01-08T02:17:13.617Z",
            "updatedAt": "2019-01-08T02:17:13.617Z",
            "dateOfBirth": {
                "__type": "Date",
                "iso": "1981-01-15T05:00:00.000Z"
            },
            "date": {
                "__type": "Date",
                "iso": "2019-01-08T02:17:03.635Z"
            },
            "newContactDate": {
                "__type": "Date",
                "iso": "2019-01-08T02:17:03.636Z"
            },
            "ethnicity": "White",
            "genderIdentity": "male",
            "hispanic": true,
            "contactUidPointer": {
                "objectId": "ufyJfuHLO1",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "aFBGkfIHn0",
            "createdAt": "2019-01-08T02:18:35.598Z",
            "updatedAt": "2019-01-08T02:18:35.598Z",
            "dateOfBirth": {
                "__type": "Date",
                "iso": "1982-01-15T05:00:00.000Z"
            },
            "date": {
                "__type": "Date",
                "iso": "2019-01-08T02:18:25.430Z"
            },
            "newContactDate": {
                "__type": "Date",
                "iso": "2019-01-08T02:18:25.430Z"
            },
            "ethnicity": "White",
            "genderIdentity": "male",
            "hispanic": true,
            "contactUidPointer": {
                "objectId": "ufyJfuHLO1",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "eLXL6tiEIP",
            "createdAt": "2019-01-08T02:39:52.059Z",
            "updatedAt": "2019-01-08T02:39:52.059Z",
            "ageOfFirstInjection": 35,
            "dateOfBirth": {
                "__type": "Date",
                "iso": "1979-01-11T05:00:00.000Z"
            },
            "date": {
                "__type": "Date",
                "iso": "2019-01-08T02:39:46.988Z"
            },
            "newContactDate": {
                "__type": "Date",
                "iso": "2019-01-08T02:39:46.988Z"
            },
            "ethnicity": "White",
            "genderIdentity": "male",
            "hispanic": true,
            "contactUidPointer": {
                "objectId": "p0Gn4gAE9N",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "5VkdM1DLW2",
            "createdAt": "2019-01-08T02:40:47.742Z",
            "updatedAt": "2019-01-08T02:40:47.742Z",
            "ageOfFirstInjection": 35,
            "dateOfBirth": {
                "__type": "Date",
                "iso": "1981-01-23T05:00:00.000Z"
            },
            "date": {
                "__type": "Date",
                "iso": "2019-01-08T02:40:41.694Z"
            },
            "newContactDate": {
                "__type": "Date",
                "iso": "2019-01-08T02:39:51.783Z"
            },
            "ethnicity": "White",
            "genderIdentity": "male",
            "hispanic": true,
            "contactUidPointer": {
                "objectId": "hZmh3YWdLW",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "qvEqSS8k8T",
            "createdAt": "2019-01-08T02:41:16.231Z",
            "updatedAt": "2019-01-08T02:41:16.231Z",
            "ageOfFirstInjection": 35,
            "dateOfBirth": {
                "__type": "Date",
                "iso": "1979-01-12T05:00:00.000Z"
            },
            "date": {
                "__type": "Date",
                "iso": "2019-01-08T02:41:08.977Z"
            },
            "newContactDate": {
                "__type": "Date",
                "iso": "2019-01-08T02:40:47.374Z"
            },
            "ethnicity": "White",
            "genderIdentity": "male",
            "hispanic": true,
            "contactUidPointer": {
                "objectId": "W8dSvoyZSX",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "aG3OtVtNFV",
            "createdAt": "2019-01-08T02:42:56.992Z",
            "updatedAt": "2019-01-08T02:42:56.992Z",
            "dateOfBirth": {
                "__type": "Date",
                "iso": "1982-01-23T05:00:00.000Z"
            },
            "date": {
                "__type": "Date",
                "iso": "2019-01-08T02:42:53.672Z"
            },
            "newContactDate": {
                "__type": "Date",
                "iso": "2019-01-08T02:42:53.672Z"
            },
            "ethnicity": "White",
            "genderIdentity": "male",
            "hispanic": true,
            "contactUidPointer": {
                "objectId": "BUvX22koIr",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "8NrFlbwi2i",
            "createdAt": "2019-01-08T02:51:42.554Z",
            "updatedAt": "2019-01-08T02:51:42.554Z",
            "date": {
                "__type": "Date",
                "iso": "2019-01-08T02:51:20.101Z"
            },
            "contactUidPointer": {
                "objectId": "SmN8atDCX7",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "qxRrFSflMg",
            "createdAt": "2019-01-08T02:52:10.834Z",
            "updatedAt": "2019-01-08T02:52:10.834Z",
            "syringesGiven": 10,
            "syringesTaken": 20,
            "otherDrugs": [
                null
            ],
            "dateOfBirth": {
                "__type": "Date",
                "iso": "1980-01-01T05:00:00.000Z"
            },
            "date": {
                "__type": "Date",
                "iso": "2019-01-08T02:52:07.540Z"
            },
            "newContactDate": {
                "__type": "Date",
                "iso": "2019-01-08T02:52:07.540Z"
            },
            "ethnicity": "White",
            "genderIdentity": "male",
            "hivStatus": "neverTested",
            "hepCStatus": "neverTested",
            "housingStatus": "homeless",
            "narcanWasOffered": true,
            "narcanWasTaken": true,
            "didOdLastYear": true,
            "hispanic": true,
            "contactUidPointer": {
                "objectId": "bAFZg2Pnr3",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "zipCode": "02118",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "eUdpBD1sbN",
            "createdAt": "2019-01-08T02:52:39.653Z",
            "updatedAt": "2019-01-08T02:52:39.653Z",
            "otherDrugs": [
                null
            ],
            "dateOfBirth": {
                "__type": "Date",
                "iso": "1980-01-01T05:00:00.000Z"
            },
            "date": {
                "__type": "Date",
                "iso": "2019-01-08T02:52:36.181Z"
            },
            "newContactDate": {
                "__type": "Date",
                "iso": "2019-01-08T02:52:36.181Z"
            },
            "ethnicity": "White",
            "genderIdentity": "male",
            "hivStatus": "neverTested",
            "hepCStatus": "neverTested",
            "housingStatus": "homeless",
            "didOdLastYear": true,
            "hispanic": true,
            "contactUidPointer": {
                "objectId": "m3v5sKEBeL",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "zipCode": "02118",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "XO32r6g4pM",
            "createdAt": "2019-01-08T03:02:36.382Z",
            "updatedAt": "2019-01-08T03:02:36.382Z",
            "date": {
                "__type": "Date",
                "iso": "2019-01-08T03:02:33.752Z"
            },
            "contactUidPointer": {
                "objectId": "BXLXtAUf2U",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "Dru4F4Ps7t",
            "createdAt": "2019-01-08T03:12:52.050Z",
            "updatedAt": "2019-01-08T03:12:52.050Z",
            "ageOfFirstInjection": 1,
            "otherDrugs": [
                "other",
                "benzos"
            ],
            "dateOfBirth": {
                "__type": "Date",
                "iso": "2000-01-01T05:00:00.000Z"
            },
            "date": {
                "__type": "Date",
                "iso": "2019-01-08T03:12:48.222Z"
            },
            "newContactDate": {
                "__type": "Date",
                "iso": "2018-10-10T03:57:40.036Z"
            },
            "ethnicity": "AI",
            "primaryDrug": "meth",
            "genderIdentity": "male",
            "hivStatus": "negative",
            "hepCStatus": "negative",
            "housingStatus": "homeless",
            "isInCareForHepC": true,
            "isInCareForHiv": true,
            "didOdLastYear": true,
            "hasHealthInsurance": true,
            "hispanic": true,
            "contactUidPointer": {
                "objectId": "sBXZdZTA6c",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "prof notes 2",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "leaPj2VH2P",
            "createdAt": "2019-01-08T13:53:06.689Z",
            "updatedAt": "2019-01-08T13:53:06.689Z",
            "dateOfBirth": {
                "__type": "Date",
                "iso": "1979-01-11T05:00:00.000Z"
            },
            "date": {
                "__type": "Date",
                "iso": "2019-01-08T13:53:01.003Z"
            },
            "newContactDate": {
                "__type": "Date",
                "iso": "2019-01-08T13:53:01.003Z"
            },
            "ethnicity": "White",
            "genderIdentity": "male",
            "hispanic": true,
            "contactUidPointer": {
                "objectId": "Ih9LkP3aa7",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "mLnckH1xdY",
            "createdAt": "2019-01-08T13:56:51.883Z",
            "updatedAt": "2019-01-08T13:56:51.883Z",
            "ageOfFirstInjection": 51,
            "numberOfOthersHelping": 6,
            "syringesGiven": 20,
            "syringesTaken": 20,
            "countryOfBirth": "US",
            "otherDrugs": [
                "meth",
                "cocaine",
                "benzos",
                "crack"
            ],
            "dateOfBirth": {
                "__type": "Date",
                "iso": "1980-01-01T05:00:00.000Z"
            },
            "date": {
                "__type": "Date",
                "iso": "2019-01-08T13:56:49.797Z"
            },
            "newContactDate": {
                "__type": "Date",
                "iso": "2019-01-08T13:56:49.797Z"
            },
            "ethnicity": "White",
            "primaryDrug": "cocaine",
            "genderIdentity": "male",
            "hivStatus": "neverTested",
            "hepCStatus": "neverTested",
            "housingStatus": "homeless",
            "isOutreach": true,
            "narcanWasOffered": true,
            "didOdLastYear": true,
            "hispanic": true,
            "contactUidPointer": {
                "objectId": "tRTv4Xrd9n",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "eventNotes": "Event notes",
            "profileNotes": "Profile Notes",
            "zipCode": "02118",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "dj8KsDtqOp",
            "createdAt": "2019-01-08T14:02:34.414Z",
            "updatedAt": "2019-01-08T14:02:34.414Z",
            "otherDrugs": [
                null
            ],
            "dateOfBirth": {
                "__type": "Date",
                "iso": "1980-01-01T05:00:00.000Z"
            },
            "date": {
                "__type": "Date",
                "iso": "2019-01-08T14:02:00.832Z"
            },
            "newContactDate": {
                "__type": "Date",
                "iso": "2019-01-08T14:02:00.832Z"
            },
            "ethnicity": "White",
            "genderIdentity": "male",
            "hispanic": true,
            "contactUidPointer": {
                "objectId": "kqralpNyEy",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "zipCode": "02118",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "S36576Yta9",
            "createdAt": "2019-01-08T14:03:22.741Z",
            "updatedAt": "2019-01-08T14:03:22.741Z",
            "otherDrugs": [
                null
            ],
            "dateOfBirth": {
                "__type": "Date",
                "iso": "1980-01-01T05:00:00.000Z"
            },
            "date": {
                "__type": "Date",
                "iso": "2019-01-08T14:03:15.682Z"
            },
            "newContactDate": {
                "__type": "Date",
                "iso": "2019-01-08T14:03:15.682Z"
            },
            "contactUidPointer": {
                "objectId": "Df9GPcIduV",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "PYZWoyQlxe",
            "createdAt": "2019-01-08T17:45:33.355Z",
            "updatedAt": "2019-01-08T17:45:33.355Z",
            "syringesGiven": 20,
            "syringesTaken": 10,
            "otherDrugs": [
                "heroin",
                "meth",
                "benzos",
                "crack"
            ],
            "date": {
                "__type": "Date",
                "iso": "2019-01-08T17:45:06.986Z"
            },
            "primaryDrug": "heroin",
            "hivStatus": "negative",
            "hepCStatus": "neverTested",
            "housingStatus": "housed",
            "narcanWasOffered": true,
            "narcanWasTaken": true,
            "didOdLastYear": true,
            "hasHealthInsurance": true,
            "contactUidPointer": {
                "objectId": "mEYcjq1eih",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "eventNotes": "Event notes during demo",
            "profileNotes": "Profile Notes",
            "healthInsurer": "BCBS",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "jdOdWS0y0T",
            "createdAt": "2019-01-08T17:57:41.311Z",
            "updatedAt": "2019-01-08T17:57:41.311Z",
            "ageOfFirstInjection": 16,
            "numberOfOthersHelping": 3,
            "syringesGiven": 10,
            "syringesTaken": 10,
            "countryOfBirth": "Other",
            "otherDrugs": [
                "crack",
                "meth"
            ],
            "dateOfBirth": {
                "__type": "Date",
                "iso": "1980-01-01T05:00:00.000Z"
            },
            "date": {
                "__type": "Date",
                "iso": "2019-01-08T17:57:13.228Z"
            },
            "newContactDate": {
                "__type": "Date",
                "iso": "2019-01-08T17:57:13.228Z"
            },
            "primaryDrug": "heroin",
            "genderIdentity": "female",
            "hivStatus": "negative",
            "hepCStatus": "positive",
            "isInCareForHepC": true,
            "narcanWasOffered": true,
            "didOdLastYear": true,
            "hasHealthInsurance": true,
            "contactUidPointer": {
                "objectId": "tsHIw1CnKD",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "eventNotes": "spoke to SRMC wants HCV treatment appt gia 1/9",
            "profileNotes": "ALERT",
            "healthInsurer": "MH",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "5cyfoVol4v",
            "createdAt": "2019-01-08T17:59:38.992Z",
            "updatedAt": "2019-01-08T17:59:38.992Z",
            "numberOfOthersHelping": 12,
            "date": {
                "__type": "Date",
                "iso": "2019-01-07T05:00:00.000Z"
            },
            "contactUidPointer": {
                "objectId": "tsHIw1CnKD",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "ALERT",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "R7Er7o89Qv",
            "createdAt": "2019-01-08T18:40:15.413Z",
            "updatedAt": "2019-01-08T18:40:15.413Z",
            "ageOfFirstInjection": 16,
            "numberOfOthersHelping": 2,
            "syringesGiven": 10,
            "syringesTaken": 10,
            "countryOfBirth": "US",
            "otherDrugs": [
                "methadone"
            ],
            "dateOfBirth": {
                "__type": "Date",
                "iso": "1980-01-01T05:00:00.000Z"
            },
            "date": {
                "__type": "Date",
                "iso": "2019-01-08T18:40:10.368Z"
            },
            "newContactDate": {
                "__type": "Date",
                "iso": "2019-01-08T18:40:10.368Z"
            },
            "ethnicity": "Other",
            "primaryDrug": "other",
            "genderIdentity": "male",
            "hivStatus": "neverTested",
            "hepCStatus": "negative",
            "housingStatus": "homeless",
            "isOutreach": true,
            "hispanic": true,
            "contactUidPointer": {
                "objectId": "pNQtEtOPCe",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "eventNotes": "Testing event notes by bphc",
            "profileNotes": "testing profile notes by bphc",
            "zipCode": "02118",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "3YsfRMa71f",
            "createdAt": "2019-01-08T18:51:07.104Z",
            "updatedAt": "2019-01-08T18:51:07.104Z",
            "ageOfFirstInjection": 18,
            "numberOfOthersHelping": 2,
            "syringesGiven": 10,
            "syringesTaken": 10,
            "countryOfBirth": "US",
            "otherDrugs": [
                "benzos"
            ],
            "dateOfBirth": {
                "__type": "Date",
                "iso": "1991-11-29T05:00:00.000Z"
            },
            "date": {
                "__type": "Date",
                "iso": "2019-01-08T18:51:00.821Z"
            },
            "newContactDate": {
                "__type": "Date",
                "iso": "2019-01-08T18:51:00.821Z"
            },
            "ethnicity": "White",
            "primaryDrug": "heroin",
            "genderIdentity": "female",
            "hivStatus": "negative",
            "hepCStatus": "negative",
            "housingStatus": "housed",
            "narcanWasOffered": true,
            "narcanWasTaken": true,
            "hasHealthInsurance": true,
            "contactUidPointer": {
                "objectId": "qOaAyzmqYc",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "healthInsurer": "other",
            "zipCode": "02130",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "8G9FpVYNh8",
            "createdAt": "2019-01-08T18:53:07.029Z",
            "updatedAt": "2019-01-08T18:53:07.029Z",
            "syringesGiven": 10,
            "syringesTaken": 10,
            "date": {
                "__type": "Date",
                "iso": "2019-01-08T18:53:04.806Z"
            },
            "isOutreach": true,
            "narcanWasOffered": true,
            "narcanWasTaken": true,
            "contactUidPointer": {
                "objectId": "qOaAyzmqYc",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "Hcv appt 1/9 2 pm",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "08ROapUD0k",
            "createdAt": "2019-01-08T19:04:41.894Z",
            "updatedAt": "2019-01-08T19:04:41.894Z",
            "otherDrugs": [
                "benzos"
            ],
            "date": {
                "__type": "Date",
                "iso": "2019-01-08T18:55:31.826Z"
            },
            "primaryDrug": "heroin",
            "hivStatus": "negative",
            "hepCStatus": "negative",
            "housingStatus": "housed",
            "hasHealthInsurance": true,
            "contactUidPointer": {
                "objectId": "qOaAyzmqYc",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "Hcv appt 1/9 2 pm",
            "healthInsurer": "other",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "Hk8vurGhjk",
            "createdAt": "2019-01-08T19:15:02.420Z",
            "updatedAt": "2019-01-08T19:15:02.420Z",
            "numberOfOthersHelping": 3,
            "syringesGiven": 10,
            "syringesTaken": 10,
            "date": {
                "__type": "Date",
                "iso": "2019-01-08T19:11:08.973Z"
            },
            "isOutreach": true,
            "narcanWasOffered": true,
            "narcanWasTaken": true,
            "contactUidPointer": {
                "objectId": "qOaAyzmqYc",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "Hcv appt 1/9 2 pm",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "NpLQdsZ8LF",
            "createdAt": "2019-01-08T19:15:02.996Z",
            "updatedAt": "2019-01-08T19:15:02.996Z",
            "numberOfOthersHelping": 3,
            "syringesGiven": 10,
            "syringesTaken": 10,
            "date": {
                "__type": "Date",
                "iso": "2019-01-08T19:11:08.973Z"
            },
            "isOutreach": true,
            "narcanWasOffered": true,
            "narcanWasTaken": true,
            "contactUidPointer": {
                "objectId": "qOaAyzmqYc",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "Hcv appt 1/9 2 pm",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "9urjuzptMz",
            "createdAt": "2019-01-08T19:21:06.247Z",
            "updatedAt": "2019-01-08T19:21:06.247Z",
            "numberOfOthersHelping": 3,
            "syringesGiven": 10,
            "syringesTaken": 10,
            "date": {
                "__type": "Date",
                "iso": "2019-01-08T19:20:43.481Z"
            },
            "isOutreach": true,
            "narcanWasOffered": true,
            "narcanWasTaken": true,
            "contactUidPointer": {
                "objectId": "qOaAyzmqYc",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "Hcv appt 1/9 2 pm",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "mjLy8U6leo",
            "createdAt": "2019-01-08T19:22:48.306Z",
            "updatedAt": "2019-01-08T19:22:48.306Z",
            "syringesGiven": 10,
            "date": {
                "__type": "Date",
                "iso": "2019-01-08T19:22:24.469Z"
            },
            "narcanWasOffered": true,
            "contactUidPointer": {
                "objectId": "qOaAyzmqYc",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "ATTENDED HCV APPT",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "GVghlBiGUJ",
            "createdAt": "2019-01-08T21:11:06.105Z",
            "updatedAt": "2019-01-08T21:11:06.105Z",
            "numberOfOthersHelping": 2,
            "syringesGiven": 20,
            "syringesTaken": 10,
            "otherDrugs": [
                null
            ],
            "dateOfBirth": {
                "__type": "Date",
                "iso": "1980-01-01T05:00:00.000Z"
            },
            "date": {
                "__type": "Date",
                "iso": "2019-01-08T21:10:41.871Z"
            },
            "newContactDate": {
                "__type": "Date",
                "iso": "2019-01-08T21:10:41.871Z"
            },
            "primaryDrug": "heroin",
            "isOutreach": true,
            "narcanWasOffered": true,
            "narcanWasTaken": true,
            "didOdLastYear": true,
            "hasHealthInsurance": true,
            "contactUidPointer": {
                "objectId": "patleOdXtU",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                "Medical attention",
                "Mental health",
                "Other"
            ],
            "healthInsurer": "TF",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "DlAdSXF6co",
            "createdAt": "2019-01-09T13:28:31.833Z",
            "updatedAt": "2019-01-09T13:28:31.833Z",
            "syringesGiven": 10,
            "otherDrugs": [
                "crack",
                "meth"
            ],
            "date": {
                "__type": "Date",
                "iso": "2019-01-09T13:28:24.170Z"
            },
            "primaryDrug": "heroin",
            "hivStatus": "negative",
            "hepCStatus": "positive",
            "housingStatus": "homeless",
            "isInCareForHepC": true,
            "narcanWasOffered": true,
            "didOdLastYear": true,
            "hasHealthInsurance": true,
            "contactUidPointer": {
                "objectId": "tsHIw1CnKD",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "ALERT",
            "healthInsurer": "MH",
            "zipCode": "02118",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "5TSOknS1ty",
            "createdAt": "2019-01-09T13:43:51.396Z",
            "updatedAt": "2019-01-09T13:43:51.396Z",
            "countryOfBirth": "US",
            "otherDrugs": [
                "cocaine",
                "suboxone"
            ],
            "dateOfBirth": {
                "__type": "Date",
                "iso": "1980-01-01T05:00:00.000Z"
            },
            "date": {
                "__type": "Date",
                "iso": "2019-01-09T13:43:32.728Z"
            },
            "newContactDate": {
                "__type": "Date",
                "iso": "2019-01-09T13:43:32.728Z"
            },
            "ethnicity": "White",
            "primaryDrug": "heroin",
            "genderIdentity": "female",
            "hivStatus": "negative",
            "hepCStatus": "negative",
            "housingStatus": "housed",
            "didOdLastYear": true,
            "hasHealthInsurance": true,
            "contactUidPointer": {
                "objectId": "3YFLCdB7NF",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "healthInsurer": "BCBS",
            "zipCode": "02118",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "KnXCLhddVr",
            "createdAt": "2019-01-13T22:24:13.470Z",
            "updatedAt": "2019-01-13T22:24:13.470Z",
            "otherDrugs": [
                "other",
                "another,using,commas and spaces"
            ],
            "date": {
                "__type": "Date",
                "iso": "2019-01-13T22:24:08.343Z"
            },
            "primaryDrug": "other",
            "hivStatus": "negative",
            "hepCStatus": "negative",
            "housingStatus": "unstable",
            "contactUidPointer": {
                "objectId": "BiRCZ7YBmk",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "Prof notes",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "2Zj6IOxn3N",
            "createdAt": "2019-01-13T22:39:16.647Z",
            "updatedAt": "2019-01-13T22:39:16.647Z",
            "otherDrugs": [
                "other",
                "another,using,commas and spaces"
            ],
            "date": {
                "__type": "Date",
                "iso": "2019-01-13T22:39:10.647Z"
            },
            "primaryDrug": "new drug",
            "hivStatus": "negative",
            "hepCStatus": "negative",
            "housingStatus": "unstable",
            "contactUidPointer": {
                "objectId": "BiRCZ7YBmk",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                "other",
                "asdf"
            ],
            "profileNotes": "Prof notes",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "yN7TpqTOvk",
            "createdAt": "2019-01-30T14:38:10.899Z",
            "updatedAt": "2019-01-30T14:38:10.899Z",
            "numberOfOthersHelping": 12,
            "syringesGiven": 10,
            "countryOfBirth": "Other",
            "otherDrugs": [
                "other"
            ],
            "dateOfBirth": {
                "__type": "Date",
                "iso": "1991-10-25T04:00:00.000Z"
            },
            "date": {
                "__type": "Date",
                "iso": "2019-01-30T14:37:15.006Z"
            },
            "newContactDate": {
                "__type": "Date",
                "iso": "2019-01-30T14:37:15.006Z"
            },
            "ethnicity": "White",
            "primaryDrug": "other",
            "genderIdentity": "ftm",
            "hivStatus": "negative",
            "hepCStatus": "negative",
            "housingStatus": "housed",
            "isOutreach": true,
            "narcanWasOffered": true,
            "hasHealthInsurance": true,
            "contactUidPointer": {
                "objectId": "VgFD7sYxdN",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                "Other"
            ],
            "profileNotes": "this kid is weird af",
            "healthInsurer": "NHP",
            "zipCode": "02215",
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "NZdx5H7gyG",
            "createdAt": "2019-02-10T20:18:44.351Z",
            "updatedAt": "2019-02-10T20:18:44.351Z",
            "otherDrugs": [
                "other",
                "another,using,commas and spaces"
            ],
            "date": {
                "__type": "Date",
                "iso": "2019-02-10T20:18:41.836Z"
            },
            "primaryDrug": "new drug",
            "hivStatus": "negative",
            "hepCStatus": "negative",
            "housingStatus": "homeless",
            "contactUidPointer": {
                "objectId": "BiRCZ7YBmk",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "eventNotes": "event notes",
            "profileNotes": "Prof notes",
            "contactGivesDataConsent": true,
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "LVNGcwV7bW",
            "createdAt": "2019-02-10T20:19:45.280Z",
            "updatedAt": "2019-02-10T20:19:45.280Z",
            "numberOfOthersHelping": 6,
            "otherDrugs": [
                "other",
                "another,using,commas and spaces"
            ],
            "date": {
                "__type": "Date",
                "iso": "2019-02-10T20:19:32.300Z"
            },
            "primaryDrug": "new drug",
            "hivStatus": "negative",
            "hepCStatus": "negative",
            "housingStatus": "homeless",
            "contactUidPointer": {
                "objectId": "BiRCZ7YBmk",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "Prof notes",
            "contactGivesDataConsent": true,
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "KdYxdan1dh",
            "createdAt": "2019-02-10T20:20:00.747Z",
            "updatedAt": "2019-02-10T20:20:00.747Z",
            "otherDrugs": [
                "other",
                "another,using,commas and spaces"
            ],
            "date": {
                "__type": "Date",
                "iso": "2019-02-10T20:19:57.804Z"
            },
            "primaryDrug": "new drug",
            "hivStatus": "negative",
            "hepCStatus": "negative",
            "housingStatus": "homeless",
            "contactUidPointer": {
                "objectId": "BiRCZ7YBmk",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "eventNotes": "adsf",
            "profileNotes": "Prof notes",
            "contactGivesDataConsent": true,
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "eQSC7MhV30",
            "createdAt": "2019-02-10T20:20:22.657Z",
            "updatedAt": "2019-02-10T20:20:22.657Z",
            "otherDrugs": [
                "other",
                "another,using,commas and spaces"
            ],
            "date": {
                "__type": "Date",
                "iso": "2019-02-10T20:20:20.678Z"
            },
            "primaryDrug": "new drug",
            "hivStatus": "negative",
            "hepCStatus": "negative",
            "housingStatus": "homeless",
            "contactUidPointer": {
                "objectId": "BiRCZ7YBmk",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "eventNotes": "asdf",
            "profileNotes": "Prof notes",
            "contactGivesDataConsent": true,
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "e1xNw3nglC",
            "createdAt": "2019-02-27T14:57:42.775Z",
            "updatedAt": "2019-02-27T14:57:42.775Z",
            "otherDrugs": [
                "other",
                "another,using,commas and spaces"
            ],
            "date": {
                "__type": "Date",
                "iso": "2019-02-27T14:57:31.972Z"
            },
            "primaryDrug": "some drugtest",
            "hivStatus": "negative",
            "hepCStatus": "negative",
            "housingStatus": "homeless",
            "contactUidPointer": {
                "objectId": "BiRCZ7YBmk",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "Prof notes",
            "contactGivesDataConsent": true,
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "JcEmmEGM5V",
            "createdAt": "2019-04-06T20:35:44.825Z",
            "updatedAt": "2019-04-06T20:35:44.825Z",
            "otherDrugs": [
                "other",
                "another,using,commas and spaces"
            ],
            "date": {
                "__type": "Date",
                "iso": "2019-04-06T20:35:41.082Z"
            },
            "primaryDrug": "new drug",
            "hivStatus": "negative",
            "hepCStatus": "negative",
            "housingStatus": "homeless",
            "contactUidPointer": {
                "objectId": "BiRCZ7YBmk",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "Prof notes",
            "contactGivesDataConsent": true,
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "JpapPyX5G4",
            "createdAt": "2019-04-07T00:56:55.555Z",
            "updatedAt": "2019-04-07T00:56:55.555Z",
            "numberOfOthersHelping": 3,
            "otherDrugs": [
                null
            ],
            "dateOfBirth": {
                "__type": "Date",
                "iso": "1999-12-31T05:00:00.000Z"
            },
            "date": {
                "__type": "Date",
                "iso": "2019-04-07T00:56:49.486Z"
            },
            "newContactDate": {
                "__type": "Date",
                "iso": "2019-04-07T00:56:49.486Z"
            },
            "contactUidPointer": {
                "objectId": "RDSDPwaqsm",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "contactGivesDataConsent": true,
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "2TmbPbVgjp",
            "createdAt": "2019-04-14T21:39:32.841Z",
            "updatedAt": "2019-04-14T21:39:32.841Z",
            "numberOfOthersHelping": 5,
            "syringesGiven": 20,
            "syringesTaken": 20,
            "otherDrugs": [
                null
            ],
            "date": {
                "__type": "Date",
                "iso": "2019-04-14T21:39:27.686Z"
            },
            "primaryDrug": "meth",
            "isOutreach": true,
            "didOdLastYear": true,
            "hasHealthInsurance": true,
            "contactUidPointer": {
                "objectId": "patleOdXtU",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                "Medical attention"
            ],
            "profileNotes": "some profile notes",
            "healthInsurer": "TF",
            "contactGivesDataConsent": true,
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "EDhmBMN4ub",
            "createdAt": "2019-05-23T17:10:18.004Z",
            "updatedAt": "2019-05-23T17:10:18.004Z",
            "ageOfFirstInjection": 20,
            "syringesGiven": 10,
            "countryOfBirth": "US",
            "otherDrugs": [
                "meth",
                "crack",
                "benzos"
            ],
            "dateOfBirth": {
                "__type": "Date",
                "iso": "1990-11-19T05:00:00.000Z"
            },
            "date": {
                "__type": "Date",
                "iso": "2019-05-23T17:10:09.244Z"
            },
            "newContactDate": {
                "__type": "Date",
                "iso": "2019-05-23T17:10:09.244Z"
            },
            "ethnicity": "White",
            "primaryDrug": "heroin",
            "genderIdentity": "female",
            "hivStatus": "negative",
            "hepCStatus": "negative",
            "housingStatus": "housed",
            "narcanWasOffered": true,
            "didOdLastYear": true,
            "hasHealthInsurance": true,
            "contactUidPointer": {
                "objectId": "voG12ckKL1",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                "Medical attention"
            ],
            "healthInsurer": "MH",
            "zipCode": "01230",
            "contactGivesDataConsent": true,
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        },
        {
            "objectId": "fPFo6LMe9P",
            "createdAt": "2019-05-23T17:19:52.953Z",
            "updatedAt": "2019-05-23T17:19:52.953Z",
            "ageOfFirstInjection": 17,
            "syringesGiven": 10,
            "countryOfBirth": "US",
            "otherDrugs": [
                "crack"
            ],
            "dateOfBirth": {
                "__type": "Date",
                "iso": "1993-09-14T04:00:00.000Z"
            },
            "date": {
                "__type": "Date",
                "iso": "2019-05-23T17:19:47.754Z"
            },
            "newContactDate": {
                "__type": "Date",
                "iso": "2019-05-23T17:19:47.754Z"
            },
            "ethnicity": "White",
            "primaryDrug": "heroin",
            "genderIdentity": "female",
            "hivStatus": "negative",
            "hepCStatus": "negative",
            "housingStatus": "homeless",
            "narcanWasOffered": true,
            "narcanWasTaken": true,
            "didOdLastYear": true,
            "hasHealthInsurance": true,
            "contactUidPointer": {
                "objectId": "qfPTcnNc2o",
                "__type": "Pointer",
                "className": "contacts"
            },
            "referrals": [
                null
            ],
            "profileNotes": "Referred for hepC appt tomorrow",
            "healthInsurer": "MH",
            "zipCode": "02118",
            "contactGivesDataConsent": true,
            "uid": {
                "__type": "Relation",
                "className": "contacts"
            }
        }
    ]
};

const rawStubContactsFilteredQueryFindResults = { "results": [{ "objectId": "BiRCZ7YBmk", "createdAt": "2018-10-10T03:56:51.036Z", "updatedAt": "2019-04-06T20:35:44.551Z", "ethnicity": "HPI", "genderIdentity": "female", "uid": "aaaa236889aaa__FAKE", "dateOfBirth": { "__type": "Date", "iso": "2017-10-08T03:56:50.757Z" }, "hispanic": false, "dateOfLastVisit": { "__type": "Date", "iso": "2019-04-06T20:35:41.082Z" }, "ageOfFirstInjection": 50, "countryOfBirth": "PR", "primaryDrug": "new drug", "hivStatus": "negative", "hepCStatus": "negative", "housingStatus": "homeless", "otherDrugsAggregate": ["other", "another,using,commas and spaces", "new drug", "some drugtest", "crack", "meth"], "profileNotes": "Prof notes", "otherDrugs": ["other", "another,using,commas and spaces"], "syringesGivenAggregate": 90, "contactGivesDataConsent": true }, { "objectId": "pNQtEtOPCe", "createdAt": "2019-01-08T18:40:15.212Z", "updatedAt": "2019-01-08T18:40:15.212Z", "ethnicity": "Other", "genderIdentity": "male", "uid": "bphc101010six", "dateOfBirth": { "__type": "Date", "iso": "1980-01-01T05:00:00.000Z" }, "hispanic": true, "dateOfLastVisit": { "__type": "Date", "iso": "2019-01-08T18:40:10.368Z" }, "ageOfFirstInjection": 16, "countryOfBirth": "US", "primaryDrug": "other", "hivStatus": "neverTested", "hepCStatus": "negative", "housingStatus": "homeless", "otherDrugsAggregate": ["methadone", "other"], "profileNotes": "testing profile notes by bphc", "otherDrugs": ["methadone"], "syringesGivenAggregate": 10, "syringesTakenAggregate": 10, "zipCode": "02118" }, { "objectId": "RDSDPwaqsm", "createdAt": "2019-04-07T00:56:55.333Z", "updatedAt": "2019-04-07T00:56:55.333Z", "uid": "ABCD123199AAA", "dateOfBirth": { "__type": "Date", "iso": "1999-12-31T05:00:00.000Z" }, "dateOfLastVisit": { "__type": "Date", "iso": "2019-04-07T00:56:49.486Z" }, "otherDrugsAggregate": [], "otherDrugs": [null], "contactGivesDataConsent": true }, { "objectId": "patleOdXtU", "createdAt": "2019-01-08T21:11:05.904Z", "updatedAt": "2019-04-14T21:39:32.537Z", "uid": "bphc101010mom", "dateOfBirth": { "__type": "Date", "iso": "1980-01-01T05:00:00.000Z" }, "dateOfLastVisit": { "__type": "Date", "iso": "2019-04-14T21:39:27.686Z" }, "primaryDrug": "meth", "didOdLastYear": true, "hasHealthInsurance": true, "otherDrugsAggregate": ["meth", "heroin"], "profileNotes": "some profile notes", "otherDrugs": [null], "syringesGivenAggregate": 40, "syringesTakenAggregate": 30, "healthInsurer": "TF", "contactGivesDataConsent": true }, { "objectId": "voG12ckKL1", "createdAt": "2019-05-23T17:10:17.785Z", "updatedAt": "2019-05-23T17:10:17.785Z", "ethnicity": "White", "genderIdentity": "female", "uid": "ELIA111990MOM", "dateOfBirth": { "__type": "Date", "iso": "1990-11-19T05:00:00.000Z" }, "dateOfLastVisit": { "__type": "Date", "iso": "2019-05-23T17:10:09.244Z" }, "ageOfFirstInjection": 20, "countryOfBirth": "US", "primaryDrug": "heroin", "hivStatus": "negative", "hepCStatus": "negative", "didOdLastYear": true, "hasHealthInsurance": true, "housingStatus": "housed", "otherDrugsAggregate": ["meth", "crack", "benzos", "heroin"], "otherDrugs": ["meth", "crack", "benzos"], "syringesGivenAggregate": 10, "healthInsurer": "MH", "zipCode": "01230", "contactGivesDataConsent": true }, { "objectId": "qfPTcnNc2o", "createdAt": "2019-05-23T17:19:52.748Z", "updatedAt": "2019-05-23T17:19:52.748Z", "ethnicity": "White", "genderIdentity": "female", "uid": "SESR091493ANN", "dateOfBirth": { "__type": "Date", "iso": "1993-09-14T04:00:00.000Z" }, "dateOfLastVisit": { "__type": "Date", "iso": "2019-05-23T17:19:47.754Z" }, "ageOfFirstInjection": 17, "countryOfBirth": "US", "primaryDrug": "heroin", "hivStatus": "negative", "hepCStatus": "negative", "didOdLastYear": true, "hasHealthInsurance": true, "housingStatus": "homeless", "otherDrugsAggregate": ["crack", "heroin"], "profileNotes": "Referred for hepC appt tomorrow", "otherDrugs": ["crack"], "syringesGivenAggregate": 10, "healthInsurer": "MH", "zipCode": "02118", "contactGivesDataConsent": true }, { "objectId": "Q0x2OBm14M", "createdAt": "2018-12-09T23:14:48.888Z", "updatedAt": "2019-01-08T00:18:29.483Z", "ethnicity": "HPI", "genderIdentity": "refused", "uid": "zzzz123456bbb", "dateOfBirth": { "__type": "Date", "iso": "1977-01-22T05:00:00.000Z" }, "hispanic": true, "dateOfLastVisit": { "__type": "Date", "iso": "2019-01-08T00:18:25.130Z" }, "ageOfFirstInjection": 37, "countryOfBirth": "PR", "primaryDrug": "heroin", "hivStatus": "neverTested", "hepCStatus": "negative", "isInCareForHepC": true, "didOdLastYear": true, "hasHealthInsurance": true, "isInCareForHiv": true, "housingStatus": "housed", "otherDrugsAggregate": ["other", "benzos", "meth", "heroin"], "profileNotes": "Persistent profile notes", "otherDrugs": ["other", "benzos", "meth"], "syringesGivenAggregate": 10, "syringesTakenAggregate": 10, "healthInsurer": "other" }, { "objectId": "qOaAyzmqYc", "createdAt": "2019-01-08T18:51:06.817Z", "updatedAt": "2019-01-08T19:22:48.115Z", "ethnicity": "White", "genderIdentity": "female", "uid": "CASH112991ELI", "dateOfBirth": { "__type": "Date", "iso": "1991-11-29T05:00:00.000Z" }, "dateOfLastVisit": { "__type": "Date", "iso": "2019-01-08T19:22:24.469Z" }, "ageOfFirstInjection": 18, "countryOfBirth": "US", "primaryDrug": "heroin", "hivStatus": "negative", "hepCStatus": "negative", "hasHealthInsurance": true, "housingStatus": "housed", "otherDrugsAggregate": ["benzos", "heroin"], "profileNotes": "ATTENDED HCV APPT", "otherDrugs": ["benzos"], "syringesGivenAggregate": 60, "syringesTakenAggregate": 50, "healthInsurer": "other", "zipCode": "02130" }, { "objectId": "tsHIw1CnKD", "createdAt": "2019-01-08T17:57:41.104Z", "updatedAt": "2019-01-09T13:28:31.623Z", "genderIdentity": "female", "uid": "srmc060585mar", "dateOfBirth": { "__type": "Date", "iso": "1980-01-01T05:00:00.000Z" }, "dateOfLastVisit": { "__type": "Date", "iso": "2019-01-09T13:28:24.170Z" }, "ageOfFirstInjection": 16, "countryOfBirth": "Other", "primaryDrug": "heroin", "hivStatus": "negative", "hepCStatus": "positive", "isInCareForHepC": true, "didOdLastYear": true, "hasHealthInsurance": true, "housingStatus": "homeless", "otherDrugsAggregate": ["crack", "meth", "heroin"], "profileNotes": "ALERT", "otherDrugs": ["crack", "meth"], "syringesGivenAggregate": 20, "syringesTakenAggregate": 10, "healthInsurer": "MH", "zipCode": "02118" }, { "objectId": "3YFLCdB7NF", "createdAt": "2019-01-09T13:43:51.190Z", "updatedAt": "2019-01-09T13:43:51.190Z", "ethnicity": "White", "genderIdentity": "female", "uid": "lzrg122391mar", "dateOfBirth": { "__type": "Date", "iso": "1980-01-01T05:00:00.000Z" }, "dateOfLastVisit": { "__type": "Date", "iso": "2019-01-09T13:43:32.728Z" }, "countryOfBirth": "US", "primaryDrug": "heroin", "hivStatus": "negative", "hepCStatus": "negative", "didOdLastYear": true, "hasHealthInsurance": true, "housingStatus": "housed", "otherDrugsAggregate": ["cocaine", "suboxone", "heroin"], "otherDrugs": ["cocaine", "suboxone"], "healthInsurer": "BCBS", "zipCode": "02118" }, { "objectId": "p0Gn4gAE9N", "createdAt": "2019-01-08T02:39:51.783Z", "updatedAt": "2019-01-08T02:39:51.783Z", "ethnicity": "White", "genderIdentity": "male", "uid": "abcd123456abd", "dateOfBirth": { "__type": "Date", "iso": "1979-01-11T05:00:00.000Z" }, "hispanic": true, "dateOfLastVisit": { "__type": "Date", "iso": "2019-01-08T02:39:46.988Z" }, "ageOfFirstInjection": 35 }, { "objectId": "hZmh3YWdLW", "createdAt": "2019-01-08T02:40:47.374Z", "updatedAt": "2019-01-08T02:40:47.374Z", "ethnicity": "White", "genderIdentity": "male", "uid": "abcd123456abc", "dateOfBirth": { "__type": "Date", "iso": "1981-01-23T05:00:00.000Z" }, "hispanic": true, "dateOfLastVisit": { "__type": "Date", "iso": "2019-01-08T02:40:41.694Z" }, "ageOfFirstInjection": 35 }, { "objectId": "W8dSvoyZSX", "createdAt": "2019-01-08T02:41:15.932Z", "updatedAt": "2019-01-08T02:41:15.932Z", "ethnicity": "White", "genderIdentity": "male", "uid": "abcd123456aaa", "dateOfBirth": { "__type": "Date", "iso": "1979-01-12T05:00:00.000Z" }, "hispanic": true, "dateOfLastVisit": { "__type": "Date", "iso": "2019-01-08T02:41:08.977Z" }, "ageOfFirstInjection": 35 }, { "objectId": "BUvX22koIr", "createdAt": "2019-01-08T02:42:56.684Z", "updatedAt": "2019-01-08T02:42:56.684Z", "ethnicity": "White", "genderIdentity": "male", "uid": "abcd123456bbb", "dateOfBirth": { "__type": "Date", "iso": "1982-01-23T05:00:00.000Z" }, "hispanic": true, "dateOfLastVisit": { "__type": "Date", "iso": "2019-01-08T02:42:53.672Z" } }, { "objectId": "SmN8atDCX7", "createdAt": "2019-01-08T02:51:42.353Z", "updatedAt": "2019-01-08T02:51:42.353Z", "uid": "mmmm111111mmm", "dateOfLastVisit": { "__type": "Date", "iso": "2019-01-08T02:51:20.101Z" } }, { "objectId": "bAFZg2Pnr3", "createdAt": "2019-01-08T02:52:10.600Z", "updatedAt": "2019-01-08T02:52:10.600Z", "ethnicity": "White", "genderIdentity": "male", "uid": "mmmm111111mmv", "dateOfBirth": { "__type": "Date", "iso": "1980-01-01T05:00:00.000Z" }, "hispanic": true, "dateOfLastVisit": { "__type": "Date", "iso": "2019-01-08T02:52:07.540Z" }, "hivStatus": "neverTested", "hepCStatus": "neverTested", "didOdLastYear": true, "housingStatus": "homeless", "otherDrugsAggregate": [], "otherDrugs": [null], "syringesGivenAggregate": 10, "syringesTakenAggregate": 20, "zipCode": "02118" }, { "objectId": "m3v5sKEBeL", "createdAt": "2019-01-08T02:52:39.444Z", "updatedAt": "2019-01-08T02:52:39.444Z", "ethnicity": "White", "genderIdentity": "male", "uid": "mmmm111111mma", "dateOfBirth": { "__type": "Date", "iso": "1980-01-01T05:00:00.000Z" }, "hispanic": true, "dateOfLastVisit": { "__type": "Date", "iso": "2019-01-08T02:52:36.181Z" }, "hivStatus": "neverTested", "hepCStatus": "neverTested", "didOdLastYear": true, "housingStatus": "homeless", "otherDrugsAggregate": [], "otherDrugs": [null], "zipCode": "02118" }, { "objectId": "BXLXtAUf2U", "createdAt": "2019-01-08T03:02:36.170Z", "updatedAt": "2019-01-08T03:02:36.170Z", "uid": "ffff111111fff", "dateOfLastVisit": { "__type": "Date", "iso": "2019-01-08T03:02:33.752Z" } }, { "objectId": "sBXZdZTA6c", "createdAt": "2018-10-10T03:57:40.036Z", "updatedAt": "2019-01-08T03:12:51.845Z", "ethnicity": "AI", "genderIdentity": "male", "uid": "aaaa317150aaa", "dateOfBirth": { "__type": "Date", "iso": "2000-01-01T05:00:00.000Z" }, "hispanic": true, "dateOfLastVisit": { "__type": "Date", "iso": "2019-01-08T03:12:48.222Z" }, "ageOfFirstInjection": 1, "countryOfBirth": "US", "primaryDrug": "meth", "hivStatus": "negative", "hepCStatus": "negative", "isEnrolled": true, "isInCareForHepC": true, "didOdLastYear": true, "hasHealthInsurance": true, "isInCareForHiv": true, "housingStatus": "homeless", "otherDrugsAggregate": ["other", "benzos", "meth", "heroin", "crack", "cocaine", "suboxone"], "profileNotes": "prof notes 2", "otherDrugs": ["other", "benzos"], "syringesGivenAggregate": 90, "syringesTakenAggregate": 50, "zipCode": "02118a" }, { "objectId": "Ih9LkP3aa7", "createdAt": "2019-01-08T13:53:06.502Z", "updatedAt": "2019-01-08T13:53:06.502Z", "ethnicity": "White", "genderIdentity": "male", "uid": "abcd123456ddd", "dateOfBirth": { "__type": "Date", "iso": "1979-01-11T05:00:00.000Z" }, "hispanic": true, "dateOfLastVisit": { "__type": "Date", "iso": "2019-01-08T13:53:01.003Z" } }, { "objectId": "tRTv4Xrd9n", "createdAt": "2019-01-08T13:56:51.688Z", "updatedAt": "2019-01-08T13:56:51.688Z", "ethnicity": "White", "genderIdentity": "male", "uid": "abcd123456eee", "dateOfBirth": { "__type": "Date", "iso": "1980-01-01T05:00:00.000Z" }, "hispanic": true, "dateOfLastVisit": { "__type": "Date", "iso": "2019-01-08T13:56:49.797Z" }, "ageOfFirstInjection": 51, "countryOfBirth": "US", "primaryDrug": "cocaine", "hivStatus": "neverTested", "hepCStatus": "neverTested", "didOdLastYear": true, "housingStatus": "homeless", "otherDrugsAggregate": ["meth", "cocaine", "benzos", "crack"], "profileNotes": "Profile Notes", "otherDrugs": ["meth", "cocaine", "benzos", "crack"], "syringesGivenAggregate": 20, "syringesTakenAggregate": 20, "zipCode": "02118" }, { "objectId": "kqralpNyEy", "createdAt": "2019-01-08T14:02:34.227Z", "updatedAt": "2019-01-08T14:02:34.227Z", "ethnicity": "White", "genderIdentity": "male", "uid": "abcd123456fff", "dateOfBirth": { "__type": "Date", "iso": "1980-01-01T05:00:00.000Z" }, "hispanic": true, "dateOfLastVisit": { "__type": "Date", "iso": "2019-01-08T14:02:00.832Z" }, "otherDrugsAggregate": [], "otherDrugs": [null], "zipCode": "02118" }, { "objectId": "Df9GPcIduV", "createdAt": "2019-01-08T14:03:22.247Z", "updatedAt": "2019-01-08T14:03:22.247Z", "uid": "abcd123456ggg", "dateOfBirth": { "__type": "Date", "iso": "1980-01-01T05:00:00.000Z" }, "dateOfLastVisit": { "__type": "Date", "iso": "2019-01-08T14:03:15.682Z" }, "otherDrugsAggregate": [], "otherDrugs": [null] }, { "objectId": "mEYcjq1eih", "createdAt": "2018-10-10T03:56:40.537Z", "updatedAt": "2019-01-08T17:45:33.146Z", "ethnicity": "BAA", "genderIdentity": "female", "uid": "aaaa218004aaa", "dateOfBirth": { "__type": "Date", "iso": "1987-01-09T05:00:00.000Z" }, "hispanic": true, "dateOfLastVisit": { "__type": "Date", "iso": "2019-01-08T17:45:06.986Z" }, "ageOfFirstInjection": 24, "countryOfBirth": "PR", "primaryDrug": "heroin", "hivStatus": "negative", "hepCStatus": "neverTested", "isEnrolled": false, "isInCareForHepC": false, "didOdLastYear": true, "hasHealthInsurance": true, "isInCareForHiv": false, "housingStatus": "housed", "otherDrugsAggregate": ["heroin", "meth", "benzos", "crack"], "profileNotes": "Profile Notes", "otherDrugs": ["heroin", "meth", "benzos", "crack"], "syringesGivenAggregate": 50, "syringesTakenAggregate": 50, "healthInsurer": "BCBS", "zipCode": "02118" }, { "objectId": "VgFD7sYxdN", "createdAt": "2019-01-30T14:38:10.684Z", "updatedAt": "2019-01-30T14:38:10.684Z", "ethnicity": "White", "genderIdentity": "ftm", "uid": "BAJA102591DAN", "dateOfBirth": { "__type": "Date", "iso": "1991-10-25T04:00:00.000Z" }, "dateOfLastVisit": { "__type": "Date", "iso": "2019-01-30T14:37:15.006Z" }, "countryOfBirth": "Other", "primaryDrug": "other", "hivStatus": "negative", "hepCStatus": "negative", "hasHealthInsurance": true, "housingStatus": "housed", "otherDrugsAggregate": ["other"], "profileNotes": "this kid is weird af", "otherDrugs": ["other"], "syringesGivenAggregate": 10, "healthInsurer": "NHP", "zipCode": "02215" }] };

// export stubContactsAllQueryCountResults
export const stubContactsAllQueryCountResults = rawStubContactsAllQueryCountResults.count;
// export stubEventsAllQueryCountResults
export const stubEventsAllQueryCountResults = rawStubEventsAllQueryCountResults.count;
// export stubEventsFilteredQueryFindResults
export const stubEventsFilteredQueryFindResults = convertRawToParse(rawStubEventsFilteredQueryFindResults);
// export stubContactsFilteredQueryFindResults
export const stubContactsFilteredQueryFindResults = convertRawToParse(rawStubContactsFilteredQueryFindResults);


function convertRawToParse(raw) {
    return raw.results.map( rawObj => ({ attributes: {...rawObj} } ));
}