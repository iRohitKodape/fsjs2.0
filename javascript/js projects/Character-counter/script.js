const text = document.getElementById("textarea");
const totalChar = document.getElementById("total-counter");
const remainChar = document.getElementById("remaining-counter");
text.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter();
function updateCounter() {
  console.log(text.value.length);
  totalChar.innerText = text.value.length;
  remainChar.innerText = text.getAttribute("maxlength") - text.value.length;
}
