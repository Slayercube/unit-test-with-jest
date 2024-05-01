
const sum= (a,b)=>{
    return a + b
}
console.log(sum(7,3))

const sub = (a,b)=>{
    return a-b
}
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromDollarToYen=(dollarPrice)=>{
let EuroAmount = dollarPrice / oneEuroIs['USD']
return EuroAmount* oneEuroIs['JPY']
}
const fromEuroToDollar=(EuroAmount)=>{
 return EuroAmount * oneEuroIs["USD"]

}
const fromYenToPound=(yenPrice)=>{
 let EuroAmount = yenPrice / oneEuroIs['JPY']
 return EuroAmount* oneEuroIs['GBP'] 

}

console.log(fromDollarToYen(10))
console.log(fromEuroToDollar(10))
console.log(fromYenToPound(10))



module.exports = {sum,sub,fromDollarToYen,fromEuroToDollar,fromYenToPound}



