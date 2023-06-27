$(document).ready(function () {

  $(".btn").click(function () {
    if ($(this).parent().hasClass("on") == false) {


      $(this).parent().addClass("on")
      let per = Number($(this).parent().find(".per").text())    //find() 앞에서 선택한 태그의 자손 중 찾아줌
      let circle = $(this).parent().find("circle")
      circle.css("stroke-dashoffset", 314 - (314 * (per / 100)))

      let percentTag = $(this).parent().find(".per")
      let count = 0;
      let timer = setInterval(function () {
        count++
        percentTag.text(count + "%")
        // circle.css("stroke-dashoffset", 314 - (314 * (count / 100)))
        if (count >= per) {
          clearInterval(timer)
        }
      }, 10)
    }

  })
})