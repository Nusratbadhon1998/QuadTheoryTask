import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav/Nav'
import Container from './components/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#eeeff0] min-h-screen max-w-full'>
      <Nav/>
    </div>
  )
}

export default App
