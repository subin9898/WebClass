$(document).ready(function () {
  let count = 0;

  setInterval(function () {
    count++
    if (count > 2) { count = 0 }
    $(".train").css("transform", "translateX(" + -1200 * count + "px)")
  }, 2500)


  $(".tabMenu>dt").click(function () {
    $(".tabMenu>dt").removeClass("on")
    $(this).addClass("on")
    $(".tabMenu>dd").removeClass("on")
    $(this).next().addClass("on")
  })

  $(".popupbtn").click(function () {
    $(".popup").addClass("on")
  })
  $(".closebtn").click(function () {
    $(".popup").removeClass("on")
  })

})