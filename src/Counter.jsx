import { useState } from "react"
export default function Counter() {
    const [count,setCount] = useState(0);
    const handel = ()=>{
        const newCount = count + 1 
        setCount(newCount)
    }
    const handle2 = ()=>{
    const newCount = count -1
    setCount(newCount)
    }
    return(
        <div style={{border:'2px solid orange',borderRadius:'10px'}}>
              <h2>Counter:{count}</h2>
              <button onClick={handel}>Forhad.Nur</button>
              <button onClick={handle2}>AHMED</button>
        </div>
     
    )
}