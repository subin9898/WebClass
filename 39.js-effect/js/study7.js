$(document).ready(function () {

  let count = 0
  $(".btnNext").click(function (e) {
    count++
    if (count > 4) { count = 0 }
    e.preventDefault() //클릭했을 때 a태그의 기본기능을 억제(스크롤바가 가장 위로 올라가는 현상 방지)
    $(".train>li").removeClass("on")
    $(".train>li").eq(count).addClass("on")
  })


  $(".btnPrev").click(function (e) {
    e.preventDefault()
    count--
    if (count < 0) { count = 4 }
    $(".train>li").removeClass("on")
    $(".train>li").eq(count).addClass("on")
  })


  let timer = setInterval(function () {
    count++
    if (count > 4) { count = 0 }
    $(".train>li").removeClass("on")
    $(".train>li").eq(count).addClass("on")
  }, 2500)

  $(".station").mouseover(function () {
    clearInterval(timer)
  })

  $(".station").mouseout(function () {
    timer = setInterval(function () {
      count++
      if (count > 4) { count = 0 }
      $(".train>li").removeClass("on")
      $(".train>li").eq(count).addClass("on")
    }, 2500)
  })
})