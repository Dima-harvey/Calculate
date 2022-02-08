export default class AddCommand {
  constructor(valueToAdd, twoAdd) {
    this.valueToAdd = valueToAdd
    this.twoAdd = twoAdd
  }

  execute(currentValue) {
    return currentValue + this.twoAdd + this.valueToAdd
  }

  undo(currentValue) {
    return currentValue - this.valueToAdd
  }
}
