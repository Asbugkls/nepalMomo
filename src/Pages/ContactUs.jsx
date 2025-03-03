import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";

function ContactUs() {
  return (
    <div className='ml-[110px]'>
      <div className='flex flex-col justify-center items-center mr-[110px] mt-[60px]' >
        <h1 className='text-[56px] text-teal-600 font-parisienne'>Our Contact</h1>
        <h2 className='text-[24px] text-gray-500'>GET IN TOUCH</h2>
        <p className='text-[30px] font-bold'><span className='text-orange-500'>Our Friendly Team</span> would love to hear from you</p>
      </div>

      <div className='mt-[60px] h-[400px] flex space-x-3'>
        <div className='h-[233px] w-[360px] shadow-2xl shadow-gray-500 rounded-[20px] space-y-10 pt-[30px] pl-[50px]'>
          <div className='flex text-[20px] gap-x-3'><FaLocationDot className='h-[32px] w-[32px] text-orange-600' />LOCATION</div>
          <h1 className='w-[250px]'>Godawari, Lalitpur-40200, Bagmati, Nepal</h1>
        </div>
        <div className='h-[233px] w-[360px] shadow-2xl shadow-gray-500 rounded-[20px] space-y-10 p-[40px]'>
          <div className='flex text-[20px] gap-x-3'><FaPhoneVolume className='h-[32px] w-[32px] text-orange-600' />PHONE</div>
          <div>
            <h1 className='flex gap-15 justify-between text-teal-600'>Mobile: <span className='text-black'>(+977) 967806301 <span className='flex justify-end'>(+977) 9767340333</span> </span></h1>
            <h1 className='flex gap-15 justify-between text-teal-600 '>Tel: <span className='text-black'>01-5573536 </span></h1>
          </div>
        </div>
        <div className='h-[233px] w-[360px] shadow-2xl shadow-gray-500 rounded-[20px] space-y-10 p-[40px]'>
          <div className='flex text-[20px] gap-x-3'><MdAccessTimeFilled className='h-[32px] w-[32px] text-orange-600' />SERVICE TIME</div>
          <div>
            <h1 className='flex gap-15 justify-between text-teal-600'>MON-FRI: <span className='text-black'>8 am - 8 am</span></h1>
            <h1 className='flex gap-15 justify-between text-teal-600 '>SUN-Fri <span className='text-black'>Closed</span></h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;