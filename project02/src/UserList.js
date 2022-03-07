import React from 'react'

function User({ user,onRemove }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

// 컴포넌트 두개 생성가능

export default function UserList({users,onRemove}) {


    return (
        <div>
            {users.map(u => (
                <User user={u} key={u.id} onRemove={onRemove} />
            ))}
        </div>
    )
}

