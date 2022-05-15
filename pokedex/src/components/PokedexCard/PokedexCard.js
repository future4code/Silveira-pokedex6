import { CardContainer, DivImage, ButtonsPokedex, DivButtons, Name, MainContainer } from "./styled"
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
        const orderedList = NewHome.sort((a,b) => {
            const ordem = a.id - b.id;
            return ordem
        });

        const orderedListPokedex = NewPokedex.sort((a,b) => {
            const ordem = a.id - b.id;
            return ordem
        });    


        setPokedex(orderedListPokedex)
        setPokemons(orderedList)
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
                        <Name>{poke.name}</Name>
                        <DivButtons>
                            <ButtonsPokedex onClick={() => removeToCart(poke)}>Remover da Pokedex</ButtonsPokedex>
                            <ButtonsPokedex onClick={() => goToPokemonsDetails(navigate, poke.name, poke.id)}>Ver Detalhes</ButtonsPokedex>
                        </DivButtons>
                    </CardContainer>
                )
            })}
        </>
    );
}

export default PokedexCard;