import styled from "styled-components"

export const CardContainer = styled.div`
display: flex;
align-items: center;
margin-top: 2em;
width: 20em;
height: 17em;
padding: 5px;
flex-direction: column;
background-color: #38abed;
color:white;
border: 1px white solid;
border-radius: 8px;
font-family: 'Bebas Neue', cursive;
margin: 10px;
margin-left: 30px;
:hover{
    -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
        transition:all 0.3s ease;
}
p{
    
    margin: 3px;
}
` 

export const DivImage = styled.img`
    width: 10em;
    height: 10em;
    padding: 0.5em;
    background-color: white;    
          
`
export const DivButton = styled.div`
margin: 5px;
display: flex;
justify-content: center;
align-items: center;
`
export const Button = styled.button`
border-radius: 20px;
background-color: #1273DE;
color: white;
font-family: 'Bebas Neue', cursive;
width: 120px;
height: 50px;
margin: 2px;
padding: 4px;
cursor: pointer;
:hover{
    background-color: white;
    color: #1273DE
}
/* font-size: large; */
`