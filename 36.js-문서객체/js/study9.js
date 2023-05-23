


// window.onload = function () {
//   let nextBtn = document.querySelectorAll(".btnNext")
//   let train = document.querySelectorAll(".train")
//   let count = 0

//   let prevBtn = document.querySelector(".btnPrev")

//   nextBtn.addEventListener("click", function () {
//     //train클래스를 선택해서 왼쪽으로 500픽셀 이동
//     count++
//     if (count > 3) { count = 0 }
//     train.style.transform = "translateX(-" + 500 * count + "px)"
//   })

//   prevBtn.addEventListener("click", function () {
//     count--
//     if (count < 0) { count = 3 }
//     train.style.transform = "translateX(-" + 500 * count + "px)"
//   })


// }

window.onload = function () {

  let nextBtn = document.querySelector(".btnNext")
  let prevBtn = document.querySelector(".btnPrev")
  let Train = document.querySelector(".train")
  let trainList = Train.children
  let count = 0
  nextBtn.addEventListener("click", function () {
    //train클래스를 선택해서 왼쪽으로 500픽셀 이동
    count++
    if (count > 3) { count = 0 }
    Train.style.transform = "translateX(-" + 25 * count + "%)"
    for (let i = 0; i < trainList.length; i++) {
      trainList[i].classList.remove("on")
    }
    trainList[count].classList.add("on")

  })
  prevBtn.addEventListener("click", function () {
    //train클래스를 선택해서 오른쪽으로 500픽셀 이동
    count--
    if (count < 0) { count = 3 }
    Train.style.transform = "translateX(-" + 25 * count + "%)"

    for (let i = 0; i < trainList.length; i++) {
      trainList[i].classList.remove("on")
    }
    trainList[count].classList.add("on")

  })


}