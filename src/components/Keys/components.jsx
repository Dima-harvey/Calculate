import React from 'react'

import { buttons } from '@/constants'

import { Container, WrapperContainerKeys } from './styles'

const Keys = props => {
  const handleOnClick = e => {
    props.onDigit(e.target.value)

  }

   return (
    <Container>
      <WrapperContainerKeys>
        {buttons.map(item => (
          <button key={item} value={item} 
          onClick={handleOnClick}>
            {item}
          </button>
        ))}
      </WrapperContainerKeys>
    </Container>
  )
}

export default Keys
