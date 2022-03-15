import React, { useEffect } from 'react'

function User({ user,onRemove,onToggle }) {
    useEffect(() => {
        console.log('컴포넌트가 화면에 나타남');
        return () => {
            console.log('컴포넌트가 화면서에서 사라짐')
        }
    },[]);
    return (
        <div>
            <b style={{cursor:"pointer",color:user.active ? 'green':'black'}}onClick={()=> onToggle(user.id)}>{user.username}</b> <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

// 컴포넌트 두개 생성가능

export default function UserList({users,onRemove, onToggle}) {


    return (
        <div>
            {users.map(u => (
                <User user={u} key={u.id} onRemove={onRemove}  onToggle={onToggle}  />
            ))}
        </div>
    )
}

