import React, { useRef,useState } from 'react';
import Counter from './Counter';
import InputSample from './InputSample';
import Inputs from './Inputs';
import InputSample_Ex from './InputSample_Ex';
import Ex from './Ex';
import UserList from './UserList';
import CreateUser from './CreateUser';





//rfce


function App() {





  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const {username,email} = inputs;
  const nextId = useRef(4);

  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value  // 네임=키 (네임은 username, 또는 email 이다 )에 값은 벨류다
    })
    console.log({username});
  }

  const [users,setUsers] = useState([
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
  
]);
  

  const onCreate = () => {

    const user = {
      id: nextId.current,
      username,
      email
    };
    
    setUsers([...users, user]);
    
    setInputs({
      username: '',
      email: ''
    });
    
    console.log({username});
    nextId.current += 1;
  };






  return (
    <>
      <CreateUser 
      username={username}
      email={email}
      onChange={onChange}
      onCreate={onCreate}
      />
      <UserList users={users}></UserList>
    </>
  )

}

export default App;

