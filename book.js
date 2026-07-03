var ovr = document.querySelector(".over")
var po = document.querySelector(".poppup-box")
var addpop = document.getElementById("apopup")

addpop.addEventListener("click", function () {
    ovr.style.display = "block"
    po.style.display = "block"
})
var cbn = document.getElementById("cbtn")
cbn.addEventListener("click", function (event) {
    event.preventDefault()
    ovr.style.display = "none"
    po.style.display = "none"
})
//select  cont,btitle,bauthor,sd,abtn
var con = document.querySelector(".cont")
var atn = document.getElementById("abtn")
var bt = document.getElementById("btitle")
var ba = document.getElementById("bauthor")
var shd = document.getElementById("sd")
var bnn = document.getElementById("btn")

atn.addEventListener("click", function (event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "book-cont")
    div.innerHTML = ` <h2>${bt.value}</h2>
        <h5>${ba.value}</h5>
          <p>${shd.value}</p>
         <button class="btn" onclick="btn(event)">Delete</button>`
    con.append(div)
    ovr.style.display = "none"
    po.style.display = "none"
})
function btn(event) {
    event.target.parentElement.remove()
}


