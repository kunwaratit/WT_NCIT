var ele = document.getElementById("anagram");
function Anagram(str1, str2) {
    if (str1.length !== str2.length) {
        ele.innerHTML = 'Invalid Input';
    }
    let sort1 = str1.split('').sort().join('');
    let sort2 = str2.split('').sort().join('');
    if (sort1 === sort2) {
        ele.innerHTML = "True";
    } else {
        ele.innerHTML = "False";
    }
}
Anagram("spele", "sleep");