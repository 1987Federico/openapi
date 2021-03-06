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
    root.NaranjaCustomerApiTesting.Limits2 = factory(root.NaranjaCustomerApiTesting.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Limits2 model module.
   * @module model/Limits2
   * @version 3.2.1
   */

  /**
   * Constructs a new <code>Limits2</code>.
   * @alias module:model/Limits2
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Limits2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Limits2} obj Optional instance to populate.
   * @return {module:model/Limits2} The populated <code>Limits2</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('monthly')) {
        obj['monthly'] = ApiClient.convertToType(data['monthly'], 'Number');
      }
      if (data.hasOwnProperty('zeta')) {
        obj['zeta'] = ApiClient.convertToType(data['zeta'], 'Number');
      }
      if (data.hasOwnProperty('cpl')) {
        obj['cpl'] = ApiClient.convertToType(data['cpl'], 'Number');
      }
      if (data.hasOwnProperty('etp')) {
        obj['etp'] = ApiClient.convertToType(data['etp'], 'Number');
      }
      if (data.hasOwnProperty('cplom')) {
        obj['cplom'] = ApiClient.convertToType(data['cplom'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} monthly
   */
  exports.prototype['monthly'] = undefined;
  /**
   * @member {Number} zeta
   */
  exports.prototype['zeta'] = undefined;
  /**
   * @member {Number} cpl
   */
  exports.prototype['cpl'] = undefined;
  /**
   * @member {Number} etp
   */
  exports.prototype['etp'] = undefined;
  /**
   * @member {Number} cplom
   */
  exports.prototype['cplom'] = undefined;



  return exports;
}));


