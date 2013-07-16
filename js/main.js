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
    $('.ui-datepicker').wrap('<div class="datepicker-smoothness" />')
    
    
    $('.enable-custom-selectmenu').selectmenu();
    
    $('#tabs').tabs();
    
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
    
    
    $('.radio-block label').each(function() {
        if ($(this).find('input').prop('checked') == true) {
            $(this).addClass('checked');
        }
        else {
            $(this).removeClass('checked');
        }
    });
    
    $('.radio-block label').on('click', function() {
        
        $(this).closest('.radio-block').find('label').each(function() {
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
        
        var confirmText = parseInt($(this).attr('data-confirm-text'));
        
        $('.confirm-lightbox').find('p[data-text]').each(function() {
            
            if ( parseInt($(this).attr('data-text')) == confirmText) {
                $(this).removeClass('no-display');
            }
            else {
                $(this).addClass('no-display');
            }
            
        });
        
        $('.overlay').removeClass('no-display');
        $('.confirm-lightbox').removeClass('no-display');
        $('.lightbox').addClass('hide-lightbox');
        
    });
    
    $('.cancel-confirm').on('click', function() {
        
        $('.confirm-lightbox').addClass('no-display');
        $('.lightbox').removeClass('hide-lightbox');
        
        if ($('.lightbox').hasClass('no-display')) {
            
            $('.overlay').addClass('no-display');
            
        }
        
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
    
    
    
    
    $('.table-block').each(function() {
        
        var $self = $(this).find('.sort').eq(0);
            
            parent = $self.closest('.table-block').find('.item-list'),
            childSelector = 'li',
            keySelector = '.' + $self.attr('class').split(' ')[0],
            way = 'descending';
        
        
        $self.closest('.caption-block').find('a').removeClass('sort sort-up');
        $self.addClass('sort');
        
        sortItems(parent, childSelector, keySelector, way);
        
    });
    
    
    $('.table-block').each(function() {
        $(this).find('.item-list li').each(function() {
            if ($(this).find('a').length !== 0) {
                $(this).addClass('filled');
            }
        });
    });
    
    
    $('.table-block .caption-block a').on('click', function(e) {
        
        e.preventDefault();
        
        var parent = $(this).closest('.table-block').find('.item-list'),
            childSelector = 'li.filled',
            keySelector = '.' + $(this).attr('class').split(' ')[0],
            way = 'descending';
        
        
        if ($(this).hasClass('sort-up')) {
            
            $(this).removeClass('sort-up');
            
        }
        else if ($(this).hasClass('sort')) {
            
            way = 'ascending';
            $(this).addClass('sort-up');
            
        }
        else {
            
            $(this).closest('.caption-block').find('a').removeClass('sort sort-up');
            $(this).addClass('sort');
            
        }
        
        sortItems(parent, childSelector, keySelector, way);
        
    });
    
    
    function sortItems(parent, childSelector, keySelector, way) {
        
        var items = new Array(parent.find(childSelector).length),
            count = 0;
        
        
        parent.find(childSelector).each(function() {
            items[count] = $(this);
            count++;
        });
        
        items.sort(function(a, b) {
            
            var vA = $(keySelector, a).text(),
                vB = $(keySelector, b).text();
            
            
            if (vB.length == 0) {
                return -2;
            }
            else {
                if (way == "ascending") {
                    return (vA < vB) ? -1 : (vA > vB) ? 1 : 0;
                }
                if (way == "descending") {
                    return (vA < vB) ? 1 : (vA > vB) ? -1 : 0;
                }
            }
            
            return false;
        });
        
        parent.prepend(items);
        
    }    
    
    function openLightbox() {
        $('.overlay, .lightbox').removeClass('no-display');
    }
    
});
