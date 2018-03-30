
$('#toggle').click(function() {
    console.log('clicked');
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
    $('.social').toggleClass('social_overlay');
});

$( document ).ready(function() {
  $( "#new_login" ).addClass('activee');
});


// $('#login').hover(
//    $('#new_login').removeClass('activee')
// );
