$("#promo a[href^='#offre_promo']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 500, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

$("#decouvrir a[href^='#comment_ca_marche']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 500, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

$(function() {
    let introHeight = document.getElementById('intro').offsetHeight;
    $(window).scroll(function() { //Au scroll dans la fenetre on déclenche la fonction
        if ($(this).scrollTop() > introHeight - 8) { //quand la fin de la main page est atteinte.
            $('#navigation').addClass("fixedNavbar"); //on ajoute la classe "fixNavigation" à <div id="navigation">
        } else {
            $('#navigation').removeClass("fixedNavbar"); //sinon on retire la classe "fixNavigation" à <div id="navigation">
        }
    });
});

if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

$(document).ready(function(){
    $(".testimonial-slider").owlCarousel({
        items:3,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[979,2],
        itemsTablet:[550,1],
        pagination: true,
        autoPlay:true
    });

    $(".partenaires-slider").owlCarousel({
        items:3,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[979,2],
        itemsTablet:[550,1],
        pagination: true,
        autoPlay:true
    });

});
