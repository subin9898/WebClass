


// window.onload = function () {
//   let nextBtn = document.querySelector(".btnNext")
//   let train = document.querySelector(".train")
//   let count = 0

//   let prevBtn = document.querySelector(".btnPrev")

//   nextBtn.addEventListener("click", function () {
//     //train클래스를 선택해서 왼쪽으로 500픽셀 이동
//     count++
//     if (count > 3) { count = 0 }
//     train.style.transform = "translateX(-" + 25 * count + "%)"
//     for (let i = 0; i < trainList.length; i++) {
//       trainList[i].classList.remove("on")
//     }
//     trainList[count].classList.add("on")
//   })

//   prevBtn.addEventListener("click", function () {
//     count--
//     if (count < 0) { count = 3 }
//     train.style.transform = "translateX(-" + 25 * count + "%)"
//     for (let i = 0; i < trainList.length; i++) {
//       trainList[i].classList.remove("on")
//     }
//     trainList[count].classList.add("on")

//   })
// }


// }

window.onload = function () {

  let nextBtn = document.querySelector(".btnNext")
  let prevBtn = document.querySelector(".btnPrev")
  let Train = document.querySelector(".train")
  let trainList = Train.children
  let pageList = document.querySelectorAll(".pagination>li")
  let count = 0


  nextBtn.addEventListener("click", function () {
    //train클래스를 선택해서 왼쪽으로 500픽셀 이동
    count++
    if (count > 3) { count = 0 }
    Train.style.transform = "translateX(-" + 25 * count + "%)"


    for (let i = 0; i < trainList.length; i++) {
      trainList[i].classList.remove("on")
      pageList[i].classList.remove("on")
    }

    trainList[count].classList.add("on")
    pageList[count].classList.add("on")
  })


  prevBtn.addEventListener("click", function () {
    //train클래스를 선택해서 오른쪽으로 500픽셀 이동
    count--
    if (count < 0) { count = 3 }
    Train.style.transform = "translateX(-" + 25 * count + "%)"


    for (let i = 0; i < trainList.length; i++) {
      trainList[i].classList.remove("on")
      pageList[i].classList.remove("on")
    }

    trainList[count].classList.add("on")
    pageList[count].classList.add("on")

  })


  for (let a = 0; a < pageList.length; a++) {
    pageList[a].addEventListener("click", function () {
      count = a  //순번에 맞는 인덱스를 카운트 변수에 저장한다.
      for (let i = 0; i < trainList.length; i++) {
        trainList[i].classList.remove("on")
        pageList[i].classList.remove("on")
      }

      trainList[a].classList.add("on")
      pageList[a].classList.add("on")

      Train.style.transform = "translateX(-" + 25 * a + "%)"
    })
  }



}