$(document).ready(function () {
  let count = 0;
  setInterval(function () {
    count++
    if (count > 2) { count = 0 }
    $(".train").css("transform", "translateY(" + -400 * count + "px)")
  }, 2500)
})