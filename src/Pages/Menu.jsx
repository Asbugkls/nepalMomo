import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Menu1 from '../assets/Menu/Menu1.png'
import momologo from '../assets/About/momologo.png'
import { ImMobile } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaStar } from "react-icons/fa6";


function Menu() {

  const [product, setProduct] = useState([]);

  const getData = async () => {
    let response = await fetch("https://dummyjson.com/recipes")
    response = await response.json();
    // console.log(response.recipes);
    setProduct(response.recipes)
  };
  useEffect(() => {
    getData()
  }, [])

  return (
    <div>

      <div className='mt-[30px]'>
        <h1 className='text-[56px] font-parisienne text-teal-700 flex justify-center'>Our Menu</h1>
        <p className='text-[31px] text-orange-600 flex flex-col items-center font-bold'>Our menu is more than just momos,
          <span className='text-black'> with a variety of dishes to cater to all tastes and preferences.</span></p>

        <div className='flex justify-center'>
          <div className='h-[442px] w-[1100px] bg-gray-100 mt-15 rounded-[16px] flex flex-col justify-center items-center'>
            <h1 className='text-[31px] text-teal-700'>Scan the QR code</h1>
            <p className='text-gray-500'>You can also check the allergy advices using your phone as well</p>
            <div className='mt-[40px]'>
              <img src={Menu1} alt="" className='h-[168px] w-[168px] border-4 rounded-[12px]' />
              <h1 className='flex text-orange-600 text-[30px] font-bold'>SCAN <span className='text-black'>ME!</span><ImMobile className='text-black mt-[10px]' /> </h1>
            </div>
          </div>
        </div>

      </div>

      <div className='mt-[40px]'>
        <h1 className='text-[50px] font-bold text-orange-500 flex justify-center gap-4 underline'>Our <span className='text-black'>Menu</span></h1>
        {product.length > 0 ? (
          <div className='flex p-[30px] flex-wrap gap-8 justify-center'>
            {product.map((item) => {
              return (
                <div key={item.name} className='border border-gray-400 h-[420px] w-[340px] flex flex-col justify-center items-center shadow-2xl shadow-gray-700 rounded-[20px]' >
                  <img src={item.image} alt="" className='h-[240px] rounded-2xl ' />
                  <h1 className='mt-[20px] font-bold'>{item.name}</h1>
                  <h1 className='flex gap-2'>Rating: {item.rating}<FaStar className="mt-[5px] text-amber-500" /></h1>
                  <h1 className='text-red-600'>Rs: {item.caloriesPerServing}</h1>
                  <NavLink
                    key={item.name}
                    to={`/ProductDescription/${item.id}`}>
                    <button className='mt-[10px] h-[50px] w-[150px] rounded-[50px] bg-orange-500 text-white hover:bg-amber-700'>View More</button>
                  </NavLink>
                </div>
              )
            })}
          </div>) : (<div>Loading...</div>)}
      </div>


      <div className='mt-[40px] h-[400px] bg-gray-100 p-[50px]'>
        <div className=' flex justify-between items-center w-[1128px] h-[200px]'>
          <div className='w-[408px] h-[192px]'>
            <img src={momologo} alt="" className='w-[152px] h-[48px]' />
            <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate nisi iusto unde quis quibusdam impedit ex facilis doloremque quaerat laudantium.</p>
          </div>
          <div className='w-[168px] h-[158px] flex flex-col justify-center'>
            <h1 className='text-[25px] text-teal-700'>Momos</h1>
            <h3>About Us</h3>
            <h3>Our Menu</h3>
            <h3>Our Services</h3>
            <h3>Contact Us</h3>
          </div>
          <div className='w-[168px] h-[158px] flex flex-col items-start'>
            <h1 className='text-[25px] text-teal-700'>Legals</h1>
            <h3>Terms & Conditions</h3>
            <h3>Privacy Policy</h3>
            <h3>Supports</h3>
          </div>
          <div className='w-[168px] h-[158px] space-y-2' >
            <h1 className='text-[25px] text-teal-700'>Follow Us</h1>
            <div className='flex gap-3'>
              <FaFacebook className='h-[35px] w-[35px] text-gray-500' />
              <FaLinkedin className='h-[35px] w-[35px] text-gray-500' />
              <FaSquareTwitter className='h-[35px] w-[35px] text-gray-500' />
            </div>
            <div className='flex gap-3'>
              <IoLogoYoutube className='h-[35px] w-[35px] text-gray-500' />
              <FaInstagram className='h-[35px] w-[35px] text-gray-500' />
              <AiFillTikTok className='h-[35px] w-[35px] text-gray-500' />
            </div>
          </div>
        </div>
        <div className='border-b-1 border-gray-500 mt-[50px]'></div>
        <div>
          <h1 className='text-gray-500 flex justify-center mt-[30px]'>Copyright ©2025 Everest Momo Pvt Ltd. All Rights Reserved.</h1>
        </div>
      </div>

    </div>
  )
}

export default Menu