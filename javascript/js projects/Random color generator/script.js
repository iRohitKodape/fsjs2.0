const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.append(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll(".color-container");

generateColor();

function generateColor() {
  colorContainerEls.forEach((el) => {
    const newColor = randomColor();
    el.style.backgroundColor = "#" + newColor;
    el.textContent = "#" + newColor;
  });
}

function randomColor() {
  const chars = "0123456789adcdef";
  const colorCodeLength = 6;

  let color = "";
  for (let index = 0; index < colorCodeLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    //   console.log(randomNum);
    color += chars.substring(randomNum, randomNum + 1);
  }
  return color;
}

randomColor();
