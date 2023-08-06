// Wait for the document to be ready
$(document).ready(function() {
    // Find all elements with the data-type="close-alert" attribute
    $('[data-type="close-alert"]').on('click', function() {
      // Find the closest parent element with the class "alert" and hide it
      $(this).closest('.alert').hide();
    });

    // Open Modal
    $('[data-type="open-modal"]').on('click', function() {
        var modalIndex = $(this).index('[data-type="open-modal"]');
        $('.modal').eq(modalIndex).show();
    });
  
    // Close Modal
    $('[data-type="close-modal"]').on('click', function() {
        $(this).closest('.modal').hide();
    });
  
    // Close Modal on click outside modal-content
    $(document).on('mouseup', function(event) {
        var modalContent = $('.modal-content');
        if (!modalContent.is(event.target) && modalContent.has(event.target).length === 0) {
          $('.modal').hide();
        }
    });
});