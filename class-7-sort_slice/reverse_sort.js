// let laptop = ["hp", 'dell', 'lenevo', 'asus', 'apple', 'samsung']
// console.log(laptop)

// // reverse() method just reverses the elements in same order.
// var x = laptop.reverse()
// console.log(x)
// console.log(laptop)

// // sort() method sorts the elements in alphabetical order
// var y = x.sort()
// console.log(y)

// var z = y.reverse()
// console.log(z)

// sorting numbers:

let num= [10, 1, 100, 1000, 22,44, 33]

// aort() for numbers, sorts it like sorting strings
var x = num.sort()
console.log(x) // [1, 10, 100, 1000, 22,  33, 44]

//sort() with compare method taking function as an argument.
var y = num.sort((a,b)=> {
  return a-b
})
console.log(y)

//Note: sort() with compare method for numbers, sorts the numbers itself, without treating it like strings.

/*priorty of sort() with compare method: 
1 Special char
2 Numbers
3 Boolean
4 Uppercase char
5 Lowercase char 
*/