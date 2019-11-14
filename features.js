var i = 0;
var text = "FEATURES";
var speed = 100;
var images;
// FOR PRODUCT TITLE TYPING
function typeWriter(){
    if(i < text.length) {
        document.getElementById("producttitle").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}  
// IMAGE HIGHLIGHTING
function highlight(){
    this.style.borderColor = "rgba(0, 128, 255, 0.651)";
}
function reverseHighlight(){
    this.style.borderColor = "rgba(119, 136, 153, 0.295)";
}

// FOR FADING IN AND OUT
$(document).ready(function(){
    $(window).on('load', function(){ // load the window
        // hide elements for fade in
        $("#productFeature").hide().fadeIn(2000);
        $("#extraFeatTable").hide();
        // for adding highlight for images
        images = document.getElementsByClassName("featurePic");
        for(var j = 0; j < images.length; j++){
            images[j].addEventListener("mouseout", reverseHighlight)
            images[j].addEventListener("mouseover", highlight)
        }
    });
    $("#extraFeatures").mouseover(function(){
        $("#extraFeatTable").fadeIn(1000);
    });
});


 
