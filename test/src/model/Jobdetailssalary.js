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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Jobdetailssalarymonthly'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Jobdetailssalarymonthly'));
  } else {
    // Browser globals (root is window)
    if (!root.NaranjaCustomerApiTesting) {
      root.NaranjaCustomerApiTesting = {};
    }
    root.NaranjaCustomerApiTesting.Jobdetailssalary = factory(root.NaranjaCustomerApiTesting.ApiClient, root.NaranjaCustomerApiTesting.Jobdetailssalarymonthly);
  }
}(this, function(ApiClient, Jobdetailssalarymonthly) {
  'use strict';



  /**
   * The Jobdetailssalary model module.
   * @module model/Jobdetailssalary
   * @version 3.2.1
   */

  /**
   * Constructs a new <code>Jobdetailssalary</code>.
   * @alias module:model/Jobdetailssalary
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Jobdetailssalary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Jobdetailssalary} obj Optional instance to populate.
   * @return {module:model/Jobdetailssalary} The populated <code>Jobdetailssalary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('monthly')) {
        obj['monthly'] = Jobdetailssalarymonthly.constructFromObject(data['monthly']);
      }
      if (data.hasOwnProperty('other')) {
        obj['other'] = Jobdetailssalarymonthly.constructFromObject(data['other']);
      }
      if (data.hasOwnProperty('extra')) {
        obj['extra'] = Jobdetailssalarymonthly.constructFromObject(data['extra']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Jobdetailssalarymonthly} monthly
   */
  exports.prototype['monthly'] = undefined;
  /**
   * @member {module:model/Jobdetailssalarymonthly} other
   */
  exports.prototype['other'] = undefined;
  /**
   * @member {module:model/Jobdetailssalarymonthly} extra
   */
  exports.prototype['extra'] = undefined;



  return exports;
}));


