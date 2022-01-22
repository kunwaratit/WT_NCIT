var sum;
var array = [1, 2, 3, 4, 5];
var array2 = ["Atit", "Kunwar"];

for (var i in array, array2) {
    sum = array[0] + array[4];
    sum2 = array2[0] + array2[1];
}
document.getElementById("content").innerHTML =
    "Array : " + array + " <br> Sum of 1st and last element of array is " + sum +
    "<br><br>Array:" + array2 + " <br> Sum of 1st and last element of array is " + sum2;
