"use strict";

// Select all panels
const selected = document.querySelectorAll(".panel");

selected.forEach((select) => {
  // Select the h3 of the current panel
  const heading = select.querySelector("h3");
  // Add an event listener to the current panel
  select.addEventListener("click", (e) => {
    // Close open card before displaying the clicked one
    selected.forEach((panel) => {
      panel.classList.remove("active");
      const panelHeading = panel.querySelector("h3");
      panelHeading.classList.add("hide");
    });

    // Display the clicked card
    e.currentTarget.classList.add("active");
    heading.classList.remove("hide");
  });
});
