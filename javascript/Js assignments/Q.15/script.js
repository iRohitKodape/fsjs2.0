// 15. Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

let num = prompt("Enter marks to see your grade");

if (num >= 80 && num <= 100) {
  console.log("A");
} else if (num >= 70 && num <= 79) {
  console.log("B");
} else if (num >= 60 && num <= 69) {
  console.log("C");
} else if (num >= 50 && num <= 59) {
  console.log("D");
} else {
  console.log("F");
}
