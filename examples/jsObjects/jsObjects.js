function createCounter (initialValue) {
  var counter = {
    increment: function () {
      this.value += 1
    },
    decrement: function () {
      this.value -= 1
    },
  }
  
  counter.value = initialValue
  
  return counter
}

function ingredient (name, amount, unit) {
  return {
    name: name,
    amount: amount,
    unit: unit,
    print: function () {
      console.log(this.amount + " " + this.unit + " of " + this.name)
      // 1 cup of pasta
    }
  }
}

var pasta = ingredient("pasta", "1", "cup")
pasta.print()

class Food { }

class Ingredient extends Food {
  constructor (name, amount, unit) {
    super()
    
    this.name = name
    this.amount = amount
    this.unit = unit
  }
  
  print() {
    console.log(this.amount + " " + this.unit + " of " + this.name)
  }
}

var macaroni = new Ingredient("macaroni", "3", "lbs")
macaroni.print()



var myShinyNewCounter = createCounter(3)
var myShinyNewCounter2 = createCounter(7)


myShinyNewCounter.increment()

myShinyNewCounter2.increment()
myShinyNewCounter2.increment()
myShinyNewCounter2.increment()


console.log("First: " + myShinyNewCounter.value, "Second: " + myShinyNewCounter2.value)