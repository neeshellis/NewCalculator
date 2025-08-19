// define the num1 & num2 variables

let num1;
let num2;
let result;

function add() {
  num1 = Number(document.getElementById("num1").value);
  num2 = Number(document.getElementById("num2").value);
  result = num1 + num2;
  console.log(result);
  document.getElementById("result").textContent = result;
}

function subtract() {
  num1 = Number(document.getElementById("num1").value);
  num2 = Number(document.getElementById("num2").value);
  result = num1 - num2;
  console.log(result);
  document.getElementById("result").textContent = result;
}

function divide() {
  num1 = Number(document.getElementById("num1").value);
  num2 = Number(document.getElementById("num2").value);
  result = num1 / num2;
  console.log(result);
  document.getElementById("result").textContent = result;
}

function multiply() {
  num1 = Number(document.getElementById("num1").value);
  num2 = Number(document.getElementById("num2").value);
  result = num1 * num2;
  console.log(result);
  document.getElementById("result").textContent = result;
}

// reset button
function resetCalculator() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").value = "";

  num1 = 0;
  num2 = 0;
  result = 0;
}

// add();
// subtract();
// divide();
// multiply();

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
