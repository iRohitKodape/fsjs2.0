// 22. The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

const sortedAges = ages.sort();
console.log(`sort ages is ${sortedAges}`);

// Max and Min Age
const maxAge = Math.max(...ages);
console.log(`max age in ages is ${maxAge}`);

const minAge = Math.min(...ages);
console.log(`min age in ages is ${minAge}`);

// Find the median Age

const median = Math.floor(sortedAges.length / 2);

if (median % 2 != 0) {
  const result1 = (sortedAges[median] + sortedAges[median + 1]) / 2;
  console.log(`The median is ${result1} .`);
} else {
  const result2 = (sortedAges[median] + sortedAges[median + 1]) / 2;
  console.log(`The median is ${result2} .`);
}

// Find the average age

let sumAll = 0;
for (let i = 0; i <= sortedAges.length - 1; i++) {
  sumAll += sortedAges[i];
}

let avg = sumAll / sortedAges.length;
console.log(`The average is ${avg}`);

// Find the range of the ages

const rangeOf = maxAge - minAge;
console.log(`range is ${rangeOf}`);

//Compare the value

const min = Math.abs(minAge - avg);
const max = Math.abs(maxAge - avg);

const compare = min >= max ? `min is greater than max` : `max is greater`;

console.log(compare)