let sal = [50000, 10000, 60000, 75000, 100000]

//using arrow function
var reduced = sal.reduce((curr, next) => curr + next)
console.log(reduced)
console.log(sal)

//using IIF
var reduced = sal.reduce(function(curr, next) {
  return curr + next
})
console.log(reduced)
console.log(sal)

//using named function
function reducedd(curr, next){
  return curr + next
}

var reduced = sal.reduce(reducedd)
console.log(reduced)
console.log(sal)