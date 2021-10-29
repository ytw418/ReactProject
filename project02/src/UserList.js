import React from 'react'

function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

// 컴포넌트 두개 생성가능

export default function UserList() {

    const user = [
        {
            id: 1,   
            username: 'one',
            email: 'one@naver.com,'
        },
        {
            id: 2,
            username: 'two',
            email: 'two@naver.com,'
        },
        {
            id: 3,
            username: 'three',
            email: 'three@naver.com,'
        },

    ];

    return (
        <div>
            {user.map(u => (
                <User user={u} key={u.id} />
            ))}



        </div>
    )
}

