const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (e) => {
  const x = e.offsetX;
  const y = e.offsetY;

  const newSpan = document.createElement("span");
  newSpan.style.left = x + "px";
  newSpan.style.top = y + "px";
  const size = Math.random() * 100;
  newSpan.style.width = size + "px";
  newSpan.style.height = size + "px";

  bodyEl.appendChild(newSpan);
  setTimeout(() => {
    newSpan.remove();
  }, 3000);
});
