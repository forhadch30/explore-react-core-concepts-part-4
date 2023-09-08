
import './App.css'
import Counter from './Counter'
import Team from './Team'
import User from './User'
import Forhad from './Forhad'
function App() {
  function onClick() {
    alert('I am Forhad Ahmed')
  }
  const addToFive = (nmu)=>{
    alert(nmu + 5)
  }
  const onClick2=()=>{
    alert('not a function !-!!-!!!')
  }
  return (
    <>
      <h3>React Core concepts 2 </h3>
      <Forhad></Forhad>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <button onClick={onClick}>On Click</button>
      <button onClick={onClick2}> Click Me</button>
      <button onClick={()=>(alert('tumi koi'))}> third</button>
      <button onClick={()=> addToFive(5)}>Five</button>
    </>
  )
}

export default App

