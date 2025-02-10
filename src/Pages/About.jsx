import React from 'react'
import about from '../assets/about.jpg'
import about1 from '../assets/about1.jpg'
import { FaPlayCircle } from "react-icons/fa";
import image from '../assets/image.jpg'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'
import image7 from '../assets/image7.jpg'
import image8 from '../assets/image8.jpg'
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";


function About() {
  return (
    <div>
      <div className='bg-white h-[600px] ml-[110px] mt-[20px] flex justify-between'>
        <div className='mt-[100px]'>
          <h1 className='text-teal-700 text-[50px] font-parisienne mb-[30px]'>About Us</h1>
          <h2 className='text-gray-500 tracking-[2px]'>WE PRIDE OURSELF ON </h2>
          <p className='flex flex-col text-orange-600 font-bold text-[25px] mt-[10px]'>Our authentic momo recipes
            <span className='text-black'>passed down through <span className=' flex flex-col'>generations</span></span></p>
        </div>
        <div className='mr-[100px]'>
          <img src={about} alt="" className='h-[500px]' />
        </div>
      </div>

      <div className='h-[650px]'>
        <img src={about1} alt="" className='h-[640px] absolute -z-50 brightness-35 blur-[1px]' />
        <div className='ml-[110px] text-white pt-[350px]'>
          <h1 className='text-[40px] font-bold'>Process behind the making</h1>
          <p>See how we make momos that you like from only the best ingredients</p>
          <button className='flex justify-center items-center gap-4 w-[231px] h-[64px] bg-teal-600 rounded-[100px] text-[16px] mt-[50px] hover:bg-teal-800'>
            <FaPlayCircle className='h-[32px] w-[32px]' /> Watch the Video</button>
        </div>
      </div>

      <div className='mt-[100px]'>
        <div className='ml-[110px] flex gap-[120px] h-[500px]'>
          <div className='w-[456px] h-[270px]'>
            <h1 className='text-[39px] font-bold'>Our momos are <span className='text-orange-500'> made with love</span></h1>
            <p className=' mt-[20px] text-gray-500'>Lorem ipsum dolor sit amet consectetur.
              Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt. Viverra aliquet sollicitudin eget dapibus.
              Vestibulum velit viverra gravida consectetur sed facilisis ut morbi.</p>
          </div>
          <div className='flex'>
            <img src={image} alt="" className='w-[264px] h-[191px] absolute right-[420px] mt-[250px] z-10 ' />
            <img src={image1} alt="" className='w-[450px] h-[350px] absolute right-[100px]' />
          </div>
        </div>

        <div className='ml-[110px] gap-[120px] h-[500px] flex mt-[60px]'>
          <div className='flex'>
            <img src={image3} alt="" className='w-[264px] h-[191px] mt-[250px] absolute left-[400px] z-10 ' />
            <img src={image2} alt="" className='w-[450px] h-[350px] mt-[10px]' />
          </div>
          <div className='w-[456px] h-[270px] flex flex-col '>
            <h1 className='text-[39px] font-bold'>Taste the difference with  <span className='text-orange-500'> our handcrafted momos</span></h1>
            <p className='mt-[20px] text-gray-500'>Lorem ipsum dolor sit amet consectetur.
              Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt. Viverra aliquet sollicitudin eget dapibus.
              Vestibulum velit viverra gravida consectetur sed facilisis ut morbi.</p>
          </div>
        </div>

        <div className='ml-[110px] flex gap-[120px] h-[500px] mt-[50px]'>
          <div className='w-[456px] h-[270px]'>
            <h1 className='text-[39px] font-bold'>Our momos are the perfect <span className='text-orange-500'>  blend of tradition and innovation</span></h1>
            <p className=' mt-[20px] text-gray-500'>Lorem ipsum dolor sit amet consectetur.
              Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt. Viverra aliquet sollicitudin eget dapibus.
              Vestibulum velit viverra gravida consectetur sed facilisis ut morbi.</p>
          </div>
          <div className='flex'>
            <img src={image5} alt="" className='w-[264px] h-[191px] absolute right-[420px] mt-[250px] z-10 ' />
            <img src={image4} alt="" className='w-[450px] h-[350px] absolute right-[100px]' />
          </div>
        </div>
      </div>


      <div className='h-[600px]'>
        <img src={image7} alt="" className='h-[500px] w-full absolute -z-50 blur-[3px] brightness-35' />
        <div className='absolute text-white w-[550px] ml-[110px] mt-[150px] space-y-8'>
          <img src={image8} alt="" className='h-[40px]' />
          <p>Momo is not just about sustenance,
            it's about bringing people together and creating memories. At our restaurant,
            we strive to create a warm and inviting atmosphere where our guests can enjoy delicious momo,
            great company, and unforgettable experiences</p>
          <h1 className='flex flex-col font-bold text-[20px]'>Marcus Schleifer <span>CEO</span></h1>
          <div className='text-[40px] space-x-4 flex justify-end '>
            <button><FiArrowLeftCircle className='text-gray-500' /></button>
            <button><FiArrowRightCircle className='text-gray-500' /></button>
          </div>
        </div>
        <img src={image6} alt="" className='h-[500px] absolute right-0' />
      </div>




    </div>
  )
}

export default About