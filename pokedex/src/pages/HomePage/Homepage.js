import { Container, Footer, Header, ContainerCards } from "./styled";
import React, { useContext, useEffect } from "react";
import PokeCard from "../../components/PokeCard/PokeCard";
import { useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { goToPokedex } from "../../routes/coordinator";
import ImgPokemon from "../../img/pokemon.png"
import Img from "../../img/pokemon-logo-0.png"
import { PlaceImg, Button, Placebutton } from "./styled";


const HomePage = () => {

  const { pokemons } = useContext(GlobalStateContext);
  const navigate = useNavigate()

  const pokeMap = pokemons && pokemons.map((poke, index) => {

    return ( index < 20 && <PokeCard key={poke.id} poke={poke} indexPoke={index} />)
  })



  return (
    <div>
      <Header> 
        <Placebutton>
        <Button onClick={() => goToPokedex(navigate)}>Pokedex</Button>
        </Placebutton>
       <PlaceImg src={Img}></PlaceImg>
      
      </Header>
      <ContainerCards>
        {pokeMap}
        {/* <PokeCard /> */}
      </ContainerCards>
      <Footer><p>POKÉMONS</p></Footer>
    </div>
  );
}

export default HomePage;
