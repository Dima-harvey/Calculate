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
    margin-top: 3%;
    justify-content: center;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 19px;
    color: black;

  }
  h5 {
    display: flex;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 19px;
    color: black;
    margin-left: 3%;
  }
`
