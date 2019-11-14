var i = 0;
var text = "FEATURES";
var speed = 100;

// FOR TYPING
function typeWriter(){
    if(i < text.length) {
        document.getElementById("producttitle").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// IMAGE HIGHLIGHTING
function highlight(){
    document.getElementById("featurePic");
}


// FOR FADING IN AND OUT
$(document).ready(function(){
    $(window).on('load', function(){
        $("#productFeature").hide().fadeIn(2000);
        $("#extraFeatTable").hide();
    });
    $("#extraFeatures").mouseover(function(){
        $("#extraFeatTable").fadeIn(1000);
    });
});
