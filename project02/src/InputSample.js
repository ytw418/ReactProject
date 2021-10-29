import React, { useState } from 'react';

function InputSample({안녕}) {

    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);

    }
    const onReset = (e) => {
        setText('');

    }
    return(
        <div>
            <input onChange={onChange} value={text}></input>
<<<<<<< HEAD
            <button onClick={onReset}>{안녕}</button>
            <div>값 : {text}</div>
=======
            <button onClick={onReset}>초기화</button>
            <div>값 :랜더링 테스트 {text}</div>
>>>>>>> 6acd8f5e7239d0bcc2c7c931c9a445b1d458a8be

        </div>
    );
}
export default InputSample;