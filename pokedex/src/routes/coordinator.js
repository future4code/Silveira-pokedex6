export const goToHome = (navigate) => {
    navigate("/")}

export const goToPokemonsDetails = (navigate) => {
    // isPokedex ? navigate(`/pokemonsDetails/${name}/telaPokedex`): (navigate(`/pokemonsDetails/${name}`))
    navigate('/pokemonsDetails')
}

export const goToPokedex = (navigate) => {
    navigate ("/pokedex")
}    
export const goBack = (navigate) => {
    navigate(-1)
}    