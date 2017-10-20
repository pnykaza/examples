function newCounter() {

  var counter = {
    value: 0,
    theList: [],
    increment: function(something) {
      this.value += something
      var incry = {
        type: "+",
        value: something
      }
      this.theList.push(incry)
      renderoni()
      
    },
    decrement: function(something) {
      this.value -= something
      var decry = {
        type: "-",
        value: something
      }    
      this.theList.push(decry)
      renderoni()
    },
    resetCounter: function() {
      this.value = 0
      this.theList = []
      renderoni()
     
    },
    calculate: function() {
      var calculator = 0
      for(var i = 0; i < this.theList.length; i++){
        if(this.theList.type == "+") {
          calculator += this.theList[i].value 
        }
        else if(this.theList.type == "-") {
          calculator -= this.theList[i].value
        }
        return calculator
      }
    }

  }
  return counter
}

var c = newCounter()


document.getElementById("incrementBtn").addEventListener("click", function(){
    c.increment(1)
})
document.getElementById("decrementBtn").addEventListener("click", function(){
  c.decrement(1)
})
document.getElementById("resetBtn").addEventListener("click", function(){
  c.resetCounter()
})

function renderoni() {
  document.getElementById("currentVal").innerHTML = "Current Value: " + c.value
}