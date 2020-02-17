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
    instance = new NaranjaCustomerApiTesting.Limits();
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

  describe('Limits', function() {
    it('should create an instance of Limits', function() {
      // uncomment below and update the code to test Limits
      //var instance = new NaranjaCustomerApiTesting.Limits();
      //expect(instance).to.be.a(NaranjaCustomerApiTesting.Limits);
    });

    it('should have the property monthly (base name: "monthly")', function() {
      // uncomment below and update the code to test the property monthly
      //var instance = new NaranjaCustomerApiTesting.Limits();
      //expect(instance).to.be();
    });

    it('should have the property zeta (base name: "zeta")', function() {
      // uncomment below and update the code to test the property zeta
      //var instance = new NaranjaCustomerApiTesting.Limits();
      //expect(instance).to.be();
    });

    it('should have the property cpl (base name: "cpl")', function() {
      // uncomment below and update the code to test the property cpl
      //var instance = new NaranjaCustomerApiTesting.Limits();
      //expect(instance).to.be();
    });

    it('should have the property etp (base name: "etp")', function() {
      // uncomment below and update the code to test the property etp
      //var instance = new NaranjaCustomerApiTesting.Limits();
      //expect(instance).to.be();
    });

    it('should have the property cplom (base name: "cplom")', function() {
      // uncomment below and update the code to test the property cplom
      //var instance = new NaranjaCustomerApiTesting.Limits();
      //expect(instance).to.be();
    });

  });

}));
