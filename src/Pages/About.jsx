import React from 'react'
import about from '../assets/About/about.jpg'
import about1 from '../assets/About/about1.jpg'
import { FaPlayCircle } from "react-icons/fa";
import image from '../assets/About/image.jpg'
import image1 from '../assets/About/image1.jpg'
import image2 from '../assets/About/image2.jpg'
import image3 from '../assets/About/image3.jpg'
import image4 from '../assets/About/image4.jpg'
import image5 from '../assets/About/image5.jpg'
import image6 from '../assets/About/image6.jpg'
import image7 from '../assets/About/image7.jpg'
import image8 from '../assets/About/image8.jpg'
import image9 from '../assets/About/image9.png'
import image10 from '../assets/About/image10.png'
import image11 from '../assets/About/image11.png'
import momo from '../assets/About/momologo.png'
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import { ImMobile } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";


const chefData = [
  { id: 1, name: "Head Chef", image: image9 },
  { id: 2, name: "Assistant Chef", image: image10 },
  { id: 3, name: "Assistant Chef", image: image11 }
]


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

          <NavLink to="https://www.youtube.com/watch?v=uJlIncioJVI" target='_blank'>
            <button className='flex justify-center items-center gap-4 w-[231px] h-[64px] bg-teal-600 rounded-[100px] text-[16px] mt-[50px] hover:bg-teal-800'>
              <FaPlayCircle className='h-[32px] w-[32px]' /> Watch the Video</button>
          </NavLink>

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

      <div>
        <div className='flex flex-col items-center'>
          <h1 className='text-[49px] font-bold'>Meet The <span className='text-orange-600'>Team</span></h1>
          <p className='text-[25px] text-teal-600'>Our talented team members who delivers only the best results</p>
        </div>

        <div className='mt-[20px] flex gap-[200px] ml-[150px]'>
          {
            chefData.map((data) => {
              return (
                <div key={data.id}>
                  <img src={data.image} alt="" className='h-[450px] w-[300px] rounded-[4px] absolute -z-50 brightness-50' />
                  <h1 className='pt-[400px] ml-[20px] text-[20px] font-bold text-white'>{data.name}</h1>
                </div>
              )
            })
          }
        </div>
        <div className='text-[40px] space-x-4 flex justify-end mr-[160px] mt-[30px]'>
        <button><FiArrowLeftCircle className='' /></button>
        <button><FiArrowRightCircle className='' /></button>
        </div>
      </div>

      <div className='mt-[40px] h-[400px] bg-gray-100 p-[50px]'>
        <div className=' flex justify-between items-center w-[1128px] h-[200px]'>
          <div className='w-[408px] h-[192px]'>
            <img src={momo} alt="" className='w-[152px] h-[48px]' />
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

export default About