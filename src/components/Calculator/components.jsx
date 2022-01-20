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
import { SUM, SUBSTARCT, MULTY, DIVIDE, EQUALS } from '@/constants'
import { addHistory } from '../../actions/index'

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
      command: [],
    }
  }

  addTrack = () => {
    this.props.onAddTrack(this.state.expression)
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
      this.state.currentValue.includes('/') ||
      this.state.currentValue.includes('=') ||
      this.state.currentValue.includes('CE') ||
      this.state.currentValue.includes('C')

    ) {
      console.log('Expression', this.state.currentValue)
      let index = ''
      let operator = ''
      
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

      } else {
        this.setState(() => ({
          value: 0,
          expression: 0,
        }))
        calculator.value = 0
      }

      console.log('Index', index)
      const number = this.state.currentValue.slice(0, index)
      console.log('Yes', number)
      this.state.currentValue = ''
      this.state.numbers.push(number)
      console.log('ONE', this.state.numbers[0])
      console.log('TWO', this.state.numbers[1])
      console.log('Command', this.state.command)
      if (this.state.numbers.length > 1) {
        this.Operation(this.state.numbers[0], this.state.numbers[1], operator,this.state.command[this.state.command.length -1])
        this.state.numbers = []
        
        console.log('Mass', this.state.numbers)
      } else if (calculator.value !== 0 ) {
        this.Operation(this.state.numbers[0], 0, operator,this.state.command[this.state.command.length -1])
        this.state.numbers = []
        
      }else if (operator === '*' || operator === '/'){
        this.Operation(this.state.numbers[0], 1, operator,this.state.command[this.state.command.length -1])
        this.state.numbers = []
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
        console.log(calculator.value)
        this.setState(() => ({
          expression: calculator.value,
          
        }))
        break
      case SUBSTARCT:
        calculator.executeCommand(new SubtractCommand(+num1, +num2))
        console.log(calculator.value)
        this.setState(() => ({
          expression: calculator.value,
          
        }))
        break
      case DIVIDE:
        calculator.executeCommand(new DivideCommand(+num1, +num2))
        console.log(calculator.value)
        this.setState(() => ({
          expression: calculator.value,
         
        }))
        break
      case MULTY:
        calculator.executeCommand(new MultiplyCommand(+num1, +num2))
        console.log(calculator.value)
        this.setState(() => ({
          expression: calculator.value,
         
        }))
        break
      case EQUALS:
        if(com === '+'){
          calculator.executeCommand(new AddCommand(+num1, +num2))
        }
        if(com === '-'){
          calculator.executeCommand(new SubtractCommand(+num1, +num2))
        }
        if(com === '*'){
          calculator.executeCommand(new MultiplyCommand(+num1, +num2))
        }
        if(com  === '/'){
          calculator.executeCommand(new DivideCommand(+num1, +num2))
        }
        this.setState(() => ({
          expression: calculator.value,
          command: [],
        }))
        this.addTrack()
        break
    }
  }

  render() {
    console.log(this.props.testStore)
    return (
      <Container>
        <WrapperContainer>
          <Display value={this.state.expression} />
          <Keys onDigit={this.handleOnNumber} />
        </WrapperContainer>
        <hr />
        <History expression={this.props.testStore} />
      </Container>
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