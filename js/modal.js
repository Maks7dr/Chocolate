// Select the modal overlay and exit button
const modalOverlay = document.querySelector(".modal-overlay");
const exitButton = document.querySelector(".exit");

// Function to open the modal
function openModal() {
  modalOverlay.style.display = "flex"; // Show the modal
}

// Function to close the modal
function closeModal() {
  modalOverlay.style.display = "none"; // Hide the modal
}

// Add event listener to the exit button
exitButton.addEventListener("click", closeModal);

// Example: Open the modal when a button is clicked
document.querySelector("#open-modal-btn").addEventListener("click", openModal);

// Optional: Close the modal when clicking outside of it
modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});
