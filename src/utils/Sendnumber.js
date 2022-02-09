const Sendnumber = (numbers, calculator, operator, command, Operation) => {
  if (calculator !== 0 && operator !== '/') {
    Operation(numbers[0], 0, operator, command[command.length - 1])
    numbers = []
  } else if (operator === '*' || operator === '/') {
    Operation(numbers[0], 1, operator, command[command.length - 1])
    numbers = []
  } else if (numbers.length > 0) {
    Operation(numbers[0], 0, operator, command[command.length - 1])
    numbers = []
  }
  return numbers
}

export default Sendnumber
