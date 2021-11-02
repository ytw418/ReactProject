import React, {useRef}from 'react';
import Counter from './Counter';
import InputSample from './InputSample';
import Inputs from './Inputs';
import InputSample_Ex from './InputSample_Ex';
import UserList from './UserList';
import Ex from './Ex';



//rfce


function App() {

  
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];

  const nextId = useRef(4);

  const onCreate = () => {
    //
    //
    nextId.current += 1;
  };






  return (
  
<UserList users={users}></UserList>

  )

}

export default App;

