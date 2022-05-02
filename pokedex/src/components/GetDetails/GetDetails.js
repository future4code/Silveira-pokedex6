import React from 'react'
import { MainGrid, DivPhoto, DivStat, DivTypeMoves, FrontContainer, BackContainer, Type, DivMoves, H1Stats, Stats, Moves } from './styled'

export default function GetDetails() {
    return (
        <MainGrid>
            <DivPhoto>
                <FrontContainer>
                    <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' />
                </FrontContainer>
                <BackContainer>
                    <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png' />
                </BackContainer>
            </DivPhoto>
            <DivStat>
                <H1Stats>
                <h1>Stats</h1>
                </H1Stats>
                <Stats>
                    <p>hp: 45</p>
                    <p>attack: 49</p>
                    <p>defense: 49</p>
                    <p>sp attack: 65</p>
                    <p>sp defense: 65</p>
                    <p>speed: 45</p>
                </Stats>
            </DivStat>
            <DivTypeMoves>
                <Type>
                    <p>grass</p> <p>poison</p>
                </Type>
                <DivMoves>
                    <h1>Moves</h1>
                    <Moves>
                        <p>teste</p>
                        <p>teste</p>
                        <p>teste</p>
                        <p>teste</p>
                    </Moves>
                </DivMoves>
            </DivTypeMoves>
        </MainGrid>
    )
}
