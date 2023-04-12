// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

let num1 = +prompt("enter first number");
let num2 = +prompt("enter second number");

let operation = prompt("enter the sign of operation to perform");

if (operation == "+") {
  add(num1, num2);
} else if (operation == "-") {
  sub(num1, num2);
} else if (operation == "*") {
  multi(num1, num2);
} else if (operation == "/") {
  divide(num1, num2);
} else {
  console.log(`check the given operation`);
}

function add(num1, num2) {
  console.log(`addition of ${num1} and ${num2} is ${num1 + num2}`);
}

function sub(num1, num2) {
  console.log(`subtraction of ${num1} and ${num2} is ${num1 - num2}`);
}

function multi(num1, num2) {
  console.log(`multiplication of ${num1} and ${num2} is ${num1 * num2}`);
}

function divide(num1, num2) {
  console.log(`sum of ${num1} and ${num2} is ${num1 / num2}`);
}
