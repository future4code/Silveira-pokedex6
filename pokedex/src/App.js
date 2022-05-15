import GlobalState from "./global/GlobalState";
import { GlobalStyle } from "./pages/PokemonsDetails/styled";
import { Router } from "./routes/Router";

const  App = () => {
  return (
    <GlobalState>
      <GlobalStyle />
     <Router/>
    </GlobalState>
  );
}

export default App;
