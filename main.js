let equation = "";
let display = document.querySelector(".display");
function add(numA, numB) {
  return numA + numB;
}
function subtract(numA, numB) {
  return numA - numB;
}
function multiply(numA, numB) {
  return numA * numB;
}
function divide(numA, numB) {
  return numA / numB;
}

function operate(operator, numA, numB) {
  switch (operator) {
    case "+":
      return add(numA, numB);
    case "-":
      return subtract(numA, numB);
    case "*":
      return multiply(numA, numB);
    case "/":
      return divide(numA, numB);
  }
}

let displayables = document.querySelectorAll(".displayable");
for (const displayable of displayables) {
  displayable.addEventListener("click", () => {
    equation += displayable.innerText;
    display.innerText = equation;
  });
}
