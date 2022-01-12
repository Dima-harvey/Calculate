import React from 'react'

import { Container, WrapperContainerKeys } from './styles'

const Keys = props => {

  const handleOnClick = e => {
    props.onDigit(e.target.value)
  }
  
  return (
    <Container>
      <hr />
      <WrapperContainerKeys>
        <button value="Clear" onClick={props.onClear}>
          C
        </button>
        <button value="7" onClick={handleOnClick}>
          7
        </button>
        <button value="8" onClick={handleOnClick}>
          8
        </button>
        <button value="9" onClick={handleOnClick}>
          9
        </button>
        <button value="*" onClick={props.onMulty}>
          *
        </button>
      </WrapperContainerKeys>
      <WrapperContainerKeys>
        <button value="-" onClick={props.onSubstr}>
          -
        </button>
        <button value="4" onClick={handleOnClick}>
          4
        </button>
        <button value="5" onClick={handleOnClick}>
          5
        </button>
        <button value="6" onClick={handleOnClick}>
          6
        </button>
        <button value="/" onClick={props.onDivide}>
          \
        </button>
      </WrapperContainerKeys>
      <WrapperContainerKeys>
        <button value="+" onClick={props.onAdd}>
          +
        </button>
        <button value="1" onClick={handleOnClick}>
          1
        </button>
        <button value="2" onClick={handleOnClick}>
          2
        </button>
        <button value="3" onClick={handleOnClick}>
          3
        </button>
        <button value="=" onClick={props.onEquals}>
          =
        </button>
      </WrapperContainerKeys>
      <WrapperContainerKeys>
        <button value="." onClick={handleOnClick}>
          .
        </button>
        <button value="(" onClick={props.onRightBracket}>
          (
        </button>
        <button value="0" onClick={handleOnClick}>
          0
        </button>
        <button value=")" onClick={props.onLeftBracket}>
          )
        </button>
        <button value="CE" onClick={props.onClearAll}>
          <h6>CE</h6>
        </button>
      </WrapperContainerKeys>
    </Container>
  )
}

export default Keys
