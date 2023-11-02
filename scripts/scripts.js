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

$(document).ready(function () {
  $(".video_block_cards").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    speed: 1000,
    prevArrow: $(".video_left"),
    nextArrow: $(".video_right"),
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

const setMailModal = () => {
  const success_mail = document.querySelector(".success_mail");

  if (success_mail.style.display == "none") {
    success_mail.style.display = "flex";
  } else {
    success_mail.style.display = "none";
  }
};
