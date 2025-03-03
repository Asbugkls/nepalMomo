import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import ContactUs from './Pages/ContactUs'
import Menu from './Pages/Menu'
import Services from './Pages/Services'
import AllergyAdvice from './Pages/AllergyAdvice'
import Login from "./Pages/Login"
import ProductDescription from './Pages/ProductDescription'
import Navigation from './assets/components/Navigation'
import CartPage from './Pages/CartPage'
import Payment from './Pages/Payment/Payment'
import Success from './Pages/Payment/Success'


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
        <Route path='/cartpage' element={<CartPage />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/success' element={<Success />} />
        <Route path='/productDescription/:id' element={<ProductDescription />} />
        </Routes>

    </div>
  )
}

export default App