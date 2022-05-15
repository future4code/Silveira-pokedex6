import { CardContainer, DivImage, Button, DivButton } from "./styled"
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { goToPokemonsDetails } from '../../routes/coordinator'
import { GlobalStateContext } from "../../global/GlobalStateContext";


const PokeCard = (props) => {
    const { pokemons, setPokemons, setPokemonID, pokedex, setPokedex } = useContext(GlobalStateContext);
    const { poke, indexPoke } = props //estou recebendo as props passadas
    const navigate = useNavigate()

    const onClickDetails = (navigate, name, id) => {
        goToPokemonsDetails(navigate, name)
        setPokemonID(id)
    }
//na HomePage ativei aquele map para passar o index de cada pokemon como props via onClick
    const addToPokedex = (pokeOfHome, indexPokeOfHome) => {
        const newPokedexList = [...pokedex]//cópia da pokedex
        const newPokemonsList = [...pokemons]//cópia dos pokemons da HomePage
        const indexPoke = pokedex.findIndex((pokeOfPokedex) => {
            return pokeOfPokedex.name === pokeOfHome.name;
        });
        if (indexPoke === -1) {//Se não existir o index procurado, faça:
            newPokedexList.push({ ...pokeOfHome});//coloco na lista da pokedex exatamente o pokemon que vem quando clicka
            newPokemonsList.splice(indexPokeOfHome, 1);//retiro da lista de pokemons exatamente o index que vem quando clicka
        } else {
            alert(`${pokeOfHome.name} já foi capturado!`)//se já existir, emite um alert não deixando adicionar o mesmo pokemon(usei antes de consegui excluir da homePage)
        }
        const orderedPokedex = newPokedexList.sort((a, b) => {
            const ordem = a.id - b.id;//com essa sintaxe funcionou normal, a outra continuava a bugar. não sei pq kkkkk
            return ordem
        });
        const orderedPokemons = newPokemonsList.sort((a, b) => {
            const ordem = a.id - b.id;//com essa sintaxe funcionou normal, a outra continuava a bugar. não sei pq kkkkk
            return ordem
        });
        setPokemons(orderedPokemons)//seta no estado da homePage os pokemons ordenados
        setPokedex(orderedPokedex)//seta no estado da pokedex os pokemons ordenados
    }


    return (
        <>
            {/* {pokemons && pokemons.map((poke,index) => {
                return (  ~como fiz o map na HomePage, aqui não precisa~*/}
            <CardContainer>
                <DivImage
                    src={poke && poke.sprites.front_default}
                    alt={poke.name}
                />
                <p><b>{poke.name.toUpperCase()}</b></p>
                <DivButton>
                    <Button onClick={() => addToPokedex(poke, indexPoke)}>Adicionar à Pokedex</Button>
                    <Button onClick={() => onClickDetails(navigate, poke.name, poke.id)}>Ver Detalhes</Button>
                </DivButton>
            </CardContainer>
            {/* )
            })} */}
        </>
    );
}

export default PokeCard;