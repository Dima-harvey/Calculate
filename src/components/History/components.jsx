import React from 'react'

import { Container, StyleContainer, StyleContainerHref } from './styles'


const History = props => {
  return (
    <Container>
      <h6>History</h6>
      <br/>
      <h5>{props.expression}</h5>
    </Container>
  )
}

export default History
