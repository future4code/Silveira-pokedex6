import { CardContainer, DivImage } from "./styled"
import { useNavigate } from "react-router-dom";
import {goToPokemonsDetails} from '../../routes/coordinator'


const PokeCard = (props) => {
    const navigate = useNavigate()
    return (
        <div>
            <CardContainer>
                <DivImage
                    src={props.poke && props.poke.sprites.front_default}
                    alt={props.poke.name}
                />
                <p>{props.poke.name}</p>
                {/* <p>{poke.stats}</p> */}
                <div>
                    <button>Remover da Pokedex</button>
                    <button onClick={()=> goToPokemonsDetails(navigate, props.poke.name)}>Ver Detalhes</button>
                </div>
            </CardContainer>
         
         
        </div>
    );
}

export default PokeCard;