// 17. Write a program which tells the number of days in a month.

let input = prompt("enter Month name");
const days31 = 31;
const days30 = 30;
const days28 = 28;

const monthArr31 = [
  "January",
  "March",
  "May",
  "July",
  "August",
  "October",
  "December",
];

const monthArr30 = ["April", "June", "September", "November"];

const date28 = ["February"];

function checkForDays(monthArr, inp, days) {
  for (const element of monthArr) {
    if (element === inp) {
      console.log(`${element} month has ${days} days ""`);
    } else {
      continue;
    }
  }
}

if (monthArr31.includes(input)) {
  checkForDays(monthArr31, input, days31);
} else if (monthArr30.includes(input)) {
  checkForDays(monthArr30, input, days30);
} else if (date28.includes(input)) {
  checkForDays(date28, input, days28);
} else {
  console.log(`check your input`);
}
