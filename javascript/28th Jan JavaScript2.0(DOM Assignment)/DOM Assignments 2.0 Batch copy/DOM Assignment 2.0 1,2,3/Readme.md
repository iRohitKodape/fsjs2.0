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

```

---

**_TASK 2 :_** Add a Skills section in the about page.
![output](./secondAssignmentImage/task2Output.png)

Ans. Code: 👇

```
//Selects main div .👇
const acc_wrapper = document.querySelector(".accordian-wrapper");

//Creates new element named skills and sets class "accordian".👇
const skills = document.createElement("div");
skills.setAttribute("class","accordian");


<!-- Creates new element h3 and after adding innerText appended it -->👇

const skill_h3 = document.createElement("h3");
skill_h3.innerText = "Skills";
skills.appendChild(skill_h3);


<!-- Creates new element p and after adding innerText appended it -->👇

const skills_p = document.createElement("p");

skills_p.innerText = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github.";

skills.append(skills_p);


<!-- appended div element to the main div. -->👇
acc_wrapper.appendChild(skills);
```

---

## **Assignment 3 :**

---

---

**_TASK :_** Change the placeholder of both forms.
![output](./thirdAssignmentImage/task1Output.png)

Ans. Code : 👇

```
// left form modifications👇
document.querySelector(".mainLeftDetails :nth-child(1)").setAttribute("placeholder","FSJS 2.0");

document.querySelector(".mainLeftDetails :nth-child(2)").setAttribute("placeholder","fsjs@ineuron.ai");

document.querySelector(".mainLeftDetails :nth-child(3)").setAttribute("placeholder","Hello World");



// right form modification 👇
document.querySelector(".mainRight form :nth-child(1)").setAttribute("placeholder","FSJS 2.0");

document.querySelector(".mainRight form :nth-child(2)").setAttribute("placeholder","fsjs@ineuron.ai");

document.querySelector(".mainRight form :nth-child(3)").setAttribute("placeholder","Hello World");
```

---

# ❤️ Thank you for visiting 💚 !

---
