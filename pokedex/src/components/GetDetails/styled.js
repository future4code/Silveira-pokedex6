import styled from 'styled-components'

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
    :hover{
        -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.3);
        transition:all 0.3s ease;
    }
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
    :hover{
        -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.3);
        transition:all 0.3s ease;
    }
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
    :hover{
        -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.3);
        transition:all 0.09s ease;
    }
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
p{
    :hover{
        -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.3);
        transition:all 0.09s ease;
    }
}
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
    :hover{
        -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.3);
        transition:all 0.09s ease;
    }
}
`

