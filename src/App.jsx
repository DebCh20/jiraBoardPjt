import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boards from './Components/Boards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Boards/>
    </>
  )
}

export default App
