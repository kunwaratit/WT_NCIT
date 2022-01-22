var ele = document.querySelector("#btn");
var val = document.querySelector("#palli-text").innerHTML;
ele.addEventListener("mousedown", pallindrom);
function pallindrom() {
    var finalstr = val.split("").reverse().join("");

    if (val == finalstr) {
        document.getElementById("palli").innerHTML = ' pallindrom';
    }
}
