const score  = 400
// console.log(score); //400

const value = new Number(100)
// console.log(value); //[Number: 100]

// console.log(value.toString().length); //3
// console.log(value.toFixed(2)) //100.00

const num1 = 23.49777
// console.log(num1.toPrecision(3)); //23.5

const num2 = 123.49777
// console.log(num2.toPrecision(3)); //123

const num3 = 12339.999777
// console.log(num3.toPrecision(3)); //1.23e+4



const hundreds = 1000000
// console.log(hundreds.toLocaleString()); //1,000,000
// console.log(hundreds.toLocaleString('en-IN')); //10,00,000


// ++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++

console.log(Math.random()); //gives valus between 0 & 1
console.log(Math.floor((Math.random()*10)+1));

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min)+min))