// function loading() {
//   alert("Welcome")
// }

function once() {
  console.log("you clicked once")
}

function twice() {
  console.log("you clicked twice")
}

function newImage() {
  document.getElementById("img").src="cup.jpg"
}

function oldImage() {
  document.getElementById("img").src="rcb.jpg"
}

function changeColor() {
  var para = document.getElementById("para")
  para.style.color="red"
}

function normalColor() {
  var para = document.getElementById("para")
  para.style.color="blue"  
}

function leave() {
  var para = document.getElementById("para")
  para.style.color="black"  
}

function changeKeys() {
  var keys = document.getElementById("keys")
  keys.innerHTML="<h2>you started typing YOO!!!</h2>"
}

function normal() {
  var keys = document.getElementById("keys")
  keys.innerHTML="<h3>you stoped typing :( </h3>"
}