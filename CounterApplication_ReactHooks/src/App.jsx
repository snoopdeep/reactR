import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setCounter]=useState(0);
  // let count=0
  const updateCounter=()=>{
    // count++;
    if(count<20)
    setCounter(++count);
    // console.log(count);
    }
    const decreaseConter=()=>{
      if(count>0)setCounter(count-1);
    }

  return (
    <>
     <h1>Counter application: React Hooks</h1>
     <h3>Value: {count}</h3>
     <button onClick={updateCounter}>Increase</button>
     <br></br>
     <button onClick={decreaseConter}>Decrease</button>
     <p>Footer: counter value:{count} </p>
    </>
  )
}

export default App
