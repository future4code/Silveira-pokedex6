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
    background-color: rgb(0,0,139, 0.3);
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        color:blue;
    }
}
main{
    flex-grow: 1;
}
`


