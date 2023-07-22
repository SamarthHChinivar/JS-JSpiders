console.log("hello")

// 1 named func (ES-1)
function add(x, y){
  var sum = x + y
  console.log(sum)
}

add(4,5)
add(5,6)

// 2 anonymous func (ES-1)
var sub = function(a, b) {
  var sub = a - b
  console.log(sub)
}

sub(400,200);

// 3 immediately invoking func / iif / self (ES-1)

/* NOTE: Before using an immediate invoking func , previous statement should end with semicolon( ; )  */

(function(a, b) {
  var mul = a*b
  console.log(mul)
})

(4,3)

// 4 arrow function (ES-6)

/* NOTE: for single line of code or logic, curly braces {} and variable declarations are not required as shown below. */

var x = (a, b) => a/b

console.log(x(10, 5))

// 5 & 6  callback function & high order function (ES-6)

function x1(){
  console.log(1)
}

function y1(){
  console.log(2)
}

y1(x1())

/* NOTE: Here y1 is the higher order function / outer function 
and 
x1 is the callback function / inner function */

// callback/inner func is executed first and then higher order func/outer func is executed