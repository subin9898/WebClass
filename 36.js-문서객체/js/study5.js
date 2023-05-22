


window.onload = function () {
  let btn1 = document.querySelector(".btclick")
  btn1.addEventListener("click", function () {
    //addEventListener -> 재료2개필요(이벤트형태,동작형태function(){클릭했을 때 실행되는 소스코드}) 
    //클릭했을 때 실행되는 소스코드
    document.querySelector(".textbox").style.color = "black"
  })


  let btnOpen = document.querySelector(".btnPopup")
  btnOpen.addEventListener("click", function () {
    document.querySelector(".hiddenPopup").classList.add("show")
    // document.querySelector(".hiddenPopup").style.diplay = "flex"
  })


  let btnClose = document.querySelector(".btnPopupClose")
  btnClose.addEventListener("click", function () {
    document.querySelector(".hiddenPopup").classList.remove("show")
  })
}
