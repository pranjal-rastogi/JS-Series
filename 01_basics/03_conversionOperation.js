let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(valueInNumber);
console.log(typeof valueInNumber);


// "33" =>33
// "33abc" => NaN
// true=>1; false=>0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); 

// "" => false
// "pranjal" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// *************************** Opeartions *************

let value = 3
let negValue = -value

console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);
console.log(2**2);

let str1 = "Pranjal"
let str2 = " Rastogi"
let str3 = str1 + str2
console.log(str3);

console.log("1"+2);
console.log("1"+"2");
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");

console.log(+true);
console.log(+"");

let num1,num2,num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(++gameCounter);






