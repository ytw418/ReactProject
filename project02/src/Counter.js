import React,{useState, useReducer  } from 'react';


function reducer(state, action) {
    switch (action.type){
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 5;
        default: return state;
        
    }
}

function Counter() {


   const [number, dispatch] = useReducer(reducer,0);



    const onIncrease = () => {
    dispatch({type:'INCREMENT'});//상태를 업데이트

    }

    const onDecrease = () => {
       dispatch({type:'DECREMENT'}); //어떻게 업데이트할건지 로직을 정의 해주는 함수
    }

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;