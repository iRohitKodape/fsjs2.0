// Task 1 change logo

const imgEl = document.querySelector(".logo");

imgEl.src = "./assets/ineuron-logo.png";
console.log(imgEl);

// Task 2 change price

const priceTxt = document.querySelector(".app_price");
priceTxt.innerHTML = `<span>$10</span> / month`;


// Task 3

const footer = document.querySelector(".footer_social");

const footerIcon = document.createElement("div");
footerIcon.className = "footer_social_ico";
footerIcon.innerHTML = ` <i class="fa-brands fa-linkedin"></i> `;
footer.appendChild(footerIcon);