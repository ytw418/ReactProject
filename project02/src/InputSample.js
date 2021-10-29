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
            <button onClick={onReset}>{안녕}</button>
            <div>값 : {text}</div>

        </div>
    );
}
export default InputSample;