// Get the nav toggle button and navigations element
const navToggle = document.querySelector(".nav-toggle");
const navigations = document.querySelector(".navigations");

// Add click event listener to the nav toggle button
navToggle.addEventListener("click", () => {
    // Toggle the 'show-nav' class on the body element
    document.body.classList.toggle("show-nav");
});