import { CardContainer, DivImage } from "./styled"
import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { goToPokemonsDetails } from '../../routes/coordinator'
import { GlobalStateContext } from "../../global/GlobalStateContext";


const PokeCard = (props) => {
    const { pokemons, setPokemons, pokedex, setPokedex, pokemonID, setPokemonID } = useContext(GlobalStateContext);

    const navigate = useNavigate()

    const onClickDetails = (navigate, name, id) => {
        goToPokemonsDetails(navigate, name)
        setPokemonID(id)
    }

    const addToCart = (item) => {
        const index = pokedex.findIndex((i) => i.id === item.id);

        const newPokemonsList = [...pokemons]
        newPokemonsList.splice(item, 1);

        const NewPodexList = [...pokedex,item];



        // const NewPokedex = [...pokedex];
       
        // if (index === -1) {
        //     NewPokedex.push(newPokemon);
        //     NewHome.splice(newPokemon[index], 1);
        // }
        // // const orderedList = NewHome.sort((a,b) => {
        // //     return a.id - b.id;
        // // });

        // const orderedListPokedex = NewPokedex.sort((a,b) => {
        //     return a.id - b.id;
        // });    


        setPokemons(newPokemonsList)
        setPokedex(NewPodexList)
    }


    return (
        <>
            {pokemons && pokemons.map((poke, index) => {
                return (
                    <CardContainer key={index} >
                        <DivImage
                            src={poke && poke.sprites.front_default}
                            alt={poke.name}
                        />
                        <p>{poke.name}</p>
                        <div>
                            <button onClick={() => addToCart(poke)}>Adicionar á Pokedex</button>
                            <button onClick={() => onClickDetails(navigate, poke.name, poke.id)}>Ver Detalhes</button>
                        </div>
                    </CardContainer>
                )
            })}
        </>
    );
}

export default PokeCard;