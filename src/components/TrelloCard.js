import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { ContainerCard, Contenedor } from './styled-components/Styles'


const TrelloCard = ({cardtitle,index,cardId}) => {



  return (
     <Draggable draggableId={cardId} index={index} >
      {
        (provided)=>(
 
          <ContainerCard 
       ref={provided.innerRef}          {...provided.dragHandleProps}
          {...provided.draggableProps}
          >
          
          {cardtitle}
        </ContainerCard>
 
        )

      }
   

    </Draggable>
  )
}

export default TrelloCard