import { useEffect, useState } from "react"
export default function User() {
    const [user, setUsers] = useState({})
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setUsers(data))
    
    useEffect(()=>{},[])
    return (
        <div>
            <h2>User: {user.length}</h2>
        </div>
    )
}