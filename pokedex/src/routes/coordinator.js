export const goToHome = (navigate) => {
    navigate("/")}

export const goToPokemonsDetails = (navigate, name) => {
    // isPokedex ? navigate(`/pokemonsDetails/${name}/telaPokedex`): (navigate(`/pokemonsDetails/${name}`))
    navigate(`/pokemonsDetails/${name}`)
}

export const goToPokedex = (navigate) => {
    navigate ("/pokedex")
}    
export const goBack = (navigate) => {
    navigate(-1)
}    