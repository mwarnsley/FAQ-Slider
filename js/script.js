//Accordion Options

$(document).ready(function() {
    
    //Setting the variables to use for the slider
    var action = "click";
    var speed = 500;
    
   $("li.q").on(action, function(){
       $(this).next().slideToggle(speed).siblings("li.a").slideUp();
       
       //Getting the image for the question
       var img = $(this).children("img");
       //Remove the rotate class for all arrow images except the active
       $("img").not(img).removeClass("rotate");
       //Toggle the rotate class
       img.toggleClass("rotate");
   });
    
});