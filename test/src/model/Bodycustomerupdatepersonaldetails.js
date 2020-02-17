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
    define(['ApiClient', 'model/Bodycustomerupdatepersonaldetailsfiscaldata', 'model/Inlineresponse2002jobdetailsactivity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Bodycustomerupdatepersonaldetailsfiscaldata'), require('./Inlineresponse2002jobdetailsactivity'));
  } else {
    // Browser globals (root is window)
    if (!root.NaranjaCustomerApiTesting) {
      root.NaranjaCustomerApiTesting = {};
    }
    root.NaranjaCustomerApiTesting.Bodycustomerupdatepersonaldetails = factory(root.NaranjaCustomerApiTesting.ApiClient, root.NaranjaCustomerApiTesting.Bodycustomerupdatepersonaldetailsfiscaldata, root.NaranjaCustomerApiTesting.Inlineresponse2002jobdetailsactivity);
  }
}(this, function(ApiClient, Bodycustomerupdatepersonaldetailsfiscaldata, Inlineresponse2002jobdetailsactivity) {
  'use strict';



  /**
   * The Bodycustomerupdatepersonaldetails model module.
   * @module model/Bodycustomerupdatepersonaldetails
   * @version 3.2.1
   */

  /**
   * Constructs a new <code>Bodycustomerupdatepersonaldetails</code>.
   * @alias module:model/Bodycustomerupdatepersonaldetails
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Bodycustomerupdatepersonaldetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Bodycustomerupdatepersonaldetails} obj Optional instance to populate.
   * @return {module:model/Bodycustomerupdatepersonaldetails} The populated <code>Bodycustomerupdatepersonaldetails</code> instance.
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
        obj['identity_document'] = Inlineresponse2002jobdetailsactivity.constructFromObject(data['identity_document']);
      }
      if (data.hasOwnProperty('gender')) {
        obj['gender'] = ApiClient.convertToType(data['gender'], 'String');
      }
      if (data.hasOwnProperty('birth_date')) {
        obj['birth_date'] = ApiClient.convertToType(data['birth_date'], 'String');
      }
      if (data.hasOwnProperty('is_retired')) {
        obj['is_retired'] = ApiClient.convertToType(data['is_retired'], 'Boolean');
      }
      if (data.hasOwnProperty('education_level')) {
        obj['education_level'] = Inlineresponse2002jobdetailsactivity.constructFromObject(data['education_level']);
      }
      if (data.hasOwnProperty('marital_status')) {
        obj['marital_status'] = Inlineresponse2002jobdetailsactivity.constructFromObject(data['marital_status']);
      }
      if (data.hasOwnProperty('fiscal_data')) {
        obj['fiscal_data'] = Bodycustomerupdatepersonaldetailsfiscaldata.constructFromObject(data['fiscal_data']);
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
   * @member {module:model/Inlineresponse2002jobdetailsactivity} identity_document
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
   * @member {Boolean} is_retired
   */
  exports.prototype['is_retired'] = undefined;
  /**
   * @member {module:model/Inlineresponse2002jobdetailsactivity} education_level
   */
  exports.prototype['education_level'] = undefined;
  /**
   * @member {module:model/Inlineresponse2002jobdetailsactivity} marital_status
   */
  exports.prototype['marital_status'] = undefined;
  /**
   * @member {module:model/Bodycustomerupdatepersonaldetailsfiscaldata} fiscal_data
   */
  exports.prototype['fiscal_data'] = undefined;



  return exports;
}));

