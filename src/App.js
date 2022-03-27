import './App.css';
import TrelloList from './components/TrelloList';
import { AppStyled,ContainerApp, Contenedor } from './components/styled-components/Styles';
import AddCardorList from './components/AddCardorList';
import {mockData} from './components/mockdata'
import { useState } from 'react';
import ContextAPI from './hooks/ContextAPI';
import uuid from 'react-uuid'
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
function App() {
  const [data, setData] = useState(mockData);
console.log(data)
const updateListTitle= (newtitle,idList)=>{
  
    const list = data.lists[idList];
    
    list.title= newtitle;
    setData({
      ...data,
      lists:{
        ...data.lists,
        [idList]:list
      }
    })
}
const AddCard=(title,id)=>{
  // crea un id unico para cada card
  const newCarId= uuid()
  // crea el card nuevo
  const  newCard ={
      id:newCarId,
      title:title
  } 


  // añadir el newCard al array o localScore

  const list= data.lists[id]
   list.cards= [...list.cards, newCard];
   setData({
     ...data,
      lists:{
        ...data.lists,
         [id]:list
      }
   })

}
const AddList=(title)=>{
  const newListId=uuid();
  console.log(newListId)
setData({
  listIds:[...data.listIds,newListId],
  lists:{
    ...data.lists,
      [newListId]:{
        id:newListId,
        title,
        cards:[]
      }
    
  }
})
}
const onDragEnd=(result)=>{
console.log("🚀 ~ file: App.js ~ line 67 ~ onDragEnd ~ result", result)
  
const {destination,destination:{droppableId:desdroppableId,index:desIndex},source,source:{droppableId:sourcedroppableId,index:sourceIndex},draggableId,type}= result;
if(!destination || !draggableId){
  return
  }
console.table([
  {
    desdroppableId,
    sourcedroppableId,
    draggableId
  },{
   type,
   sourceIndex,
   desIndex
  }
])

if(type==="list"){
  const newlistid=data.listIds;
  newlistid.splice(sourceIndex,1)
  newlistid.splice(desIndex,0,draggableId)
  return
}
const sourceList= data.lists[sourcedroppableId]
const destinationList= data.lists[desdroppableId];
console.log("🚀 ~ file: App.js ~ line 93 ~ onDragEnd ~ destinationList", destinationList)
const  draggingCard= sourceList.cards.filter((card)=> card.id ===draggableId)[0]

if (sourcedroppableId===desdroppableId) {
    /// utilizaremos splice para intercambiar los indices
     sourceList.cards.splice(sourceIndex,1)
     destinationList.cards.splice(desIndex,0,draggingCard)
    // acualizaremos setData con los nuevos indices
  /*   setData({
     ...data.lists,
     [sourceList.id]:destinationList
    }) */
}else{
  sourceList.cards.splice(sourceIndex,1)
   destinationList.cards.splice(desIndex,0,draggingCard)

/* setData({
  ...data.lists,
  [sourceList.id]:sourceList,
  [destinationList.id]:destinationList
}) */
}

}
  return (

    <ContextAPI.Provider value={{updateListTitle,AddCard: AddCard,AddList}}> 
    <AppStyled>
      <DragDropContext onDragEnd={onDragEnd}> 
      <Droppable droppableId='12345' type='list' direction='horizontal'>
       {
         (provided)=>( 
   
          <ContainerApp 
          ref={provided.innerRef}      
         {...provided.droppableProps}
          >
          {
          
          data.listIds.map((id,index) =>{
            const list = data.lists[id]
          return (<TrelloList  list={list} key={id} index={index}/>)
          })
          }
          
          <Contenedor>  
          <AddCardorList type="List" />
             {provided.placeholder}
          </Contenedor>
          </ContainerApp>
    
         )



       }



</Droppable>

</DragDropContext>
    </AppStyled>
    </ContextAPI.Provider>
  );
}

export default App;
