import React from 'react'

import { Card, Container, Heading } from './components'
import Header from '@/components/Header'
import Toolbar from '@/components/Toolbar'
import ControlPanel from '@/components/ControlPanel/components'
export default () => {
   return (
   <Container>
      <Header />
      <ControlPanel />
      <Toolbar />
   </Container>
   )
 }