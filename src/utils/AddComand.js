export default class AddCommand {
    constructor(valueToAdd){
      this.valueToAdd = valueToAdd
    }
  
    execute(currentValue){
      console.log(currentValue)
      return currentValue + this.valueToAdd
    }
  
    undo(currentValue){
      return currentValue - this.valueToAdd
    }
  }