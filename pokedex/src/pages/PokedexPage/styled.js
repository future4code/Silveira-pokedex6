import styled from "styled-components"


export const HeaderPokedex = styled.header`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    background-color: aqua ; 

`
export const ButtonBack = styled.button`
    display: flex;
    margin-right: 65em;
    padding: 5px;
    background-color: white;  
    &:hover{ background: red}
    &:hover{color: white};
    color  : red ;
    border-radius: 15px;
    border: 1px solid black;
`
export const ContainerCards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 25em);
    justify-content: center;
    grid-gap: 1em;
    
`