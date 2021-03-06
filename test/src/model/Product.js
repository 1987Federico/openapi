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
    define(['ApiClient', 'model/Productproductgroup'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Productproductgroup'));
  } else {
    // Browser globals (root is window)
    if (!root.NaranjaCustomerApiTesting) {
      root.NaranjaCustomerApiTesting = {};
    }
    root.NaranjaCustomerApiTesting.Product = factory(root.NaranjaCustomerApiTesting.ApiClient, root.NaranjaCustomerApiTesting.Productproductgroup);
  }
}(this, function(ApiClient, Productproductgroup) {
  'use strict';



  /**
   * The Product model module.
   * @module model/Product
   * @version 3.2.1
   */

  /**
   * Constructs a new <code>Product</code>.
   * @alias module:model/Product
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Product</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Product} obj Optional instance to populate.
   * @return {module:model/Product} The populated <code>Product</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], 'String');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'String');
      }
      if (data.hasOwnProperty('attached')) {
        obj['attached'] = ApiClient.convertToType(data['attached'], 'String');
      }
      if (data.hasOwnProperty('rol')) {
        obj['rol'] = ApiClient.convertToType(data['rol'], 'String');
      }
      if (data.hasOwnProperty('product_group')) {
        obj['product_group'] = Productproductgroup.constructFromObject(data['product_group']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} details
   */
  exports.prototype['details'] = undefined;
  /**
   * @member {String} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * @member {String} attached
   */
  exports.prototype['attached'] = undefined;
  /**
   * @member {module:model/Product.RolEnum} rol
   */
  exports.prototype['rol'] = undefined;
  /**
   * @member {module:model/Productproductgroup} product_group
   */
  exports.prototype['product_group'] = undefined;


  /**
   * Allowed values for the <code>rol</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RolEnum = {
    /**
     * value: "T"
     * @const
     */
    "T": "T",
    /**
     * value: "A"
     * @const
     */
    "A": "A"  };


  return exports;
}));


