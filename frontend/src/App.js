import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App