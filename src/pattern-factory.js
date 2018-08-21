// 工厂模式
class Product {
  constructor (name) {
    this.name = name
  }
  init () {
    alert('init')
  }
  fun1 () {
    alert('fn1')
  }
  fun2 () {
    alert('fn2')
  }
}

class Create {
  create(name) {
    return new Product(name)
  }
}

// test
let creator = new Creator()
let p = creator.create('p1')
p.init()
p.fn1()
