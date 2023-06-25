$(document).ready(function () {

  let count = 0;
  let station = $(".station").width()

  setInterval(function () {
    count++
    if (count > 2) { count = 0 }
    const translate = -station *count
    $(".train").css("transform", "translateX(" + translate + "px)");
  }, 2500);


})