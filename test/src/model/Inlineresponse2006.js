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
    define(['ApiClient', 'model/Address2', 'model/Email2', 'model/Inlineresponse2006lastupdate', 'model/Phone2'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address2'), require('./Email2'), require('./Inlineresponse2006lastupdate'), require('./Phone2'));
  } else {
    // Browser globals (root is window)
    if (!root.NaranjaCustomerApiTesting) {
      root.NaranjaCustomerApiTesting = {};
    }
    root.NaranjaCustomerApiTesting.Inlineresponse2006 = factory(root.NaranjaCustomerApiTesting.ApiClient, root.NaranjaCustomerApiTesting.Address2, root.NaranjaCustomerApiTesting.Email2, root.NaranjaCustomerApiTesting.Inlineresponse2006lastupdate, root.NaranjaCustomerApiTesting.Phone2);
  }
}(this, function(ApiClient, Address2, Email2, Inlineresponse2006lastupdate, Phone2) {
  'use strict';



  /**
   * The Inlineresponse2006 model module.
   * @module model/Inlineresponse2006
   * @version 3.2.1
   */

  /**
   * Constructs a new <code>Inlineresponse2006</code>.
   * @alias module:model/Inlineresponse2006
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Inlineresponse2006</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Inlineresponse2006} obj Optional instance to populate.
   * @return {module:model/Inlineresponse2006} The populated <code>Inlineresponse2006</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('last_update')) {
        obj['last_update'] = Inlineresponse2006lastupdate.constructFromObject(data['last_update']);
      }
      if (data.hasOwnProperty('addresses')) {
        obj['addresses'] = ApiClient.convertToType(data['addresses'], [Address2]);
      }
      if (data.hasOwnProperty('phones')) {
        obj['phones'] = ApiClient.convertToType(data['phones'], [Phone2]);
      }
      if (data.hasOwnProperty('emails')) {
        obj['emails'] = ApiClient.convertToType(data['emails'], [Email2]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Inlineresponse2006lastupdate} last_update
   */
  exports.prototype['last_update'] = undefined;
  /**
   * @member {Array.<module:model/Address2>} addresses
   */
  exports.prototype['addresses'] = undefined;
  /**
   * @member {Array.<module:model/Phone2>} phones
   */
  exports.prototype['phones'] = undefined;
  /**
   * @member {Array.<module:model/Email2>} emails
   */
  exports.prototype['emails'] = undefined;



  return exports;
}));


