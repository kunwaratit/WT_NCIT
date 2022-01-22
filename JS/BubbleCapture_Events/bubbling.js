//bubbling
var div5 = document.getElementById('cont5');
div5.addEventListener("click", display, false);
document.querySelector('#cont1').addEventListener("click", display, false);
document.querySelector('#cont2').addEventListener("click", display, false);
document.querySelector('#cont3').addEventListener("click", display, false);
document.querySelector('#cont4').addEventListener("click", display, false);
document.querySelector('#cont5').addEventListener("click", display, false);
function display() {
    console.log(event.currentTarget);
    document.getElementById("valuea").innerHTML = "from center to max";
}
