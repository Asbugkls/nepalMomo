import React from 'react'
import Menu1 from "../assets/Menu/Menu1.png"

function Menu () {
  return (
    <div>
      <div className='bg-white h-[600px] ml-[110px] mt-[20px] flex justify-center'>
        <div className='mt-[2px]'>
          <h1
            className='text-[#0C6967] text-[56px] font-parisienne mb-[10px] justify-items-center ml-[180px]'>
            Our Menu
          </h1>
          <h2 className='text-orange-600  font-bold text-[25px] mt-[10px] flex flex-col items-center '>Our menu is more than just momos,<span className='text-black items-center'>With a variety of dishes to cater to all tastes and prefences</span></h2>
          <div>
            <h1 className='text-[#0C6967] font-Proxima Nova text-[31px] h-[37px] bold-[700px] w-[251px]'>Scan the QR Code</h1>
            <p>You can also check the allergy advices using your phones as well</p>
          </div>
          <div>
            <img src={Menu1} alt="" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Menu
