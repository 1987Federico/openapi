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
    instance = new NaranjaCustomerApiTesting.Inlineresponse2006lastupdatephones();
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

  describe('Inlineresponse2006lastupdatephones', function() {
    it('should create an instance of Inlineresponse2006lastupdatephones', function() {
      // uncomment below and update the code to test Inlineresponse2006lastupdatephones
      //var instance = new NaranjaCustomerApiTesting.Inlineresponse2006lastupdatephones();
      //expect(instance).to.be.a(NaranjaCustomerApiTesting.Inlineresponse2006lastupdatephones);
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instance = new NaranjaCustomerApiTesting.Inlineresponse2006lastupdatephones();
      //expect(instance).to.be();
    });

    it('should have the property isReliable (base name: "is_reliable")', function() {
      // uncomment below and update the code to test the property isReliable
      //var instance = new NaranjaCustomerApiTesting.Inlineresponse2006lastupdatephones();
      //expect(instance).to.be();
    });

  });

}));