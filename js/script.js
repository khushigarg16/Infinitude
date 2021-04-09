//$(window).scroll(function(){
//    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
//});

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 50){
            $('#nav').css('background','black');
            $('#nav').css('height','60px');
        }
        else{
            $('#nav').css('background','transparent');
        }
    })
})