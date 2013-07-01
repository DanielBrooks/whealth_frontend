$(document).ready(function() {
    
    // Initialize sliders
    $('.enable-slider').anythingSlider();
    
    // Style custom checkboxes when the page is loaded and if any of them is set as "checked" by default
    $('.register-check-list label').each(function() {
        if ($(this).find('input').prop('checked') == true) {
            $(this).addClass('checked');
        }
        else {
            $(this).removeClass('checked');
        }
    });
    
    
    // Change the style of the clicked checkbox
    $('.register-check-list label').on('click', function() {
        if ($(this).find('input').prop('checked') == true) {
            $(this).addClass('checked');
        }
        else {
            $(this).removeClass('checked');
        }
    });
    
    
    
    // Style custom radiobuttons when the page is loaded and if any of them is set as "checked" by default
    $('.radio-list label').each(function() {
        if ($(this).find('input').prop('checked') == true) {
            $(this).addClass('checked');
        }
        else {
            $(this).removeClass('checked');
        }
    });
    
    
    // Change the style of the radiobutton-group when a radiobutton is clicked
    $('.radio-list label').on('click', function() {
        
        $(this).closest('.radio-list').find('label').each(function() {
            $(this).removeClass('checked');
        });
        
        $(this).addClass('checked');
    });    
    
    
    // Open the lightbox when the option "Yes" is set as "checked"
    $('.activate-lightbox').on('change', function() {
        
        if ($(this).prop('checked') == true) {
            $('.overlay, .lightbox').removeClass('no-display');
        }
    });
    
    
    // Close the current lightbox when "close" button is clicked
    /*
    $('.close-lightbox').on('click', function() {
        $(this).closest('.lightbox').addClass('no-display');
        $('.overlay').addClass('no-display');
    });
    */
    
});
