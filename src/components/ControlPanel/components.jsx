import React, { useState } from 'react'
import { connect } from 'react-redux'

import { ClearHistory } from '@/actions'

import { Container } from './styles'

const ControlPanel = props => {
  const [color, setTheme] = useState(`${({ theme }) => theme.colors.primary}`)

  const changeBG = () => {
    const selectedBGColor = document.getElementById('bgchoice').value
    document.body.style.backgroundColor = selectedBGColor
    setTheme(selectedBGColor)
  }

  const ClearStore = () => {
    props.delTrack()
  }

  return (
    <Container>
      <div>
        <h1>Settings</h1>
        <h3>Switch Them</h3>
      </div>
      <style>{'body {backgroundColor:' + color + ';}'}</style>
      <select id="bgchoice" onChange={changeBG}>
        <option value="white">Light themse</option>
        <option value="pink">Dark themse</option>
      </select>
      <button onClick={ClearStore}>Clear ALL History</button>
    </Container>
  )
}

const mapStateToProps = state => ({
  testStore: state,
})

const mapDispatchToProps = dispatch => ({
  delTrack: () => {
    dispatch(ClearHistory())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel)
