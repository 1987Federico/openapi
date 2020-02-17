# Tarjeta Naranja

NaranjaCustomerApiTesting - JavaScript client for naranja_customer_api_testing

Este SDK es generado automaticamente por el proyecto developer experience:

- API version: 3.2.1
- Package version: 3.2.1
- para mas informacion, porfavor visite  www.engineering.naranja.com

## Installation

Para inslar el sdk de manera remota puede ejecutar:

```shell
npm install naranja_customer_api_testing --save
```

##### Local development

Para usar la libreria de manera local ejecute el siguiente comando: 

```shell
npm install file:path_libreria
```
## Para comenzar a utilizar naranja_customer_api_testing coloque el siguiente codigo:

```javascript

var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix= "Token"

var api = new NaranjaCustomerApiTesting.DefaultApi()
var customerId = "customerId_example"; // {String} 
var cbuId = "cbuId_example"; // {String} 
api.deleteCustomerCbu(customerId, cbuId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});
==============================================================================================================

var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix= "Token"

var api = new NaranjaCustomerApiTesting.DefaultApi()
var customerId = "customerId_example"; // {String} 
api.getCustomer(customerId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
==============================================================================================================

var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix= "Token"

var api = new NaranjaCustomerApiTesting.DefaultApi()
var customerId = "customerId_example"; // {String} 
api.getCustomerAccount(customerId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
==============================================================================================================

var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix= "Token"

var api = new NaranjaCustomerApiTesting.DefaultApi()
var customerId = "customerId_example"; // {String} 
api.getCustomerAddresses(customerId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
==============================================================================================================

var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix= "Token"

var api = new NaranjaCustomerApiTesting.DefaultApi()
var customerId = "customerId_example"; // {String} 
api.getCustomerCbu(customerId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
==============================================================================================================

var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix= "Token"

var api = new NaranjaCustomerApiTesting.DefaultApi()
var customerId = "customerId_example"; // {String} 
api.getCustomerContactDetails(customerId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
==============================================================================================================

var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix= "Token"

var api = new NaranjaCustomerApiTesting.DefaultApi()
var customerId = "customerId_example"; // {String} 
api.getCustomerEmail(customerId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
==============================================================================================================

var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix= "Token"

var api = new NaranjaCustomerApiTesting.DefaultApi()
var customerId = "customerId_example"; // {String} 
api.getCustomerProducts(customerId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
==============================================================================================================

var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix= "Token"

var api = new NaranjaCustomerApiTesting.DefaultApi()
var customerId = "customerId_example"; // {String} 
api.getCustomerPropensity(customerId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
==============================================================================================================

var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix= "Token"

var api = new NaranjaCustomerApiTesting.DefaultApi()
var id = "id_example"; // {String} 
api.getFilter(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
==============================================================================================================

var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix= "Token"

var api = new NaranjaCustomerApiTesting.DefaultApi()
var customerId = "customerId_example"; // {String} 
var cbuentity = new NaranjaCustomerApiTesting.Cbuentity(); // {Cbuentity} 
api.postCustomerCbu(customerId, cbuentity).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});
==============================================================================================================

var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix= "Token"

var api = new NaranjaCustomerApiTesting.DefaultApi()
var postcbuvalidate = new NaranjaCustomerApiTesting.Postcbuvalidate(); // {Postcbuvalidate} 
api.postValidateCbu(postcbuvalidate).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
==============================================================================================================

var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix= "Token"

var api = new NaranjaCustomerApiTesting.DefaultApi()
var customerId = "customerId_example"; // {String} 
var bodycustomerupdate = new NaranjaCustomerApiTesting.Bodycustomerupdate(); // {Bodycustomerupdate} 
api.putCustomer(customerId, bodycustomerupdate).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});
==============================================================================================================

var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix= "Token"

var api = new NaranjaCustomerApiTesting.DefaultApi()
var customerId = "customerId_example"; // {String} 
var inputaddresses = new NaranjaCustomerApiTesting.Inputaddresses(); // {Inputaddresses} 
api.putCustomerAddresses(customerId, inputaddresses).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
==============================================================================================================

var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix= "Token"

var api = new NaranjaCustomerApiTesting.DefaultApi()
var categoryId = "categoryId_example"; // {String} 
var customerId = "customerId_example"; // {String} 
var inputaddress = new NaranjaCustomerApiTesting.Inputaddress(); // {Inputaddress} 
var opts = {
  'accept': "accept_example" // {String} 
};
api.putCustomerAdresses(categoryId, customerId, inputaddress, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
==============================================================================================================

var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix= "Token"

var api = new NaranjaCustomerApiTesting.DefaultApi()
var customerId = "customerId_example"; // {String} 
var inputcontactdetails = new NaranjaCustomerApiTesting.Inputcontactdetails(); // {Inputcontactdetails} 
api.putCustomerContactDetails(customerId, inputcontactdetails).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
==============================================================================================================

var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix= "Token"

var api = new NaranjaCustomerApiTesting.DefaultApi()
var customerId = "customerId_example"; // {String} 
var inputemail = new NaranjaCustomerApiTesting.Inputemail(); // {Inputemail} 
var opts = {
  'accept': "accept_example" // {String} 
};
api.putCustomerEmail(customerId, inputemail, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
==============================================================================================================

var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix= "Token"

var api = new NaranjaCustomerApiTesting.DefaultApi()
var categoryId = "categoryId_example"; // {String} 
var customerId = "customerId_example"; // {String} 
var inputemailcategory = new NaranjaCustomerApiTesting.Inputemailcategory(); // {Inputemailcategory} 
var opts = {
  'accept': "accept_example" // {String} 
};
api.putCustomerEmails(categoryId, customerId, inputemailcategory, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
==============================================================================================================

var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix= "Token"

var api = new NaranjaCustomerApiTesting.DefaultApi()
var categoryId = "categoryId_example"; // {String} 
var customerId = "customerId_example"; // {String} 
var phoneTypeId = "phoneTypeId_example"; // {String} 
var inputphone = new NaranjaCustomerApiTesting.Inputphone(); // {Inputphone} 
var opts = {
  'accept': "accept_example" // {String} 
};
api.putCustomerPhone(categoryId, customerId, phoneTypeId, inputphone, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
==============================================================================================================

```
## Documentation for API Endpoints

Todas las URIs son relativas para *https://mservicios-testing.mservicios.awsnaranja.com/customers-ms*

Clase | Metodo | Path | Description
------------ | ------------- | ------------- | -------------

  *NaranjaCustomerApiTesting.DefaultApi* | [**apiHealthLivenessGet**](docs/DefaultApi.md#apiHealthLivenessGet) | **GET** /api/health/liveness 

  *NaranjaCustomerApiTesting.DefaultApi* | [**apiHealthReadinessGet**](docs/DefaultApi.md#apiHealthReadinessGet) | **GET** /api/health/readiness 

  *NaranjaCustomerApiTesting.DefaultApi* | [**deleteCustomerCbu**](docs/DefaultApi.md#deleteCustomerCbu) | **DELETE** /api/customers/{customer_id}/cbus/{cbu_id} 

  *NaranjaCustomerApiTesting.DefaultApi* | [**getCustomer**](docs/DefaultApi.md#getCustomer) | **GET** /api/customers/{customer_id} 

  *NaranjaCustomerApiTesting.DefaultApi* | [**getCustomerAccount**](docs/DefaultApi.md#getCustomerAccount) | **GET** /api/customers/{customer_id}/account 

  *NaranjaCustomerApiTesting.DefaultApi* | [**getCustomerAddresses**](docs/DefaultApi.md#getCustomerAddresses) | **GET** /api/customers/{customer_id}/contact_details/addresses 

  *NaranjaCustomerApiTesting.DefaultApi* | [**getCustomerCbu**](docs/DefaultApi.md#getCustomerCbu) | **GET** /api/customers/{customer_id}/cbus 

  *NaranjaCustomerApiTesting.DefaultApi* | [**getCustomerContactDetails**](docs/DefaultApi.md#getCustomerContactDetails) | **GET** /api/customers/{customer_id}/contact_details 

  *NaranjaCustomerApiTesting.DefaultApi* | [**getCustomerEmail**](docs/DefaultApi.md#getCustomerEmail) | **GET** /api/customers/{customer_id}/contact_details/emails 

  *NaranjaCustomerApiTesting.DefaultApi* | [**getCustomerProducts**](docs/DefaultApi.md#getCustomerProducts) | **GET** /api/customers/{customer_id}/products 

  *NaranjaCustomerApiTesting.DefaultApi* | [**getCustomerPropensity**](docs/DefaultApi.md#getCustomerPropensity) | **GET** /api/customers/{customer_id}/propensity 

  *NaranjaCustomerApiTesting.DefaultApi* | [**getFilter**](docs/DefaultApi.md#getFilter) | **GET** /api/customers/filter 

  *NaranjaCustomerApiTesting.DefaultApi* | [**postCustomerCbu**](docs/DefaultApi.md#postCustomerCbu) | **POST** /api/customers/{customer_id}/cbus 

  *NaranjaCustomerApiTesting.DefaultApi* | [**postValidateCbu**](docs/DefaultApi.md#postValidateCbu) | **POST** /api/customers/cbu/validate 

  *NaranjaCustomerApiTesting.DefaultApi* | [**putCustomer**](docs/DefaultApi.md#putCustomer) | **PUT** /api/customers/{customer_id} 

  *NaranjaCustomerApiTesting.DefaultApi* | [**putCustomerAddresses**](docs/DefaultApi.md#putCustomerAddresses) | **PUT** /api/customers/{customer_id}/contact_details/addresses 

  *NaranjaCustomerApiTesting.DefaultApi* | [**putCustomerAdresses**](docs/DefaultApi.md#putCustomerAdresses) | **PUT** /api/customers/{customer_id}/contact_details/addresses/{category_id} 

  *NaranjaCustomerApiTesting.DefaultApi* | [**putCustomerContactDetails**](docs/DefaultApi.md#putCustomerContactDetails) | **PUT** /api/customers/{customer_id}/contact_details 

  *NaranjaCustomerApiTesting.DefaultApi* | [**putCustomerEmail**](docs/DefaultApi.md#putCustomerEmail) | **PUT** /api/customers/{customer_id}/contact_details/emails 

  *NaranjaCustomerApiTesting.DefaultApi* | [**putCustomerEmails**](docs/DefaultApi.md#putCustomerEmails) | **PUT** /api/customers/{customer_id}/contact_details/emails/{category_id} 

  *NaranjaCustomerApiTesting.DefaultApi* | [**putCustomerPhone**](docs/DefaultApi.md#putCustomerPhone) | **PUT** /api/customers/{customer_id}/contact_details/phones/{phone_type_id}/{category_id} 

  *NaranjaCustomerApiTesting.DefaultApi* | [**versionGet**](docs/DefaultApi.md#versionGet) | **GET** /version 

## Documentacion para la Authorization

### naranjaAuthorizer
  - **Type**: API key
  - **API key parameter name**: Authorization
  - **Location**: HTTP header
