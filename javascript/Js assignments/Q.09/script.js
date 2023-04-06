// 09. Boolean value is either true or false.

//  Write three JavaScript statement example which provide truthy value.

// no.1
let a = 10;
let b = 20;
let c = a + b;

if (c > 10) {
  console.log("truthy value", c);
} else {
  console.log("falsy value");
}

//no.2

let truthy = "hello";

if (truthy) {
  console.log("truthy", truthy);
} else {
  console.log("falsy");
}

// no.3

let val = 5;
let val2 = 5;

const result = val === val2 ? "truthy" : "falsy";
console.log(result);

// - Write three JavaScript statement example which provide falsy value.

// no.1

let code = "";

if (code) {
  console.log("true");
} else {
  console.log("false");
}


// no.2

let user;
console.log(user);



// no.3

let n1 = 10;
let n2 = 11;

let res = n1 - n2;

console.log(res)