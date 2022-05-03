import React, {useContext, useEffect, useState} from 'react'
import { MainGrid, DivPhoto, DivStat, DivTypeMoves, FrontContainer, BackContainer, Type, DivMoves, H1Stats, Stats, Moves } from './styled'
import { GlobalStateContext } from "../../global/GlobalStateContext";
import axios from 'axios';


export default function GetDetails(props) {
    const { pokemons, setPokemons, pokedex, setPokedex } = useContext(GlobalStateContext);
    const [pokeDetails, setPokedetails] = useState([]);

    const getDetails = () =>{
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/bulbasaur`)
            .then((response) => {
                setPokedetails(response.data);
                console.log((response.data));

            })
            .catch((error) => console.log(error.message));
    };

    useEffect(() =>{
        getDetails()
    }, [])
    

    return (
        <MainGrid>
            { pokeDetails && pokeDetails.sprites && (
                <>
            <DivPhoto>
                <FrontContainer>
                    <img src= {pokeDetails.sprites.front_default} />
                </FrontContainer>
                <BackContainer>
                     <img src={pokeDetails.sprites.back_default} />
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
                        {pokeDetails && pokeDetails.moves.map((poke, index) =>{
        return index < 5 && <p key={poke.move.name}>{poke.move.name}</p>
    })}
                    </Moves>
                </DivMoves>
            </DivTypeMoves>
            </>
            )}
        </MainGrid>
    )
}
