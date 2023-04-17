# ***DOM Assignments 4*** :-

***Task 1*** : Match the output with the given output image with the help of DOM manipulation.

![output](./Output/DOM%20P1%20SS.png)

Ans. Code : 👇

```
// Barbarian
const barbarianEl = document.querySelector(
  ".clash-card__unit-stats--barbarian"
);
barbarianEl.style.backgroundColor = "#F2CD5C";

// Archer
const archerEl = document.querySelector(".clash-card__unit-stats--archer");
archerEl.style.backgroundColor = "#F56EB3";

// Giant
const giantEl = document.querySelector(".clash-card__unit-stats--giant");
giantEl.style.backgroundColor = "#FF8B13";

// goblinEl
const goblinEl = document.querySelector(".clash-card__unit-stats--goblin");
goblinEl.style.backgroundColor = "#82CD47";

// wizardEl
const wizardEl = document.querySelector(".clash-card__unit-stats--wizard");
wizardEl.style.backgroundColor = "#39B5E0";


const allStat = document.querySelectorAll('.stat'); 
console.log(allStat);

const statVal = document.querySelectorAll('.stat-value');
console.log(statVal);


allStat.forEach((item) => {
    item.style.color = 'white';
})

statVal.forEach((item) => {
  item.style.color = "white";
});

```

___
___
# **💚 Thank you for visiting 😀🫡 !**