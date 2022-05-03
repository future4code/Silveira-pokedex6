import { Container, Footer, Header } from "./styled";
import React, { useContext } from "react";
import PokeCard from "../../components/PokeCard/PokeCard";
import { useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../../global/GlobalStateContext";


const HomePage = () => {
  
  const { pokemons } = useContext(GlobalStateContext);
  // const navigate = useNavigate()
 
  const pokeMap = pokemons && pokemons.map((poke) =>{
    console.log(poke)
    return (
      <div>
        <PokeCard key={poke.id} poke={poke}/>
      </div>
    )
  })
  return (
    <div>
      <Header>POKEMONS</Header>
      <Container>
        <h1>HOME</h1>
        {pokeMap}
      </Container>
      <Footer>POKEMONS</Footer>
    </div>
  );
}

export default HomePage;
