import { HeaderPokedex, ButtonBack, ContainerCards, Titulo, Footer} from "./styled"
import { goBack } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import PokedexCard from "../../components/PokedexCard/PokedexCard";


const PokedexPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <HeaderPokedex>

        <ButtonBack onClick={() => goBack(navigate)} >Voltar para lista de pokemons</ButtonBack>
        <Titulo>Pokedex</Titulo>
      </HeaderPokedex>
      <ContainerCards>
        <PokedexCard />
      </ContainerCards>
      {/* <Footer/> */}
     
    </>
  );
}

export default PokedexPage;