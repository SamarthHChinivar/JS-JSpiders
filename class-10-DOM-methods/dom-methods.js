// var h1 = document.getElementById("heading")
//console.log(h1)

// innerHTML used to change content only
// h1.innerHTML="Edited"

//innerHTML used to change Element(content+tag)
// h1.innerHTML="<h1>Edited</h1>"
//console.log(h1)


// function printName(){
//   var uname = document.getElementById("uname").value
//   console.log(uname)
//   event.preventDefault()
// }

function validate() {
  var uname = document.getElementById("uname").value
  console.log(uname)

  if(uname === null || uname === ""){
    var inputField = document.getElementById("uname")
    inputField.style.border="1px solid red"
    inputField.style.borderRadius="15px"

    var errorMessage = document.getElementById("errorMessage")
    errorMessage.innerHTML="Invalid Username"
    errorMessage.style.color="red"

    var labelError = document.getElementById("labelError")
    labelError.style.color="red"
  }
  event.preventDefault()

  var pwd = document.getElementById("pwd").value
  console.log(pwd)

  if(pwd === null || pwd === ""){
    var inputField = document.getElementById("pwd")
    inputField.style.border="1px solid red"
    inputField.style.borderRadius="15px"

    var errorMessage = document.getElementById("errorMessage1")
    errorMessage.innerHTML="Invalid Username"
    errorMessage.style.color="red"

    var labelError = document.getElementById("labelError1")
    labelError.style.color="red"
  }
  event.preventDefault()

}