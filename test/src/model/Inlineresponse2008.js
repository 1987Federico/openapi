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
    root.NaranjaCustomerApiTesting.Inlineresponse2008 = factory(root.NaranjaCustomerApiTesting.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Inlineresponse2008 model module.
   * @module model/Inlineresponse2008
   * @version 3.2.1
   */

  /**
   * Constructs a new <code>Inlineresponse2008</code>.
   * @alias module:model/Inlineresponse2008
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Inlineresponse2008</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Inlineresponse2008} obj Optional instance to populate.
   * @return {module:model/Inlineresponse2008} The populated <code>Inlineresponse2008</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('transaction_status')) {
        obj['transaction_status'] = ApiClient.convertToType(data['transaction_status'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} transaction_status
   */
  exports.prototype['transaction_status'] = undefined;



  return exports;
}));

