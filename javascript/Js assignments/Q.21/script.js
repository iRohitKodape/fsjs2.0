// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

const countryArr = ["India", "Sweden", "Japan", "Singapore"];

const newCountryArr = countryArr.map((element) => {
  const newArr = element.toUpperCase();
  return newArr;
});

if (newCountryArr.includes("ETHIOPIA")) {
  console.log("ETHIOPIA");
} else {
  newCountryArr.push("ETHIOPIA");
}

console.log(newCountryArr);
