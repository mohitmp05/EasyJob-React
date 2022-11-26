import React from 'react'
import { Route, Routes } from 'react-router'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import Login from './components/Login'
import Register from './components/Register'
import LandingNavbar from './components/LandingNavbar'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <LandingNavbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Homepage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App