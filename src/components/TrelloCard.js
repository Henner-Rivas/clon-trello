import React from 'react'
import { ContainerCard, Contenedor } from './styled-components/Styles'


const TrelloCard = ({card}) => {
  return (
    <ContainerCard>
      {card.title}
    </ContainerCard>
  )
}

export default TrelloCard