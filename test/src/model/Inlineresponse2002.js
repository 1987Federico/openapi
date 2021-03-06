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
    define(['ApiClient', 'model/Inlineresponse2002additionals', 'model/Inlineresponse2002guarantors', 'model/Inlineresponse2002owner'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Inlineresponse2002additionals'), require('./Inlineresponse2002guarantors'), require('./Inlineresponse2002owner'));
  } else {
    // Browser globals (root is window)
    if (!root.NaranjaCustomerApiTesting) {
      root.NaranjaCustomerApiTesting = {};
    }
    root.NaranjaCustomerApiTesting.Inlineresponse2002 = factory(root.NaranjaCustomerApiTesting.ApiClient, root.NaranjaCustomerApiTesting.Inlineresponse2002additionals, root.NaranjaCustomerApiTesting.Inlineresponse2002guarantors, root.NaranjaCustomerApiTesting.Inlineresponse2002owner);
  }
}(this, function(ApiClient, Inlineresponse2002additionals, Inlineresponse2002guarantors, Inlineresponse2002owner) {
  'use strict';



  /**
   * The Inlineresponse2002 model module.
   * @module model/Inlineresponse2002
   * @version 3.2.1
   */

  /**
   * Constructs a new <code>Inlineresponse2002</code>.
   * @alias module:model/Inlineresponse2002
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Inlineresponse2002</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Inlineresponse2002} obj Optional instance to populate.
   * @return {module:model/Inlineresponse2002} The populated <code>Inlineresponse2002</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = Inlineresponse2002owner.constructFromObject(data['owner']);
      }
      if (data.hasOwnProperty('additionals')) {
        obj['additionals'] = ApiClient.convertToType(data['additionals'], [Inlineresponse2002additionals]);
      }
      if (data.hasOwnProperty('guarantors')) {
        obj['guarantors'] = ApiClient.convertToType(data['guarantors'], [Inlineresponse2002guarantors]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Inlineresponse2002owner} owner
   */
  exports.prototype['owner'] = undefined;
  /**
   * @member {Array.<module:model/Inlineresponse2002additionals>} additionals
   */
  exports.prototype['additionals'] = undefined;
  /**
   * @member {Array.<module:model/Inlineresponse2002guarantors>} guarantors
   */
  exports.prototype['guarantors'] = undefined;



  return exports;
}));


