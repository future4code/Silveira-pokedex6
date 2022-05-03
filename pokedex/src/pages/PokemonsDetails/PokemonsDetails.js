import React from 'react'
import { useNavigate } from 'react-router-dom'
import GetDetails from '../../components/GetDetails/GetDetails'
import { goBack } from '../../routes/coordinator'
import { Body, GlobalStyle, ButtonHeader } from './styled'



export default function PokemonsDetails() {
  const navigate = useNavigate()
  return (
    <Body>
      <GlobalStyle />
      <header>
          <ButtonHeader onClick={() => goBack(navigate)}>Voltar</ButtonHeader>
          <p>Nome do Pokemon</p>
          <ButtonHeader>Adicionar/Remover da Podedex</ButtonHeader>
      </header>
      <main>
        <div>
          <GetDetails />
        </div>
      </main>

    </Body>
  )
}
