$(document).ready(function(){
    $("#hovergallery div div img").hover(function(){
        $("#mainimage").attr('src', $(this).attr('src'));
    });



 });
