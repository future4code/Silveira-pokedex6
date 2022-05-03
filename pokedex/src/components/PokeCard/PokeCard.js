import { CardContainer, DivImage } from "./styled"
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { goToPokemonsDetails } from '../../routes/coordinator'
import { GlobalStateContext } from "../../global/GlobalStateContext";


const PokeCard = (props) => {
    const { pokemons, setPokemons, pokedex, setPokedex } = useContext(GlobalStateContext);
    const navigate = useNavigate()
     


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
                            <button onClick={() => goToPokemonsDetails(navigate, poke.name)}>Ver Detalhes</button>
                        </div>
                    </CardContainer>
                )
            })}
        </>
    );
}

export default PokeCard;