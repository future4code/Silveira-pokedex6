import { HeaderPokedex, ButtonBack, ContainerCards, Container } from "./styled"
import PokeCard from "../../components/PokeCard/PokeCard"
import { goBack } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

const PokedexPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <HeaderPokedex>

        <ButtonBack onClick={() => goBack(navigate)} >Voltar para lista de pokemons</ButtonBack>
        <h2>Pokedex</h2>
      </HeaderPokedex>
      <ContainerCards>
        <PokeCard />
      </ContainerCards>
    </>
  );
}

export default PokedexPage;