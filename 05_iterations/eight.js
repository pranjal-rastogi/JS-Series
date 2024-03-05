// reduce
const arr = [1,2,3,4,5]

// const myTotal = arr.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and curval: ${currval}`);
//     return acc + currval
// },0)

// const myTotal1 = myNums.reduce((acc,curr)=>acc+curr,0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceTOPay = shoppingCart.reduce((acc,item)=>acc + item.price,0)
console.log(priceTOPay);