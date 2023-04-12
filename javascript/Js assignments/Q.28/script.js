// a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output

let num = prompt("Enter a number to get left-aligned triangle pattern : ");

let string = "";
for (var i = 0; i <= num; i++) {
  for (var j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}

console.log(string);

//Print a square pattern, if the input is 3 then the output should be similar to the given output

for (let index = 1; index <= user; index++) {
  console.log(`***`);
}

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output.

let string1 = "";

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num - i; j++) {
    string1 += " ";
  }

  for (let k = 0; k < 2 * i - 1; k++) {
    string1 += "*";
  }
  string1 += "\n";
}
