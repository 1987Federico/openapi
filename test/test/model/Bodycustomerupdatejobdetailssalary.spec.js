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
    instance = new NaranjaCustomerApiTesting.Bodycustomerupdatejobdetailssalary();
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

  describe('Bodycustomerupdatejobdetailssalary', function() {
    it('should create an instance of Bodycustomerupdatejobdetailssalary', function() {
      // uncomment below and update the code to test Bodycustomerupdatejobdetailssalary
      //var instance = new NaranjaCustomerApiTesting.Bodycustomerupdatejobdetailssalary();
      //expect(instance).to.be.a(NaranjaCustomerApiTesting.Bodycustomerupdatejobdetailssalary);
    });

    it('should have the property monthly (base name: "monthly")', function() {
      // uncomment below and update the code to test the property monthly
      //var instance = new NaranjaCustomerApiTesting.Bodycustomerupdatejobdetailssalary();
      //expect(instance).to.be();
    });

    it('should have the property other (base name: "other")', function() {
      // uncomment below and update the code to test the property other
      //var instance = new NaranjaCustomerApiTesting.Bodycustomerupdatejobdetailssalary();
      //expect(instance).to.be();
    });

    it('should have the property extra (base name: "extra")', function() {
      // uncomment below and update the code to test the property extra
      //var instance = new NaranjaCustomerApiTesting.Bodycustomerupdatejobdetailssalary();
      //expect(instance).to.be();
    });

  });

}));