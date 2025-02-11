import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import ContactUs from './Pages/ContactUs'
import Menu from './Pages/Menu'
import Services from './Pages/Services'
import AllergyAdvice from './Pages/AllergyAdvice'
import Login from "./Pages/Login"
import Navigation from './components/Navigation'

function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/allergyadvice' element={<AllergyAdvice />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/services' element={<Services />} />
        <Route path='/login' element={<Login />} />
      </Routes>

    </div>
  )
}

export default App