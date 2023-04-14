

const divEl = document.querySelector(".accordian-wrapper");
const newDiv = document.createElement("div");
newDiv.setAttribute("class", "accordian");

const newH3 = document.createElement("h3");
newH3.innerHTML = "Skills";
const newP = document.createElement("p");
newP.innerText =
  "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github";

divEl.appendChild(newDiv);
newDiv.appendChild(newH3);
newDiv.appendChild(newP);




let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});