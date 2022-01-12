import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 1%;
  margin-left: 3%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  select {
    padding: 0px 4px;
    width: 17%;
    height: 15%;
    font-size: 25px;
  }
  button {
    margin-top: 1%;
    padding: 0px 4px;
    width: 17%;
    height: 15%;
    font-size: 25px;
  }
  option {
    font-size: 30px;
  }
  @media (max-width: 1330px) {
    select {
      font-size: 20px;
    }
    button {
      font-size: 20px;
    }
    option {
      font-size: 20px;
    }
  }
  @media (max-width: 1100px) {
    select {
      font-size: 15px;
    }
    button {
      font-size: 15px;
    }
    option {
      font-size: 15px;
    }
  }
`
