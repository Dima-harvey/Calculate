import React from 'react'
import { DisplayContainer } from './styles'

const Display = props => {
  return (
    <DisplayContainer>
      <input type="text" value={ props.expression || props.value } maxLength="10" readOnly />
    </DisplayContainer>
  )
}

export default Display
