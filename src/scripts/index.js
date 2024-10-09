import "regenerator-runtime"; /* for async await transpile */
//import "../styles/main.css";
import "../styles/main.scss";
import data from "../public/data/DATA.json";

const restaurantListElement = document.querySelector("#restaurant-list-data");

function createRestaurantItemElement({
  id,
  name,
  description,
  pictureId,
  city,
  rating
}) {
  return `
    <section id="${id}" class="restaurant-item">
      <img src="${pictureId}" alt="${name}'s picture showcase"></img>
      <h3 tabindex="0">${name}</h3>
      <p class="item-location"><span>Lokasi:</span> ${city}</p>
      <p class="item-rating"><span>Rating:</span> ${rating}<span>&#9733;</span></p>
      <button class="read-more-btn" aria-label="Read More Toggle Button"></button>
      <p class="description">${description}</p>
    </section>
  `;
}

const listOfRestaurantItems = data.restaurants.map((restaurant) => {
  return createRestaurantItemElement(restaurant);
});


document.addEventListener("DOMContentLoaded", () => {
  restaurantListElement.innerHTML = listOfRestaurantItems.join("");
  expandDescription();
  dropdown();
});


function expandDescription() {
  const readMoreBtn = document.querySelectorAll(".read-more-btn");
  const description = document.querySelectorAll(".description");

  for (let i = 0; i < readMoreBtn.length; i++) {
    readMoreBtn[i].addEventListener("click", () => {
      if (description[i].style.display === "block") {
        readMoreBtn[i].style.background = "url('./images/icons/down.svg')";
        description[i].style.borderTop= "none";
        description[i].style.display = "none";
      } else {
        readMoreBtn[i].style.background = "url('./images/icons/up.svg')";
        description[i].style.borderTop= "1px dotted #664343";
        description[i].style.display = "block";
      }
    });
  }
}

function dropdown() {
  const menu = document.querySelector(".dropdown-nav");
  const toggleBtn = document.querySelector("#nav-drawer-btn")
  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}
