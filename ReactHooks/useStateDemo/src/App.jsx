import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
function fun(){
  console.log('Constructor will each time when component will render');
  return 4;
}
function App() {
  // this useState constructor will run on every render
  const [count1, setCount] = useState(fun());
  // this useState constuctor will run only one time ..
  const [count2,setCount2]=useState(()=>{
    return 5;
  })
  // 3: setState having object ie object as a state
  const [state,setState]=useState({num:6,label:'green'});
  const num=state.num;
  const label=state.label;

  function decreament1(preCount) {
    console.log("previous state count is ",preCount);
    // this setMethod will not override the preCount
    setCount(preCount - 1);
    setCount(preCount - 1);
    setCount(preCount - 1);
  }
  function increamet1(preCount){
    console.log("previous state count is ",preCount);
    setCount(preCount+1);
    setCount(preCount+1);
    setCount(preCount+1);
  }
  function decreament2(){
    // it have access to the previous state variable and do not override it
    setCount2((preStateCount)=>preStateCount-1);
    setCount2((preStateCount)=>preStateCount-1);
    setCount2((preStateCount)=>preStateCount-1);
  }
  function increamet2(){
    setCount2((a)=>a+1);
    setCount2((b)=>b+1);
    setCount2((c)=>c+1);
  }
  // 
  function increametWithlabel(){
    // setState(preState=>{
    //   return {num:preState.num-1}
    // })
    setState((preState)=>{
      return {...preState, num:preState.num-1}
    })
  }

  return (
    <>
      <div class="space-y-4">
        <div class="flex items-center space-x-4 p-4 bg-white rounded shadow">
          <span>Value: {count1}</span>
          <button
          // Correct Approach: onClick={() => incrementCount()} ensures incrementCount is called only when the button is clicked.
          // Incorrect Approach: onClick={incrementCount()} calls incrementCount immediately during the render, potentially causing infinite re-renders in React.
            onClick={()=>decreament1(count1)}
            class="px-3 py-1 bg-red-500 text-white rounded"
          >
            -
          </button>
          <button
            onClick={()=>increamet1(count1)}
            class="px-3 py-1 bg-green-500 text-white rounded"
          >
            +
          </button>
        </div>
        <div class="flex items-center space-x-4 p-4 bg-white rounded shadow">
          <span>Value: {count2}</span>
          <button
            onClick={()=>decreament2()}
            class="px-3 py-1 bg-red-500 text-white rounded"
          >
            -
          </button>
          <button onClick={()=>increamet2()} class="px-3 py-1 bg-green-500 text-white rounded">+</button>
        </div>
        <div class="flex items-center space-x-4 p-4 bg-white rounded shadow">
          <span>Value: {num +" "+ label}</span>
          <button onClick={()=>increametWithlabel()} class="px-3 py-1 bg-red-500 text-white rounded">-</button>
          <button class="px-3 py-1 bg-green-500 text-white rounded">+</button>
        </div>
        <div class="flex items-center space-x-4 p-4 bg-white rounded shadow">
          <span>Value: 0</span>
          <button class="px-3 py-1 bg-red-500 text-white rounded">-</button>
          <button class="px-3 py-1 bg-green-500 text-white rounded">+</button>
        </div>
      </div>
    </>
  );
}

export default App;
