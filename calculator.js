// define the num1 & num2 variables

let num1 = 3
let num2 = 2
let result;

   function add() {
    result = num1 + num2;
   console.log(result)
    }
 
 function subtract()  {
    result = num1 - num2;
    console.log(result)
     }
   
   
function divide()  {
    result = num1 / num2
    console.log(result)
     }
    
function multiply() {
    result = num1 * num2
    console.log(result)
}

add()
subtract()
divide()
multiply()
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

// document.getElementById('num1').value = '';
// document.getElementById('num2').value = '';

// function resetCalc()   {
// document.getElementById('display').value = '';

// num1 = 0;
// num2 = 0;
// mathCalc = '';
// console.log ('Reset');
// }