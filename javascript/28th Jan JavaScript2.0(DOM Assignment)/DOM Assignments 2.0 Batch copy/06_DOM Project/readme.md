# **_DOM Assignments 6_** :-

**_Task 1_** : Change the logo with logo of iNeuron logo.

![output](./Output/DOM%20P3%20SS-1.png)

Ans. Code : 👇

```
const imgEl = document.querySelector(".logo");

imgEl.src = "./assets/ineuron-logo.png";
console.log(imgEl);
```

---

---

**_Task 2_** : Change the price value and add a linkedin icon in footer section.

![output](./Output/DOM%20P3%20SS-2.png)

Ans. Code : 👇

```
<!-- Alterd price -->👇

const priceTxt = document.querySelector(".app_price");
priceTxt.innerHTML = `<span>$10</span> / month`;


<!-- selects the footer section -->👇

const footer = document.querySelector(".footer_social");


<!-- added linkedin icon here -->👇

const footer = document.querySelector(".footer_social");

const footerIcon = document.createElement("div");
footerIcon.className = "footer_social_ico";
footerIcon.innerHTML = ` <i class="fa-brands fa-linkedin"></i> `;
footer.appendChild(footerIcon);
```

---

---

# **❤️ Thank you for visiting 😀🫡 !**
