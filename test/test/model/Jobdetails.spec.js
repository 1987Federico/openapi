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
    instance = new NaranjaCustomerApiTesting.Jobdetails();
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

  describe('Jobdetails', function() {
    it('should create an instance of Jobdetails', function() {
      // uncomment below and update the code to test Jobdetails
      //var instance = new NaranjaCustomerApiTesting.Jobdetails();
      //expect(instance).to.be.a(NaranjaCustomerApiTesting.Jobdetails);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new NaranjaCustomerApiTesting.Jobdetails();
      //expect(instance).to.be();
    });

    it('should have the property company (base name: "company")', function() {
      // uncomment below and update the code to test the property company
      //var instance = new NaranjaCustomerApiTesting.Jobdetails();
      //expect(instance).to.be();
    });

    it('should have the property position (base name: "position")', function() {
      // uncomment below and update the code to test the property position
      //var instance = new NaranjaCustomerApiTesting.Jobdetails();
      //expect(instance).to.be();
    });

    it('should have the property freelancer (base name: "freelancer")', function() {
      // uncomment below and update the code to test the property freelancer
      //var instance = new NaranjaCustomerApiTesting.Jobdetails();
      //expect(instance).to.be();
    });

    it('should have the property isEmployed (base name: "is_employed")', function() {
      // uncomment below and update the code to test the property isEmployed
      //var instance = new NaranjaCustomerApiTesting.Jobdetails();
      //expect(instance).to.be();
    });

    it('should have the property laborSeniority (base name: "labor_seniority")', function() {
      // uncomment below and update the code to test the property laborSeniority
      //var instance = new NaranjaCustomerApiTesting.Jobdetails();
      //expect(instance).to.be();
    });

    it('should have the property salary (base name: "salary")', function() {
      // uncomment below and update the code to test the property salary
      //var instance = new NaranjaCustomerApiTesting.Jobdetails();
      //expect(instance).to.be();
    });

    it('should have the property hasOwnHouse (base name: "has_own_house")', function() {
      // uncomment below and update the code to test the property hasOwnHouse
      //var instance = new NaranjaCustomerApiTesting.Jobdetails();
      //expect(instance).to.be();
    });

    it('should have the property hasOwnCar (base name: "has_own_car")', function() {
      // uncomment below and update the code to test the property hasOwnCar
      //var instance = new NaranjaCustomerApiTesting.Jobdetails();
      //expect(instance).to.be();
    });

  });

}));
