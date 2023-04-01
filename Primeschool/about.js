// Owl Carousel Command
$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        autoWidth: false,
        responsiveClass: true,
      responsive:{
          0:{
              loop: true,
              items:1,
          },
          600:{
              loop: true,
              items:2,
          },
          1000:{
              loop: true,
              items:4,
          }
      }
    });
    $('#next').click(function() {
        owl.trigger('next.owl.carousel');
      });
    
      $('#prev').click(function() {
        owl.trigger('prev.owl.carousel');
    });
});