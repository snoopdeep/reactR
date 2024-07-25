import { useState,useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const refFocus=useRef('');
  const refName= useRef('');
  // it will persist the name from the previous state to curren state. 
  useEffect(() => {
    refName.current=name
  }, [name]);

// this is used to hold the referance the html element so on click the button it will be focused.
  function focus(){
    // console.log(refFocus.current);
    refFocus.current.focus();
  }
  return (
    <>
      <input ref={refFocus} value={name} onChange={e=>setName(e.target.value)}></input>
      <h3> My name is {name}</h3>
      <br></br>
      <h3>Current name is {name} and previous state name is {refName.current} </h3>
      <button onClick={focus}>Click here to focus</button>
    </>
  )
}

export default App
