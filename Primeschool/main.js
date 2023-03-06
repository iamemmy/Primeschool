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

      // Academy Script SUNNY
      let currentSection = 0;
      let sections = document.querySelectorAll(".section");
      let sectionButtons = document.querySelectorAll(".nav > li");
      let nextButton = document.querySelector(".next");
      let previousButton = document.querySelector(".previous");
  
  
      for (let i = 0; i < sectionButtons.length; i++) {
      sectionButtons[i].addEventListener("click", function() {
          sections[currentSection].classList.remove("active");
          sectionButtons[currentSection].classList.remove("active");
          sections[currentSection = i].classList.add("active");
          sectionButtons[currentSection].classList.add("active");
       });
      }
  
          nextButton.addEventListener("click", function() {
              if (currentSection < sectionButtons.length - 1) {
                  sectionButtons[currentSection + 1].click();
              }
          });
  
          previousButton.addEventListener("click", function() {
              if (currentSection > 0) {
                  sectionButtons[currentSection - 1].click();
              }
          });
      // END of  Academy Script 
  
  
  
  //Newsflash script PLANNER
  
//   const buttons = document.querySelectorAll("[data-carousel-button]");
  
//   buttons.forEach(button => {
  
//     button.addEventListener("click", ()=> { const offset = button.dataset.carousel-button === "next" ? 1 : -1
  
//       const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
  
      
  
//       const activeSlide = slides.querySelector("[data-active]")
  
//       let newIndex = [...slides.children].indexOf(activeSlide) + offset
  
      
  
//       if (newIndex < 0) newIndex = slides.children.length - 1;
  
//       if (newIndex >= slides.children.length) newIndex = 0;
  
        
  
//       slides.children[newIndex].dataset.active = true;
  
//       delete activeSlide.dataset.active;
  
//     })  
  
//   })
  
  // End of Newsflash script
