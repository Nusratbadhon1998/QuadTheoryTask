import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav/Nav'
import Container from './components/Container'
import Banner from './components/Banner/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <Nav/>
      <Banner/></>
  )
}

export default App
