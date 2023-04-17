
const galleryEl = document.querySelector(".recipe-gallery");

const cardDiv = document.querySelector(".card");

const cardContent = cardDiv.innerHTML;

const cardLastItem = document.createElement("div");
cardLastItem.setAttribute("class", "card");

// final item
cardLastItem.innerHTML = cardContent;
cardLastItem.childNodes[1].childNodes[3].innerHTML = "chicken afghani";


galleryEl.appendChild(cardLastItem);

// footer modified

const footerLink = document.querySelector('p a');
footerLink.textContent = 'Rohit Kodape'