


function person(username, userage) {
  this.name = username
  this.age = userage
  this.sayHello = function () {
    document.write("<p>안녕하세요" + this.name + "</p>")
  }
  this.intro = function () {
    document.write(`<p>${this.name}님은 ${this.age}살 입니다.</p>`)
  }
}