const accountId = 1783843
let accountEmail = "google@com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2; // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"


console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);