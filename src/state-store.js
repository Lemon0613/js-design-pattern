// 收藏/取消收藏

import stateMachine from 'javascript-state-machine'
import $ from 'jquery'

let fsm = new stateMachine({
  init: 'Store',
  transitions: [
    {
      name: 'doStore',
      from: 'Store',
      to: 'unStore'
    },
    {
      name: 'deleteStore',
      from: 'unStore',
      to: 'Store'
    }
  ],
  methods: {
    onDoStore: function() {
      alert('Store')
      updateText()
    },
    onDeleteStore: function() {
      alert('unStore')
      updateText()
    }
  }
})

let $btn = $('#btn')
$btn.click(function() {
  if (fsm.is('Store')) {
    fsm.doStore()
  } else {
    fsm.deleteStore()
  }
})

function updateText () {
  $btn.html(fsm.state)
}

updateText()
