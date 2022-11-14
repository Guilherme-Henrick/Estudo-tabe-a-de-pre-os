var toggle = document.getElementById("toggle");
var preços = document.querySelectorAll("h1")

toggle.addEventListener("change",() => {
    for(i = 0; i < preços.length; i++){
    preços[i].classList.toggle("invisivel");}
})