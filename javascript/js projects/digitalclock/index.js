const hourEl = document.querySelector(".hours");
const minuteEl = document.querySelector(".minutes");
const secondEl = document.querySelector(".seconds");
const amPmEl = document.getElementById("ampm");
console.log(amPmEl);

console.log(hourEl);

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ap = "Am";

  if (h > 12) {
    h = h - 12;
    ap = "Pm";
  } else if (h === 12) {
    ap = "Pm";
  }

  h = h < 12 ? "0" + h : h;
  m = m < 12 ? "0" + m : m;
  s = s < 12 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
