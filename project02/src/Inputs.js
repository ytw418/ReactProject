import React ,{useState} from 'react';

function Inputs() {

    const [text, setText] = useState({
        num:'',
        nickname:'',

    });

    const { num, nickname } = text; // 비구조화 할당을 통해 값 추출
    console.log({num})

const change = (e) => {
    const { value, name} = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setText({
        ...text, // 기존의 input 객체를 복사한 뒤
        [name] : value  // name 키를 가진 값을 value 로 설정
        
    });
    console.log({num});
    console.log({nickname});

};

const reset = () => {
    setText({
        num: '',
        nickname: '',
    });
};

    return(
        <>
        <input  onChange={change} name="num" value={num}></input>
        <input  onChange={change} name="nickname" value={nickname}></input>
        <button onClick={reset}>초기화</button>

        <div>
            <b>이름:{num}<br/>닉네임:{nickname}</b>
        </div>
        </>


    );
}
export default Inputs;