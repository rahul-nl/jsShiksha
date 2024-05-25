const accountId = 14453
let accountEmail="rahul@google.com"
var accountPassword = "12334"
accountCity = "Mangalore"

// accountId = 2 //not allowed



accountEmail = "rnl@rnl.com"
accountPassword = "21212121"
accountCity = "Bangalore"
let accountState;


console.log(accountId);

/*
Prefer not to user var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])