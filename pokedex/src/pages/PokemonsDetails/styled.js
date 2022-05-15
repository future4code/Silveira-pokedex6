import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    font-family: 'Bebas Neue', cursive;
}
`
export const Body = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
background-color: yellow;
header{
    height: 80px;
    background-color: #38abed;
    /* background-color: rgb(0,0,139, 0.3); */
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        color:yellow;
        
    }
    
}
main{
    flex-grow: 1;
}
`


