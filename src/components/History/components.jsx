import React from 'react'

import { Container, ContainerArticle } from './styles'

const History = props => {
  const { expression } = props

  return (
    <Container>
      <ContainerArticle>History</ContainerArticle>
      {expression.map((history, index) => (
        <dd key={index}>{history}</dd>
      ))}
    </Container>
  )
}

export default History
