import './App.css';
import TrelloList from './components/TrelloList';
import { AppStyled,ContainerApp, Contenedor } from './components/styled-components/Styles';
import AddCardorList from './components/AddCardorList';
import {mockData} from './components/mockdata'
import { useState } from 'react';
import ContextAPI from './hooks/ContextAPI';
import uuid from 'react-uuid'
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
console.log("🚀 ~ file: App.js ~ line 26 ~ AddCard ~ id", id)
console.log("🚀 ~ file: App.js ~ line 26 ~ AddCard ~ title", title)
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
const AddList=()=>{
     console.log('soy Add list')
}

  return (

    <ContextAPI.Provider value={{updateListTitle,AddCard,AddList}}> 
    <AppStyled>
 <ContainerApp>


{

data.listIds.map(id =>{
  const list = data.lists[id]
return (<TrelloList  list={list} key={id}/>)
})
}

<Contenedor>  
<AddCardorList type="List" />

</Contenedor>
</ContainerApp>
    </AppStyled>
    </ContextAPI.Provider>
  );
}

export default App;
