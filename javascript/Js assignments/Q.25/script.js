// 25. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

let weight = +prompt("enter your weight in kg's");
let height = +prompt("enter your height in (cm's)");

const heightInMeter = height * 0.01;
const BMI = weight / (heightInMeter * heightInMeter);
// console.log(BMI);

console.log(BMI.toFixed(1));

if (BMI < 18.5) {
  console.log(`you are Underweight`);
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log(`your weight is normal`);
} else if (BMI >= 25 && BMI <= 29.9) {
  console.log(`you  are overweight`);
} else {
  console.log(`you are obese your bmi is 30 or more`);
}
