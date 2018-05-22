$(function(){
    $("#desc-btn").click(function(){
        if ($("#desc").hasClass('hidden')){
            $("#desc").height($('#desc-txt').height());
            $("#desc").removeClass('hidden');
            $(this).html("Read less")
        } else {
            $("#desc").height('');
            $("#desc").addClass('hidden');
            $(this).html("Read more")
        }
    });
});
