import React from 'react'

import { Container } from './styles'

const History = props => {
  return (
    <Container>
      <h6>History</h6>
      <br />
      {props.expression.map((history, index) => (
        <dd key={index}>{history}</dd>
      ))}
    </Container>
  )
}

export default History
