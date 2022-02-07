import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding-left: 2%;
  padding-right: 2%;
  height: 10%;
  min-height: 60px;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #444344;
  align-items: center;
`
export const StyleContainer = styled.div`
  display: flex;
  h1 {
    font-size: 3.5rem;
    font-style: normal;
    font-size: 20px;
    line-height: 19px;
    color: white;
    @media (max-width: 380px) {
      font-size: 15px;
    }
  }
`
export const StyleContainerHref = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  a {
    font-size: 3.5rem;
    font-style: normal;
    font-size: 20px;
    line-height: 19px;
    padding-left: 20px;
    color: white;
    text-decoration: none;
    @media (max-width: 380px) {
      font-size: 15px;
    }
  }
`
