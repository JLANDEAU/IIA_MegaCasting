$(document).ready(function() {
 
    $(".BackGround a").mouseover(function() {
        nom = $(this).attr('id');
        $('.BackGround').css('background', 'url(/MegaCasting/Image/Img-Background/' + nom + '.jpg)');
    });
    
    $(".BackGround a").mouseleave(function() {
        $('.BackGround').css('background', 'url(/MegaCasting/Image/Img-Background/allNB.jpg)');
    });
 
});