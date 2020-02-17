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
    define(['ApiClient', 'model/Address', 'model/Email', 'model/Phone'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'), require('./Email'), require('./Phone'));
  } else {
    // Browser globals (root is window)
    if (!root.NaranjaCustomerApiTesting) {
      root.NaranjaCustomerApiTesting = {};
    }
    root.NaranjaCustomerApiTesting.Contactdetails = factory(root.NaranjaCustomerApiTesting.ApiClient, root.NaranjaCustomerApiTesting.Address, root.NaranjaCustomerApiTesting.Email, root.NaranjaCustomerApiTesting.Phone);
  }
}(this, function(ApiClient, Address, Email, Phone) {
  'use strict';



  /**
   * The Contactdetails model module.
   * @module model/Contactdetails
   * @version 3.2.1
   */

  /**
   * Constructs a new <code>Contactdetails</code>.
   * @alias module:model/Contactdetails
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Contactdetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Contactdetails} obj Optional instance to populate.
   * @return {module:model/Contactdetails} The populated <code>Contactdetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('addresses')) {
        obj['addresses'] = ApiClient.convertToType(data['addresses'], [Address]);
      }
      if (data.hasOwnProperty('phones')) {
        obj['phones'] = ApiClient.convertToType(data['phones'], [Phone]);
      }
      if (data.hasOwnProperty('emails')) {
        obj['emails'] = ApiClient.convertToType(data['emails'], [Email]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Address>} addresses
   */
  exports.prototype['addresses'] = undefined;
  /**
   * @member {Array.<module:model/Phone>} phones
   */
  exports.prototype['phones'] = undefined;
  /**
   * @member {Array.<module:model/Email>} emails
   */
  exports.prototype['emails'] = undefined;



  return exports;
}));

