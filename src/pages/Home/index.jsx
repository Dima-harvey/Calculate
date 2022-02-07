import React from 'react'

import Header from '@/components/Header/components'
import Calculator from '@/components/Calculator/components'

import { Container } from './components'

const Home = () => {
  return (
    <Container>
      <Header />
      <Calculator />
    </Container>
  )
}

export default Home