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
    root.NaranjaCustomerApiTesting.Propensities = factory(root.NaranjaCustomerApiTesting.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Propensities model module.
   * @module model/Propensities
   * @version 3.2.1
   */

  /**
   * Constructs a new <code>Propensities</code>.
   * @alias module:model/Propensities
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Propensities</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Propensities} obj Optional instance to populate.
   * @return {module:model/Propensities} The populated <code>Propensities</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('product_description')) {
        obj['product_description'] = ApiClient.convertToType(data['product_description'], 'String');
      }
      if (data.hasOwnProperty('visualization_priority')) {
        obj['visualization_priority'] = ApiClient.convertToType(data['visualization_priority'], 'String');
      }
      if (data.hasOwnProperty('propensity')) {
        obj['propensity'] = ApiClient.convertToType(data['propensity'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} product_description
   */
  exports.prototype['product_description'] = undefined;
  /**
   * @member {String} visualization_priority
   */
  exports.prototype['visualization_priority'] = undefined;
  /**
   * @member {String} propensity
   */
  exports.prototype['propensity'] = undefined;



  return exports;
}));


