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
    define(['ApiClient', 'model/Customerscustomeridcontactdetailsaddressescategoryidcity', 'model/Personaldetails2banks', 'model/Personaldetails2fiscaldata', 'model/Personaldetails2identitydocument'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Customerscustomeridcontactdetailsaddressescategoryidcity'), require('./Personaldetails2banks'), require('./Personaldetails2fiscaldata'), require('./Personaldetails2identitydocument'));
  } else {
    // Browser globals (root is window)
    if (!root.NaranjaCustomerApiTesting) {
      root.NaranjaCustomerApiTesting = {};
    }
    root.NaranjaCustomerApiTesting.Personaldetails2 = factory(root.NaranjaCustomerApiTesting.ApiClient, root.NaranjaCustomerApiTesting.Customerscustomeridcontactdetailsaddressescategoryidcity, root.NaranjaCustomerApiTesting.Personaldetails2banks, root.NaranjaCustomerApiTesting.Personaldetails2fiscaldata, root.NaranjaCustomerApiTesting.Personaldetails2identitydocument);
  }
}(this, function(ApiClient, Customerscustomeridcontactdetailsaddressescategoryidcity, Personaldetails2banks, Personaldetails2fiscaldata, Personaldetails2identitydocument) {
  'use strict';



  /**
   * The Personaldetails2 model module.
   * @module model/Personaldetails2
   * @version 3.2.1
   */

  /**
   * Constructs a new <code>Personaldetails2</code>.
   * @alias module:model/Personaldetails2
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Personaldetails2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Personaldetails2} obj Optional instance to populate.
   * @return {module:model/Personaldetails2} The populated <code>Personaldetails2</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('last_name')) {
        obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('identity_document')) {
        obj['identity_document'] = Personaldetails2identitydocument.constructFromObject(data['identity_document']);
      }
      if (data.hasOwnProperty('gender')) {
        obj['gender'] = ApiClient.convertToType(data['gender'], 'String');
      }
      if (data.hasOwnProperty('birth_date')) {
        obj['birth_date'] = ApiClient.convertToType(data['birth_date'], 'String');
      }
      if (data.hasOwnProperty('education_level')) {
        obj['education_level'] = Customerscustomeridcontactdetailsaddressescategoryidcity.constructFromObject(data['education_level']);
      }
      if (data.hasOwnProperty('marital_status')) {
        obj['marital_status'] = Customerscustomeridcontactdetailsaddressescategoryidcity.constructFromObject(data['marital_status']);
      }
      if (data.hasOwnProperty('children')) {
        obj['children'] = ApiClient.convertToType(data['children'], 'Number');
      }
      if (data.hasOwnProperty('property_code')) {
        obj['property_code'] = ApiClient.convertToType(data['property_code'], 'Number');
      }
      if (data.hasOwnProperty('banks')) {
        obj['banks'] = ApiClient.convertToType(data['banks'], [Personaldetails2banks]);
      }
      if (data.hasOwnProperty('fiscal_data')) {
        obj['fiscal_data'] = Personaldetails2fiscaldata.constructFromObject(data['fiscal_data']);
      }
      if (data.hasOwnProperty('relationship_code')) {
        obj['relationship_code'] = ApiClient.convertToType(data['relationship_code'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} last_name
   */
  exports.prototype['last_name'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/Personaldetails2identitydocument} identity_document
   */
  exports.prototype['identity_document'] = undefined;
  /**
   * @member {String} gender
   */
  exports.prototype['gender'] = undefined;
  /**
   * @member {String} birth_date
   */
  exports.prototype['birth_date'] = undefined;
  /**
   * @member {module:model/Customerscustomeridcontactdetailsaddressescategoryidcity} education_level
   */
  exports.prototype['education_level'] = undefined;
  /**
   * @member {module:model/Customerscustomeridcontactdetailsaddressescategoryidcity} marital_status
   */
  exports.prototype['marital_status'] = undefined;
  /**
   * @member {Number} children
   */
  exports.prototype['children'] = undefined;
  /**
   * @member {Number} property_code
   */
  exports.prototype['property_code'] = undefined;
  /**
   * @member {Array.<module:model/Personaldetails2banks>} banks
   */
  exports.prototype['banks'] = undefined;
  /**
   * @member {module:model/Personaldetails2fiscaldata} fiscal_data
   */
  exports.prototype['fiscal_data'] = undefined;
  /**
   * @member {String} relationship_code
   */
  exports.prototype['relationship_code'] = undefined;



  return exports;
}));


