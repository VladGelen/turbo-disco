$(document).ready(function(){
  $('.gallery').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      infinite: true,
      arrows: true,
      responsive: [
          {
              breakpoint: 800,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
  });
});