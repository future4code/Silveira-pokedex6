import { CardContainer, DivImage } from "./styled"
import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { goToPokemonsDetails } from '../../routes/coordinator'
import { GlobalStateContext } from "../../global/GlobalStateContext";


const PokeCard = (props) => {
    const { pokemons, setPokemons, pokedex, setPokedex, pokemonID, setPokemonID} = useContext(GlobalStateContext);

    const navigate = useNavigate()
     
    const onClickDetails = (navigate, name, id) =>{
        goToPokemonsDetails(navigate, name)
        setPokemonID(id)
    }


    return (
        <>
            {pokemons && pokemons.map((poke,index) => {
                return (
                    <CardContainer key={index} >
                        <DivImage
                            src={poke && poke.sprites.front_default}
                            alt={poke.name}
                        />
                        <p>{poke.name}</p>
                        <div>
                            <button>Remover da Pokedex</button>
                            <button onClick={() => onClickDetails(navigate, poke.name, poke.id)}>Ver Detalhes</button>
                        </div>
                    </CardContainer>
                )
            })}
        </>
    );
}

export default PokeCard;