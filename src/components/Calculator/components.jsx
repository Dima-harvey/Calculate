import React from 'react'
import { connect } from 'react-redux'
import Calcul from '@/utils/Command'
import AddCommand from '@/utils/AddComand'
import SubtractCommand from '@/utils/SubtractCommand'
import DivideCommand from '@/utils/DivideCommand'
import MultiplyCommand from '@/utils/MultyCommand'
import { Container, WrapperContainer } from './styles'
import Display from '../Display/components'
import History from '../History/components'
import Keys from '../Keys/components'
import { addHistory } from '../../actions/index'
import { store } from '@/store'
import { SUM, SUBSTARCT, MULTY, DIVIDE } from '@/constants'

const calculator = new Calcul()

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expression: '',
      value: '',
      history: '',
      currentValue: '',
      numbers: [],
    }
  }

  handleOnNumber = number => {
    this.state.currentValue += number
    this.setState(() => ({
      expression: this.state.currentValue,
    }))
    if (
      this.state.currentValue.includes('+') ||
      this.state.currentValue.includes('-') ||
      this.state.currentValue.includes('*') ||
      this.state.currentValue.includes('/')
    ) {
      console.log(this.state.currentValue)
      const index = this.state.currentValue.indexOf('+')
      const operator = '+'
      console.log(index)
      const number = this.state.currentValue.slice(0, index)
      console.log('Yes', number)
      this.state.currentValue = ''
      this.state.numbers.push(number)
      console.log(this.state.numbers.length)
      console.log(this.state.numbers[0])
      console.log(this.state.numbers[1])
      if (this.state.numbers.length > 1) {
        this.Operation(this.state.numbers[0], this.state.numbers[1], operator)
        this.state.numbers = []
        console.log(this.state.numbers)
      } else if (calculator.value !== 0) {
        this.Operation(this.state.numbers[0], 0, operator)
        this.state.numbers = []
      }
    }
    this.setState(() => ({
      value: this.state.currentValue,
    }))
  }

  Operation = (num1, num2, operator) => {
    switch (operator) {
      case SUM:
        calculator.executeCommand(new AddCommand(+num1, +num2))
        console.log(calculator.value)
        this.setState(() => ({
          expression: calculator.value,
        }))
        break
      case SUBSTARCT:
        return num1 - num2
      case DIVIDE:
        return num1 / num2
      case MULTY:
        return num1 * num2
    }
  }

  render() {
    console.log(store)
    return (
      <Container>
        <WrapperContainer>
          <Display value={this.state.expression} />
          <Keys onDigit={this.handleOnNumber} />
        </WrapperContainer>
        <hr />
        <History expression={this.state.history} />
      </Container>
    )
  }
}

export default connect(
  state => ({
    textStore: state.history,
  }),
  dispatch => ({})
)(Calculator)
