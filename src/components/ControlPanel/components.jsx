import React, { useState } from 'react'
import { connect } from 'react-redux'

import { ClearHistory } from '@/actions'
import GlobalStyles from '@/globalStyles'

import { Container } from './styles'

const ControlPanel = props => {
  const [color, setTheme] = useState('white')
  const bgColor = sessionStorage.getItem('bgColor')

  const changeBG = () => {
    const selectedBGColor = document.getElementById('bgchoice').value
    sessionStorage.setItem('bgColor', color)
    setTheme(selectedBGColor)
  }

  const ClearStore = () => {
    props.delTrack()
  }

  return (
    <Container>
      <div>
        <h1>Settings</h1>
        <h3>Switch Theme</h3>
      </div>
      <select id="bgchoice" onChange={changeBG}>
        <option value="pink">Light theme</option>
        <option value="white">Dark theme</option>
      </select>
      <button onClick={ClearStore}>Clear ALL History</button>
      <GlobalStyles theme ={bgColor} />
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
