export default class SubtractCommand {
  constructor(valueToAdd, twoAdd) {
    this.valueToAdd = valueToAdd
    this.twoAdd = twoAdd
  }

  execute(currentValue) {
    if (currentValue === 0 && this.valueToAdd === 0) {
      return -this.valueToAdd
    } else if (Object.is(-0, currentValue)) {
      return currentValue - this.valueToAdd
    } else if (currentValue === 0) {
      return this.valueToAdd - currentValue
    }
    return currentValue - this.valueToAdd
  }

  undo(currentValue) {
    return currentValue + this.valueToSubtract
  }
}
