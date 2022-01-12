import React from 'react'

import { Container, WrapperContainer } from './styles'
import Display from '../Display/components'
import History from '../History/components'
import Keys from '../Keys/components'

export default class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expression: '',
      value: '',
    }

    this.handleOnNumber = this.handleOnNumber.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleEquals = this.handleEquals.bind(this)
    this.handleClearAll = this.handleClearAll.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleDivide = this.handleDivide.bind(this)
    this.handleMulty = this.handleMulty.bind(this)
    this.handleSubtraction=this.handleSubtraction.bind(this)
    this.handleRightBracket=this.handleRightBracket.bind(this)
    this.handleLeftBracket=this.handleLeftBracket.bind(this)
  }

  result = []
  currentValue = ''
  handleOnNumber(number) {
    this.currentValue += number
    this.setState(() => ({
      value: this.currentValue,
    }))
  }

  handleAdd() {
    this.result.push(this.currentValue)
    this.setState(() => ({
      value: this.result,
    }))
    this.result.push('+')
    this.currentValue = ''
  }

  handleDivide() {
    this.result.push(this.currentValue)
    this.setState(() => ({
      value: this.result,
    }))
    this.result.push('/')
    this.currentValue = ''
  }

  handleMulty() {
    this.result.push(this.currentValue)
    this.setState(() => ({
      value: this.result,
    }))
    this.result.push('*')
    this.currentValue = ''
  }

  handleEquals() {
    this.result.push(this.currentValue)
    const expression = this.result.join(' ')
    console.log(expression)
    // eslint-disable-next-line no-eval
    const desp = eval(expression)
    console.log(desp)
    this.currentValue = desp.toPrecision(4).toString()
    this.result = []
    this.setState(() => ({
      value: this.currentValue,
    }))
  }

  handleClearAll() {
    this.currentValue = ''
    this.result = []
    this.setState(() => ({
      value: this.currentValue,
    }))
  }

  handleClear() {
    this.currentValue = ''
    this.result = []
    this.setState(() => ({
      value: this.currentValue,
    }))
  }

  handleSubtraction() {
    this.result.push(this.currentValue)
    this.setState(() => ({
      value: this.result,
    }))
    this.result.push('-')
    this.currentValue = ''
  }

  handleRightBracket() {
    this.result.push(this.currentValue)
    this.setState(() => ({
      value: this.result,
    }))
    this.result.push('(')
    this.currentValue = ''
  }

  handleLeftBracket() {
    this.result.push(this.currentValue)
    this.setState(() => ({
      value: this.result,
    }))
    this.result.push(')')
    this.currentValue = ''
  }

  render() {
    return (
      <Container>
        <WrapperContainer>
          <Display value={this.state.value}/>
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
        <History />
      </Container>
    )
  }
}
