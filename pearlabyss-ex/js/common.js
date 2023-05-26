window.onload = function () {
  let newsSlider = new Swiper(".news_station", {
    slidesPerView: 2,
    pagination: {
      el: '.swiper-pagination',
    },
    breakPoints: {
      280: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 3
      }
    }

  })
}