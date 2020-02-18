

$(document).ready(function(){ 

//PRELOADER
$( '#notus-loading-container-outer-wrap' ).delay( 4000 ).fadeOut( 1000 );
//END PRELOADER

//MAIN SLIDER

var numberOfSlides = document.getElementById("slides-container-inner-wrap").childElementCount;

var curentSlide = 1;
var sliderXValue;

$('.slider-right-arrow').click(function(e) {
   if(curentSlide > 0 && curentSlide < numberOfSlides) {
       curentSlide++;
       sliderXValue = 100 * curentSlide - 100;
       $('#current-slide').html(curentSlide);
       $('#slides-container-inner-wrap').css('transform', 'translateX(-' + sliderXValue + 'vw)');
   }
});
    
$('.slider-left-arrow').click(function(e) {
   if(curentSlide <= numberOfSlides && curentSlide > 1) {
       curentSlide--;
       sliderXValue = 100 * curentSlide - 100;
       $('#current-slide').html(curentSlide);
       $('#slides-container-inner-wrap').css('transform', 'translateX(-' + sliderXValue + 'vw)');
   }
});
    
//END MAIN SLIDER
    
    
//NAVIGATION OPEN ICON

var navStatus = 'closed';
    
$('#nav-open-icon-container').click(function(e) {
    if(navStatus == 'closed') {
        $('#menu-container-outer-wrap').css('height', '100vh');
        $(this).toggleClass('nav-closed');
        $('#menu-notice').html('Exit');
        navStatus = 'open';
    } else {
        $('#menu-container-outer-wrap').css('height', '0');
        $(this).toggleClass('nav-closed');
        $('#menu-notice').html('Menu');
        navStatus = 'closed';
    }
    
});
    
//END NAVIGATION OPEN ICON
    
//TASK 4 GALLERY
var screenWidth;   
var numberOfGallerySlides = document.getElementById("task-4-gallery-slides-container").childElementCount; 
var curentGallerySlide = 1;
var gallerySliderXValue = 0;
var gallerySingleSlidewidth = $('#task-4-gallery-slide-1').outerWidth(true);
    
function setTask4Gallery() {
screenWidth = $(window).innerWidth(); 
    
    console.log(screenWidth);
    
if(screenWidth>600) {
    
        
        
        
        
        if(curentGallerySlide > 1) {
            curentGallerySlide = 1;
            gallerySliderXValue = 0;
            
            $('#task-4-gallery-slides-container').css('transform', 'translateX(-' + gallerySliderXValue + 'px)');
        }
        

        $('.task-4-gallery-right-arrow').click(function(e) {
                if(curentGallerySlide > 0 && curentGallerySlide < (numberOfGallerySlides-2)) {
                gallerySliderXValue = gallerySliderXValue + gallerySingleSlidewidth;
                $('#task-4-gallery-slides-container').css('transform', 'translateX(-' + gallerySliderXValue + 'px)');
                curentGallerySlide++;
                console.log(curentGallerySlide);
            }
        });

        $('.task-4-gallery-left-arrow').click(function(e) {
            if(curentGallerySlide <= (numberOfGallerySlides-2) && curentGallerySlide > 1) {
                gallerySliderXValue = gallerySliderXValue - gallerySingleSlidewidth;
                $('#task-4-gallery-slides-container').css('transform', 'translateX(-' + gallerySliderXValue + 'px)');
                curentGallerySlide--;
                console.log(curentGallerySlide);
            }
        });
    } else {
        

        console.log(numberOfGallerySlides);

        $('.task-4-gallery-right-arrow').click(function(e) {
                if(curentGallerySlide > 0 && curentGallerySlide < numberOfGallerySlides) {
                gallerySliderXValue = gallerySliderXValue + gallerySingleSlidewidth;
                $('#task-4-gallery-slides-container').css('transform', 'translateX(-' + gallerySliderXValue + 'px)');
                curentGallerySlide++;
                console.log(curentGallerySlide);
            }
        });

        $('.task-4-gallery-left-arrow').click(function(e) {
            if(curentGallerySlide <= (numberOfGallerySlides) && curentGallerySlide > 1) {
                gallerySliderXValue = gallerySliderXValue - gallerySingleSlidewidth;
                $('#task-4-gallery-slides-container').css('transform', 'translateX(-' + gallerySliderXValue + 'px)');
                curentGallerySlide--;
                console.log(curentGallerySlide);
            }
        });       
        
        
    }
}
    
setTask4Gallery();
//END TASK 4 GALLERY
    
//RESIZE FUNCTION
     jQuery(window).resize(function(){
         //setTask4Gallery();
     });

});