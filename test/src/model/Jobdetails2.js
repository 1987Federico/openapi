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
    define(['ApiClient', 'model/Customerscustomeridcontactdetailsaddressescategoryidcity', 'model/Jobdetailscompany', 'model/Jobdetailssalary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Customerscustomeridcontactdetailsaddressescategoryidcity'), require('./Jobdetailscompany'), require('./Jobdetailssalary'));
  } else {
    // Browser globals (root is window)
    if (!root.NaranjaCustomerApiTesting) {
      root.NaranjaCustomerApiTesting = {};
    }
    root.NaranjaCustomerApiTesting.Jobdetails2 = factory(root.NaranjaCustomerApiTesting.ApiClient, root.NaranjaCustomerApiTesting.Customerscustomeridcontactdetailsaddressescategoryidcity, root.NaranjaCustomerApiTesting.Jobdetailscompany, root.NaranjaCustomerApiTesting.Jobdetailssalary);
  }
}(this, function(ApiClient, Customerscustomeridcontactdetailsaddressescategoryidcity, Jobdetailscompany, Jobdetailssalary) {
  'use strict';



  /**
   * The Jobdetails2 model module.
   * @module model/Jobdetails2
   * @version 3.2.1
   */

  /**
   * Constructs a new <code>Jobdetails2</code>.
   * @alias module:model/Jobdetails2
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Jobdetails2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Jobdetails2} obj Optional instance to populate.
   * @return {module:model/Jobdetails2} The populated <code>Jobdetails2</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = Jobdetailscompany.constructFromObject(data['company']);
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = Customerscustomeridcontactdetailsaddressescategoryidcity.constructFromObject(data['position']);
      }
      if (data.hasOwnProperty('freelancer')) {
        obj['freelancer'] = ApiClient.convertToType(data['freelancer'], 'Boolean');
      }
      if (data.hasOwnProperty('is_employed')) {
        obj['is_employed'] = ApiClient.convertToType(data['is_employed'], 'Boolean');
      }
      if (data.hasOwnProperty('labor_seniority')) {
        obj['labor_seniority'] = ApiClient.convertToType(data['labor_seniority'], 'Boolean');
      }
      if (data.hasOwnProperty('salary')) {
        obj['salary'] = Jobdetailssalary.constructFromObject(data['salary']);
      }
      if (data.hasOwnProperty('has_own_house')) {
        obj['has_own_house'] = ApiClient.convertToType(data['has_own_house'], 'Boolean');
      }
      if (data.hasOwnProperty('has_own_car')) {
        obj['has_own_car'] = ApiClient.convertToType(data['has_own_car'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/Jobdetailscompany} company
   */
  exports.prototype['company'] = undefined;
  /**
   * @member {module:model/Customerscustomeridcontactdetailsaddressescategoryidcity} position
   */
  exports.prototype['position'] = undefined;
  /**
   * @member {Boolean} freelancer
   */
  exports.prototype['freelancer'] = undefined;
  /**
   * @member {Boolean} is_employed
   */
  exports.prototype['is_employed'] = undefined;
  /**
   * @member {Boolean} labor_seniority
   */
  exports.prototype['labor_seniority'] = undefined;
  /**
   * @member {module:model/Jobdetailssalary} salary
   */
  exports.prototype['salary'] = undefined;
  /**
   * @member {Boolean} has_own_house
   */
  exports.prototype['has_own_house'] = undefined;
  /**
   * @member {Boolean} has_own_car
   */
  exports.prototype['has_own_car'] = undefined;



  return exports;
}));

