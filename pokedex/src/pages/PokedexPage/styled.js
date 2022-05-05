import styled from "styled-components"


export const HeaderPokedex = styled.header`
    display: flex;
    justify-content: flex-start;
    gap: 50em;
    flex-direction: row;
    align-items: center;
    height: 6em;
    background-color: #38abed ;
    min-width: 100vw;

`
export const Titulo = styled.h2`
    color: white;
    font-family: cursive;
    font-size: 24px;
`    
export const ButtonBack = styled.button`
    display: flex;
    font-family: cursive;
    padding: 5px;
    background-color: #1273DE;  
    &:hover{ background: white}
    &:hover{color: #1273DE};
    color  : white ;
    border-radius: 15px;
    border: 1px solid black;
`
export const ContainerCards = styled.div`
    display: grid;
<<<<<<< HEAD
    grid-template-columns: repeat(auto-fit, 25em);
    justify-content: center;
    grid-gap: 1em;
    
=======
    grid-template-columns: repeat(auto-fit, 20em);
    justify-content: space-around;
    grid-gap: 0.5em;
    background-color: #f8e71c;
    min-width: 100vw;
`
export const Footer = styled.footer`
    min-height: 100vh;
    min-width: 100vw;
    background-color: #f8e71c;
>>>>>>> 39638fd329c5fdb89b9cada09f86a5e9a21ee7c7
`