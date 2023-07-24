//In JS, arrays can store heterogeneous elements. 

// let x = [1, 2, 3, "name", 'afaf', true, null, undefined, function() {}, [], [{}] ]
// console.log(x)
// console.log(x[4])
// console.log(x[8])
// console.log(x[11])


// let car = ['BMW', 'Audi', 'Jaguar' , 'Swift', 'Lambo']
// console.log(car)

//pushes new element at ending of array
// var x = car.push('Ambassdor')
// console.log(x)
// console.log(car)

//deletes last element
// var x = car.pop()
// console.log(x)
// console.log(car)

//adds element at starting position
// var x = car.unshift('honda')
// console.log(x)
// console.log(car)

//deletes element at starting position
// var x = car.shift()
// console.log(x)
// console.log(car)

//map() method:
let sal = [50000, 10000, 60000, 75000, 100000]
console.log(sal)

//using arrow function:
var x = sal.map((n) => n+1000)
console.log(x)

//using normal function
function incsal(n){
  return n + 10000
}

var x = sal.map(incsal)
console.log(x)

//using IIF
var x = sal.map(function(n){
  return n +100
})
console.log(x)