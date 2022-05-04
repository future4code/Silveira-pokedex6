import React, { useContext, useEffect, useState } from 'react'
import { MainGrid, DivPhoto, DivStat, DivTypeMoves, FrontContainer, BackContainer, Type, DivMoves, H1Stats, Stats, Moves, ButtonHeader } from './styled'
import { GlobalStateContext } from "../../global/GlobalStateContext";
import axios from 'axios';
import { Body } from '../../pages/PokemonsDetails/styled';
import { goBack } from '../../routes/coordinator';
import { useNavigate, useParams } from 'react-router-dom';


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
    }, [navigate])


    return (
        <Body>
            <header>
                <ButtonHeader onClick={() => goBack(navigate)}>Voltar</ButtonHeader>
                <p><b>{nomeMaiusculo}</b></p>
                <ButtonHeader>Adicionar/Remover da Podedex</ButtonHeader>
            </header>

            <MainGrid>
                {pokeDetails && pokeDetails.sprites && (
                    <>
                        <DivPhoto>
                            <FrontContainer>
                                <img src={pokeDetails.sprites.front_default} />
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
