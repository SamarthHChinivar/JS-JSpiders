function sum(a, b){
  return a+b
}

var add=sum(77,7)
console.log(add)

var sub = function(a,b) {
  return a-b
}

console.log(sub(77,70));

(function(a,b) {
  console.log(a*b)
})

(4,3)

var mod = (a,b) => a % b
console.log(mod(20,6))

function str1() {
  console.log('string 1')
}

function str2() {
  console.log('string 2')
}

str2(str1())