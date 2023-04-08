// 17. Write a program which tells the number of days in a month.

// let input = prompt("enter Month name");
let input = "January";

const monthObj = {
  January: "31",
  February: "28",
  March: "31",
  April: "30",
  May: "31",
  June: "30",
  July: "31",
  August: "31",
  September: "30",
  October: "31",
  November: "30",
  December: "31",
};
function checkDay(inp, months) {
  for (x in months) {
    if (x === inp) {
      return months.inp;
    } else {
      return "";
    }
  }
}

let res = checkDay(input, monthObj);
console.log(res);
