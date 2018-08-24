// 迭代器模式
class Iterator {
  constructor () {
    this.list = list
    this.index = 0
  }
  next () {
    if (this.hasNext()) {
      return this.list[index++]
    }
    return null
  }
  hasNext () {
    if (this.index >= this.list.length) {
      return false
    }
    return true
  }
}

class Container {
  constructor (list) {
    this.list = list
  }
  getIterator () {
    return new Iterator(this)
  }
}

// test
let arr = [1, 2, 3, 4, 5, 6]
let container = new Container(arr)
let iterator = container.getIterator()
while (iterator.hasNext()) {
  console.log(iterator.next())
}
