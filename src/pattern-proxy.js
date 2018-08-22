// 代理模式
class RealImg {
  constructor (fileName) {
    this.fileName = fileName
    this.loadFromDisk()  //初始化即从硬盘加载，模拟
  }
  display () {
    console.log('display...' + this.fileName)
  }
  loadFromDisk () {
    console.log('loading...' + this.fileName)
  }
}

class ProxyImg {
  constructor (fileName) {
    this.realImg = new RealImg()
  }
  display () {
    this.realImg.display()
  }
}

// test
let proxyImg = new ProxyImg('1.png')
proxyImg.display()
