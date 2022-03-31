import React from 'react'
import { useState, useRef } from 'react'
import styled from 'styled-components';
import ContentDiv from './ContentDiv';

function TodoList(){
    const [list, setList] = useState('')    // 상수(바뀌지 않는 값), 내가 작성한 값
    const [item, setItem] = useState([])   // item의 초기값을 배열로 지정, [변수, 옆에 있는 변수를 고치는 함수] = useState(초기값)
    let count = useRef(0);  // 변수(바뀌는 값) useRef == 새로 랜더링이 되더라도 해당 변수는 최근의 값을 참조

    const onChangeList = (e) => { // 내가 작성한 값을 바뀔 때 마다 그 값을 받아와서 list값으로 대입
        setList(e.target.value)
    };

    const onClickList = () => { // 전송버튼
        const todo = { // {} == 객체(이름: value)
            id: count.current,  // id(객체 구분)
            content: list,   // inputtodo 안에서 작성한 todo 내용
            checked: false
        };
        setItem(item.concat(todo));     // item 추가
        setList(''); // InputTodo value 초기화
        count.current += 1; // id값 갱신(안바꿔주면 계속 0에서 머물러 있음~~~~)
    }

    const onClickDelete = (id) => {
        const saveItem = item.filter(el=> el.id !== id) // el == 배열의 순서, saveItem == 배열
        setItem(saveItem);
    };

    const onClickCheck = (id) => {
        
    };

    const onClickAllDelete = () => {
        setItem([]);    // todo 전체삭제
        setList('');    // 내가 작성한 값 초기화
        count.current = 0; // id count 초기화
    };


    return(
        <Container>
            <Title>TodoList</Title>
            <MainTodo>  {/*  */}
                { item.map(({id, content, checked})=><ContentDiv key={id} onClickDelete={onClickDelete} id={id} content={content} checked={checked}/>)}   
                    {/* {id, content} == 하나의 요소로 ContentDiv의 키값(id)과 차일드 값(content), == const todo 값이라고 생각 */}
            </MainTodo>
            <AddDiv>    {/* 추가하는 부분 */}
                <InputTodo onChange={onChangeList} placeholder='Todo를 입력하세요.' value={list}/>  {/* const onClickList의 setList(''); 값을 반영해서 값 초기화 */}
                <AddButton type='submit' onClick={onClickList}>전송</AddButton>
                <AllDeleteButton onClick={onClickAllDelete}>전체 삭제</AllDeleteButton>
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

const AllDeleteButton = styled.button`
    width: 4vw;
    height: 4.5vh;
`;


const AddDiv = styled.div`
    display: flex;
`;

