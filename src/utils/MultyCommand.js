export default class MultiplyCommand {
  constructor(valueToAdd,twoAdd) {
    this.valueToAdd = valueToAdd
    this.twoAdd = twoAdd
  }
  
    execute(currentValue){
      if(currentValue === 0 ){
        currentValue = 1
        return  this.twoAdd  * this.valueToAdd * currentValue
      }else if(this.valueToAdd === 0){
        this.valueToAdd = 1
        return currentValue * this.valueToAdd
      }
      return currentValue * this.valueToAdd
    }
  
    undo(currentValue){
      return currentValue / this.valueToMultiply
    }
  }