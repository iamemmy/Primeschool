// Owl Carousel Command
$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      responsive:{
          0:{
              items:1,
              loop:true,
          },
          600:{
              items:1,
              loop:true,
          },
          1000:{
              items:1,
              loop:true,
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