import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <h1 className='bg-green-400 text-black text-base'>Tailwind Test</h1>
    <Card name="Shiv Kumar" btnText="click me" ></Card>
    <Card name = "Girish Bhai" btnText="click me"></Card>
    </>
  )
}

export default App
