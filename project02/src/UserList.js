import React from 'react'

function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

// 컴포넌트 두개 생성가능

export default function UserList({users}) {


    return (
        <div>
            {users.map(u => (
                <User user={u} key={u.id} />
            ))}



        </div>
    )
}

