import { useState, useEffect } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, [])

    return (
        <div>
            <h2>Lista de usuarios:</h2>
            <ul>
                {users.map((u) => (
                    <li key={u.id}> {u.name} - {u.email} </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;