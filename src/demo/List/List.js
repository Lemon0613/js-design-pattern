import $ from 'jquery'
import createItem from './CreateItem.js'
import { GET_LIST } from '../config/config.js'

export default class List {
  constructor (app) {
    this.app = app
    this.$el = $('<div>')
  }

  // 获取数据
  loadData () {
    // 返回 Promise 实例
    return fetch(GET_LIST).then(result => {
      console.log(result.json())
      return result.json()
    })
  }

  // 生成列表
  initItemList (data) {
    // data.map(itemData => {
    //   // 创建一个 item 然后 init
    //   let item = createItem(this, itemData)
    //   item.init()
    //   return item
    // })

    data.forEach(itemData => {
      // 创建一个 item 然后 init
      console.log(itemData)
      let item = createItem(this, itemData)
      item.init()
    })
  }

  // 渲染
  render () {
    this.app.$el.append(this.$el)
  }

  init () {
    this.loadData().then(data => {
      this.initItemList(data)
    }).then(() => {
      // 渲染
      this.render()
    })
  }
}
