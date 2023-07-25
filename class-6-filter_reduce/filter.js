let sal = [50000, 10000, 60000, 75000, 100000]

// filter is used for getting filtered output and it doesn't modify the original array.

//using named function
function filtered(x) {
  return x > 70000 
}

var y = sal.filter(filtered)
console.log(y)

//using arrow function
var y = sal.filter((x) => x > 70000)
console.log(y)


//using IIF
var y = sal.filter(function(x){
  return x > 70000
})
console.log(y)

console.log(sal)