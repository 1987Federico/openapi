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
    define(['ApiClient', 'model/Postcbuvalidate200accountbankbank', 'model/Postcbuvalidate200accountbankowner', 'model/Postcbuvalidate200accountbanktype'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Postcbuvalidate200accountbankbank'), require('./Postcbuvalidate200accountbankowner'), require('./Postcbuvalidate200accountbanktype'));
  } else {
    // Browser globals (root is window)
    if (!root.NaranjaCustomerApiTesting) {
      root.NaranjaCustomerApiTesting = {};
    }
    root.NaranjaCustomerApiTesting.Cbuentityaccountbank = factory(root.NaranjaCustomerApiTesting.ApiClient, root.NaranjaCustomerApiTesting.Postcbuvalidate200accountbankbank, root.NaranjaCustomerApiTesting.Postcbuvalidate200accountbankowner, root.NaranjaCustomerApiTesting.Postcbuvalidate200accountbanktype);
  }
}(this, function(ApiClient, Postcbuvalidate200accountbankbank, Postcbuvalidate200accountbankowner, Postcbuvalidate200accountbanktype) {
  'use strict';



  /**
   * The Cbuentityaccountbank model module.
   * @module model/Cbuentityaccountbank
   * @version 3.2.1
   */

  /**
   * Constructs a new <code>Cbuentityaccountbank</code>.
   * @alias module:model/Cbuentityaccountbank
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Cbuentityaccountbank</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Cbuentityaccountbank} obj Optional instance to populate.
   * @return {module:model/Cbuentityaccountbank} The populated <code>Cbuentityaccountbank</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('type')) {
        obj['type'] = Postcbuvalidate200accountbanktype.constructFromObject(data['type']);
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('bank')) {
        obj['bank'] = Postcbuvalidate200accountbankbank.constructFromObject(data['bank']);
      }
      if (data.hasOwnProperty('cbu')) {
        obj['cbu'] = ApiClient.convertToType(data['cbu'], 'String');
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = Postcbuvalidate200accountbankowner.constructFromObject(data['owner']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Postcbuvalidate200accountbanktype} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * @member {module:model/Postcbuvalidate200accountbankbank} bank
   */
  exports.prototype['bank'] = undefined;
  /**
   * @member {String} cbu
   */
  exports.prototype['cbu'] = undefined;
  /**
   * @member {module:model/Postcbuvalidate200accountbankowner} owner
   */
  exports.prototype['owner'] = undefined;



  return exports;
}));


