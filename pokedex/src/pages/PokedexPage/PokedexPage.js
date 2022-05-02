import { HeaderPokedex, ButtonBack, ContainerCards, Container } from "./styled"
import PokeCard from "../../components/PokeCard/PokeCard"

const PokedexPage = () => {
  return (
    <div>
      <HeaderPokedex>

        <ButtonBack>Voltar para lista de pokemons</ButtonBack>
        <h2>Pokedex</h2>
      </HeaderPokedex>
      <ContainerCards>
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />

      </ContainerCards>
    </div>
  );
}

export default PokedexPage;