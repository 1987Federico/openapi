# NaranjaCustomerApiTesting.DefaultApi

All URIs are relative to *https://mservicios-testing.mservicios.awsnaranja.com/customers-ms*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiHealthLivenessGet**](DefaultApi.md#apiHealthLivenessGet) | **GET** /api/health/liveness | 
[**apiHealthReadinessGet**](DefaultApi.md#apiHealthReadinessGet) | **GET** /api/health/readiness | 
[**deleteCustomerCbu**](DefaultApi.md#deleteCustomerCbu) | **DELETE** /api/customers/{customer_id}/cbus/{cbu_id} | 
[**getCustomer**](DefaultApi.md#getCustomer) | **GET** /api/customers/{customer_id} | 
[**getCustomerAccount**](DefaultApi.md#getCustomerAccount) | **GET** /api/customers/{customer_id}/account | 
[**getCustomerAddresses**](DefaultApi.md#getCustomerAddresses) | **GET** /api/customers/{customer_id}/contact_details/addresses | 
[**getCustomerCbu**](DefaultApi.md#getCustomerCbu) | **GET** /api/customers/{customer_id}/cbus | 
[**getCustomerContactDetails**](DefaultApi.md#getCustomerContactDetails) | **GET** /api/customers/{customer_id}/contact_details | 
[**getCustomerEmail**](DefaultApi.md#getCustomerEmail) | **GET** /api/customers/{customer_id}/contact_details/emails | 
[**getCustomerProducts**](DefaultApi.md#getCustomerProducts) | **GET** /api/customers/{customer_id}/products | 
[**getCustomerPropensity**](DefaultApi.md#getCustomerPropensity) | **GET** /api/customers/{customer_id}/propensity | 
[**getFilter**](DefaultApi.md#getFilter) | **GET** /api/customers/filter | 
[**postCustomerCbu**](DefaultApi.md#postCustomerCbu) | **POST** /api/customers/{customer_id}/cbus | 
[**postValidateCbu**](DefaultApi.md#postValidateCbu) | **POST** /api/customers/cbu/validate | 
[**putCustomer**](DefaultApi.md#putCustomer) | **PUT** /api/customers/{customer_id} | 
[**putCustomerAddresses**](DefaultApi.md#putCustomerAddresses) | **PUT** /api/customers/{customer_id}/contact_details/addresses | 
[**putCustomerAdresses**](DefaultApi.md#putCustomerAdresses) | **PUT** /api/customers/{customer_id}/contact_details/addresses/{category_id} | 
[**putCustomerContactDetails**](DefaultApi.md#putCustomerContactDetails) | **PUT** /api/customers/{customer_id}/contact_details | 
[**putCustomerEmail**](DefaultApi.md#putCustomerEmail) | **PUT** /api/customers/{customer_id}/contact_details/emails | 
[**putCustomerEmails**](DefaultApi.md#putCustomerEmails) | **PUT** /api/customers/{customer_id}/contact_details/emails/{category_id} | 
[**putCustomerPhone**](DefaultApi.md#putCustomerPhone) | **PUT** /api/customers/{customer_id}/contact_details/phones/{phone_type_id}/{category_id} | 
[**versionGet**](DefaultApi.md#versionGet) | **GET** /version | 



## apiHealthLivenessGet

> apiHealthLivenessGet()



### Example

```javascript
var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');

var apiInstance = new NaranjaCustomerApiTesting.DefaultApi();
apiInstance.apiHealthLivenessGet().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## apiHealthReadinessGet

> apiHealthReadinessGet()



### Example

```javascript
var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');

var apiInstance = new NaranjaCustomerApiTesting.DefaultApi();
apiInstance.apiHealthReadinessGet().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCustomerCbu

> deleteCustomerCbu(customerId, cbuId)



### Example

```javascript
var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix = 'Token';

var apiInstance = new NaranjaCustomerApiTesting.DefaultApi();
var customerId = "customerId_example"; // String | 
var cbuId = "cbuId_example"; // String | 
apiInstance.deleteCustomerCbu(customerId, cbuId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 
 **cbuId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[naranjaAuthorizer](../README.md#naranjaAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomer

> Customer getCustomer(customerId)



### Example

```javascript
var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix = 'Token';

var apiInstance = new NaranjaCustomerApiTesting.DefaultApi();
var customerId = "customerId_example"; // String | 
apiInstance.getCustomer(customerId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 

### Return type

[**Customer**](Customer.md)

### Authorization

[naranjaAuthorizer](../README.md#naranjaAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomerAccount

> Inlineresponse2002 getCustomerAccount(customerId)



### Example

```javascript
var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix = 'Token';

var apiInstance = new NaranjaCustomerApiTesting.DefaultApi();
var customerId = "customerId_example"; // String | 
apiInstance.getCustomerAccount(customerId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 

### Return type

[**Inlineresponse2002**](Inlineresponse2002.md)

### Authorization

[naranjaAuthorizer](../README.md#naranjaAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomerAddresses

> Inlineresponse2003 getCustomerAddresses(customerId)



### Example

```javascript
var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix = 'Token';

var apiInstance = new NaranjaCustomerApiTesting.DefaultApi();
var customerId = "customerId_example"; // String | 
apiInstance.getCustomerAddresses(customerId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 

### Return type

[**Inlineresponse2003**](Inlineresponse2003.md)

### Authorization

[naranjaAuthorizer](../README.md#naranjaAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomerCbu

> Getcbu200 getCustomerCbu(customerId)



### Example

```javascript
var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix = 'Token';

var apiInstance = new NaranjaCustomerApiTesting.DefaultApi();
var customerId = "customerId_example"; // String | 
apiInstance.getCustomerCbu(customerId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 

### Return type

[**Getcbu200**](Getcbu200.md)

### Authorization

[naranjaAuthorizer](../README.md#naranjaAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomerContactDetails

> Inlineresponse2006 getCustomerContactDetails(customerId)



### Example

```javascript
var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix = 'Token';

var apiInstance = new NaranjaCustomerApiTesting.DefaultApi();
var customerId = "customerId_example"; // String | 
apiInstance.getCustomerContactDetails(customerId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 

### Return type

[**Inlineresponse2006**](Inlineresponse2006.md)

### Authorization

[naranjaAuthorizer](../README.md#naranjaAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomerEmail

> Inlineresponse2007 getCustomerEmail(customerId)



### Example

```javascript
var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix = 'Token';

var apiInstance = new NaranjaCustomerApiTesting.DefaultApi();
var customerId = "customerId_example"; // String | 
apiInstance.getCustomerEmail(customerId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 

### Return type

[**Inlineresponse2007**](Inlineresponse2007.md)

### Authorization

[naranjaAuthorizer](../README.md#naranjaAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomerProducts

> Inlineresponse2001 getCustomerProducts(customerId)



### Example

```javascript
var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix = 'Token';

var apiInstance = new NaranjaCustomerApiTesting.DefaultApi();
var customerId = "customerId_example"; // String | 
apiInstance.getCustomerProducts(customerId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 

### Return type

[**Inlineresponse2001**](Inlineresponse2001.md)

### Authorization

[naranjaAuthorizer](../README.md#naranjaAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomerPropensity

> Inlineresponse200 getCustomerPropensity(customerId)



### Example

```javascript
var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix = 'Token';

var apiInstance = new NaranjaCustomerApiTesting.DefaultApi();
var customerId = "customerId_example"; // String | 
apiInstance.getCustomerPropensity(customerId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 

### Return type

[**Inlineresponse200**](Inlineresponse200.md)

### Authorization

[naranjaAuthorizer](../README.md#naranjaAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFilter

> Inlineresponse2005 getFilter(id)



### Example

```javascript
var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix = 'Token';

var apiInstance = new NaranjaCustomerApiTesting.DefaultApi();
var id = "id_example"; // String | 
apiInstance.getFilter(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**Inlineresponse2005**](Inlineresponse2005.md)

### Authorization

[naranjaAuthorizer](../README.md#naranjaAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postCustomerCbu

> postCustomerCbu(customerId, cbuentity)



### Example

```javascript
var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix = 'Token';

var apiInstance = new NaranjaCustomerApiTesting.DefaultApi();
var customerId = "customerId_example"; // String | 
var cbuentity = new NaranjaCustomerApiTesting.Cbuentity(); // Cbuentity | 
apiInstance.postCustomerCbu(customerId, cbuentity).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 
 **cbuentity** | [**Cbuentity**](Cbuentity.md)|  | 

### Return type

null (empty response body)

### Authorization

[naranjaAuthorizer](../README.md#naranjaAuthorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postValidateCbu

> Postcbuvalidate200 postValidateCbu(postcbuvalidate)



### Example

```javascript
var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix = 'Token';

var apiInstance = new NaranjaCustomerApiTesting.DefaultApi();
var postcbuvalidate = new NaranjaCustomerApiTesting.Postcbuvalidate(); // Postcbuvalidate | 
apiInstance.postValidateCbu(postcbuvalidate).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postcbuvalidate** | [**Postcbuvalidate**](Postcbuvalidate.md)|  | 

### Return type

[**Postcbuvalidate200**](Postcbuvalidate200.md)

### Authorization

[naranjaAuthorizer](../README.md#naranjaAuthorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putCustomer

> putCustomer(customerId, bodycustomerupdate)



### Example

```javascript
var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix = 'Token';

var apiInstance = new NaranjaCustomerApiTesting.DefaultApi();
var customerId = "customerId_example"; // String | 
var bodycustomerupdate = new NaranjaCustomerApiTesting.Bodycustomerupdate(); // Bodycustomerupdate | 
apiInstance.putCustomer(customerId, bodycustomerupdate).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 
 **bodycustomerupdate** | [**Bodycustomerupdate**](Bodycustomerupdate.md)|  | 

### Return type

null (empty response body)

### Authorization

[naranjaAuthorizer](../README.md#naranjaAuthorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putCustomerAddresses

> Inlineresponse2004 putCustomerAddresses(customerId, inputaddresses)



### Example

```javascript
var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix = 'Token';

var apiInstance = new NaranjaCustomerApiTesting.DefaultApi();
var customerId = "customerId_example"; // String | 
var inputaddresses = new NaranjaCustomerApiTesting.Inputaddresses(); // Inputaddresses | 
apiInstance.putCustomerAddresses(customerId, inputaddresses).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 
 **inputaddresses** | [**Inputaddresses**](Inputaddresses.md)|  | 

### Return type

[**Inlineresponse2004**](Inlineresponse2004.md)

### Authorization

[naranjaAuthorizer](../README.md#naranjaAuthorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putCustomerAdresses

> Inlineresponse2004 putCustomerAdresses(categoryId, customerId, inputaddress, opts)



### Example

```javascript
var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix = 'Token';

var apiInstance = new NaranjaCustomerApiTesting.DefaultApi();
var categoryId = "categoryId_example"; // String | 
var customerId = "customerId_example"; // String | 
var inputaddress = new NaranjaCustomerApiTesting.Inputaddress(); // Inputaddress | 
var opts = {
  'accept': "accept_example" // String | 
};
apiInstance.putCustomerAdresses(categoryId, customerId, inputaddress, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **String**|  | 
 **customerId** | **String**|  | 
 **inputaddress** | [**Inputaddress**](Inputaddress.md)|  | 
 **accept** | **String**|  | [optional] 

### Return type

[**Inlineresponse2004**](Inlineresponse2004.md)

### Authorization

[naranjaAuthorizer](../README.md#naranjaAuthorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putCustomerContactDetails

> Inlineresponse2004 putCustomerContactDetails(customerId, inputcontactdetails)



### Example

```javascript
var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix = 'Token';

var apiInstance = new NaranjaCustomerApiTesting.DefaultApi();
var customerId = "customerId_example"; // String | 
var inputcontactdetails = new NaranjaCustomerApiTesting.Inputcontactdetails(); // Inputcontactdetails | 
apiInstance.putCustomerContactDetails(customerId, inputcontactdetails).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 
 **inputcontactdetails** | [**Inputcontactdetails**](Inputcontactdetails.md)|  | 

### Return type

[**Inlineresponse2004**](Inlineresponse2004.md)

### Authorization

[naranjaAuthorizer](../README.md#naranjaAuthorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putCustomerEmail

> Inlineresponse2004 putCustomerEmail(customerId, inputemail, opts)



### Example

```javascript
var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix = 'Token';

var apiInstance = new NaranjaCustomerApiTesting.DefaultApi();
var customerId = "customerId_example"; // String | 
var inputemail = new NaranjaCustomerApiTesting.Inputemail(); // Inputemail | 
var opts = {
  'accept': "accept_example" // String | 
};
apiInstance.putCustomerEmail(customerId, inputemail, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 
 **inputemail** | [**Inputemail**](Inputemail.md)|  | 
 **accept** | **String**|  | [optional] 

### Return type

[**Inlineresponse2004**](Inlineresponse2004.md)

### Authorization

[naranjaAuthorizer](../README.md#naranjaAuthorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putCustomerEmails

> Inlineresponse2008 putCustomerEmails(categoryId, customerId, inputemailcategory, opts)



### Example

```javascript
var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix = 'Token';

var apiInstance = new NaranjaCustomerApiTesting.DefaultApi();
var categoryId = "categoryId_example"; // String | 
var customerId = "customerId_example"; // String | 
var inputemailcategory = new NaranjaCustomerApiTesting.Inputemailcategory(); // Inputemailcategory | 
var opts = {
  'accept': "accept_example" // String | 
};
apiInstance.putCustomerEmails(categoryId, customerId, inputemailcategory, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **String**|  | 
 **customerId** | **String**|  | 
 **inputemailcategory** | [**Inputemailcategory**](Inputemailcategory.md)|  | 
 **accept** | **String**|  | [optional] 

### Return type

[**Inlineresponse2008**](Inlineresponse2008.md)

### Authorization

[naranjaAuthorizer](../README.md#naranjaAuthorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putCustomerPhone

> Inlineresponse2008 putCustomerPhone(categoryId, customerId, phoneTypeId, inputphone, opts)



### Example

```javascript
var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix = 'Token';

var apiInstance = new NaranjaCustomerApiTesting.DefaultApi();
var categoryId = "categoryId_example"; // String | 
var customerId = "customerId_example"; // String | 
var phoneTypeId = "phoneTypeId_example"; // String | 
var inputphone = new NaranjaCustomerApiTesting.Inputphone(); // Inputphone | 
var opts = {
  'accept': "accept_example" // String | 
};
apiInstance.putCustomerPhone(categoryId, customerId, phoneTypeId, inputphone, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **String**|  | 
 **customerId** | **String**|  | 
 **phoneTypeId** | **String**|  | 
 **inputphone** | [**Inputphone**](Inputphone.md)|  | 
 **accept** | **String**|  | [optional] 

### Return type

[**Inlineresponse2008**](Inlineresponse2008.md)

### Authorization

[naranjaAuthorizer](../README.md#naranjaAuthorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## versionGet

> versionGet()



### Example

```javascript
var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');

var apiInstance = new NaranjaCustomerApiTesting.DefaultApi();
apiInstance.versionGet().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


