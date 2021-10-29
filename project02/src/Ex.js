import React from 'react'


function Uu({idd,name}){
    return(
        <div>
            <b>{idd.id}</b>
            <b>{idd.name}</b>

            <b>{name}</b>
        </div>
        
    )
}


Uu.defaultProps  = {
    idd:"디폴트"
};


export default function Ex() {



    const users = [
        {
            id:'1',
            name:'이름',
        },
        {
            id:'2',
            name:'이름',
        },
        {
            id:'3',
            name:'이름',
        },
        {
            id:'4',
            name:'이름',
        },
        {
            id:'5',
            name:'이름',
        }

    ]

    return (
        <>
               <Uu name={users[0].id}></Uu>
{users.map(reUser => (
              <Uu idd={reUser}  key={reUser.id}></Uu>
        ))}

        {/* {/* <div>{users[0].id}</div> */}

        
     


        {/* {users.map(reUser => (
              <Uu idd={reUser} name={reUser} key={reUser.id}></Uu>
        ))}  */}
      

        </>
    )
}
