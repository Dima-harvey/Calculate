import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-wrap: wrap;
  flex: 0 30vw;
  order: 2;
  overflow-y: scroll;
  // ::-webkit-scrollbar {
  //   width: 24px; /* ширина для вертикального скролла */
  //   background-color: green ;
}
::-webkit-scrollbar-thumb {
  background-color: #843465;
  border-radius: 9em;
  box-shadow: inset 1px 1px 10px #f3faf7;
}
  
  h6 {
    display: flex;
    font-size: 3.5rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 19px;
    color: black;

  }
`
