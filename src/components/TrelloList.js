import AddCardorList from "./AddCardorList"
import ListTitle from "./ListTitle"
import { Contenedor } from "./styled-components/Styles"
import TrelloCard from "./TrelloCard"


const TrelloList = ({list}) => {
 console.log(list.id)
  return (
    <div>
        <Contenedor >
          <ListTitle title={list.title} idTitle={list.id}/>
{
   list.cards.map(card=>{
     
return    ( 
<div key={card.id}>  
    
     <TrelloCard card={card}/>
     </div>
)

   }) 
    }

  <AddCardorList type='card' ListId={list.id} />
        </Contenedor>

    </div>

  )
}

export default TrelloList