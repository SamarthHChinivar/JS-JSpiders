let color = ['red', 'black', 'white', 'blue', 'pink', 'yellow']

var x = color.splice(2,0,'green','orange')
// console.log(x)
// console.log(color)

var y = x.forEach((x) => x+100)
console.log(y)