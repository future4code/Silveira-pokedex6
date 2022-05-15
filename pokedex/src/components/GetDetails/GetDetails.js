import React, { useEffect, useState, useContext } from 'react'
import { MainGrid, DivPhoto, DivStat, DivTypeMoves, FrontContainer, BackContainer, Type, DivMoves, H1Stats, Stats, Moves, ButtonHeader, Header } from './styled'
import { GlobalStateContext } from "../../global/GlobalStateContext";
import axios from 'axios';
import { Body } from '../../pages/PokemonsDetails/styled';
import { goBack, goToHome, goToPokedex } from '../../routes/coordinator';
import { useNavigate, useParams } from 'react-router-dom';
;


export default function GetDetails(props) {
    const params = useParams()
    const { pokemons, setPokemons, pokedex, setPokedex} = useContext(GlobalStateContext);
    const [pokeDetails, setPokedetails] = useState([]);
    const [nomeMaiusculo, setNomeMaiusculo] = useState("")
    const navigate = useNavigate()
    const getDetails = () => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
            .then((response) => {
                setPokedetails(response.data);
                setNomeMaiusculo((response.data.name.toUpperCase()));

            })
            .catch((error) => console.log(error.message));
    };

    useEffect(() => {
        getDetails()
    })

    const addToCart = (item) => {
        const index = pokedex.findIndex((i) => i.id === item.id);
        
        const newPokemon = { ...item };
        const NewPokedex = [...pokedex];
        const NewHome = [...pokemons]
        
        if (index === -1) {
            NewPokedex.push(newPokemon);

            NewHome.splice(newPokemon[index], 1);

        }
        setPokemons(NewHome)
        setPokedex(NewPokedex)
    }



    return (
        <Body>
            <Header>
            <span>
        <ButtonHeader onClick={() => goBack(navigate)} >Voltar</ButtonHeader>
        <ButtonHeader onClick={() => goToHome(navigate)} >Home</ButtonHeader>
        </span>
                <p><b>{nomeMaiusculo}</b></p>
                <ButtonHeader onClick={() => goToPokedex(navigate) }>Pokedex</ButtonHeader>
            </Header>

            <MainGrid>
                {pokeDetails && pokeDetails.sprites && (
                    <>
                        <DivPhoto>
                            <FrontContainer>
                                <img src={pokeDetails.sprites.front_default} alt={pokeDetails.name} />
                            </FrontContainer>
                            <BackContainer>
                                <img src={pokeDetails.sprites.back_default} alt={pokeDetails.name} />
                            </BackContainer>
                        </DivPhoto>
                        <DivStat>
                            <H1Stats>
                                <h1>Stats</h1>
                            </H1Stats>
                            <Stats>
                                {pokeDetails && pokeDetails.stats.map((poke, index) => {
                                    return index < 6 && <p key={poke.stat.name}><b>{poke.stat.name}:</b> {poke.base_stat}</p>
                                })}
                            </Stats>
                        </DivStat>
                        <DivTypeMoves>
                            <Type>
                                {pokeDetails && pokeDetails.types.map((poke, index) => {
                                    return index < 6 && <p key={poke.type.name}>{poke.type.name}</p>
                                })}
                            </Type>
                            <DivMoves>
                                <h1>Moves</h1>
                                <Moves>
                                    {pokeDetails && pokeDetails.moves.map((poke, index) => {
                                        return index < 5 && <p key={poke.move.name}>{poke.move.name}</p>
                                    })}
                                </Moves>
                            </DivMoves>
                        </DivTypeMoves>
                    </>
                )}
            </MainGrid>
        </Body>
    )
}
