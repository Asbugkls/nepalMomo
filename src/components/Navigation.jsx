import React from 'react'
import { NavLink } from 'react-router-dom'
import momologo from '../assets/momologo.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

function Navigation() {
  return (
    <div className='p-0.5'>
      <div className='h-[70px] shadow-2xs shadow-gray-300  pl-[110px] flex items-center bg-white'>
        <NavLink to='/'>
          <div>
            <img src={momologo} alt="" className='h-[45px]' />
          </div>
        </NavLink>
        <div className='pl-[50px] space-x-[30px]'>
          <NavLink to='/about' className='hover:text-orange-500 text-gray-500'>About</NavLink>
          <NavLink to='/menu' className='hover:text-orange-500 text-gray-500' >Menu</NavLink>
          <NavLink to='/services' className='hover:text-orange-500 text-gray-500'>Services</NavLink>
          <NavLink to='/allergyadvice' className='hover:text-orange-500 text-gray-500'>AllergyAdvice</NavLink>
        </div>
        <div className='flex  ml-[180px] space-x-[20px]'>
          <div className='flex space-x-[20px] mt-[8px]'>
          <FaFacebook className='text-gray-600 h-[30px] w-[30px]' />
          <FaInstagram className='text-gray-600 h-[30px] w-[30px]' />
          <AiFillTikTok className='text-gray-600 h-[30px] w-[30px]' />
          </div>
          <NavLink to='/contactus'>
            <button className='border h-[40px] w-[120px] rounded-[50px] bg-orange-500 hover:bg-orange-800 text-white'>Contact Us</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navigation