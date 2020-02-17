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
    instance = new NaranjaCustomerApiTesting.Bodycustomerupdate();
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

  describe('Bodycustomerupdate', function() {
    it('should create an instance of Bodycustomerupdate', function() {
      // uncomment below and update the code to test Bodycustomerupdate
      //var instance = new NaranjaCustomerApiTesting.Bodycustomerupdate();
      //expect(instance).to.be.a(NaranjaCustomerApiTesting.Bodycustomerupdate);
    });

    it('should have the property role (base name: "role")', function() {
      // uncomment below and update the code to test the property role
      //var instance = new NaranjaCustomerApiTesting.Bodycustomerupdate();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instance = new NaranjaCustomerApiTesting.Bodycustomerupdate();
      //expect(instance).to.be();
    });

    it('should have the property personalDetails (base name: "personal_details")', function() {
      // uncomment below and update the code to test the property personalDetails
      //var instance = new NaranjaCustomerApiTesting.Bodycustomerupdate();
      //expect(instance).to.be();
    });

    it('should have the property jobDetails (base name: "job_details")', function() {
      // uncomment below and update the code to test the property jobDetails
      //var instance = new NaranjaCustomerApiTesting.Bodycustomerupdate();
      //expect(instance).to.be();
    });

  });

}));
