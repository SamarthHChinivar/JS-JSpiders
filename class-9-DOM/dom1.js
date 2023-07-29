var body = document.body
var head = document.head

var table = document.createElement("table")
var tbody = document.createElement("tbody")

var tr1 = document.createElement("tr") 
var tr2 = document.createElement("tr") 
var tr3 = document.createElement("tr") 
var tr4 = document.createElement("tr") 
var tr5 = document.createElement("tr") 

var th1 = document.createElement("th")
var th2 = document.createElement("th")
var th3 = document.createElement("th")
var th4 = document.createElement("th")

var td11 = document.createElement("td")
var td12 = document.createElement("td")
var td13 = document.createElement("td")
var td14 = document.createElement("td")

var td21 = document.createElement("td")
var td22 = document.createElement("td")
var td23 = document.createElement("td")
var td24 = document.createElement("td")

var td31 = document.createElement("td")
var td32 = document.createElement("td")
var td33 = document.createElement("td")
var td34 = document.createElement("td")

var td41 = document.createElement("td")
var td42 = document.createElement("td")
var td43 = document.createElement("td")
var td44 = document.createElement("td")

th1.innerHTML="No."
th2.innerHTML="Full Name"
th3.innerHTML="Position"
th4.innerHTML="Salary"

td11.innerHTML="1"
td12.innerHTML="Bill Gates"
td13.innerHTML="Founder Microsoft"
td14.innerHTML="$1000"

td21.innerHTML="2"
td22.innerHTML="Steve Jobs"
td23.innerHTML="Founder Apple"
td24.innerHTML="$1200"

td31.innerHTML="3"
td32.innerHTML="Larry Page"
td33.innerHTML="Founder Google"
td34.innerHTML="$1100"

td41.innerHTML="4"
td42.innerHTML="Mark Zuckerberg"
td43.innerHTML="Founder Facebook"
td44.innerHTML="$1300"


body.appendChild(table)
table.appendChild(tbody)
tbody.appendChild(tr1)

tr1.appendChild(th1)
tr1.appendChild(th2)
tr1.appendChild(th3)
tr1.appendChild(th4)

tbody.appendChild(tr2)
tr2.appendChild(td11)
tr2.appendChild(td12)
tr2.appendChild(td13)
tr2.appendChild(td14)

tbody.appendChild(tr3)
tr3.appendChild(td21)
tr3.appendChild(td22)
tr3.appendChild(td23)
tr3.appendChild(td24)

tbody.appendChild(tr4)
tr4.appendChild(td31)
tr4.appendChild(td32)
tr4.appendChild(td33)
tr4.appendChild(td34)

tbody.appendChild(tr5)
tr5.appendChild(td41)
tr5.appendChild(td42)
tr5.appendChild(td43)
tr5.appendChild(td44)

