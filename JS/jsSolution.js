 //Qn.1 start

 var arr_len = Number(prompt("Enter length of an array to SUM"))   //variable named array_len and ask length using prompt and Number type cast to number from string
 var arr = []        //creates array to place array ele 
 var sum = 0;        //declare and intialize sum
 for (i = 0; i < arr_len; i++) {             //repeat until i<arr-len
     var arr_ele = Number(prompt("Enter array element to SUM"))      //input of arra ele
     arr.push(arr_ele)               //pushing array ele to the variabel arr which is an array
     sum = sum + arr[i]                 //formula
 }
 document.write("<h1> The sum is ", sum)     //displaying sum in working space
 //end
 //Qn.2 start 

 var num = Number(prompt("Enter a num to Find it's Factorial"))      //create and input value of variable using prompt as well as type cast to number from string
 function factorial(num) {               //create function named factorial with argument num
     if (num == 0 || num == 1) {         //creating condn to display 1 if num= 0 or 1 else 
         return (1)
     } else {
         return (num * factorial(num - 1))   // else goes to recursive loop
     }
 }
 document.write("<br>" + "Factorial of a given num is ", factorial(num)) //calling of function and display

 //end
 //Qn.3 Start

 var num = Number(prompt("Enter a Number You to get Multiplication Table"))
 var mult_range = Number(prompt("eneter Range of Multiplication"))
 var mult = 0
 document.write("<br>Multiplication table is")
 function multiple(num) {
     for (i = 1; i <= mult_range; i++) {

         mult = num * i
         document.write("</br>"+num+" X "+i+"= ", mult)
     }
 }
 document.write(multiple(num))
//end
//Qn.4   Start




//end
