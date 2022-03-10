import React from 'react'
import { useState } from 'react'
import styled from 'styled-components';

function TodoList(){
    const [list, setList] = useState('')    // 상수(바뀌지 않는 값)
    const [item, setItem] = useState([])   // item의 초기값을 배열로 지정
    let count = 0;  // 변수(바뀌는 값)

    const onChangeList = (e) => {
        setList(e.target.value)
    };

    const onClickList = () => {
        const todo = {
            id: count,  // id(객체 구분)
            content: list   // inputtodo 안에서 작성한 todo 내용
        };
        setItem(item.concat(todo));     // item 추가
        setList('');
    }

    return(
        <Container>
            <Title>TodoList</Title>
            <MainTodo>  {/*  */}
                { item.map(({id, content})=><ContentDiv key={id}>{content}</ContentDiv>)}   
                    {/* {id, content} == 하나의 요소로 ContentDiv의 키값(id)과 차일드 값(content), == const todo 값이라고 생각 */}
            </MainTodo>
            <AddDiv>    {/* 추가하는 부분 */}
                <InputTodo onChange={onChangeList} placeholder='Todo를 입력하세요.' value={list}/>  {/* const onClickList의 setList(''); 값을 반영해서 값 초기화 */}
                <AddButton type='submit' onClick={onClickList}>전송</AddButton>
                <DeleteButton>전체 삭제</DeleteButton>
            </AddDiv>
            
        </Container>

    );
}

export default TodoList;


const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;  
    background-color: lightblue;
`;

const MainTodo = styled.div`
    display: flex;
    width: 64vw;
    height: 64vh;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    text-align: center;
    font-size: 50px;
    color: white;
`;

const InputTodo = styled.input`
    width: 56vw;
    height: 4vh;
    font-size: 16px;
    text-align: center;
`;

const AddButton = styled.button`
    width: 4vw;
    height: 4.5vh;
`;

const DeleteButton = styled.button`
    width: 4vw;
    height: 4.5vh;
`;

const AddDiv = styled.div`
    display: flex;
`;

const ContentDiv = styled.div`
    color: white;
    font-size: 22px;
`;