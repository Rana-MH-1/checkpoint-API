import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css'

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')

        .then(response =>{console.log(response.data)
            setUsers(response.data)
        })

        .catch(error => {
            console.group(error)
            setErrMsg(error)
        })
    }, [setUsers])

    return (
        <ul className='container'>
            <h1 className='title'>List of users</h1>
            {users.map(user => (
            <div className='users'>
                <p key={user.id}> Name : {user.name}</p>
                <h5> UserName : {user.username}</h5>
                <hr/>
            </div>
            ))}
            {errMsg? <h4>{errMsg}</h4> : null} 
        </ul>
    )
}

export default UserList
