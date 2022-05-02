import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
}
`
export const Body = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
background-color: whitesmoke;
header{
    height: 80px;
    background-color: aliceblue;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
main{
    flex-grow: 1;
}
`
export const ButtonHeader = styled.button`
margin: 5px;
border-style: hidden;

`

