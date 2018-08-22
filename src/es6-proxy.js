// star
let star = {
  name: 'Zhang XX',
  age: 25,
  phone: '18611112222'
}

// agent
let agent = new Proxy(star, {
  get: function (target, key) {
    if (key === 'phone') {
      return 'agent: 13822223333'
    }
    return target[key]
  },
  set: function (target, key, val) {
    if (key === 'customPrice') {
      if (val < 100000) {
        throw new Error('price is too low!')
      } else {
        target[key] = val
        return true
      }
    }
  }
})

//test
console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)

agent.customPrice = 120000
console.log('agent.customPrice: ',agent.customPrice)
