


window.onload = function () {
  let tabTiltes = document.querySelectorAll(".tabTit>li")
  let tabDes = document.querySelectorAll(".tabDes")
  let tabDescription = [`<h3>title1</h3>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt saepe expedita rerum ipsam earum doloremque
    cupiditate, et voluptatem quaerat, repellat illum maiores enim eius vitae culpa! Dolores, sint dicta?
    Dignissimos!</p>`,
    `<h3>title2</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt saepe expedita rerum ipsam earum doloremque
      cupiditate, et voluptatem quaerat, repellat illum maiores enim eius vitae culpa! Dolores, sint dicta?
      Dignissimos!</p>`,
    `<h3>title3</h3>
      <ul>
      <li>des1</li>
      <li>des2</li>`
  ]
  for (let i = 0; i < tabTiltes.length; i++) {
    tabTiltes[i].addEventListener("click", function (e) {
      for (let j = 0; j < tabTiltes.length; j++) {
        tabTiltes[j].classList.remove("on")
      }
      this.classList.add("on")

      tabDes.innerHTML = tabDescription[i]
    })
  }
}