const Checkoperator = (operator, index) => {
  if (this.state.currentValue.indexOf('+') > -1) {
    index = this.state.currentValue.indexOf('+')
    operator = '+'
    this.state.command.push(operator)
  } else if (this.state.currentValue.indexOf('-') > -1) {
    index = this.state.currentValue.indexOf('-')
    operator = '-'
    this.state.command.push(operator)
  } else if (this.state.currentValue.indexOf('*') > -1) {
    index = this.state.currentValue.indexOf('*')
    operator = '*'
    this.state.command.push(operator)
  } else if (this.state.currentValue.indexOf('/') > -1) {
    index = this.state.currentValue.indexOf('/')
    operator = '/'
    this.state.command.push(operator)
  } else if (this.state.currentValue.indexOf('=') > -1) {
    index = this.state.currentValue.indexOf('=')
    operator = '='
  } else if (this.state.currentValue.indexOf('CE') > -1) {
  }
  return [index,operator]
}

export default Checkoperator
