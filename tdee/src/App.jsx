import { Button } from 'bootstrap'
import { useState } from 'react'
import './App.scss'
import Navbar from './sections/Navbar/Navbar'
import Header from './sections/HeaderSection/Header'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Navbar/>
    <Header/>
    </div>
  )
}

export default App
