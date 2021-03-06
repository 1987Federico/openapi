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
    define(['ApiClient', 'model/Customerscustomeridcontactdetailsaddressescategoryidcountry', 'model/FilterrealIdcontactdetailscity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Customerscustomeridcontactdetailsaddressescategoryidcountry'), require('./FilterrealIdcontactdetailscity'));
  } else {
    // Browser globals (root is window)
    if (!root.NaranjaCustomerApiTesting) {
      root.NaranjaCustomerApiTesting = {};
    }
    root.NaranjaCustomerApiTesting.FilterrealIdcontactdetailsaddresses = factory(root.NaranjaCustomerApiTesting.ApiClient, root.NaranjaCustomerApiTesting.Customerscustomeridcontactdetailsaddressescategoryidcountry, root.NaranjaCustomerApiTesting.FilterrealIdcontactdetailscity);
  }
}(this, function(ApiClient, Customerscustomeridcontactdetailsaddressescategoryidcountry, FilterrealIdcontactdetailscity) {
  'use strict';



  /**
   * The FilterrealIdcontactdetailsaddresses model module.
   * @module model/FilterrealIdcontactdetailsaddresses
   * @version 3.2.1
   */

  /**
   * Constructs a new <code>FilterrealIdcontactdetailsaddresses</code>.
   * @alias module:model/FilterrealIdcontactdetailsaddresses
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>FilterrealIdcontactdetailsaddresses</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FilterrealIdcontactdetailsaddresses} obj Optional instance to populate.
   * @return {module:model/FilterrealIdcontactdetailsaddresses} The populated <code>FilterrealIdcontactdetailsaddresses</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('full_address')) {
        obj['full_address'] = ApiClient.convertToType(data['full_address'], 'String');
      }
      if (data.hasOwnProperty('zip_code')) {
        obj['zip_code'] = ApiClient.convertToType(data['zip_code'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = FilterrealIdcontactdetailscity.constructFromObject(data['city']);
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = FilterrealIdcontactdetailscity.constructFromObject(data['state']);
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = Customerscustomeridcontactdetailsaddressescategoryidcountry.constructFromObject(data['country']);
      }
    }
    return obj;
  }

  /**
   * @member {String} category
   */
  exports.prototype['category'] = undefined;
  /**
   * @member {String} full_address
   */
  exports.prototype['full_address'] = undefined;
  /**
   * @member {String} zip_code
   */
  exports.prototype['zip_code'] = undefined;
  /**
   * @member {module:model/FilterrealIdcontactdetailscity} city
   */
  exports.prototype['city'] = undefined;
  /**
   * @member {module:model/FilterrealIdcontactdetailscity} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {module:model/Customerscustomeridcontactdetailsaddressescategoryidcountry} country
   */
  exports.prototype['country'] = undefined;



  return exports;
}));


