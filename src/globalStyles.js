import { createGlobalStyle } from 'styled-components'

import theme from './theme'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${theme.font};
  }

  body {
    background: ${props => props.theme};
  }
  
  input {
    background: ${props => props.theme};
  }
`
