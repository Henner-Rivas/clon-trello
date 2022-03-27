import styled from "@emotion/styled";
/* export  const Paper = styledComponents.div`
display
` */
import Fondo from '../../img/fondo.jpg'

export const Contenedor = styled.div`
  box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem #ccc;
  width: 300px;
  margin: 10px;
  padding: 7px;
  background: #ebecf0;
  border-radius: 1px;
   height: max-content;
`;

export const ContainerCard = styled.div`
  background: white;
  margin-top: 8px;
  margin-bottom: 8px;
  border-radius: 3px;
  box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem #ccc;
  padding: 3px;
  width: 300px;
  height: max-content;
`
export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
`;
export const Button = styled.button`
  background: green;
  border-radius: 5px;
  color: white;
  outline: none;
  border-style: none;
  padding: 8px;
  cursor: pointer;

  &:hover{
     background: rgba(0,255,0,0.6);
  }
`;
export const Icon = styled.i`
  font-size: 1.4rem;
  cursor: pointer;
  margin: 2px;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
     background:rgba(0,0,0,0.1)  ;
     border-radius: 7px;
 }
`;

export const ContainerAdd = styled.div`
  display: flex;
  justify-content: space-between;
  justify-items: center;
`;

export const CenterVertial = styled.div`
  display: flex;
  align-items: center;
`;

export const AddCard = styled.div`
  box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem #ccc;
  padding: 10px;
  margin-bottom: 15px;
  transition: all ease-in 0.2s;
  border-radius: 5px;
  font-weight: 200;
  height: max-content;
  width: 285px;
  &:hover {
    background: rgba(0, 0, 0, 0.25);
  }
`;
export const ContainerCardText = styled.div`
  box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem #ccc;
 padding: 5px;
 transition: all .4s ease-in; 
 

`;

export const Textarea = styled.textarea`
height: 30px;
outline: none;
width: 290px;
border-style: none;
height: 50px;
margin-bottom: 12px;
padding-left:4px ;
border-radius: 4px;
padding-top: 4px;
`;

export const AppStyled= styled.div`
overflow-y: auto;
min-height: 100vh;
background: url(${Fondo});
object-fit: cover;
background-size: cover;

background-repeat: no-repeat;
`
export const ContainerApp= styled.div`
display: flex;
`
export const Collapse= styled.div`
transition: all ease 0.8s;
`

export const Input = styled.input`

outline: none;
width: 290px;
border-style: none;
margin-bottom: 12px;
border-radius: 8px;
padding: 8px;
width: 100%;
font-size: 20px;
&:focus{
  background: #ddd;
  border: 2px solid black ;
}
`;