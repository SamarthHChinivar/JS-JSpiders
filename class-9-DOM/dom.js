console.log(document) // prints whole HTML Document
console.log(document.all) // returns all HTML elements in an array

// all is depricated

console.log(document.all[4])
document.all[4].innerHTML = "DOM" //innerHTML is used to add content dynamically
//console.log(document.head)
//console.log(document.body)

var h1 = document.createElement("h1") // createElement("tagName") is used for creating HTML Tag
console.log(h1)
h1.innerHTML = "hello world" // content is added to h1 tag here

var body = document.body 
body.appendChild(h1) // appends the created h1 tag and content into body tag without appendChild, the created element and content is not added to orginal HTML document
console.log(body)

/* Order of using DOM Methods:
  createElement() is used for creating HTML Tag
  innerHTML is used to add content dynamically
  appendChild is used for adding element into a HTML tag
*/

//creating list elements
var ol = document.createElement("ol")

var liOne = document.createElement("li")
var liTwo = document.createElement("li")
var liThree = document.createElement("li")
var liFour = document.createElement("li")

// adding content to list elements
liOne.innerHTML="samsung"
liTwo.innerHTML="apple"
liThree.innerHTML="xiaomi"
liFour.innerHTML="google"

//styling lists
liOne.style.color="red"
liTwo.style.color="red"
liThree.style.color="red"
liFour.style.color="red"

// appending list to body tag of HTML Document
body.appendChild(ol)

ol.appendChild(liOne)
ol.appendChild(liTwo)
ol.appendChild(liThree)
ol.appendChild(liFour)

console.log(body)