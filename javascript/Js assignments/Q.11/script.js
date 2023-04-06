let todayDate = new Date();

console.log("Year today is", todayDate.getFullYear());
console.log("month today is", todayDate.getMonth());
console.log("date today is", todayDate.getDate());
console.log("day today is", todayDate.getDay());
console.log("hours today is", todayDate.getHours());
console.log("minutes today is", todayDate.getMinutes());

let todayYear = todayDate.getFullYear();

let gapYear = todayYear - 1970;
console.log(gapYear);
let gapDays = gapYear * 365;
console.log(gapDays);

let gapHours = gapDays * 24;
console.log(gapHours);

let gapSeconds = gapHours * 3600;
console.log(gapSeconds);

let jan1 = gapSeconds + 86400;

console.log("total seconds elapsed from jan1 1970 is", jan1);
