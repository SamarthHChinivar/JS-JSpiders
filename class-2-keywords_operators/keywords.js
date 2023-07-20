/* Note:
var can be reinitialised and redeclared any no. of times
let can be reinitialised any no of times but declared once
const can't be reinitialised or redeclared  
*/

var x
console.log(x)

x=10
console.log(x)

x="ten"
console.log(x)

var x=0.55
console.log(x)

let y
console.log(y)

y=10.55
console.log(y)

y="yaro ninu?"
console.log(y)

// below line will throw the error as variable can be declared once 
// using let keyword

// let y

const pie=3.14
console.log(pie)

//below line will throw error in console as const value can't be reinitialised.

// pie=7.55
// console.log(pie)

// below line will throw the error as variable can be declared once using const keyword

// const pie=3.22