// Select the modal overlay and exit button
const modalOverlay = document.querySelector(".modal-overlay");
const exitButton = document.querySelector(".exit");
const openModalButton = document.getElementById("open-modal-btn");

// Function to open the modal
function openModal() {
  modalOverlay.style.display = "flex"; // Show the modal
}

// Function to close the modal
function closeModal() {
  modalOverlay.style.display = "none"; // Hide the modal
}

// Add event listener to the open modal button
openModalButton.addEventListener("click", openModal);

// Add event listener to the exit button
exitButton.addEventListener("click", closeModal);

// Optional: Close the modal when clicking outside of it
modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});
