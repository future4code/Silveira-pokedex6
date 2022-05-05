import styled from "styled-components"

export const HeaderPokedex = styled.header`
    /* gap: 25em;    */
    align-items: center;
    height: 6em;
    background-color: #38abed ;
    max-width: 100vw;
    /* background-color: #38abed; */
    color: yellow;
    font-family: 'Bebas Neue', cursive;
    font-size: medium;
    margin: 0 auto;
    height: 105px;
    display: flex;
    justify-content: space-between;
    img{
        object-fit: fill;
        width:11rem;
    }
    button{
        border-radius: 20px;
background-color: #1273DE;
color: white;
font-family: 'Bebas Neue', cursive;
padding: 8px;
height: 40px;
font-size: large;
margin: 5px;
cursor: pointer;
:hover{
    background-color: white;
    color: #1273DE;
    -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
        transition:all 0.3s ease;
}
:active{
    color:blue;
}
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
gap: 0;
justify-content: space-between;
img{
        object-fit: fill;
        width: 9rem;
    }
}

`
export const Titulo = styled.h2`
    color: white;
    font-family: cursive;
    font-size: 24px;
    margin: 65px;
`    
export const ButtonBack = styled.button`
    display: flex;
    font-family: cursive;
    padding: 10px;
    background-color: #1273DE;  
    &:hover{ background: white}
    &:hover{color: #1273DE};
    color  : white ;
    border-radius: 15px;
    border: 1px solid black;
    cursor: pointer;
    margin:5px;
    :hover{
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
        transition:all 0.3s ease;
    }
`
export const ContainerCards = styled.div`
    display: grid;
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
`