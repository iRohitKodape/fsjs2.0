// Task 1 change logo

const imgEl = document.querySelector(".logo");

imgEl.src = "./assets/ineuron-logo.png";
console.log(imgEl);

// Task 2 change price

const priceTxt = document.querySelector(".app_price");
priceTxt.innerHTML = `<span>$10</span> / month`;
