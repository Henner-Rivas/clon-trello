import React,{useContext, useState } from 'react'
import {
  Button,
  ContainerAdd,
  Icon,
  CenterVertial,
  Textarea,  ContainerCardText
} from "./styled-components/Styles";
import { BiDotsHorizontal } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import contextAPI from '../hooks/ContextAPI';

  

const AddCardorLisText = ({type,setOpen,ListId}) => {
 
      const {AddCard,AddList}= useContext(contextAPI)
  const [title, setTitle] = useState('');
 
  const handleAddCardorList= ()=>{
    
    if (type ==='card') {
      AddCard(title,ListId)
      
    }else{
      AddList(title)
    }
     setTitle("")
  }
  return (
    <ContainerCardText > 
   
     <Textarea  cols="40" rows="5" value={title} onChange={e=>setTitle(e.target.value)}
     
     placeholder={ type=== 'card' ?"Enter for add other To do": 'Enter for add other List'
     }
/*      
 */
     ></Textarea>

    <ContainerAdd>
    <CenterVertial>
      <Button type='button'
      onClick={handleAddCardorList}
      
      >Add a {type}</Button>

      <Icon onClick={()=>setOpen(false)}>
        <AiOutlineClose />
      </Icon>
    </CenterVertial>

    <Icon>
      <BiDotsHorizontal />
    </Icon>
  </ContainerAdd>

  </ContainerCardText>
  )
}

export default AddCardorLisText