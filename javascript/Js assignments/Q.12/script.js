// 12. Create a human readable time format using the Date time object

let todayDate = new Date();

let year = todayDate.getFullYear();
let month = todayDate.getMonth();
let date = todayDate.getDate();
let hours = todayDate.getHours();
let minutes = todayDate.getMinutes();

let monthCheck = (m) => {
  if (m < 10) {
    m = "0" + m;
    return m;
  } else {
    return m;
  }
};

let dateCheck = (d) => {
  if (d < 10) {
    d = "0" + d;
    return d;
  } else {
    return d;
  }
};

let hourCheck = (h) => {
  if (h < 10) {
    h = "0" + h;
    return h;
  } else {
    return h;
  }
};

let minutesCheck = (min) => {
  if (min < 10) {
    min = "0" + min;
    return min;
  } else {
    return min;
  }
};

const finalMonth = monthCheck(month);
const finalDate = dateCheck(date);
const finalHour = hourCheck(hours);
const finalMinutes = minutesCheck(minutes);

// YYYY-DD-MM
console.log(`${year}-${finalMonth}-${finalDate} ${finalHour}:${finalMinutes}`);

// DD-MM-YYYY
console.log(`${finalDate}-${finalMonth}-${year} ${finalHour}:${finalMinutes}`);

// DD / MM / YYYY;
console.log(`${finalDate}/${finalMonth}/${year} ${finalHour}:${finalMinutes}`);
