import React, { useState } from 'react'
import theme from '@/theme'

import { Container } from './styles'

const ControlPanel = () => {
  const [color, setTheme] = useState(`${({ theme }) => theme.colors.primary}`)

  const changeBG = () => {
    const selectedBGColor = document.getElementById('bgchoice').value
    setTheme(selectedBGColor)
  }
  return (
    <Container>
      <div>
        <h1>Settings</h1>
        <h3>Switch Them</h3>
      </div>
      <style>{'body {background:' + color + ';}'}</style>
      <select id="bgchoice" onChange={changeBG}>
        <option value="white">Light themse</option>
        <option value="pink">Dark themse</option>
      </select>
      <button>Clear ALL History</button>
    </Container>
  )
}

export default ControlPanel
