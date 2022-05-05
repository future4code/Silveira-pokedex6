import { Container, Footer, Header, ContainerCards } from "./styled";
import React, { useContext, useEffect } from "react";
import PokeCard from "../../components/PokeCard/PokeCard";
import { useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { goToPokedex } from "../../routes/coordinator";


const HomePage = () => {

  const { pokemons } = useContext(GlobalStateContext);
  const navigate = useNavigate()

  const pokeMap = pokemons && pokemons.map((poke, index) => {

    return ( index < 20 && <PokeCard key={poke.id} poke={poke} indexPoke={index} />)
  })



  return (
    <div>
      <Header> <button onClick={() => goToPokedex(navigate)}> Ir para Pokedex</button> <h1>HOME</h1>POKEMONS</Header>
      <ContainerCards>
        {pokeMap}
        {/* <PokeCard /> */}
      </ContainerCards>
      <Footer>POKEMONS</Footer>
    </div>
  );
}

export default HomePage;
