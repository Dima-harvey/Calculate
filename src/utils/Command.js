
class Calculator {
    constructor(){
      this.value = 0
      this.history = []
    }
  
    executeCommand(command){
      this.value = command.execute(this.value)
      this.history.push(command)
    }
  
    undo(){
      const command= this.history.pop()
      this.value = command.undo(this.value)
    }
  
    add(valueToAdd){
      this.value = this.value + valueToAdd
    }
  
    subtract(valueToSubtract){
      this.value = this.value - valueToSubtract
    }
  
    multiply(valueToMultiply){
      this.value = this.value * valueToMultiply
    }
  
    divide(valueToDivide){
      this.value = this.value / valueToDivide
    }
  }

  class AddCommand {
    constructor(valueToAdd){
      this.valueToAdd = valueToAdd
    }
  
    execute(currentValue){
      return currentValue + this.valueToAdd
    }
  
    undo(currentValue){
      return currentValue - this.valueToAdd
    }
  }

export default Calculator
export { AddCommand }