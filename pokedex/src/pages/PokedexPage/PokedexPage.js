import { HeaderPokedex, ButtonBack, ContainerCards, Titulo, Footer} from "./styled"
import { goBack, goToHome } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import PokedexCard from "../../components/PokedexCard/PokedexCard";
import pokedex from '../../img/pokedex.png'


const PokedexPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <HeaderPokedex>
        <ButtonBack onClick={() => goBack(navigate)} >Voltar</ButtonBack>        
        <img src={pokedex} alt='pokedex' />
        <ButtonBack onClick={() => goToHome(navigate)} >Home</ButtonBack>
                {/* <Titulo>Pokedex</Titulo> */}
      </HeaderPokedex>
      <ContainerCards>
        <PokedexCard />
      </ContainerCards>
      <Footer/>
     
    </>
  );
}

export default PokedexPage;