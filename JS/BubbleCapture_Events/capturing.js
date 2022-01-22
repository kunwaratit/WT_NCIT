
//capturing

var div5 = document.getElementById('cont5');
div5.addEventListener("click", display, true);
document.querySelector('#cont1').addEventListener("click", display, true);
document.querySelector('#cont2').addEventListener("click", display, true);
document.querySelector('#cont3').addEventListener("click", display, true);
document.querySelector('#cont4').addEventListener("click", display, true);
document.querySelector('#cont5').addEventListener("click", display, true);
function display() {


    console.log(event.currentTarget);
    document.getElementById("valuea").innerHTML = "from outside to center";
}
