var string = ["Atit", "Kunwar", "Javascript", "Php", "isSunnyday"];

var high = '';
for (var i = 0; i < string.length; i++) {
    if (string[i].length > high.length) {
        high = string[i];
    }
}
document.getElementById("lengthyarr").innerHTML = "your String : " + string +
    "<br>Longest string is : " + high + " of character's " + high.length;