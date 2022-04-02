import React, { useRef,useState,useMemo,useCallback,useReducer} from 'react';
import Counter from './Counter';
import InputSample from './InputSample';
import Inputs from './Inputs';
import InputSample_Ex from './InputSample_Ex';
import Ex from './Ex';
import UserList from './UserList';
import CreateUser from './CreateUser';





//rfce
function countActiveUser(users){
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  inpust : {
    username: '',
    email:''
  },
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]
};





function reducer(state,action){
  switch (action.type){
    case 'CHANGE_INPUT':
      return{
        ...state,
        inputs:{
          ...state.inputs,
          [action.name]:action.value
        },
      }
  }
  return state;
}

function App() {

  const [state,dispatch] = useReducer(reducer,initialState);
  const { users } = state;
  const { username, email } = state.inputs;
  
  const onChange =useCallback(e => {
    const { name, value } = e.target;
    dispatch({
      type:'CHANGE_INPUT',
      name,
      value
    })
  },[])
    
  return (
    <>
      <CreateUser/>
      <UserList users={[]} ></UserList>
      <div>활성사용자 수 : 0</div>
    
    </>
  )

}

export default App;

