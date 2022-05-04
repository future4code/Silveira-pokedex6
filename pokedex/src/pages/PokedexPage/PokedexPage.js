import { HeaderPokedex, ButtonBack, ContainerCards, Container } from "./styled"
import { goBack } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import PokedexCard from "../../components/PokedexCard/PokedexCard";

const PokedexPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <HeaderPokedex>

        <ButtonBack onClick={() => goBack(navigate)} >Voltar para lista de pokemons</ButtonBack>
        <h2>Pokedex</h2>
      </HeaderPokedex>
      <ContainerCards>
        <PokedexCard />
      </ContainerCards>
    </>
  );
}

export default PokedexPage;