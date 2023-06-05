window.onload = function () {
  let newsSlider = new Swiper(".news_station", {
    slidesPerView: 2,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
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

  // let noticeSlider = new Swiper(".notice", {
  //   slidesPerView: 2,
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },
  //   breakPoints: {
  //     280: {
  //       slidesPerView: 1
  //     },
  //     768: {
  //       slidesPerView: 3
  //     }
  //   }

  // })

  let noticeSlider2 = new Swiper(".notice_station", {
    breakPoints: {
      280: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    pagination: {
      el: ".notice_pagination",
      clickable: true,
    }

  })
}

//객체 -> 어떤 사물을 표현하기 위해

