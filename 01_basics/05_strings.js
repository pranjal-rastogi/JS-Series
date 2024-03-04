const name = "Pranjal"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = "pranjal-rastogi"
console.log(gameName.length);
console.log(gameName[4]);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(8));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-2,4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://pranjal.com/pranjal%20rastogi"
console.log(url.replace('%20','-'));
console.log(url.includes('rastogi'));
console.log(gameName.split('-'));