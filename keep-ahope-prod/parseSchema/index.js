const Parse = require('parse/node');
Parse.initialize("AHOPEPARSESERVER", null, "HJHDUA98024000LLJDM");
Parse.serverURL = 'https://keep-ahope.appspot.com/parse'

const contactSchema = new Parse.Schema('contacts');
contactSchema
  .addString('birthCountry')
  .addString('ethnicity')
  .addString('race')
  .addString('genderIdentity')
  .addString('uid')
  .addDate('dateOfBirth')
  .addDate('firstInjectionAge')
  .addDate('dateOfBirth')
  .addBoolean('hispanic')
contactSchema.save()


const eventSchema = new Parse.Schema('event');
eventSchema
  .addNumber('ageOfFirstInjection')
  .addNumber('numberOfOthersHelping')
  .addNumber('syringesGiven')
  .addNumber('syringesTaken')
  .addString('countryOfBirth')
  .addArray('otherDrugs')
  .addDate('dateOfBirth')
  .addDate('date')
  .addDate('newContactDate')
  .addString('ethnicity')
  .addString('primaryDrug')
  .addString('genderIdentity')
  .addString('hivStatus')
  .addString('hepCStatus')
  .addString('housingStatus')
  .addBoolean('isEnrolled')
  .addBoolean('isInCareForHepC')
  .addBoolean('isInCareForHiv')
  .addBoolean('isOutreach')
  .addBoolean('narcanWasOffered')
  .addBoolean('narcanWasTaken')
  .addBoolean('didOdLastYear')
  .addBoolean('hasHealthInsurance')
  .addBoolean('hispanic')
  .addRelation('uid', 'contacts')
eventSchema.save()
