import React from 'react'
import { useNavigate } from 'react-router-dom'
import GetDetails from '../../components/GetDetails/GetDetails'
import { goBack } from '../../routes/coordinator'
import { Body, GlobalStyle, HeaderDIV } from './styled'



export default function PokemonsDetails() {
  const navigate = useNavigate()
  return (
    <Body>
      <GlobalStyle />
      <header>
          <button onClick={() => goBack(navigate)}>Voltar</button>
          <p>Nome do Pokemon</p>
          <button>Adicionar/Remover da Podedex</button>
      </header>
      <main>
        <div>
          <GetDetails />
        </div>
      </main>

    </Body>
  )
}
