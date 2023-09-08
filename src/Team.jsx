import { useState } from "react"
export default function Team() {
    const [Team,setTeam] = useState(11) 
    const handelAdd =()=>{
       const newTeam = Team + 1
       setTeam(newTeam)
    }
    const handelAdd2 = ()=>{
        setTeam(Team - 1)
    }
    const TeamStyle ={
        border:'2px solid purple',
        margin:'15px',
        padding:'15px',
        borderRadius:'15px'
    }
    // **|


    return (
        <div style={TeamStyle}>
            <h3>Players:{Team}</h3>
            <button onClick={handelAdd}>Add</button>
            <button onClick={handelAdd2}>Remove</button>
        </div>
    )
}