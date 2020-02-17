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
    define(['ApiClient', 'model/Account2', 'model/Inlineresponse2002ownercontactdetails', 'model/Limits2', 'model/Personaldetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Account2'), require('./Inlineresponse2002ownercontactdetails'), require('./Limits2'), require('./Personaldetails'));
  } else {
    // Browser globals (root is window)
    if (!root.NaranjaCustomerApiTesting) {
      root.NaranjaCustomerApiTesting = {};
    }
    root.NaranjaCustomerApiTesting.Inlineresponse2002additionals = factory(root.NaranjaCustomerApiTesting.ApiClient, root.NaranjaCustomerApiTesting.Account2, root.NaranjaCustomerApiTesting.Inlineresponse2002ownercontactdetails, root.NaranjaCustomerApiTesting.Limits2, root.NaranjaCustomerApiTesting.Personaldetails);
  }
}(this, function(ApiClient, Account2, Inlineresponse2002ownercontactdetails, Limits2, Personaldetails) {
  'use strict';



  /**
   * The Inlineresponse2002additionals model module.
   * @module model/Inlineresponse2002additionals
   * @version 3.2.1
   */

  /**
   * Constructs a new <code>Inlineresponse2002additionals</code>.
   * @alias module:model/Inlineresponse2002additionals
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Inlineresponse2002additionals</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Inlineresponse2002additionals} obj Optional instance to populate.
   * @return {module:model/Inlineresponse2002additionals} The populated <code>Inlineresponse2002additionals</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('account')) {
        obj['account'] = Account2.constructFromObject(data['account']);
      }
      if (data.hasOwnProperty('personal_details')) {
        obj['personal_details'] = Personaldetails.constructFromObject(data['personal_details']);
      }
      if (data.hasOwnProperty('contact_details')) {
        obj['contact_details'] = Inlineresponse2002ownercontactdetails.constructFromObject(data['contact_details']);
      }
      if (data.hasOwnProperty('limits')) {
        obj['limits'] = Limits2.constructFromObject(data['limits']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/Account2} account
   */
  exports.prototype['account'] = undefined;
  /**
   * @member {module:model/Personaldetails} personal_details
   */
  exports.prototype['personal_details'] = undefined;
  /**
   * @member {module:model/Inlineresponse2002ownercontactdetails} contact_details
   */
  exports.prototype['contact_details'] = undefined;
  /**
   * @member {module:model/Limits2} limits
   */
  exports.prototype['limits'] = undefined;



  return exports;
}));

