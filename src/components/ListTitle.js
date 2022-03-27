import React, { useContext, useState } from "react";
import { BiDotsHorizontal } from "react-icons/bi";
import contextAPI from "../hooks/ContextAPI";
import { ContainerTitle, Icon, Input } from "./styled-components/Styles";


const ListTitle = ({ title,idTitle}) => {
  const [open, setOpen] = useState(false);
  const [valor, setValor] = useState(title);
  const {updateListTitle}  = useContext(contextAPI);
  const handleBlur= ()=>{
    updateListTitle(valor,idTitle);
    setOpen(false)
  }
  return (
    <>
      {open ? (
        <ContainerTitle>
          <Input value={valor} 
          onChange={(e)=>setValor(e.target.value)}
          onBlur={handleBlur}>
          </Input>
         
        </ContainerTitle>

      ) : (
        <ContainerTitle >
          <h3 onClick={() => setOpen(true)} >{valor}</h3>
          <Icon>
            <BiDotsHorizontal />
          </Icon>
        </ContainerTitle>
      )}
    </>
  );
};

export default ListTitle;
