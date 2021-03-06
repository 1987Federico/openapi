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
    define(['ApiClient', 'model/Accountopenning', 'model/Customerscustomeridcontactdetailsaddressescategoryidcity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Accountopenning'), require('./Customerscustomeridcontactdetailsaddressescategoryidcity'));
  } else {
    // Browser globals (root is window)
    if (!root.NaranjaCustomerApiTesting) {
      root.NaranjaCustomerApiTesting = {};
    }
    root.NaranjaCustomerApiTesting.Account2 = factory(root.NaranjaCustomerApiTesting.ApiClient, root.NaranjaCustomerApiTesting.Accountopenning, root.NaranjaCustomerApiTesting.Customerscustomeridcontactdetailsaddressescategoryidcity);
  }
}(this, function(ApiClient, Accountopenning, Customerscustomeridcontactdetailsaddressescategoryidcity) {
  'use strict';



  /**
   * The Account2 model module.
   * @module model/Account2
   * @version 3.2.1
   */

  /**
   * Constructs a new <code>Account2</code>.
   * @alias module:model/Account2
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Account2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Account2} obj Optional instance to populate.
   * @return {module:model/Account2} The populated <code>Account2</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('open_date')) {
        obj['open_date'] = ApiClient.convertToType(data['open_date'], 'String');
      }
      if (data.hasOwnProperty('leaving_date')) {
        obj['leaving_date'] = ApiClient.convertToType(data['leaving_date'], 'String');
      }
      if (data.hasOwnProperty('pack')) {
        obj['pack'] = Customerscustomeridcontactdetailsaddressescategoryidcity.constructFromObject(data['pack']);
      }
      if (data.hasOwnProperty('source_branch')) {
        obj['source_branch'] = Customerscustomeridcontactdetailsaddressescategoryidcity.constructFromObject(data['source_branch']);
      }
      if (data.hasOwnProperty('employee_id')) {
        obj['employee_id'] = ApiClient.convertToType(data['employee_id'], 'Number');
      }
      if (data.hasOwnProperty('affinity_branch_number')) {
        obj['affinity_branch_number'] = ApiClient.convertToType(data['affinity_branch_number'], 'Number');
      }
      if (data.hasOwnProperty('affinity_description')) {
        obj['affinity_description'] = ApiClient.convertToType(data['affinity_description'], 'String');
      }
      if (data.hasOwnProperty('portfolio')) {
        obj['portfolio'] = Customerscustomeridcontactdetailsaddressescategoryidcity.constructFromObject(data['portfolio']);
      }
      if (data.hasOwnProperty('insurance_company')) {
        obj['insurance_company'] = Customerscustomeridcontactdetailsaddressescategoryidcity.constructFromObject(data['insurance_company']);
      }
      if (data.hasOwnProperty('card')) {
        obj['card'] = Customerscustomeridcontactdetailsaddressescategoryidcity.constructFromObject(data['card']);
      }
      if (data.hasOwnProperty('cancellation_reason')) {
        obj['cancellation_reason'] = Customerscustomeridcontactdetailsaddressescategoryidcity.constructFromObject(data['cancellation_reason']);
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('company_code')) {
        obj['company_code'] = ApiClient.convertToType(data['company_code'], 'String');
      }
      if (data.hasOwnProperty('openning')) {
        obj['openning'] = Accountopenning.constructFromObject(data['openning']);
      }
      if (data.hasOwnProperty('has_limit')) {
        obj['has_limit'] = ApiClient.convertToType(data['has_limit'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} open_date
   */
  exports.prototype['open_date'] = undefined;
  /**
   * @member {String} leaving_date
   */
  exports.prototype['leaving_date'] = undefined;
  /**
   * @member {module:model/Customerscustomeridcontactdetailsaddressescategoryidcity} pack
   */
  exports.prototype['pack'] = undefined;
  /**
   * @member {module:model/Customerscustomeridcontactdetailsaddressescategoryidcity} source_branch
   */
  exports.prototype['source_branch'] = undefined;
  /**
   * @member {Number} employee_id
   */
  exports.prototype['employee_id'] = undefined;
  /**
   * @member {Number} affinity_branch_number
   */
  exports.prototype['affinity_branch_number'] = undefined;
  /**
   * @member {String} affinity_description
   */
  exports.prototype['affinity_description'] = undefined;
  /**
   * @member {module:model/Customerscustomeridcontactdetailsaddressescategoryidcity} portfolio
   */
  exports.prototype['portfolio'] = undefined;
  /**
   * @member {module:model/Customerscustomeridcontactdetailsaddressescategoryidcity} insurance_company
   */
  exports.prototype['insurance_company'] = undefined;
  /**
   * @member {module:model/Customerscustomeridcontactdetailsaddressescategoryidcity} card
   */
  exports.prototype['card'] = undefined;
  /**
   * @member {module:model/Customerscustomeridcontactdetailsaddressescategoryidcity} cancellation_reason
   */
  exports.prototype['cancellation_reason'] = undefined;
  /**
   * @member {String} category
   */
  exports.prototype['category'] = undefined;
  /**
   * @member {String} company_code
   */
  exports.prototype['company_code'] = undefined;
  /**
   * @member {module:model/Accountopenning} openning
   */
  exports.prototype['openning'] = undefined;
  /**
   * @member {Boolean} has_limit
   */
  exports.prototype['has_limit'] = undefined;



  return exports;
}));


