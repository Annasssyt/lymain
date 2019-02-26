$(window).load(function() {
    $('#full_feature').swipeslider();
})

var nav= function () {
    $('.nav__trigger').unbind("click").bind("click",function () {
        $('.nav-content').toggleClass('nav--active');
        $('.nav-content').toggleClass('fadeInDown');
        $('.nav__link').toggleClass('flipInY');
    });
}
nav();