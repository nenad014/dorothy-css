// Get all elements with the close-btn class
const closeButtons = document.querySelectorAll(".close-btn[data-type='close-alert']");

// Add click event listener to each close button
closeButtons.forEach(button => {
  button.addEventListener("click", function() {
    // Get the parent element (alert) of the clicked button and hide it
    const alert = button.parentElement;
    alert.style.display = "none";
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const openModalButtons = document.querySelectorAll('[data-type="open-modal"]');
    const closeModalButtons = document.querySelectorAll('[data-type="close-modal"]');
    const modals = document.querySelectorAll('.modal');

    // Function to open modal
    function openModal() {
      this.nextElementSibling.style.display = 'block';
    }

    // Function to close modal
    function closeModal() {
      this.closest('.modal').style.display = 'none';
    }

    // Attach click event to open modal buttons
    openModalButtons.forEach(function(button) {
      button.addEventListener('click', openModal);
    });

    // Attach click event to close modal buttons
    closeModalButtons.forEach(function(button) {
      button.addEventListener('click', closeModal);
    });

    // Close modal when clicking outside modal-content
    document.addEventListener('mouseup', function(event) {
      modals.forEach(function(modal) {
        const modalContent = modal.querySelector('.modal-content');
        if (!modalContent.contains(event.target)) {
          modal.style.display = 'none';
        }
      });
    });
  });