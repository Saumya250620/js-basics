const accountId = 144553;
let accountEmail = "hitesh@google.com" // new
var accountPassword = "12345"; // old
accountCity = "Jaipur";
let accountState;

// accountId = 2; // not allowed
accountEmail = "hc@hc.com";
accountPassword = "2121212121";
accountCity = "Varanasi";

console.log(accountId);

/*
    Prefer not to use "var"
    because of issue in block scope and 
    functional scope
*/

console.table([accountId,accountEmail,accountPassword, accountCity, accountState]);