# ***DOM Assignments 5*** :-

***Task*** : Match the output with the given output image with the help of DOM manipulation.

![output](./Output/DOM%20P2%20SS.png)

Ans. Code : 👇

```
<!-- target the elements-->
const galleryEl = document.querySelector(".recipe-gallery");

const cardDiv = document.querySelector(".card");

<!-- copied content  -->
const cardContent = cardDiv.innerHTML;

<!-- created the div element with class attribute -->
const cardLastItem = document.createElement("div");
cardLastItem.setAttribute("class", "card");


<!-- added a 6th recipe with name -->
cardLastItem.innerHTML = cardContent;
cardLastItem.childNodes[1].childNodes[3].innerHTML = "chicken afghani";

<!-- added the 6th recipe to the page -->
galleryEl.appendChild(cardLastItem);

<!-- Name added to the footer -->
const footerLink = document.querySelector('p a');
footerLink.textContent = 'Rohit Kodape'
```
___
___
# **💜 Thank you for visiting 😀🫡 !**