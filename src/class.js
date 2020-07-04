// 父类
class People {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  eat() {
    alert(`${this.name} eat something`)
  }

  speak() {
    alert(`My name is ${this.name}, age ${this.age}`)
  }
}


// 子类继承父类
class Student extends People {
  constructor(name, age, number) {
    super(name, age)
    this.number = number
  }

  study() {
    alert(`${this.name} study`)
  }
}

let student1 = new Student('xiaoming', 10, 'A1')
student1.study()
alert(student1.number)
student1.eat()

let student2 = new Student('xiaohong', 12, 'A2')
student2.study()
student2.speak()