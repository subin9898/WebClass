



window.onload = function () {
  let title = document.querySelector("#title")
  title.style.color = "blue"

  let titleParnet = title.parentElement
  titleParnet.style.border = "1px solid blue"

  let ulTag = document.querySelector(".list")
  let list = ulTag.children

  for (let i = 0; i < list.length; i++) {
    list[i].style.borderBottom = "1px solid black"


    title.nextElementSibling.style.background = "lightblue"
    list[0].nextElementSibling.style.nextElementSibling.color = "red"
    ulTag.previousElementSibling.style.textDecoration = "underline"
  }
  // list[0].style.borderBottom = "1px solid black"
  // list[1].style.borderBottom = "1px solid black"
}



