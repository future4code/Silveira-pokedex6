import styled from 'styled-components'

export const MainGrid = styled.div`
display: grid;
grid-template-columns: 25rem 25rem 1fr;
margin: 20px;
`
export const DivPhoto = styled.div`
grid-column: 1;
margin: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
height: 30rem;

` 
export const FrontContainer = styled.div`
border: 1px solid black;
margin-bottom: 20px;
height: 15rem;
display: flex;
box-shadow: 5px 5px 5px 5px gray;
justify-content: center;
align-items: center;
img{
    object-fit: fill;
    height: 10rem;
    width: 10rem;

    }
`
export const BackContainer = styled.div`
box-shadow: 5px 5px 5px 5px gray;
border: 1px solid black;
display: flex;
height: 15rem;
justify-content: center;
align-items: center;
img{
    object-fit: fill;
    height: 10rem;
    width: 10rem;

    }
`

export const DivStat = styled.div`
border: 1px solid black;
margin: 20px;
height: 30rem;
grid-column: 2;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 5px 5px 5px 5px gray;
` 
export const H1Stats = styled.div`
display: flex;
justify-content: center;
` 
export const Stats = styled.div`
display: flex;
margin-top: 5rem;
flex-direction: column;
justify-content: center;
align-items: center;
p{
    margin: 5px;
}
` 
export const DivTypeMoves = styled.div`
margin: 20px;
grid-column: 3;
height: 30rem;
display: flex;
flex-direction: column;
` 
export const Type = styled.div`
border: 1px solid black;
margin-bottom: 20px;
height: 5rem;
display: flex;
justify-content: space-around;
box-shadow: 5px 5px 5px 5px gray;
align-items: center;
`
export const DivMoves = styled.div`
border: 1px solid black;
flex-grow: 1;
display: flex;
flex-direction: column;
box-shadow: 5px 5px 5px 5px gray;
align-items: center;
`
export const H1Moves = styled.div`
display: flex;
justify-content: center;
`
export const Moves = styled.div`
display: flex;
margin-top: 3rem;
flex-direction: column;
justify-content: center;
align-items: center;
p{
    margin: 5px;
}
`

