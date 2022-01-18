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

const calculator = new Calcul()

export default class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expression: '',
      value: '',
      history: '',
    }
    this.handleOnNumber = this.handleOnNumber.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleSubtraction = this.handleSubtraction.bind(this)
    this.handleMulty = this.handleMulty.bind(this)
    this.handleDivide = this.handleDivide.bind(this)
    this.handleEquals = this.handleEquals.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleClearAll = this.handleClearAll.bind(this)
  }

  currentValue = ''
  result = []

  handleOnNumber(number) {
    this.currentValue += number
    this.setState(() => ({
      value: this.currentValue,
    }))
  }

  handleAdd() {
    this.result.push(this.currentValue)
    this.result.push('+')
    calculator.executeCommand(new AddCommand(+this.currentValue))
    this.setState(() => ({
      value: calculator.value,
    }))
    this.currentValue = ''
  }

  handleDivide() {
    this.result.push(this.currentValue)
    this.result.push('/')
    calculator.executeCommand(new DivideCommand(+this.currentValue))
    this.setState(() => ({
      value: calculator.value,
    }))
    this.currentValue = ''
  }

  handleMulty() {
    this.result.push(this.currentValue)
    this.result.push('*')
    calculator.executeCommand(new MultiplyCommand(+this.currentValue))
    this.setState(() => ({
      value: calculator.value,
    }))
    this.currentValue = ''
  }

  handleSubtraction() {
    this.result.push(this.currentValue)
    this.result.push('-')
    calculator.executeCommand(new SubtractCommand(+this.currentValue))
    this.setState(() => ({
      value: calculator.value,
    }))
    this.currentValue = ''
  }
  
  handleEquals() {
    
    this.setState(() => ({
      value: calculator.value,
      expression: this.result.join(''),
      history:  this.result.join(''),
    }))
    console.log(this.state.expression)
    addHistory(this.state.expression)
    
  }

  handleClear() {
   this.currentValue = 0
   this.setState(() => ({
    value: calculator.value,
  }))
  }

  handleClearAll() {
    calculator.value = 0
    this.currentValue = 0
    this.setState(() => ({
      value: calculator.value,
      expression:[],
    }))
  }

  render() {
    const { history } = this.props
    return (
      <Container>
        <WrapperContainer>
          <Display value={this.state.value} />
          <Keys
            onDigit={this.handleOnNumber}
            onAdd={this.handleAdd}
            onEquals={this.handleEquals}
            onClearAll={this.handleClearAll}
            onClear={this.handleClear}
            onDivide={this.handleDivide}
            onMulty={this.handleMulty}
            onSubstr={this.handleSubtraction}
            onRightBracket={this.handleRightBracket}
            onLeftBracket={this.handleLeftBracket}
          />
        </WrapperContainer>
        <hr />
        <History expression={this.state.history} />
      </Container>
    )
  }
}

connect(state => ({
  history: state.history,
}), { addHistory })(Calculator)