import React from 'react'

import { Container } from './styles'

const Display = props => {
  return (
    <Container>
      <h3>{props.value}</h3>
      <h2>{props.expression}</h2>
    </Container>
  )
}

export default Display
