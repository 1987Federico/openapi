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
    define(['ApiClient', 'model/Customerscustomeridcontactdetailsaddressescategoryidaddresses'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Customerscustomeridcontactdetailsaddressescategoryidaddresses'));
  } else {
    // Browser globals (root is window)
    if (!root.NaranjaCustomerApiTesting) {
      root.NaranjaCustomerApiTesting = {};
    }
    root.NaranjaCustomerApiTesting.Inputaddress = factory(root.NaranjaCustomerApiTesting.ApiClient, root.NaranjaCustomerApiTesting.Customerscustomeridcontactdetailsaddressescategoryidaddresses);
  }
}(this, function(ApiClient, Customerscustomeridcontactdetailsaddressescategoryidaddresses) {
  'use strict';



  /**
   * The Inputaddress model module.
   * @module model/Inputaddress
   * @version 3.2.1
   */

  /**
   * Constructs a new <code>Inputaddress</code>.
   * @alias module:model/Inputaddress
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Inputaddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Inputaddress} obj Optional instance to populate.
   * @return {module:model/Inputaddress} The populated <code>Inputaddress</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('addresses')) {
        obj['addresses'] = ApiClient.convertToType(data['addresses'], [Customerscustomeridcontactdetailsaddressescategoryidaddresses]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Customerscustomeridcontactdetailsaddressescategoryidaddresses>} addresses
   */
  exports.prototype['addresses'] = undefined;



  return exports;
}));


