import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav/Nav'
import Container from './components/Container'
import Banner from './components/Banner/Banner'
import Popular from './components/Popular/Popular'
import Form from './components/Form/Form'
import Recommend from './components/Recommend/Recommend'

function App() {

  return (
      <>
      <Nav/>
      <Banner/>
      <Popular/>
      <Recommend/>
      </>
  )
}

export default App
