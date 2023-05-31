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
$(document).ready(function () {
  $(".tabTit>li").click(function () {
    $(".tabTit>li").removeClass("on")
    $(this).addClass("on")
    let idx = $(this).index()
    //index함수는 앞에 선택된 태그의 부모태그기준 순번을 리턴함 0번부터
    $(".tabDes").html(tabDescription[idx])
  })
})