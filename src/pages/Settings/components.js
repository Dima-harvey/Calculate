import styled from 'styled-components'

export const Container = styled.div`
height: 100vh;
weight: 100vh;
display: flex;
flex-direction: column;
background: ${({ theme }) => theme.colors.checked};
`
