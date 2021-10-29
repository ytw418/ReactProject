//rfce
import React, { useState } from 'react';


function InputSample_Ex() {

    const [text,setText] = useState({
        name:'',
        name2:'',
    });

    const { name,name2} = text;

    const change = (e) =>{
        const {value,name} = e.target;

        setText({
            ...text,
            [name]: value,
        });
        
    };

    const reset = () =>{
        setText('');
    };

    return (
        <div>

            <input onChange={change} value={name} name='name'></input>
            <input onChange={change} value={text.name2} name='name2'></input>
            <button onClick={reset}>초기화</button>
            <p>값 : {name} </p>
            <p>값 : {name2} </p>

            <input ></input>
            <button>초기화 버튼</button>
            <p>값 : {} </p>

        </div>
    );
}

export default InputSample_Ex;
