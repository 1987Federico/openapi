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
    root.NaranjaCustomerApiTesting.Customerscustomeridcontactdetailsaddressescategoryidstate = factory(root.NaranjaCustomerApiTesting.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Customerscustomeridcontactdetailsaddressescategoryidstate model module.
   * @module model/Customerscustomeridcontactdetailsaddressescategoryidstate
   * @version 3.2.1
   */

  /**
   * Constructs a new <code>Customerscustomeridcontactdetailsaddressescategoryidstate</code>.
   * @alias module:model/Customerscustomeridcontactdetailsaddressescategoryidstate
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Customerscustomeridcontactdetailsaddressescategoryidstate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Customerscustomeridcontactdetailsaddressescategoryidstate} obj Optional instance to populate.
   * @return {module:model/Customerscustomeridcontactdetailsaddressescategoryidstate} The populated <code>Customerscustomeridcontactdetailsaddressescategoryidstate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


