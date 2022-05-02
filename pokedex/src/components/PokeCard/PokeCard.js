import { CardContainer, DivImage } from "./styled"


const PokeCard = () => {
    return (
        <div>
            <CardContainer>
                <DivImage
                    src="https://picsum.photos/200"
                />
                <div>
                    <button>Remover da Pokedex</button>
                    <button>Ver Detalhes</button>
                </div>
            </CardContainer>
         
         
        </div>
    );
}

export default PokeCard;