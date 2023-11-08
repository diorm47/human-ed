$(document).ready(function () {
  $(".reviews_carousel").slick({
    infinite: false,
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
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".video_block_cards").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    speed: 1000,
    prevArrow: $(".video_left"),
    nextArrow: $(".video_right"),
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 850,
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

const setMailModal = (event) => {
  const success_mail = document.querySelector(".success_mail");
  success_mail.classList.toggle("hided_modal");


  const overlay = document.querySelector(".overlay");
  overlay.classList.toggle("dn");

  document
    .querySelector(".success_mail_wrapper")
    .addEventListener("click", function (event) {
      event.stopPropagation();
    });
};

const navToggle = () => {
  const mobile_menu = document.querySelector(".mobile_menu");

  if (mobile_menu.style.display == "none") {
    mobile_menu.style.display = "block";
  } else {
    mobile_menu.style.display = "none";
  }
};

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (scroll > 10) {
    document.querySelector(".nav").classList.add("shadow");
  } else {
    document.querySelector(".nav").classList.remove("shadow");
  }
});
