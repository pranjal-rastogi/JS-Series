//Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol,BigInt
// Dynamically typed language

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let useEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 632318567983924762718923n
console.log(bigNumber);



// Reference (Non primitive)
//Array,Objects,Functions
const heros = ["shaktiman","naagraj","doga"]

let myObj = {
    name:"Pranjal",
    age:19,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof null);
console.log(typeof Function);
console.log(typeof heros);

// ***********************************************************
// Stack(Primitive)  ,  Heap (Non Primitive)

let myYoutubename = "google@com"
let anothername = myYoutubename
anothername = "microsoft@com"
console.log(anothername);
console.log(myYoutubename);

let userOne={
   email:"user@gmail.com",
   upi:"user@ybl"
}
let userTwo = userOne
userTwo.email="userTwo@gmail.com"
console.log(userOne.email,userTwo.email);


