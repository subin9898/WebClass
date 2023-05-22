

window.onload = function () {
  let dtlist = document.querySelectorAll(".tabMenu>dt")
  // dtlist[0].addEventListener("click", function () {
  // })

  for (let i = 0; i < dtlist.length; i++) {
    dtlist[i].addEventListener("click", function () {
      // dtlist[0].classList.remove("on")
      // dtlist[1].classList.remove("on")
      // dtlist[2].classList.remove("on")

      for (let j = 0; j < dtlist.length; j++) {
        dtlist[j].classList.remove("on")
      }
      this.classList.add("on")
      //클릭하는 맥락안에서 클릭한 태그를 this로 표현할 수 있다.
    })
  }
}