// 写一个简单的promise
import stateMachine from 'javascript-state-machine'

let fsm = new stateMachine({
  init: 'pending',
  transitions: [
    {
      name: 'resolve',
      from: 'pending',
      to: 'fullfilled'
    },
    {
      name: 'reject',
      from: 'pending',
      to: 'rejected'
    }
  ],
  methods: {
    onResolve: function (state, data) {
      data.successList.forEach(fn => fn())
    },
    onReject: function (state, data) {
      data.failList.forEach(fn => fn())
    }
  }

})

class MyPromise {
  constructor (fn) {
    this.successList = []
    this.failList = []

    fn(() => {
      // resolve 函数
      fsm.resolve(this)
    }, () => {
      // reject 函数
      fsm.reject(this)
    })
  }
  then (successFn, failFn) {
    this.successList.push(successFn)
    this.failList.push(failFn)
  }

}

//test
function loadImg () {
  const promise = new MyPromise(function(resolve, reject) {
    let img = document.createElement('img')
    img.onload = function () {
      resolve(img)
    }
    img.onerror = function () {
      reject()
    }
    img.src= src
  })
  return promise
}

const src = 'http://teststore001.rabbitslive.com/all/image/design/design01.jpg'
let result = loadImg(src)
result.then(function() {
  console.log('ok1 ',)
}, function() {
  console.log('fail1')
})
result.then(function() {
  console.log('ok2 ')
}, function() {
  console.log('fail2')
})
