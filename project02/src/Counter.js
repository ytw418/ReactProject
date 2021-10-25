import React,{useState} from 'react';

function Counter() {

    const [num, setNum] = useState(0);

    const onIncrease = () => {
       setNum(num + 1); //상태를 업데이트
    }

    const onDecrease = () => {
        setNum(num => num - 1); //어떻게 업데이트할건지 로직을 정의 해주는 함수
    }

    return(
        <div>
            <h1>{num}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;