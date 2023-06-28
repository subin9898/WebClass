$(document).ready(function () {

  $(".btn").click(function () {

    if ($(".skill").hasClass("on") == false) {
      //skill클래스에 on클래스가 없다면

      $(".skill").addClass("on")
      $(".skill>li").each(function () {
        let list = $(this)
        let percent = $(this).find(".per").text()
        let count = 0;
        let circle = $(this).find("circle")

        let timer = setInterval(function () {
          count++
          list.find(".per").text(count + "%")
          circle.css("stroke-dashoffset", 314 - (314 * (count / 100)))
          if (count >= percent) {
            clearInterval(timer)
          }
        }, 10)
      })
    }

  })

  $(window).scroll(function () {
    //스크롤바가 움직일 때 마다 실행되는 소스코드
    let a = $(window).scrollTop()//스크롤바가 위에서 얼만큼 내려와있는지 계산
    let b = $(".skill").offset().top
    let c = $(window).height() * 0.5

    if (a + c >= b) {
      if ($(".skill").hasClass("on") == false) {
        //skill클래스에 on클래스가 없다면

        $(".skill").addClass("on")
        $(".skill>li").each(function () {
          let list = $(this)
          let percent = $(this).find(".per").text()
          let count = 0;
          let circle = $(this).find("circle")

          let timer = setInterval(function () {
            count++
            list.find(".per").text(count + "%")
            circle.css("stroke-dashoffset", 314 - (314 * (count / 100)))
            if (count >= percent) {
              clearInterval(timer)
            }
          }, 10)
        })
      }

    }
  })





})