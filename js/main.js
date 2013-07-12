$(document).ready(function() {
    
    // Initialize custom scrollbars
    $(".enable-custom-scrollbar").mCustomScrollbar({
        
        autoHideScrollbar: false,
        scrollInertia: 200,
        autoDraggerLength: true,
        contentTouchScroll: true,
        scrollButtons:{
            enable: true
        },
        advanced:{
            updateOnBrowserResize: true,
            updateOnContentResize: true
        }
        
    });
    
    // Initialize sliders
    $('.enable-slider').anythingSlider();
    
    
    $('.enable-datepicker').datepicker();
    
    $('#advisor-list').selectmenu();
    
    // Style custom checkboxes when the page is loaded and if any of them is set as "checked" by default
    $('.custom-check').each(function() {
        if ($(this).find('input').prop('checked') == true) {
            $(this).addClass('checked');
        }
        else {
            $(this).removeClass('checked');
        }
    });
    
    
    // Change the style of the clicked checkbox
    $('.custom-check').on('click', function() {
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
            openLightbox();
        }
    });
    
    
    // Close the current lightbox when the "close" button is clicked
    $('.close-lightbox').on('click', function() {
        $(this).closest('.lightbox').addClass('no-display');
        $('.overlay').addClass('no-display');
        
        $(this).closest('.confirm-lightbox').addClass('no-display');
    });
    
    
    $('.add-item').on('click', function() {
        openLightbox();
    });
    
    $('.delete-item').on('click', function() {
        $('.confirm-lightbox').removeClass('no-display');
        $('.lightbox').addClass('hide-lightbox');
    });
    
    $('.cancel-confirm').on('click', function() {
        $('.confirm-lightbox').addClass('no-display');
        $('.lightbox').removeClass('hide-lightbox');
    });
    
    
    $('.upload-lightbox .file-name').each(function() {
        $(this).data('name-holder', $(this).text());
    });
    
    $('.open-upload-lightbox').on('click', function() {
        $('.overlay, .upload-lightbox').removeClass('no-display');
        $('.upload-lightbox').find('input[type="file"]').val('');
        $('.upload-lightbox .file-name').text($('.upload-lightbox .file-name').data('name-holder'));
    });
    
    $('.upload-lightbox .upload-link').on('click', function(e) {
        
        e.preventDefault();
        
        $(this).siblings('input').trigger('click');
        
    });
    
    $('.upload-lightbox input[type="file"]').on('change', function() {
        $(this).siblings('.file-name').text($(this).val());
    });
    
    
    function openLightbox() {
        $('.overlay, .lightbox').removeClass('no-display');
    }
    
});
