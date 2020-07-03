class Person {
  constructor(name) {
    this.name = name
  }

  getName() {
    return this.name
  }
}

let p = new Person('前端开发人员')
alert(p.getName())