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
    root.NaranjaCustomerApiTesting.Inlineresponse2006lastupdatephones = factory(root.NaranjaCustomerApiTesting.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Inlineresponse2006lastupdatephones model module.
   * @module model/Inlineresponse2006lastupdatephones
   * @version 3.2.1
   */

  /**
   * Constructs a new <code>Inlineresponse2006lastupdatephones</code>.
   * @alias module:model/Inlineresponse2006lastupdatephones
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Inlineresponse2006lastupdatephones</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Inlineresponse2006lastupdatephones} obj Optional instance to populate.
   * @return {module:model/Inlineresponse2006lastupdatephones} The populated <code>Inlineresponse2006lastupdatephones</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'String');
      }
      if (data.hasOwnProperty('is_reliable')) {
        obj['is_reliable'] = ApiClient.convertToType(data['is_reliable'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} date
   */
  exports.prototype['date'] = undefined;
  /**
   * @member {Boolean} is_reliable
   */
  exports.prototype['is_reliable'] = undefined;



  return exports;
}));


