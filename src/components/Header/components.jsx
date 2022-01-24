import React from 'react'
import { Link } from 'react-router-dom'

import { Container, StyleContainer, StyleContainerHref } from './styles'


const Header = () => {
  return (
    <Container>
      <StyleContainer>
        <h1>Calculator App</h1>
      </StyleContainer>
      <StyleContainerHref>
        <Link to="/">Home</Link>
        <Link to="/Settings">Settings</Link>
      </StyleContainerHref>
    </Container>
  )
}

export default Header
