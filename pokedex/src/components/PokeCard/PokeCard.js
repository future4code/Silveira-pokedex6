import { CardContainer, DivImage } from "./styled"
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { useContext } from "react";


const PokeCard = (props) => {
    const poke = useContext(GlobalStateContext)
    return (
        <div>
            <CardContainer>
                <DivImage
                    src={props.poke && props.poke.sprites.front_default}
                    alt={props.poke.name}
                />
                <p>{props.poke.name}</p>
                <div>
                    <button>Remover da Pokedex</button>
                    <button>Ver Detalhes</button>
                </div>
            </CardContainer>
         
         
        </div>
    );
}

export default PokeCard;