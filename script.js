"use strict";

// Select all panels
const cards = document.querySelectorAll(".panel");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    removeActiveClasses();
    card.classList.add("active");
  });
});

function removeActiveClasses() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}
