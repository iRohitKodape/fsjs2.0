// 24. Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).

const evenArr = [];
const oddArr = [];

for (let index = 0; index < 101; index++) {
  if (index % 2 == 0) {
    evenArr.push(index);
  } else {
    oddArr.push(index);
  }
}
console.log(evenArr);
console.log(oddArr);
