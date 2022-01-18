import React from 'react'

import { Container, StyleContainer, StyleContainerHref } from './styles'


const History = props => {
  return (
    <Container>
      <h6>History</h6>
      <br/>
      {props.expression}
    </Container>
  )
}

export default History
