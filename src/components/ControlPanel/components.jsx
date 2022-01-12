import React from 'react'

import { Container} from './styles'

const changeBG = () =>{
  var selectedBGColor = document.getElementById("bgchoice").value
  document.body.style.backgroundColor = selectedBGColor
}

const ControlPanel = () => {
  return (
    <Container>
      <div>
        <h1>Settings</h1>
      </div>
      <select id="bgchoice" onChange={changeBG}>
        <option value="white">Light themse</option>
        <option value="pink">Dark themse</option>
      </select>
      <button>Clear ALL History</button>
    </Container>
  )
}

export default ControlPanel
