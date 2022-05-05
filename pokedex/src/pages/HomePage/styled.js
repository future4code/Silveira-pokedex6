import styled from "styled-components"


export const Button = styled.button`
border-radius: 20px;
background-color: #1273DE;
color: white;
font-family: 'Bebas Neue', cursive;
width: 120px;
height: 40px;
font-size: large;
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
height: 125px;

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
height: 80px;
font-family: 'Bebas Neue', cursive;
display: flex;
flex-direction: row;
justify-content: space-around;

`

export const ContainerCards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 25em);
    justify-content: center;
    grid-gap: 1em;
    width: 0 auto;
   min-height: 900px;
   background-color: yellow;
    
`
export const PlaceImg = styled.img`
height: 220px;
width: 250px;
margin: 0 auto;
justify-content: center;
align-items: center;
margin-left: 550px;
margin-top: -70px;
`