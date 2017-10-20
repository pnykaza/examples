function newCounter() {

  var counter = {
    value: 0,
    increment: function(something) {
      this.value += something
    },
    decrement: function(something) {
      this.value -= something
    },
    resetCounter: function() {
      this.value = 0
    }
  }
  return counter
}

var c = newCounter()

var d = newCounter()


  var counter = {
    value: 0,
    increment: function(something) {
      this.value += something
    },
    decrement: function(something) {
      this.value -= something
    },
    resetCounter: function() {
      this.value = 0
    }
  }
  


//   function increment(value) {
//     counter += value
//     console.log(counter) 
//   }
  
//   function decrement(value) {
//     counter -= value
//     console.log(counter) 
//   }
  
//   function resetCounter() {
//     counter = 0;
//     console.log(counter) 
//   }

  


// increment(2)
// decrement(3)
// resetCounter()



// function startCounter(initialValue) {
//   var counter = {
//     increment: function() {
//       this.value += 1
//     },
//     decrement: function() {
//       this.value -= 1
//     },
//     resetCounter: function() {
//       this.value = 0;
//     }
//   }
//   counter.value = initialValue

//   return counter
// }

