//var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
//var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
//// Configure API key authorization: naranjaAuthorizer
//var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
//naranjaAuthorizer.apiKey = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjEifQ.eyJpc3MiOiJhcGljIiwiYXVkIjoiYXBpYyIsImV4cCI6MTU4MTYyMDU5NSwicm9sIjoiVElUIiwibnJvRG9jdW1lbnRvTG9naW4iOiIxODIzNjM1MiIsIm5yb0RvY3VtZW50b1RpdHVsYXIiOiIxODIzNjM1MiIsInRpcG9Eb2N1bWVudG9Mb2dpbiI6MSwidGlwb0RvY3VtZW50b1RpdHVsYXIiOjEsInNjb3BlIjoiIn0.mo9AuksJFbiKsg8VzaeiwgqIdqvw7VvyNOjfMMaRh6I9nvfjIpoxMCiIOhL6_QhNUclTRB0TwcePUL-v50JZZfvei2ZcEoqW4grLPHwbO0bGWVgFJ5zUiafsnNtPwNj86BQJWGGm8ITMCJWvZ6teDcKsaJPWbn0wsK8rzYiBlkz4Sm2YY9lS2d-SWSFAvXPTh7KFTg5KuyZTq-AGB9XqAHo4gW1pDRVpZvSLtW430DFWNrrtdfkZ9k8BCHKDwb09ezz9rsjK_KGzicTS0rS4vdqxwAdtDoAZ-TNX-VhCH5MCNyE3DUYZZM3AyQg67NERgyn7wkOVwup87_EwVJgd0g';
//// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//naranjaAuthorizer.apiKeyPrefix = 'Bearer';
//
//var apiInstance = new NaranjaCustomerApiTesting.DefaultApi();
//var customerId = "18236352"; // String | 
//apiInstance.getCustomer(customerId).then(function(data) {
//  console.log('API called successfully. Returned data: ' + data);
//}, function(error) {
//  console.error(error);
//});

var NaranjaCustomerApiTesting = require('naranja_customer_api_testing');
var defaultClient = NaranjaCustomerApiTesting.ApiClient.instance;
// Configure API key authorization: naranjaAuthorizer
var naranjaAuthorizer = defaultClient.authentications['naranjaAuthorizer'];
naranjaAuthorizer.apiKey = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjEifQ.eyJpc3MiOiJhcGljIiwiYXVkIjoiYXBpYyIsImV4cCI6MTU4MTYyMDU5NSwicm9sIjoiVElUIiwibnJvRG9jdW1lbnRvTG9naW4iOiIxODIzNjM1MiIsIm5yb0RvY3VtZW50b1RpdHVsYXIiOiIxODIzNjM1MiIsInRpcG9Eb2N1bWVudG9Mb2dpbiI6MSwidGlwb0RvY3VtZW50b1RpdHVsYXIiOjEsInNjb3BlIjoiIn0.mo9AuksJFbiKsg8VzaeiwgqIdqvw7VvyNOjfMMaRh6I9nvfjIpoxMCiIOhL6_QhNUclTRB0TwcePUL-v50JZZfvei2ZcEoqW4grLPHwbO0bGWVgFJ5zUiafsnNtPwNj86BQJWGGm8ITMCJWvZ6teDcKsaJPWbn0wsK8rzYiBlkz4Sm2YY9lS2d-SWSFAvXPTh7KFTg5KuyZTq-AGB9XqAHo4gW1pDRVpZvSLtW430DFWNrrtdfkZ9k8BCHKDwb09ezz9rsjK_KGzicTS0rS4vdqxwAdtDoAZ-TNX-VhCH5MCNyE3DUYZZM3AyQg67NERgyn7wkOVwup87_EwVJgd0g"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
naranjaAuthorizer.apiKeyPrefix = "Bearer"

var api = new NaranjaCustomerApiTesting.DefaultApi()
var customerId = "18236352"; // {String} 
api.getCustomer(customerId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});