
//Newsflash script PLANNER

const buttons = document.querySelectorAll("[data-carousel-button]");
buttons.forEach(button => {
  button.addEventListener("click", ()=> { const offset = button.dataset.carousel-button === "next" ? 1 : -1
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
    
    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;
      
    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  })  


// Academy Script SUNNY
var buttons = document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

function showCourses (panelIndex) {
  buttons.forEach(function (node) {
     node.style.color= "";
       node.style.borderBottom = ""
  });

  buttons[panelIndex].style.color='white'; 
   buttons[panelIndex].style.borderBottom ='2px solid rgba(23,161,250,1)'; 
    tabPanels.forEach(function (node) {
      node.style.display= "none";
  });

  tabPanels[panelIndex].style.display="block";
  
}
 showCourses(0)

 // END of  Academy Script 


//Newsflash script PLANNER

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {

  button.addEventListener("click", ()=> { const offset = button.dataset.carousel-button === "next" ? 1 : -1

    const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

    

    const activeSlide = slides.querySelector("[data-active]")

    let newIndex = [...slides.children].indexOf(activeSlide) + offset

    

    if (newIndex < 0) newIndex = slides.children.length - 1;

    if (newIndex >= slides.children.length) newIndex = 0;

      

    slides.children[newIndex].dataset.active = true;

    delete activeSlide.dataset.active;

  })  


})

// End of Newsflash script
