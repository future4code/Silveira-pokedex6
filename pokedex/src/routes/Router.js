import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/Homepage"
import PokedexPage from "../pages/PokedexPage/PokedexPage"
import PokemonsDetails from "../pages/PokemonsDetails/PokemonsDetails"


export const Router = () => {
 

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="pokedex" element={<PokedexPage/>} />
                <Route path="pokemons" element={<PokemonsDetails/>} />

            </Routes>
        </BrowserRouter>

    )
}
