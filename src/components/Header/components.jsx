import React from 'react'

import { Container, StyleContainer, StyleContainerHref } from './styles'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Header = () => {
  return (
    <Container>
      <StyleContainer>
        <h1>Calculator APP</h1>
      </StyleContainer>
      <StyleContainerHref>
        <Link to="/">Home</Link>
        <Link to="/Settings">Settings</Link>
      </StyleContainerHref>
    </Container>
  )
}

export default Header
