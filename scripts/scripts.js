$(document).ready(function () {
  $(".reviews_carousel").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    speed: 1000,
    prevArrow: $(".review_left"),
    nextArrow: $(".review_right"),
    responsive: [
      {
        breakpoint: 1110,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// Tabs
const { Tablist } = jolty;
Tablist.initAll();
