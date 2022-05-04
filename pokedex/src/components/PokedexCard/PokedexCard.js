import { CardContainer, DivImage } from "./styled"
import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { goToPokemonsDetails } from '../../routes/coordinator'
import { GlobalStateContext } from "../../global/GlobalStateContext";


const PokedexCard = (props) => {
    const { pokemons, setPokemons, pokedex, setPokedex, pokemonID, setPokemonID } = useContext(GlobalStateContext);

    const navigate = useNavigate()


    const removeToCart = (itemToRemove) => {
        const index = pokedex.findIndex((i) => i.id === itemToRemove.id);

        const NewPokedex = [...pokedex];
        const NewPokemon = { ...itemToRemove };
        const NewHome = [...pokemons]

        if (index !== -1) {
        NewPokedex.splice(index, 1);

        NewHome.push(NewPokemon);
        }    
        // const orderedList = NewHome.sort((a,b) => {
        //     return a.id - b.id;
        // });

        // const orderedListPokedex = NewPokedex.sort((a,b) => {
        //     return a.id - b.id;
        // });    


        setPokedex(NewPokedex)
        setPokemons(NewHome)
    }


    return (
        <>
            {pokedex && pokedex.map((poke, index) => {
                return (
                    <CardContainer key={index} >
                        <DivImage
                            src={poke && poke.sprites.front_default}
                            alt={poke.name}
                        />
                        <p>{poke.name}</p>
                        <div>
                            <button onClick={() => removeToCart(poke)}>Remover da Pokedex</button>
                            <button onClick={() => goToPokemonsDetails(navigate, poke.name, poke.id)}>Ver Detalhes</button>
                        </div>
                    </CardContainer>
                )
            })}
        </>
    );
}

export default PokedexCard;