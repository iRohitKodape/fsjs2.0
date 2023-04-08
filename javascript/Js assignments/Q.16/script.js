// 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

let month = prompt("Enter month to check season");

function checkSeason() {
  if (month === "September" || month === "October" || month === "November") {
    return `Season is Autumn`;
  } else if (
    month === "December" ||
    month === "January" ||
    month === "February"
  ) {
    return `Season is Winter`;
  } else if (month === "March" || month === "April" || month === "May") {
    return `Season is Spring`;
  } else if (month === "June" || month === "July" || month === "August") {
    return `Season is Summer`;
  } else {
    return `Please check Entered Input`;
  }
}

const result = checkSeason(month);
console.log(result);
