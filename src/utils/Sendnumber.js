const Sendnumber = (numbers, calculator, operator, command, Operation) => {
  if (numbers.length > 1) {
    Operation(numbers[0], numbers[1], operator, command[command.length - 1])
    numbers = []
  } else if (calculator !== 0 && operator !== '/') {
    Operation(numbers[0], 0, operator, command[command.length - 1])
    numbers = []
  } else if (operator === '*' || operator === '/') {
    Operation(numbers[0], 1, operator, command[command.length - 1])
    numbers = []
  }
  return numbers
}

export default Sendnumber
