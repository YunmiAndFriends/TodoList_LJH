import React from 'react'
import { useState } from 'react'
import styled from 'styled-components';

function TodoList(){
    const [list, setList] = useState('')

    const onChangeList = (e) => {
        setList(e.target.value)
    };

    return(
        <Container>
            <Title>TodoList</Title>
            <MainTodo></MainTodo>
            <InputTodo placeholder='Todo를 입력하세요.'></InputTodo>
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
    width: 64vw;
    height: 4vh;
    font-size: 16px;
    text-align: center;
`;