import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    
      <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <h1 className='text-center text-black font-bold'>This is background color changer </h1>
      </div>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> 
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"red"}} onClick={()=> setColor("red")}>Red</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
        <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"silver"}} onClick={()=>setColor("silver")}>Silver</button>
        <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
        <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
      </div>
      </div>
    </>
  )
}

export default App
