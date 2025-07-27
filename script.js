// Wait for the DOM to be fully loaded before running any scripts
document.addEventListener("DOMContentLoaded", function () {
  /**
   * Mobile Menu Toggle
   * This section handles the functionality for the hamburger menu on mobile devices.
   */
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  // Check if the menu button exists on the page
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener("click", () => {
      // Toggles the 'hidden' class on the menu element to show/hide it
      mobileMenu.classList.toggle("hidden");
    });
  }

  /**
   * Intersection Observer for Fade-in Animation
   * This modern API efficiently detects when elements enter the viewport.
   */
  const observerOptions = {
    root: null, // observes intersections relative to the viewport
    rootMargin: "0px",
    threshold: 0.1, // Triggers when 10% of the element is visible
  };

  // This is the function that runs when an observed element's visibility changes
  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      // If the element is intersecting (i.e., visible on screen)
      if (entry.isIntersecting) {
        // Add the 'is-visible' class to trigger the CSS animation
        entry.target.classList.add("is-visible");
        // Stop observing the element so the animation only happens once
        observer.unobserve(entry.target);
      }
    });
  };

  // Create a new Intersection Observer instance
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Find all elements with the 'fade-in-section' class
  const targetElements = document.querySelectorAll(".fade-in-section");

  // Start observing each of these elements
  targetElements.forEach((el) => observer.observe(el));
});

// --- Back to Top Button Logic ---

// Get the button
const backToTopBtn = document.getElementById("back-to-top-btn");

// When the user scrolls down 400px from the top, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
}
