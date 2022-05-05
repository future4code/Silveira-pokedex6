import styled from "styled-components"


export const Button = styled.button`
border-radius: 20px;
background-color: #1273DE;
color: white;
font-family: 'Bebas Neue', cursive;
width: 120px;
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
`
export const Placebutton = styled.div`
margin-top: 0 auto;
`

export const Header= styled.header`
background-color: #38abed;
color: yellow;
font-family: 'Bebas Neue', cursive;
font-size: larger;
margin: 0 auto;
height: 105px;
display: flex;
justify-content: center;
align-items: center;
`
export const Container = styled.div`
height: 900px;
align-items: center;
background-color: beige;
color: 	#000080;
font-family: 'Bebas Neue', cursive;
display: flex;
justify-content: center;
flex-direction: column;

margin: 0 auto;
`
export const Footer = styled.footer`
background-color: #38abed;
margin-top: 0px;
color: white;
height: 30px;
font-family: 'Bebas Neue', cursive;
display: flex;
flex-direction: row;
justify-content: space-around;
padding: 3px;
`

export const ContainerCards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 25em);
    justify-content: center;
    grid-gap: 1em;
    width: 0 auto;
   min-height: 900px;
   background-color: yellow;
    align-items: center;
`
export const PlaceImg = styled.img`
height: 15rem;
width: 15rem;
margin: 0 auto;

/* margin-left: 30rem;
margin-top: -5rem; */
`
