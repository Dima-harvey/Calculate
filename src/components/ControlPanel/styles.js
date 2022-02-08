import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 3%;
  margin-left: 3%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 40px;
  }
  h3 {
    margin-top:2%;
  }
}
`
export const Button = styled.button`
    margin-top: 1%;
    padding: 0px 4px;
    width: 200px;
    height: 11%;
    font-size: 20px;
    min-height: 60px;
`
export const Select= styled.select`
    padding: 0px 4px;
    width: 200px;
    height: 11%;
    font-size: 20px;
    min-height: 30px;
    option {
    font-size: 20px;
  }
`
