$(document).ready(function () {

  let result = ""

  for (let i = 1; i <= 20; i++) {
    result += `<li>
      <img class="small" src = "./img/img (6)/s${i}.jpg" alt = "작은이미지${i}">
        <img class="big" src="./img/img (6)/pic${i}.jpg" alt="큰이미지${i}">
          <h2 class="title">art work ${i}</h2>
          <p>Artwork description comes here. <br>2023.06.20</p>
          <span class="btnClose">Close</span>
        </li>`
    //백틱기호로 사용 ``
  }
  $(".train").html(result)
  //앞에있던 내용을 지우고 새로운 내용으로 교체

  //------------------------------------------------------


  $(".stationMenu>li").click(function () {
    let idx = $(this).index()  //클릭한 리스트의 순번을 리턴함.
    count = idx * 5 //정해진 순번에 5를 곱한 값을 전역변수 count에 저장함으로써
    //휠을 내렸을 때 이동되는 기능이 정상적으로 작동되게끔 해주는 코드

    //01 ->  0px
    //06 -> -1000px
    //11 -> -2000px
    //16 -> -3000px
    $(".train").css("transform", "translateX(" + (-1000 * idx) + "px)")
  })



  let count = 0;
  $(".station").on("wheel DOMMouseScroll", function (event) {
    //on -> 이벤트를 여러개 묶어 사용할 수 있다.
    // console.log(event)
    let E = event.originalEvent
    let delta = 0;
    if (E.detail) {
      delta = E.detail * -40
    } else {
      delta = E.wheelDelta
    }
    //--->  브라우저 호환성을 맞취주는 설정

    if (delta < 0) {
      //마우스 휠을 내렸을 때
      count++
      console.log(count)
      if (count > 15) { count = 15 }
      $(".train").css("transform", "translateX(" + (-200 * count) + "px)")
    } else {
      //마우스 휠을 올렸을 때
      count--
      console.log(count)
      if (count < 0) { count = 0 }
      $(".train").css("transform", "translateX(" + (-200 * count) + "px)")
    }
    return false
    //이벤트 버블링을 막아줌
  })

  //클릭한 리스트(기차칸)의 활성화 스타일 기능
  $(".train>li").click(function () {
    $("train>li").removeClass("on")
    $(this).addClass("on")

    let idx = $(this).index()
    count = idx //동기화시킴
    $(".train").css("transform", "translateX(" + (-200 * idx) + "px)")
  })


  $(".btnClose").click(function () {
    $(".train>li").removeClass("on")
    return false
    //상위태그로 클릭이벤트가 전달되지 않게(이벤트 버블링) 설정

  })




})
