import React from 'react'

import { PageLayout } from '@/layouts'

import Loader from '@/components/Loader'

import { Card, Container, Heading } from './components'
import Header from '@/components/Header/components'
import Calculator from '@/components/Calculator/components'
import Toolbar from '@/components/Toolbar/components'

export default () => {
  return (
    <Container>
    <Header />
    <Calculator />
    <Toolbar />
    </Container>
 
  )
}
