// "useStrict";
const courseRemoved = document.querySelectorAll("a");

const newArr = [...courseRemoved];

console.log(newArr);

newArr.forEach((item) => {
  if (item.textContent.includes("2.0")) {
    item.style.display = "none";
    return item;
  }
});

const inputEl = document.querySelector(".main__form-input");

inputEl.removeAttribute("disabled");

const submitBtn = document.querySelector(".main__form-btn");
submitBtn.removeAttribute("disabled");

const formEl = document.querySelector("form");
formEl.addEventListener("Submit", (e) => {
  arr2.forEach((item) => {
    if (item.textContent.includes("2.0")) {
      item.style.display = "inline";
      return item;
    }
  });
});
