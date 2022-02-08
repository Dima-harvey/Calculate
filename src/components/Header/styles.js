import styled from 'styled-components'

export const HeaderContainer = styled.div`
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
export const HeaderTitle = styled.div`
  display: flex;
  font-style: normal;
  font-size: 20px;
  line-height: 19px;
  color: white;
  @media (max-width: 380px) {
     font-size: 15px;
    }
  }
`
export const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  a {
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
