import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

export default App;

function Counter(){
  const [count, setCount]= useState(0);
  const increase = ()=>{
    let newCount = count +1;
    setCount(newCount)
  }

  const decrease = ()=>{
    if(count>0){
      let newCount = count -1;
      setCount(newCount)
    }
  }


  return(
    <>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </>
  )
}