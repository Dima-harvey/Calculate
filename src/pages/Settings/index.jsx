import React from 'react'

import Header from '@/components/Header'
import ControlPanel from '@/components/ControlPanel/components'

import { Container } from './components'

export default () => {
   return (
   <Container>
      <Header />
      <ControlPanel />
   </Container>
   )
 }