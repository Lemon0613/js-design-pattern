// 状态模式
class State {
  constructor (color) {
    this.color = color
  }
  handle (context) {
    console.log(`turn to ${this.color} light`)
    context.setState(this)  // set satet
  }
}
// main
class Context {
  constructor () {
    this.state = null
  }
  getState () {
    return this.state
  }
  setState (state) {
    this.state = state
  }
}

// test
let context = new Context()
let green = new State('green')
let yellow = new State('yellow')
let red = new State('red')
// green light
green.handle(context)
console.log(context.getState()) // print state
// yellow light
yellow.handle(context)
console.log(context.getState()) // print state
// red light
red.handle(context)
console.log(context.getState()) // print state
