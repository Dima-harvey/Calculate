const Checkoperator = (operator, index, com, command) => {
  if (com.indexOf('+') > -1) {
    index = com.indexOf('+')
    operator = '+'
    command.push(operator)
  } else if (com.indexOf('-') > -1) {
    index = com.indexOf('-')
    operator = '-'
    command.push(operator)
  } else if (com.indexOf('*') > -1) {
    index = com.indexOf('*')
    operator = '*'
    command.push(operator)
  } else if (com.indexOf('/') > -1) {
    index = com.indexOf('/')
    operator = '/'
    command.push(operator)
  } else if (com.indexOf('=') > -1) {
    index = com.indexOf('=')
    operator = '='
  }
  return [index, operator, command]
}

export default Checkoperator
