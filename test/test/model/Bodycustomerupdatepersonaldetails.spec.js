/**
 * naranja-customer-api-testing
 * sarasa
 *
 * The version of the OpenAPI document: 3.2.1
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.2.2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NaranjaCustomerApiTesting);
  }
}(this, function(expect, NaranjaCustomerApiTesting) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NaranjaCustomerApiTesting.Bodycustomerupdatepersonaldetails();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Bodycustomerupdatepersonaldetails', function() {
    it('should create an instance of Bodycustomerupdatepersonaldetails', function() {
      // uncomment below and update the code to test Bodycustomerupdatepersonaldetails
      //var instance = new NaranjaCustomerApiTesting.Bodycustomerupdatepersonaldetails();
      //expect(instance).to.be.a(NaranjaCustomerApiTesting.Bodycustomerupdatepersonaldetails);
    });

    it('should have the property lastName (base name: "last_name")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new NaranjaCustomerApiTesting.Bodycustomerupdatepersonaldetails();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new NaranjaCustomerApiTesting.Bodycustomerupdatepersonaldetails();
      //expect(instance).to.be();
    });

    it('should have the property identityDocument (base name: "identity_document")', function() {
      // uncomment below and update the code to test the property identityDocument
      //var instance = new NaranjaCustomerApiTesting.Bodycustomerupdatepersonaldetails();
      //expect(instance).to.be();
    });

    it('should have the property gender (base name: "gender")', function() {
      // uncomment below and update the code to test the property gender
      //var instance = new NaranjaCustomerApiTesting.Bodycustomerupdatepersonaldetails();
      //expect(instance).to.be();
    });

    it('should have the property birthDate (base name: "birth_date")', function() {
      // uncomment below and update the code to test the property birthDate
      //var instance = new NaranjaCustomerApiTesting.Bodycustomerupdatepersonaldetails();
      //expect(instance).to.be();
    });

    it('should have the property isRetired (base name: "is_retired")', function() {
      // uncomment below and update the code to test the property isRetired
      //var instance = new NaranjaCustomerApiTesting.Bodycustomerupdatepersonaldetails();
      //expect(instance).to.be();
    });

    it('should have the property educationLevel (base name: "education_level")', function() {
      // uncomment below and update the code to test the property educationLevel
      //var instance = new NaranjaCustomerApiTesting.Bodycustomerupdatepersonaldetails();
      //expect(instance).to.be();
    });

    it('should have the property maritalStatus (base name: "marital_status")', function() {
      // uncomment below and update the code to test the property maritalStatus
      //var instance = new NaranjaCustomerApiTesting.Bodycustomerupdatepersonaldetails();
      //expect(instance).to.be();
    });

    it('should have the property fiscalData (base name: "fiscal_data")', function() {
      // uncomment below and update the code to test the property fiscalData
      //var instance = new NaranjaCustomerApiTesting.Bodycustomerupdatepersonaldetails();
      //expect(instance).to.be();
    });

  });

}));
