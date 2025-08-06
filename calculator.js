// define the num1 & num2 variables

let num1() 
let num2()

function mathCalc {

    if function add {
    then sumadd = num1 + num2;
   console.log(submit)sumadd;
    }
 
 else
     if function subtract  {
    then sumsubtract = num1 - num2;
    console.log(submit)sumsubtract;
     }
   
   
else
     if function divide  {
    then sumdivide = num1 / num2
    console.log(submit)sumdivide
     }
    
    
else
     if function multiply {
    then summultiply = num1 * num2
    console.log(submit)summultiply
}

// 

// //       <script>
//         function Calculate() {
//             let num1 = document.getElementById("num1").value;
//             let num2 = document.getElementById("num2").value;

//             fetch(`/calculator/add?num1=${num1}&num2=${num2}`)
//                 .then(response => response.json())
//                 .then(data => {
//                     document.getElementById("result").innerHTML = data.result;
//                 })
//                 .catch(error => console.error('Error:', error));
//         }
//     </script>


// reset calculator  - numbers, math function and = field

document.getElementById('num1').value = '';
document.getElementById('num2').value = '';

function resetCalc()   {
document.getElementById('display').value = '';

num1 = 0;
num2 = 0;
mathCalc = '';
console.log ('Reset');
}