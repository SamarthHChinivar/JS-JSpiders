/* splice(arg1, arg2, arg3)
arg1 : starting index
arg2: no of elements to be deleted
arg3: elements to be added
*/

//Imp for Interview

let color = ['red', 'black', 'white', 'blue', 'pink', 'yellow']
console.log(color)

var x = color.splice(2,2)
console.log(x)

/* splice() modifies orginal array */

console.log(color)

var x = color.splice(2,0,'green','orange')
console.log(x)
console.log(color)