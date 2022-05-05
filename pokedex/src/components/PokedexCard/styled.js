import styled from "styled-components"

export const CardContainer = styled.div`
display: flex;
align-items: center;
margin-top: 2em;
width: 20em;
height: 16em;
padding: 5px;
flex-direction: column;
background-color: #38abed;
border: 1px black solid;
border-radius: 8px;

` 

export const DivImage = styled.img`
    width: 10em;
    height: 10em;
    padding: 0.5em;
    background-color: white;  
    border-radius  : 8px;          
`
export const ButtonsPokedex = styled.button`
    display: flex;
    padding: 5px;
    background-color: #1273DE;  
    &:hover{ background: white}
    &:hover{color: #1273DE};
    color  : white ;
    border-radius: 15px;
    border: 1px solid black;
    font-family: cursive;
    cursor: pointer;
    margin: 3px;
`
export const DivButtons = styled.div`
     display: flex;
    padding: 5px;

`
export const Name = styled.strong`
    color: white;
    font-family: cursive;
    font-size: 20px;

`
