// singleton
// Object.create

// objects literals

const mySym = Symbol("key1")

const JsUser = {
    name:"Pranjal",
    age:19,
    "full name":"Pranjal Rastogi",
    [mySym]:"mykey1",
    location:"Jaipur",
    email:"google@com",
    isLoggedIn:false,
    lastLoginDays:["Monady","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "microsoft@com"
// Object.freeze(JsUser)
// JsUser.email = "chatgpt@com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User,  ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


