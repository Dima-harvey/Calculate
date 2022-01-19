import styled from 'styled-components'

export const Container = styled.div`
  margin-left: 3%;
  margin-right: 2%;
  display: flex;
  padding-left: 3%;
  padding-top: 1%;
  padding-right: 2%;
  flex-wrap: wrap;
  flex-direction: column;
  flex: 0 70vh;
  order: 2;
  border: 1px solid white;
  border-top-color: #9a9a9a; 
`
export const WrapperContainerKeys = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  button {
    margin-left: 4%;
    margin-right: 4%;
    margin-bottom: 4%;
    background-color: #f2f2f2; /* Green */
    color: #393939;
    border-color: #9b9b9b;
    font-size: 40px;
    text-align: center;
    border-radius: 15px;
    font: bold italic 1.8 em Verdana;
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
