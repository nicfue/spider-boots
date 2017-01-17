// jshint esversion:6
// CONTACT MAP
function initMap() {
  let mapCanvas = document.getElementById("map");
  let cord = new google.maps.LatLng(33.1791817, -81.0961495);
  let mapOptions = {
    center: cord,
    zoom: 13,
    scrollwheel: false
  };
  let map = new google.maps.Map(mapCanvas, mapOptions);
  let marker = new google.maps.Marker({
  position: cord,
  title:"Vi finns på Spider Road"
  });
  marker.setMap(map);
}

//SMOOTH SCROLL
$(document).on('click', '.nav-link', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
});

//SCROLL TO TOP
$(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
        $('.scrollToTop').fadeIn();
    } else {
        $('.scrollToTop').fadeOut();
    }
});

$('.scrollToTop').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
    return false;
});

//BRAND PIC MINIMIZE ON SCROLL
$(document).ready(function(){
var scroll_start = 0;
var startchange = $('#startchange');
var offset = startchange.offset();
  if (startchange.length){
    $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar").addClass("fixednav");
          $(".brand-img").addClass("brand-img-fixed");
      } else {
          $(".navbar").removeClass("fixednav");
          $(".brand-img").removeClass("brand-img-fixed");
      }
    });
  }
});

//MOBILEMENU
$(document).ready(function(){
  $('#menu').slicknav({
    label: '',
    duration: 0
  });
});
$(document).ready(function(){
  $('.slicknav_icon').click(function(){
    $(this).toggleClass('open');
    $('.intro-section').toggleClass('intro-section-hidden');
  });
});

$(window).scroll(function() {
if ($(document).scrollTop() > 50) {
$('nav').addClass('shrink');
$('.brand-img').css('width', '90%');
} else {
$('nav').removeClass('shrink');
$('.brand-img').css('width', '115%');
}
});
