import React from 'react'
import { DisplayContainer } from './styles'

const Display = props => {
  const { value, expression } = props

  return (
    <DisplayContainer>
      <input type="text" value={expression || value} readOnly />
    </DisplayContainer>
  )
}

export default Display
