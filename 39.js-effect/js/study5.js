$(document).ready(function () {


  let count = 0;


  let perView;
  //train클래스 너비를 변경 -> train클래스의 너비를 불러와서 perView로 나눈 후 결과를 다시 적용
  let stationWidth;
  let trainWidth;
  // $(".train").width(trainWidth)

  let winWidth = $(window).width()
  // console.log(winWidth)

  if (winWidth > 1024) {
    perView = 2.5
    stationWidth = $(".station").width()
    trainWidth = stationWidth * 5 / perView
    $(".train").width(trainWidth)
  } else if (winWidth >= 768) {
    perView = 2
    stationWidth = $(".station").width()
    trainWidth = stationWidth * 5 / perView

  } else {

    perView = 1
    stationWidth = $(".station").width()
    trainWidth = stationWidth * 5 / perView
  }

  $(window).resize(function () {
    let winWidth = $(window).width()
    // console.log(winWidth)

    if (winWidth > 1024) {
      perView = 2.5
      stationWidth = $(".station").width()
      trainWidth = stationWidth * 5 / perView
      $(".train").width(trainWidth)
    } else if (winWidth >= 768) {
      perView = 2
      stationWidth = $(".station").width()
      trainWidth = stationWidth * 5 / perView

    } else {

      perView = 1
      stationWidth = $(".station").width()
      trainWidth = stationWidth * 5 / perView
    }
  })
  $(".btnNext").click(function (e) {
    count++
    e.preventDefault()
    if (count > 4) { count = 0 }
    //기차가 왼쪽으로 500픽셀
    $(".train").css("transform", "translateX(-" + 20 * count + "%)")
  })

  $(".btnPrev").click(function (e) {
    count--
    e.preventDefault()
    $(".train").css("transform", "translateX(-" + 20 * count + "%)")
  })

  function moveSlider(idx) {
    $(".train").css("transform", "translateX(-" + 20 * count + "%)")
  }

  moveSlider(2)
})