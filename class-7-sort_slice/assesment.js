let ntg = ['*', 45, 45.788, true, 0, 98, false, 'aa', 'QweRtY', 'asasssss', 78.22, '12', 13, '14', '??', 16, '177', 188, '19', 200, '210', 22, '023', 24,'$$']
console.log(ntg)

// reverse() just reverses the elements of array in same order
// var x = ntg.reverse()
// console.log(ntg)

//sort() sorts all elements here, by treating all elements as strings
var y = ntg.sort()
console.log(ntg)

// sort() with compare method sorts all elements in order (numbers are sorted, strings sorted in ascii value, boolean sorted as false, true)
var z = ntg.sort((a,b) => a-b)
console.log(ntg)

/*priorty of sort() with compare method: 
1 Special char
2 Numbers
3 Boolean
4 Uppercase char
5 Lowercase char 
*/
