import { GlobalStateContext } from "./GlobalStateContext";
import React, { useEffect, useState } from "react";
import axios from "axios";


export default function GlobalState(props) { //não entendi a props
    const [pokemonList, setPokemonList] = useState([]);//estado para a lista de pokemons
    const [pokemons, setPokemons] = useState([]);//estado para a lista de pokemons depois de adicionar à pokedex
    const [pokedex, setPokedex] = useState([]);//estado para a pokedex


    const getPokemonList = () => {//pegar a lista de pokemons da API
        axios
            .get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`)
            .then((response) => {
                setPokemonList(response.data.results);
            })
            .catch((error) => console.log(error.message));
    };


    useEffect(() => {
        getPokemonList();
    }, []);

    useEffect(() => {
        const newList = [];// colocar os pokemons em ordem depois de adicionar à pokedex
        pokemonList.forEach((item) => {
            axios
                .get(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
                .then((response) => {
                    newList.push(response.data);
                    if (newList.length === 20) {
                        const orderedList = newList.sort((a, b) => {
                            return a.id - b.id;
                        });
                        setPokemons(orderedList);
                    }
                })
                .catch((error) => console.log(error.message));
        });
    }, [pokemonList]);//renderiza toda vez que 

    

    const data = { //Não entendi bem... acho que é 
        pokemons,
        setPokemons,
        pokedex,
        setPokedex
    };

    return (
        <div>
            <GlobalStateContext.Provider value={data}>
                {props.children} {/*valor genérico para o componente filho entrar*/}
            </GlobalStateContext.Provider>
        </div>
    )
}
