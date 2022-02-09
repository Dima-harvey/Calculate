import React, { useState } from 'react'
import { connect } from 'react-redux'

import { ClearHistory } from '@/actions'
import GlobalStyles from '@/globalStyles'
import { OPTIONS_INFO } from '@/constants'

import { Container, Button, Select } from './styles'

const ControlPanel = props => {
  const bgColor = sessionStorage.getItem('bgColor')
  const [color, setTheme] = useState(bgColor)

  const changeBG = () => {
    const selectedBGColor = document.getElementById('bgchoice').value
    sessionStorage.setItem('bgColor', selectedBGColor)
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
      <Select id="bgchoice" onChange={changeBG}>
        {OPTIONS_INFO.map(item => (
          <option key={item.name} value={item.color}>
            {item.name}
          </option>
        ))}
      </Select>
      <Button onClick={ClearStore}>Clear ALL History</Button>
      <GlobalStyles theme={color} />
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
