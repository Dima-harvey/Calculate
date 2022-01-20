export default class SubtractCommand {
  constructor(valueToAdd,twoAdd) {
    this.valueToAdd = valueToAdd
    this.twoAdd = twoAdd
  }

    execute(currentValue){
      if(currentValue === 0 ){
        return this.valueToAdd - this.twoAdd -currentValue
      }
      return currentValue -this.valueToAdd
    }
  
    undo(currentValue){
      return currentValue + this.valueToSubtract
    }
  }