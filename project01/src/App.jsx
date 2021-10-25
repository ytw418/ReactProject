import React from 'react';
import Hello from './hello';
import './App.css';
import Wrapper from './Wrapper';

function App() {
  return (
    
    <Wrapper children ="">
    <header className="header">asdasd</header>
    <div></div>
    <div>dasd</div>
    <Hello name="react" color="red" isSpecial=""></Hello>
    <Hello name="react" color="red" isSpecial={true}></Hello>
    <Hello name="ddd" color="blue" isSpecial="안녕" ></Hello>
    <Hello name="react" color="red" isSpecial></Hello>
    </Wrapper>

  );
}

export default App;
