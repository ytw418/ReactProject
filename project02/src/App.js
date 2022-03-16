import React, { useRef,useState,useMemo,useCallback} from 'react';
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

  const onChange = useCallback( e => {
    const {name, value} = e.target;
    setInputs(inputs => ({
      ...inputs,
      [name]:value  // 네임=키 (네임은 username, 또는 email 이다 )에 값은 벨류다
    }));
  
  },[]);

  const [users,setUsers] = useState([
    
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active:true,
      
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active:false,
      
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active:false,
      
    }
  
]);
  

  const onCreate = useCallback(() => {
    
    const user = {
      id: nextId.current,
      username,
      email
    };
    //문자열 합치기 concat()
    setUsers(users => users.concat(user));
    // setUsers([...users, user]);
    
    setInputs({
      username: '',
      email: ''
    });
    
    console.log({username});
    nextId.current += 1;
  },[username,email]);

  const onRemove = useCallback((iddd)  => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users => users.filter(user => user.id !== iddd)); // 같은 아이디가 아닌 것 만 추출함(조건 같은 개념이네) 
  }
  ,[]);


//user.active 변수를 수정하고 리턴 user 코드

  // const onToggle = id => {
  //   setUsers( 
  //  users.map(user=>{
  //     user.active=(user.id===id?(!user.active):user.active);
  //     return user;
  // })
  // );
  // };

// ...user 로 불변성 유지코드

  const onToggle = useCallback(
    id => {
    
    setUsers( users =>
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  },[]);

  const count = useMemo( () => {
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user => user.active).length;
  },[users]);

  return (
    <>
      <CreateUser 
      username={username}
      email={email}
      onChange={onChange}
      onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} ></UserList>
      <div>활성사용자 수 : {count}</div>
    </>
  )

}

export default App;

