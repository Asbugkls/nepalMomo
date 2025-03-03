import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import momologo from '../About/momologo.png'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { AiFillTikTok } from 'react-icons/ai'
import CartPage from '../../Pages/CartPage'
import { BsCart4 } from 'react-icons/bs'
import { CartContext } from '../../Context/CartProvider'
import { FaShoppingCart } from 'react-icons/fa'
import { useAuth0 } from '@auth0/auth0-react'
import { FaUser } from "react-icons/fa";

function Navigation () {
  const { user, logout, isAuthenticated } = useAuth0()
  const { state } = useContext(CartContext)
  console.log(state.cartItem)
  const totalCartItem = state.cartItem.reduce((acc, item) => {
    return acc + item.qty
  }, 0)
  console.log(totalCartItem)
  return (
    <div>
      <div className='h-[90px] shadow-2xs shadow-gray-300  pl-[110px] flex items-center bg-white'>
        <div>
          <img src={momologo} alt='' className='h-[45px]' />
        </div>

        <div className='pl-[20px] space-x-[25px] flex'>
          <NavLink
            to='/'
            className='hover:text-orange-500 text-black border-b-2 border-amber-500'
          >
            Home
          </NavLink>

          <NavLink to='/about' className='hover:text-orange-500 text-black'>
            About
          </NavLink>
          <NavLink to='/menu' className='hover:text-orange-500 text-black'>
            Menu
          </NavLink>
          <NavLink to='/services' className='hover:text-orange-500  text-black'>
            Services
          </NavLink>
          <NavLink
            to='/allergyadvice'
            className='hover:text-orange-500 text-black'
          >
            AllergyAdvice
          </NavLink>

          <NavLink to='/cartpage' className='hover:text-orange-500 text-black'>
            <span className='absolute pl-[45px]'>{totalCartItem}</span>
            <FaShoppingCart className='w-[50px] h-[35px]' />
          </NavLink>
        </div>
        <div className='flex  ml-[180px] space-x-[20px]'>
          <div className='flex space-x-[20px] mt-[8px]'>
            <NavLink to='https://www.facebook.com/' target='_blank'>
              <FaFacebook className='text-gray-600 h-[30px] w-[30px]' />
            </NavLink>

            <NavLink to='https://www.instagram.com/' target='_Blank'>
              <FaInstagram className='text-gray-600 h-[30px] w-[30px]' />
            </NavLink>

            <NavLink to='https://www.tiktok.com/' target='_blank'>
              <AiFillTikTok className='text-gray-600 h-[30px] w-[30px]' />
            </NavLink>
          </div>
          <NavLink to='/contactus'>
            <button className='border h-[40px] w-[120px] rounded-[50px] bg-orange-500 hover:bg-orange-800 text-white'>
              Contact Us
            </button>
          </NavLink>

          {isAuthenticated ? (
            <NavLink to="/profile">
              <img src={user.picture} alt="" className="rounded-full h-10" />
            </NavLink>
          ) : (
            <FaUser size={25} className="mt-2.5" />
          )}

          {isAuthenticated ? (
            <button
              onClick={() => {
                logout()
              }}
              className='p-1.5 bg-orange-500 rounded-[50px] text-white'
            >
              Logout
            </button>
          ) : (
            <NavLink
              to='/login'
              className='flex justify-center items-center w-[80px] bg-orange-500 rounded-[50px] text-white'
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navigation
