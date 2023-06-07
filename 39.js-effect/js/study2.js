$(document).ready(function () {
  $(".box").click(function () {
    alert("box태그를 클릭")
  })
  $(".btn").click(function () {
    alert("span태그를 클릭")
    return false
    //신호를 위쪽으로 전달하지 않음
  })
})