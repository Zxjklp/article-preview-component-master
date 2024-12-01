// Get the share container and button elements
const shareContainer = document.querySelector("[data-share]");
const shareButton = document.querySelector(".share__button");

// Function to toggle share menu
function toggleShareMenu() {
  const isOpen = shareContainer.getAttribute("data-share-toggle") === "true";

  // Toggle the share menu visibility
  shareContainer.setAttribute("data-share-toggle", !isOpen);

  // Toggle the aria-expanded attribute
  shareButton.setAttribute("aria-expanded", !isOpen);
}

// Add click event listener to the share button
shareButton.addEventListener("click", toggleShareMenu);

// Close share menu when clicking outside the share container
document.addEventListener("click", (e) => {
  // Check if click is outside the share container
  if (!shareContainer.contains(e.target)) {
    shareContainer.setAttribute("data-share-toggle", "false");
    shareButton.setAttribute("aria-expanded", "false");
  }
});
