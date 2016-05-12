//Accordion Options

$(document).ready(function() {
    
    var action = "click";
    var speed = 500;
    
   $("li.q").on(action, function(){
       $(this).next().slideToggle(speed).siblings("li.a").slideUp();
   });
    
});