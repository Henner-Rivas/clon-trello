import AddCardorList from "./AddCardorList";
import ListTitle from "./ListTitle";
import { Contenedor } from "./styled-components/Styles";
import TrelloCard from "./TrelloCard";
import { Draggable } from 'react-beautiful-dnd';
import { Droppable } from "react-beautiful-dnd";
import uuid from "react-uuid";
const TrelloList = ({ list ,index}) => {
  console.log(list.id);
  return (
  
    <div>
      <Draggable draggableId={list.id} index={index}>
      
      {
        (provided)=>(

          <Contenedor {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <ListTitle title={list.title} idTitle={list.id} />
          <Droppable droppableId={list.id} >  
          {(provided)=>(
<div ref={provided.innerRef} {...provided.droppableProps}> 
{list.cards.map((card, index) => {
  let otherId= uuid();
  return (

    <div key={card.id || otherId}>
      <TrelloCard cardtitle={card.title} cardId={card.id || otherId} index={index} />
    </div>
  
  );
})}
           {provided.placeholder}
</div>

          )

          }  
    
</Droppable>
  
          <AddCardorList type="card" ListId={list.id} />
        </Contenedor>


        )
      }
     
      </Draggable>

    </div>
  );
};

export default TrelloList;
