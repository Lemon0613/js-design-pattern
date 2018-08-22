// 装饰器模式
class Circle {
  draw () {
    console.log('draw a circle')
  }
}

class Decorator {
  constructor (cirle) {
    this.cirle = circle
  }
  draw () {
    this.cirle.draw()
    this.setRedBorder(cirle)
  }
  setRedBorder () {
    console.log('set a red border')
  }
}

// test
let circle = new Circle()
circle.draw()

let dec = new Decorator()
dec.draw()
