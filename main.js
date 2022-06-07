let equation = "";
let display = document.querySelector(".equation");
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
    let length = equation.length;
    if (
      ["*", "/", "+", "-"].includes(displayable.innerText) &&
      ["*", "/", "+", "-"].includes(equation[length - 1])
    ) {
      equation = equation.slice(0, -1);
    }
    equation += displayable.innerText;

    display.innerText = equation;
  });
}

function calculate(numbers, operators) {
  let operator = "";
  let numA = "";
  let numB = "";

  let priorityIndex = operators.findIndex((op) => {
    return op == "*" || op == "/";
  });
  if (priorityIndex !== -1) {
    operator = operators[priorityIndex];
    numA = numbers[priorityIndex];
    numB = numbers[priorityIndex + 1];
  } else {
    operator = operators[0];
    numA = parseInt(numbers[0]);
    numB = parseInt(numbers[1]);
  }
  console.log(numbers);
  console.log(operators);
  console.log(operator);
  console.log(numA, numB);
}

let equalButton = document.querySelector("#equal");
equalButton.addEventListener("click", () => {
  let numbers = equation.split(/[\+\-\*\/]/).map((number) => {
    return parseInt(number);
  });
  let operators = equation.split(/\d+/).filter((operator) => {
    return operator !== "";
  });
  calculate(numbers, operators);
});
