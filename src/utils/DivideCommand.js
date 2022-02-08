export default class DivideCommand {
  constructor(valueToAdd, twoAdd) {
    this.valueToAdd = valueToAdd
    this.twoAdd = twoAdd
  }

  execute(currentValue) {
    if (this.valueToAdd === 0 && currentValue === 0) {
      this.valueToAdd = 1
      currentValue = this.twoAdd
      return currentValue / this.valueToAdd
    } else if (this.valueToAdd === 0) {
      this.valueToAdd = 1
      return currentValue / this.valueToAdd
    } else if (currentValue === 0) {
      currentValue = 1
      return this.valueToAdd / this.twoAdd / currentValue
    }
    return currentValue / this.valueToAdd
  }

  undo(currentValue) {
    return currentValue * this.valueToDivide
  }
}
