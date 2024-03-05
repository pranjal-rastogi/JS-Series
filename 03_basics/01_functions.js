function sayMyName(){
    console.log("Pranjal");
}
sayMyName()

// function addTwoNumbers(num1,num2){

//     console.log(num1+num2);
// }
function addTwoNumbers(num1,num2){

    return num1 + num2;
}
const result = addTwoNumbers(3,4)
console.log(result);

function loginUserMessage(username="Sam"){
    if(!username){
    console.log("Please enter a username");
    return;
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Pranjal"));
console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,300,400,500,600));

const user = {
    username:"Pranjal",
    price:199
}

function handleObject(anyObject){
    console.log(`Usename is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));