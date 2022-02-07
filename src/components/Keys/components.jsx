import React from 'react'

import { buttons } from '@/constants'

import { KeysContainer, WrapperContainerKeys } from './styles'

const Keys = props => {
  const handleOnClick = e => {
    props.onDigit(e.target.value)

  }

   return (
    <KeysContainer>
      <WrapperContainerKeys>
        {buttons.map(item => (
          <button key={item} value={item} 
          onClick={handleOnClick}>
            {item}
          </button>
        ))}
      </WrapperContainerKeys>
    </KeysContainer>
  )
}

export default Keys
