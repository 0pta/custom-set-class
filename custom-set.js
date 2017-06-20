class CustomSet {
  constructor (input=[]) {
    const newArr =[]
    input.forEach(el => {
      if (!newArr.includes(el)) {
        newArr.push(el)
      }
    })
    this.input = newArr
  }

  empty() {
    return (this.input.length === 0)
  }

  contains(value) {
    return (this.input.includes(value))
  }

  subset(newSet = new CustomSet()) {
    return (newSet.input.every(el => this.contains(el)))
  }

  disjoint(newSet = new CustomSet()) {
    return (newSet.input.length === 0) ? true : newSet.input.every(el => !this.contains(el))
  }

  eql(newSet = new CustomSet()) {
    return (newSet.input.length !== this.input.length) ? false :
    (this.subset(newSet))
  }

  add(el) {
    if (!this.contains(el)) {
      this.input.push(el)
    }
    return this
  }

  intersection(newSet = new CustomSet()) {
    const newArr = []
    if (newSet.input.some(el => this.contains(el))) {
      this.input.forEach(el => {
        if (newSet.contains(el)) newArr.push(el)
      })
    }
    return new CustomSet(newArr)
  }

  difference(newSet) {
    const newArr = []
    if (this.input.length !== 0) {
      this.input.forEach(el => {
        if (!newSet.contains(el)) newArr.push(el)
      })
    }
    return new CustomSet(newArr)
  }

  union(newSet) {
    const newArr = this.input
    newSet.input.forEach(el => {
      if (!this.contains(el)) newArr.push(el)
    })
    return new CustomSet(newArr)
  }

  clear() {
    this.input = []
    return this
  }

  size() {
    return this.input.length
  }

  toList() {
    return this.input.sort()
  }
}

module.exports = CustomSet
