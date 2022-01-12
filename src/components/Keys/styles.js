import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding-left: 2%;
  padding-top: 1%;
  padding-right: 2%;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: column;
  flex: 0 60vh;
  order: 2;
`
export const WrapperContainerKeys = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  button {
    background-color: #f2f2f2; /* Green */
    color: #393939;
    border-color: #9b9b9b;
    font-size: 40px;
    text-align: center;
    border-radius: 15px;
    width: 14vh;
    height: 12vh;
    @media (max-width: 1025px) {
      font-size: 40px;
      width: 90px;
      border-radius: 18px;
    }

    @media (max-width: 769px) {
      font-size: 40px;
      width: 80px;
    }
    @media (max-width: 670px) {
      font-size: 35px;
      width: 60px;
    }
    @media (max-width: 580px) {
      font-size: 33px;
      width: 55px;
      border-radius: 13px;
    }
    @media (max-width: 480px) {
      font-size: 32px;
      width: 45px;
      border-radius: 10px;
    }
    @media (max-width: 450px) {
      font-size: 30px;
      width: 42px;
      border-radius: 10px;
    }
    @media (max-width: 330px) {
      font-size: 25px;
      width: 35px;
      border-radius: 10px;
    }
    @media (max-height: 380px) {
      font-size: 25px;
      width: 60px;
      border-radius: 10px;
    }
  }
`
