const accountId = 1444533333434
let accountEmail = "jsgit017@gmail.com"
var accountPassword = "12345678"
accountCity = "Surat" // do not use this method 

//let accountState;



// accountId = 2 // not allowed 

// {} this braces are known as scope 

accountEmail = "abcds@gmail.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);


/* 
Prefer not to use var 
because of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity ])