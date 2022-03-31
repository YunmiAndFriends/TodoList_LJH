import React from 'react'
import styled from 'styled-components';
import { MdOutlineDeleteForever } from "react-icons/md";
import { BsCheck } from "react-icons/bs";

export default function ContentDiv({onClickDelete, id, content, checked}) {
  return (
    <Wrap>
        <ContentDivWrap checked={checked}>{content}</ContentDivWrap>
        <CheckButton><BsCheck size={24}/></CheckButton>
        <DeleteButton onClick={()=> onClickDelete(id)}><MdOutlineDeleteForever size={24}/></DeleteButton> 
    </Wrap>
  )
}

const Wrap = styled.div`
    display: flex;
    width: inherit;
`;

const ContentDivWrap = styled.div`
    color: white;
    font-size: 22px;
    width: inherit;
    display: flex;
    justify-content: center;
    text-decoration: ${props => props.checked ? 'line-through' : 'none' };
`;

const CheckButton = styled.div`
     width: 4vw;
    height: 4.5vh;
`;

const DeleteButton = styled.div`
    width: 4vw;
    height: 4.5vh;
`;
