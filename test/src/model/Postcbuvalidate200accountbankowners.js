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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.NaranjaCustomerApiTesting) {
      root.NaranjaCustomerApiTesting = {};
    }
    root.NaranjaCustomerApiTesting.Postcbuvalidate200accountbankowners = factory(root.NaranjaCustomerApiTesting.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Postcbuvalidate200accountbankowners model module.
   * @module model/Postcbuvalidate200accountbankowners
   * @version 3.2.1
   */

  /**
   * Constructs a new <code>Postcbuvalidate200accountbankowners</code>.
   * @alias module:model/Postcbuvalidate200accountbankowners
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Postcbuvalidate200accountbankowners</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Postcbuvalidate200accountbankowners} obj Optional instance to populate.
   * @return {module:model/Postcbuvalidate200accountbankowners} The populated <code>Postcbuvalidate200accountbankowners</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('fiscal_key')) {
        obj['fiscal_key'] = ApiClient.convertToType(data['fiscal_key'], 'String');
      }
      if (data.hasOwnProperty('full_name')) {
        obj['full_name'] = ApiClient.convertToType(data['full_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} fiscal_key
   */
  exports.prototype['fiscal_key'] = undefined;
  /**
   * @member {String} full_name
   */
  exports.prototype['full_name'] = undefined;



  return exports;
}));


