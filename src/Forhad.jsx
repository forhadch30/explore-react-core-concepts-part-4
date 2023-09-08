import { useEffect, useState } from 'react'
import './Forhad.css'
import Friend from './Friend';
export default function Forhad() {
    const [forhad, setForhads] = useState([]);

   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=> setForhads(data))
   },[])

    return(
        <div className='box'>
            <h2>Forhad:{forhad.length}</h2>
            {
                forhad.map(friend=> <Friend friend={friend}></Friend>)
            }
        </div>
    )
}