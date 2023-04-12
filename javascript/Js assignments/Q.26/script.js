// 26. Write a program to print the table of any number given by the user. The format of the output should be smiliar to the below example- 2 * 1 = 2

let userInp = +prompt("Enter a number to print table:");

for (let index = 1; index < 11; index++) {
  console.log(`${userInp} * ${index} = ${userInp * index}`);
}
