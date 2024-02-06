//import { useState } from 'react'

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import './App.css'
import { Provider } from 'react-redux'
import Home from './Pages/Home'
import Carts from './Pages/Carts'
import Navbar from './components/Navbar'
// import { store from '@reduxjs/toolkit'
import store from "./Redux/Store";

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
    
    <Provider store={store}>
      <Router  >
        <Navbar/>
        <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/cart' element={<Carts/>} />
        </Routes>
      </Router>
    </Provider>
    </>
    
      
      
    
  )
}

export default App
