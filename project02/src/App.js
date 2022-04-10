import React, { useRef, useState, useMemo, useCallback, useReducer } from 'react';
import Counter from './Counter';
import InputSample from './InputSample';
import Inputs from './Inputs';
import InputSample_Ex from './InputSample_Ex';
import Ex from './Ex';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './hooks/useInputs';





//rfce
function countActiveUser(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs: {
    username: '',
    email: ''
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





function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      };
      case 'TOGGLE_USER':
        return {
          ...state,
          users:state.users.map(user => 
            user.id ===action.id ? {...user,active : !user.active} : user
            )
        }
        case 'REMOVE_USER':
          return {
            ...state,
            users: state.users.filter(user => user.id !== action.id)
          }

      default :
      return state;
  }
}

export const UserDispatch = React.createContext(null);


function App() {

  const [form, onChange, reset] = useInputs({
    username: '',
    email: ''
  });

  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);
  const { users } = state;
  const {username,email} = form;


  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    });
    reset();
    nextId.current += 1;
  }, [username, email,reset]);



  const count = useMemo(() => countActiveUser(users), [users]);

  return (
    <>
    <UserDispatch.Provider value={dispatch}>
      <CreateUser 
      username={username}
      email={email}
      onChange={onChange}
      onCreate={onCreate}
      />
      <UserList users={users}  ></UserList>
      <div>활성사용자 수 : {count}</div>
      </UserDispatch.Provider>
    </>
  )

}

export default App;

