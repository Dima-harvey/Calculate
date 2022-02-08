import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1%;
  max-height: 90%;
  flex: 0 30vw;
  order: 2;
  overflow: auto;
  border: 1px solid transparent;
  border-left-color: #9a9a9a;

  dd {
    margin-left: 2%;
    margin-bottom: 1%;
  }
`
export const ContainerArticle = styled.h6`
  display: flex;
  margin-top: 4%;
  margin-bottom: 1%;
  justify-content: center;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 19px;
  color: black;
  @media (max-width: 380px) {
    margin-bottom: 15%;
    font-size: 12px;
    border-radius: 9px;
  }
`