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
    instance = new NaranjaCustomerApiTesting.Account2();
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

  describe('Account2', function() {
    it('should create an instance of Account2', function() {
      // uncomment below and update the code to test Account2
      //var instance = new NaranjaCustomerApiTesting.Account2();
      //expect(instance).to.be.a(NaranjaCustomerApiTesting.Account2);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new NaranjaCustomerApiTesting.Account2();
      //expect(instance).to.be();
    });

    it('should have the property openDate (base name: "open_date")', function() {
      // uncomment below and update the code to test the property openDate
      //var instance = new NaranjaCustomerApiTesting.Account2();
      //expect(instance).to.be();
    });

    it('should have the property leavingDate (base name: "leaving_date")', function() {
      // uncomment below and update the code to test the property leavingDate
      //var instance = new NaranjaCustomerApiTesting.Account2();
      //expect(instance).to.be();
    });

    it('should have the property pack (base name: "pack")', function() {
      // uncomment below and update the code to test the property pack
      //var instance = new NaranjaCustomerApiTesting.Account2();
      //expect(instance).to.be();
    });

    it('should have the property sourceBranch (base name: "source_branch")', function() {
      // uncomment below and update the code to test the property sourceBranch
      //var instance = new NaranjaCustomerApiTesting.Account2();
      //expect(instance).to.be();
    });

    it('should have the property employeeId (base name: "employee_id")', function() {
      // uncomment below and update the code to test the property employeeId
      //var instance = new NaranjaCustomerApiTesting.Account2();
      //expect(instance).to.be();
    });

    it('should have the property affinityBranchNumber (base name: "affinity_branch_number")', function() {
      // uncomment below and update the code to test the property affinityBranchNumber
      //var instance = new NaranjaCustomerApiTesting.Account2();
      //expect(instance).to.be();
    });

    it('should have the property affinityDescription (base name: "affinity_description")', function() {
      // uncomment below and update the code to test the property affinityDescription
      //var instance = new NaranjaCustomerApiTesting.Account2();
      //expect(instance).to.be();
    });

    it('should have the property portfolio (base name: "portfolio")', function() {
      // uncomment below and update the code to test the property portfolio
      //var instance = new NaranjaCustomerApiTesting.Account2();
      //expect(instance).to.be();
    });

    it('should have the property insuranceCompany (base name: "insurance_company")', function() {
      // uncomment below and update the code to test the property insuranceCompany
      //var instance = new NaranjaCustomerApiTesting.Account2();
      //expect(instance).to.be();
    });

    it('should have the property card (base name: "card")', function() {
      // uncomment below and update the code to test the property card
      //var instance = new NaranjaCustomerApiTesting.Account2();
      //expect(instance).to.be();
    });

    it('should have the property cancellationReason (base name: "cancellation_reason")', function() {
      // uncomment below and update the code to test the property cancellationReason
      //var instance = new NaranjaCustomerApiTesting.Account2();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instance = new NaranjaCustomerApiTesting.Account2();
      //expect(instance).to.be();
    });

    it('should have the property companyCode (base name: "company_code")', function() {
      // uncomment below and update the code to test the property companyCode
      //var instance = new NaranjaCustomerApiTesting.Account2();
      //expect(instance).to.be();
    });

    it('should have the property openning (base name: "openning")', function() {
      // uncomment below and update the code to test the property openning
      //var instance = new NaranjaCustomerApiTesting.Account2();
      //expect(instance).to.be();
    });

    it('should have the property hasLimit (base name: "has_limit")', function() {
      // uncomment below and update the code to test the property hasLimit
      //var instance = new NaranjaCustomerApiTesting.Account2();
      //expect(instance).to.be();
    });

  });

}));