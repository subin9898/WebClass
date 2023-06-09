$(document).ready(function () {


  let count = 0;
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