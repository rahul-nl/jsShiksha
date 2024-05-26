// # Primitive  - Call by value

// 7 types :String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail; 

const id  = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false

const bigNUmber = 5465465465465465465444444444444444444444444444444444444888888888888888888888888888888888n



// Reference type (Non-primitve)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name : "Rahul", 
    age :22
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNUmber)


//+++++++++++++++++++++++++++++++++++++++++++

// Stack(Prmitive), Heap(Non-primitive)

let myYoutubename = "rnl"

let anotherName = "chai"

console.log(myYoutubename);
console.log(anotherName);


let user1 = {
    email:"a@g.com",
    upi : "user@ybl"
}

let user2 = user1

user2.email = "rnl@g.com"

console.log(user1.email);
console.log(user2.email);