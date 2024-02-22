"use strict";

// Select all panels
const cards = document.querySelectorAll(".panel");

cards.forEach((card) => {
  // Select the h3 of the current panel
  const heading = card.querySelector("h3");
  // Add an event listener to the current
  card.addEventListener("click", (e) => {
    // Close open card before displaying the clicked one
    cards.forEach((panel) => {
      panel.classList.remove("active");
      const panelHeading = panel.querySelector("h3");
      panelHeading.classList.add("hide");
    });

    // Display the clicked card
    e.currentTarget.classList.add("active");
    heading.classList.remove("hide");
  });
});
