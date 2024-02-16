import { useState } from "react"

function App(){
  let [counter, setCounter]= useState(0)
  const updateValue = ()=>{
    if(counter!=20){

      setCounter(counter+1);
    }
  }
  const decreaseValue = ()=>{
    if(counter<=0){
      setCounter(0)
    }
    else{
      setCounter(counter-1)
    }
  }
  return(
    <>
      <h1>Initial Value is {counter}</h1>
      <button onClick={updateValue}>Increase</button>
      <button style={{margin:"0px 5px 10px 10px"}} onClick={decreaseValue}>Decrease</button>
    </>
  )
}

export default App;
