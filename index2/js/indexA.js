$(document).ready(function () {
  let count = 0;

  setInterval(function () {
    count++
    if (count > 2) { count = 0 }
    $(".train").css("transform", "translateY(" + -300 * count + "px)")
  }, 2500)


  $(".notice dt").click(function () {
    $(".notice dt").removeClass("on")
    $(this).addClass("on")

    $(".notice dd").removeClass("on")
    $(this).next().addClass("on")
  })


})