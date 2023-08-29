$(document).ready(function () {
    $(".image-slider-say").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      draggable: false,
      prevArrow: `<span class='slick-prev slick-arrow'><ion-icon name="chevron-back-outline"style="color: #777;"></ion-icon></span>`,
      nextArrow: `<span class='slick-next slick-arrow'><ion-icon name="chevron-forward-outline" style="color: #777;"></ion-icon></span>`,
      dots: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            arrows: false,
            infinite: false,
          },
        },
      ],
      // autoplay: true,
      // autoplaySpeed: 1000,
    });
  });
  