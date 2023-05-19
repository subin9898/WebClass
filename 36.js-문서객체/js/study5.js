window.onload = function () {
  let btn1 = document.querySelector(".btclick")
  btn1.addEventListener("click", function () {
    //클릭했을 때 실행되는 소스코드
    document.querySelector(".textbox").style.color = "black"
  })
}
