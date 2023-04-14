# DOM Assignments 1,2 and 3

## **Assignment 1 :**

---

---

**_Task 1_** : Add a list item to the navigation section named " Hire Me ".

![output](./firstAssignmentImage/task1Output.png)

Ans. Code :👇

```
let ulElement = document.querySelector("ul");
console.log(ulElement);

let newLi = document.createElement("li");
newLi.textContent = "Hire Me";

ulElement.appendChild(newLi);

```

---

**_Task 2_** : Replace the placeholder value from "Search" to "Search My Project" and remove "Hire Me" .

![output](./firstAssignmentImage/task2Output.png)

Ans. Code : 👇

```
const inputTag = document.querySelector("input");

inputTag.setAttribute("placeholder", "Search My Project ");

let ulElement = document.querySelector("ul");

let lastLi = ulElement.lastChild;
console.log(lastLi);
ulElement.removeChild(lastLi);
```

---

**_Task 3_** : Change the innerText of 2nd and 3rd span element inside .hero-left-section > p tag.

![output](./firstAssignmentImage/task3Output.png)

Ans. Code : 👇

```
let pEl = document.querySelector("p");

pEl.innerHTML = ` I am an aspiring <span>Full Stack JavaScript Developer</span>,
        <br>who is currently working as <span>an Employee</span> for <br>
        <span>iNeuron Intelligence Pvt Ltd.</span>.`;
```

---

**Task 4** : Change the profile picture.

![output](./firstAssignmentImage/task4Output.png)

Ans. Code : 👇

```
let img = document.querySelector("img");

img.src = './Untitled - Itachi Uchiha Transparent, HD Png Download , Transparent Png Image - PNGitem.png'

```

---

**Task 5** : Add a "Support Me" button aside of "chat with me button.

![output](./firstAssignmentImage/task5Output.png)

Ans. Code : 👇

```
let btnDiv = document.querySelector(".hero-right-section-btns");

const newBtn = document.createElement("button");
newBtn.innerText = "support me";


btnDiv.appendChild(newBtn);
```

---

## **Assignment 2 :**

---

---

**_TASK 1 :_** Change the backgroundColor of headings in "About section".
![output](./secondAssignmentImage/task1Output.png)

Ans. Code : 👇

```
let h3s = document.getElementsByTagName("h3");

for (let index = 0; index < h3s.length-1; index++) {
  h3s[index].style.backgroundColor = "#E3DFFD";
}
```

---

**_TASK 2 :_** Add a Skills section in the about page.
![output](./secondAssignmentImage/task2Output.png)

Ans. Code: 👇

```
<!-- created a div with class accordian -->
const divEl = document.querySelector(".accordian-wrapper");
const newDiv = document.createElement("div");
newDiv.setAttribute("class", "accordian");

<!-- created a h3 and p element and inserted content -->
const newH3 = document.createElement("h3");
newH3.innerText = "Skills";
const newP = document.createElement("p");
newP.innerText =
  "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github";

<!-- Here elements are appended -->
divEl.appendChild(newDiv);
newDiv.appendChild(newH3);
newDiv.appendChild(newP);
```

---

## **Assignment 3 :**

---

---

**_TASK :_** Change the placeholder of both forms.
![output](./thirdAssignmentImage/task1Output.png)

Ans. Code : 👇

```

<!-- input elements placeholder values are changed -->

let inp = document.getElementsByTagName("input");

for (let index = 1; index < inp.length; index++) {
  console.log(index);
  if (index % 2 != 0) {
    inp[index].placeholder = "FSJS2.0";
  } else {
    inp[index].placeholder = "fsjs@ineuron.ai";
  }
}

<!-- textarea placeholder values are changed -->

const textAr = document.getElementsByTagName("textarea");

for (let index = 0; index < textAr.length; index++) {
  textAr[index].placeholder = "Hello world";
}
```

---

# ❤️ Thank you for visiting 💚 !

---
