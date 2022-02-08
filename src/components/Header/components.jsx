import React from 'react'
import { Link } from 'react-router-dom'

import { HeaderContainer, HeaderTitle, HeaderNav } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Calculator App</HeaderTitle>
      <HeaderNav>
        <Link to="/">Home</Link>
        <Link to="/Settings">Settings</Link>
      </HeaderNav>
    </HeaderContainer>
  )
}

export default Header
