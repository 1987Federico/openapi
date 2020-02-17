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
    instance = new NaranjaCustomerApiTesting.Cbuentityaccountbank();
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

  describe('Cbuentityaccountbank', function() {
    it('should create an instance of Cbuentityaccountbank', function() {
      // uncomment below and update the code to test Cbuentityaccountbank
      //var instance = new NaranjaCustomerApiTesting.Cbuentityaccountbank();
      //expect(instance).to.be.a(NaranjaCustomerApiTesting.Cbuentityaccountbank);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new NaranjaCustomerApiTesting.Cbuentityaccountbank();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new NaranjaCustomerApiTesting.Cbuentityaccountbank();
      //expect(instance).to.be();
    });

    it('should have the property bank (base name: "bank")', function() {
      // uncomment below and update the code to test the property bank
      //var instance = new NaranjaCustomerApiTesting.Cbuentityaccountbank();
      //expect(instance).to.be();
    });

    it('should have the property cbu (base name: "cbu")', function() {
      // uncomment below and update the code to test the property cbu
      //var instance = new NaranjaCustomerApiTesting.Cbuentityaccountbank();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instance = new NaranjaCustomerApiTesting.Cbuentityaccountbank();
      //expect(instance).to.be();
    });

  });

}));
