// 23. Write a program to check that the number given by the user is a prime number or not.

let num = +prompt("Enter a number to check prime number:");

let bool = true;

if (num <= 1) {
  console.log(`Not a prime number`);
} else {
  for (let index = 2; index < num - 1; index++) {
    if (num % index == 0) {
      bool = false;
      break;
    }
  }
}
if (bool == true) {
  console.log(`it is a prime number`);
} else {
  console.log(`it is not a prime number`);
}
