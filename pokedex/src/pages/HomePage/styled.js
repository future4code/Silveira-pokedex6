import styled from "styled-components"




export const Header= styled.header`
background-color: #000080;
color: beige;
font-family: 'Bebas Neue', cursive;
font-size: larger;
margin-left: 481px;
width: 2000px;
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
background-color: #000080;
margin-top: 0px;
color: beige;
height: 80px;
font-family: 'Bebas Neue', cursive;
display: flex;
flex-direction: row;
justify-content: space-around;
margin-left: -1380px;
`

export const ContainerCards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 25em);
    justify-content: center;
    grid-gap: 1em;
`