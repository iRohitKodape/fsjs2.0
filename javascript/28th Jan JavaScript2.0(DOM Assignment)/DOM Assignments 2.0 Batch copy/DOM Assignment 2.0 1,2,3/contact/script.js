let inp = document.getElementsByTagName("input");

for (let index = 1; index < inp.length; index++) {
  console.log(index);
  if (index % 2 != 0) {
    inp[index].placeholder = "FSJS2.0";
  } else {
    inp[index].placeholder = "fsjs@ineuron.ai";
  }
}

const textAr = document.getElementsByTagName("textarea");

for (let index = 0; index < textAr.length; index++) {
  textAr[index].placeholder = "Hello world";
}
