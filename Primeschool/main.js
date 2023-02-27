
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