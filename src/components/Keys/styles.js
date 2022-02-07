import styled from 'styled-components'

export const KeysContainer = styled.div`
  margin-left: 3%;
  margin-right: 2%;
  display: flex;
  padding-left: 3%;
  padding-top: 1%;
  padding-right: 2%;
  flex-wrap: wrap;
  flex-direction: column;
  flex: 0 80vh;
  order: 2;
  border: 1px solid transparent;
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
    color: #393939;
    border-color: #9b9b9b;
    font-size: 40px;
    text-align: center;
    border-radius: 20px;
    font: bold italic;
    width: 12%;
    height: calc(17vh - 20px);

    @media (max-width: 1200px) {
      margin-bottom: 6%;
    }
    @media (max-width: 1100px) {
      margin-bottom: 7%;
    }
    @media (max-width: 800px) {
      margin-bottom: 8%;
      font-size: 30px;
      border-radius: 15px;
    }
    @media (max-width: 640px) {
      margin-bottom: 9%;
      font-size: 20px;
      border-radius: 10px;
    }
    @media (max-width: 500px) {
      margin-bottom: 11%;
      font-size: 15px;
    }
    @media (max-width: 380px) {
      margin-bottom: 15%;
      font-size: 12px;
      border-radius: 9px;
    }
    @media (max-height: 350px) {
      font-size: 12px;
      border-radius: 9px;
    }
  }
`
