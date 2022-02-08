import React from 'react'
import { connect } from 'react-redux'

import Calcul from '@/utils/Command'
import AddCommand from '@/utils/AddComand'
import SubtractCommand from '@/utils/SubtractCommand'
import DivideCommand from '@/utils/DivideCommand'
import MultiplyCommand from '@/utils/MultyCommand'
import Checkoperator from '@/utils/Checkoperator'
import Sendnumber from '@/utils/Sendnumber'
import {
  SUM,
  SUBSTARCT,
  MULTY,
  DIVIDE,
  EQUALS,
  BUTTONS_OPERATOR,
  SIGNS,
} from '@/constants'

import { CalculateContainer, WrapperContainer } from './styles'
import Display from '../Display/components'
import History from '../History/components'
import Keys from '../Keys/components'
import { addHistory } from '../../actions/index'

const calculator = new Calcul()

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expression: '0',
      value: '',
      history: [],
      currentValue: '',
      numbers: [],
      command: [],
    }
  }

  addTrack = () => {
    this.props.onAddTrack(this.state.history)
    this.state.history = []
  }

  handleOnNumber = number => {
    this.state.currentValue += number
    this.setState(() => ({
      expression: this.state.currentValue,
    }))

    for (const char of SIGNS) {
      if (this.state.currentValue.includes(char)) {
        const [index, operator, mass] = Checkoperator(
          '',
          '',
          this.state.currentValue,
          this.state.command,
          this.state.history,
          this.state.expression,
          calculator.value
        )
        this.state.command = mass
        if (this.state.currentValue.indexOf('CE') > -1) {
          this.state.currentValue = ''
          if (this.state.history.length === 0) {
            this.setState(() => ({
              value: 0,
              expression: 0,
            }))
            calculator.value = 0
          }
        } else if (this.state.currentValue.indexOf('C') > -1) {
          this.setState(() => ({
            value: 0,
            expression: 0,
          }))
          calculator.value = 0
          this.state.currentValue = ''
        }
        const number = this.state.currentValue.slice(0, index)
        this.state.history.push(this.state.currentValue)
        this.state.currentValue = ''
        this.state.numbers.push(number)
        this.state.numbers = Sendnumber(
          this.state.numbers,
          calculator.value,
          operator,
          this.state.command,
          this.Operation
        )
      }
    }
    this.setState(() => ({
      value: this.state.currentValue,
    }))
  }

  Operation = (num1, num2, operator, com) => {
    switch (operator) {
      case SUM:
        calculator.executeCommand(new AddCommand(+num1, +num2))
        this.setState(() => ({
          expression: Math.trunc(calculator.value * 1000) / 1000,
        }))
        break
      case SUBSTARCT:
        calculator.executeCommand(new SubtractCommand(+num1, +num2))
        this.setState(() => ({
          expression: Math.trunc(calculator.value * 1000) / 1000,
        }))
        break
      case DIVIDE:
        calculator.executeCommand(new DivideCommand(+num1, +num2))
        this.setState(() => ({
          expression: Math.trunc(calculator.value * 1000) / 1000,
        }))
        break
      case MULTY:
        calculator.executeCommand(new MultiplyCommand(+num1, +num2))
        this.setState(() => ({
          expression: Math.trunc(calculator.value * 1000) / 1000,
        }))
        break
      case EQUALS:
        BUTTONS_OPERATOR.map(item => {
          if (item.name === com) {
            calculator.executeCommand(new item.Operation(+num1, +num2))
          }
        })
        this.setState(() => ({
          expression: Math.trunc(calculator.value * 1000) / 1000,
          command: [],
        }))
        this.state.history.push(calculator.value.toFixed(3))
        this.addTrack()
        break
    }
  }

  render() {
    return (
      <CalculateContainer>
        <WrapperContainer>
          <Display value={this.state.expression} />
          <Keys onDigit={this.handleOnNumber} />
        </WrapperContainer>
        <History expression={this.props.testStore} />
      </CalculateContainer>
    )
  }
}

const mapStateToProps = state => ({
  testStore: state,
})

const mapDispatchToProps = dispatch => ({
  onAddTrack: text => {
    dispatch(addHistory(text))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)
