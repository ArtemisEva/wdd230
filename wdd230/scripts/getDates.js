// Get the current year
let currentDate = new Date();
let ydate = currentDate.getFullYear();

// Find the element with the id "currentYear"
let currentYearElement = document.getElementById("ydate");

// Update the content of the element with the current year
currentYearElement.textContent = ydate;
