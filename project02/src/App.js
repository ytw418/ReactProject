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
  const nextId = useRef(4); // useRef 로 선언하면 컴포넌트가 리랜더링 되더라도 변수값이 초기화 되지 않는다 = 전역저장소에 저장되기 때문

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

  const onRemove = (iddd)  => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter(user => user.id !== iddd)); // 같은 아이디가 아닌 것 만 추출(조건 같은 개념이네) 
  };


  



  return (
    <>
      <CreateUser 
      username={username}
      email={email}
      onChange={onChange}
      onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} ></UserList>
    
    </>
  )

}

export default App;

