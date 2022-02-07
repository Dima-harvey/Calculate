import React from 'react'
import { DisplayContainer } from './styles'

const Display = props => {
  return (
    <DisplayContainer>
      <h3>{props.value}</h3>
      <h2>{props.expression}</h2>
    </DisplayContainer>
  )
}

export default Display
