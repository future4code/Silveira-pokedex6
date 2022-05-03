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
export const ButtonHeader = styled.button`
margin: 10px;
border-style: hidden;
height: 30px;
background-color: black;
color: blue;
border-radius: 5px;
padding: 4px;
cursor: pointer;
:hover{
    color: darkgreen;
    -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
        transition:all 0.3s ease;
}
:active{
    color:blue;
}
`

