// 17. Write a program which tells the number of days in a month.

let year = prompt("enter year");
let month = prompt("enter date");

const dateArr = [];
dateArr.push(year);
dateArr.push(month);
// console.log(dateArr);
function checkDays(year, month) {
  return new Date(year, month, 0).getDate();
}

const res = checkDays(...dateArr);
console.log(res);
