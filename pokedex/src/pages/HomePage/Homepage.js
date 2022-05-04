import { Container, Footer, Header, ContainerCards } from "./styled";
import React, { useContext } from "react";
import PokeCard from "../../components/PokeCard/PokeCard";
import { useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../../global/GlobalStateContext";


const HomePage = () => {

  const { pokemons } = useContext(GlobalStateContext);
  // const navigate = useNavigate()

  const pokeMap = pokemons && pokemons.map((poke) => {

    return (
      <div>
        <PokeCard key={poke.id} poke={poke} />
      </div>
    )
  })
  return (
    <div>
      <Header> <h1>HOME</h1>POKEMONS</Header>
      <ContainerCards>

        <PokeCard />
      </ContainerCards>
      <Footer>POKEMONS</Footer>
    </div>
  );
}

export default HomePage;
