import React from 'react'
import advice1 from '../assets/Advice/advice1.png'
import advice2 from '../assets/Advice/advice2.png'
import advice4 from '../assets/Advice/advice4.png'
import advice3 from '../assets/Advice/advice3.png'
import advice5 from '../assets/Advice/advice5.png'
import momologo1 from '../assets/Advice/momologo1.png'
import { ImMobile } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

function AllergyAdvice() {
  return (
    <div>
      <div className='bg-white h-[600px] ml-[110px] mt-[20px] flex justify-between'>
        <div className='mt-[100px] w-[500px]'>
          <h1 className='text-teal-700 text-[50px] font-parisienne mb-[30px]'>Allergy Advices</h1>
          <h2 className='text-gray-500 tracking-[2px]'>AT OUR RESTAURANT </h2>
          <p className='flex flex-col font-bold text-[25px] mt-[10px]'>We use only the freshest and highest quality ingredients in all our dishes,
            <span className='text-orange-600'> and offer transparency in our ingredient labeling. </span></p>
        </div>
        <div className='mr-[100px]'>
          <img src={advice1} alt="" className='h-[500px]' />
        </div>
      </div>

      <div className='mt-[20px] h-[2600px] ml-[110px]' >
        <div className='flex justify-center'>
          <h1 className='text-[40px] font-bold text-orange-600 font-chela '>Ingredient's <span className='text-black'>Used</span></h1>
        </div>

        <div className='mt-[50px]'>
          <div className='ml-[100px] absolute -z-50'>
            <img src={advice2} alt="" className='w-[521px] h-[490px]' />
          </div>
          <div className='h-[322px] w-[650px] p-[56px] border-[4px] border-teal-800 rounded-[16px] bg-white absolute left-[330px] mt-[30px] space-y-[20px]'>
            <h1 className='text-[25px] font-bold'>For the Dough</h1>
            <li className='marker:text-orange-600'>120 gms refined flour</li>
            <div className='border-b-[1px] border-gray-500'></div>
            <li className='marker:text-orange-600'>1/4 tsp baking powder</li>
            <div className='border-b-[1px] border-gray-500'></div>
            <li className='marker:text-orange-600'>1/2 tsp salt water (for kneading)</li>
            <div className='border-b-[1px] border-gray-500'></div>
          </div>

          <div className='h-[590px] w-[650px] p-[20px] border-[4px] border-teal-800 rounded-[16px] bg-white absolute left-[330px] mt-[400px] space-y-[20px]'>
            <h1 className='text-[25px] font-bold'>For the Chicken Filling:</h1>
            <li className='marker:text-orange-600'>1 cup chicken (minced)</li>
            <div className='border-b-[1px] border-gray-500'></div>
            <li className='marker:text-orange-600'>1/2 cup onions, finely chopped</li>
            <div className='border-b-[1px] border-gray-500'></div>
            <li className='marker:text-orange-600'>1/4 tsp black pepper powder</li>
            <div className='border-b-[1px] border-gray-500'></div>
            <li className='marker:text-orange-600'>1 tbsp oil</li>
            <div className='border-b-[1px] border-gray-500'></div>
            <li className='marker:text-orange-600'>1/2 tsp garlic paste</li>
            <div className='border-b-[1px] border-gray-500'></div>
            <li className='marker:text-orange-600'>1/2 tsp soya sauce</li>
            <div className='border-b-[1px] border-gray-500'></div>
            <li className='marker:text-orange-600'>Salt</li>
            <div className='border-b-[1px] border-gray-500'></div>
            <li className='marker:text-orange-600'>1/4 tsp vinega</li>
            <div className='border-b-[1px] border-gray-500'></div>
          </div>

          <div className='pt-[500px] pr-[50px] absolute -z-50'>
            <img src={advice4} alt="" className='h-[1000px] w-full' />
          </div>

          <div className='h-[660px] w-[650px] p-[20px] border-[4px] border-teal-800 rounded-[16px] mt-[1030px] bg-white absolute left-[330px]  space-y-[20px]'>
            <h1 className='text-[25px] font-bold'>For the Vegetarian Filling:</h1>
            <li className='marker:text-orange-600'>1 cup cabbage and carrots, grated</li>
            <div className='border-b-[1px] border-gray-500'></div>
            <li className='marker:text-orange-600'>2 tbsp onions , finely chopped</li>
            <div className='border-b-[1px] border-gray-500'></div>
            <li className='marker:text-orange-600'>1/2 tsp garlic, finely chopped</li>
            <div className='border-b-[1px] border-gray-500'></div>
            <li className='marker:text-orange-600'>1 tbsp oil</li>
            <div className='border-b-[1px] border-gray-500'></div>
            <li className='marker:text-orange-600'>1/4 tsp vinegar</li>
            <div className='border-b-[1px] border-gray-500'></div>
            <li className='marker:text-orange-600'>1/2 tsp soya sauce</li>
            <div className='border-b-[1px] border-gray-500'></div>
            <li className='marker:text-orange-600'>to taste salt</li>
            <div className='border-b-[1px] border-gray-500'></div>
            <li className='marker:text-orange-600'>to taste pepper</li>
            <div className='border-b-[1px] border-gray-500'></div>
            <li className='marker:text-orange-600'>1 tbsp cornflour</li>
            <div className='border-b-[1px] border-gray-500'></div>
          </div>

          <div className='h-[590px] w-[650px] p-[20px] border-[4px] border-teal-800 rounded-[16px] bg-white absolute left-[330px] mt-[1730px] space-y-[20px]'>
            <h1 className='text-[25px] font-bold'>For the Chicken Filling:</h1>
            <li className='marker:text-orange-600'>1 cup chicken (minced)</li>
            <div className='border-b-[1px] border-gray-500'></div>
            <li className='marker:text-orange-600'>1/2 cup onions, finely chopped</li>
            <div className='border-b-[1px] border-gray-500'></div>
            <li className='marker:text-orange-600'>1/4 tsp black pepper powder</li>
            <div className='border-b-[1px] border-gray-500'></div>
            <li className='marker:text-orange-600'>1 tbsp oil</li>
            <div className='border-b-[1px] border-gray-500'></div>
            <li className='marker:text-orange-600'>1/2 tsp garlic paste</li>
            <div className='border-b-[1px] border-gray-500'></div>
            <li className='marker:text-orange-600'>1/2 tsp soya sauce</li>
            <div className='border-b-[1px] border-gray-500'></div>
            <li className='marker:text-orange-600'>Salt</li>
            <div className='border-b-[1px] border-gray-500'></div>
            <li className='marker:text-orange-600'>1/4 tsp vinega</li>
            <div className='border-b-[1px] border-gray-500'></div>
          </div>
          <div className='flex absolute right-[100px] top-[2800px] -z-50'>
            <img src={advice3} alt="" className='w-[335px] h-[432px]' />
          </div>
        </div>

      </div>
      <div className='flex flex-col justify-center items-center  '>
        <h1 className='text-orange-600 text-[40px] font-chela'>Allergy <span className='text-black'>Advice</span></h1>
        <p className='w-[1000px] mt-[50px] flex flex-col gap-8 text-gray-700'>Lorem ipsum dolor sit amet consectetur. Feugiat lectus sit est blandit in gravida.
          Nisl facilisis luctus sit porttitor placerat purus tincidunt. Cursus nascetur a mauris odio quis sociis pretium nisl.
          In viverra diam dis montes orci congue vulputate magna ullamcorper.
          Semper tellus ipsum felis maecenas ultrices turpis amet euismod malesuada.
          Amet sed neque vitae malesuada quis sed urna. Feugiat orci feugiat cursus risus tincidunt.
          Aliquet nam iaculis bibendum tortor varius sit. Volutpat nunc nisl quisque elit.
          <span> Ac est ultricies risus et sed. Donec auctor tristique quam morbi pellentesque et.
            Scelerisque dui id arcu laoreet iaculis nunc et nulla sed.
            Aliquet nullam vulputate quis ut mi placerat auctor. Ipsum massa suspendisse netus mollis interdum.
            Augue leo eget ut vitae maecenas ac. Metus massa nunc tristique donec dignissim aenean congue justo et.
            Parturient elit adipiscing non vitae mattis. Congue senectus urna cursus nisi nisl nisl tincidunt rhoncus.
            Congue sit etiam vestibulum elit aenean leo enim volutpat.
          </span>
          <span>
            Aliquet vitae condimentum bibendum ullamcorper vel cursus libero netus bibendum. Lorem id ut proin tincidunt.
            Nibh nunc amet odio est et. Sem dui nunc morbi leo quisque viverra ultrices. Mattis at tempus ultricies ut feugiat nunc dignissim.
            Urna turpis purus turpis elit risus. Sed elit ornare senectus dignissim diam dolor sed dictum.
            Faucibus mauris senectus odio blandit diam nunc. Urna volutpat ut potenti ut mus orci neque sem.
            Mattis amet at amet faucibus nisl morbi aenean ac. Justo turpis bibendum donec lacinia.
            Enim integer ornare nibh urna enim tortor arcu sit lacinia. Dapibus praesent vitae dolor cursus fringilla hac facilisis pellentesque.
            Elementum lacus varius et neque amet aliquam donec sed. Ultrices euismod commodo id vehicula commodo.
            Amet lorem eros nulla mauris. Sit arcu enim sit nunc mi sed aenean. Ornare enim vitae volutpat est dui tortor.
            Viverra habitant et consequat vitae elit aliquet iaculis in tristique. Quam ipsum viverra ac laoreet platea in praesent.
            Mattis molestie arcu nulla convallis interdum proin dui ut porta.
          </span> Amet potenti praesent pulvinar scelerisque vitae habitant eget.
          Senectus hac id aliquam ipsum urna. Est ut amet nec sollicitudin nunc viverra nec ipsum suspendisse.
          Etiam risus ultricies dictum nisl. Bibendum ultrices elementum feugiat erat suspendisse mi fermentum magna suspendisse.
          Nisi mattis consequat nec donec eu amet nulla a. At blandit vulputate morbi tortor amet.
          Hac nec gravida tempor ac. Senectus nunc libero scelerisque quisque. Risus condimentum mattis massa integer.</p>

        <div className='h-[442px] w-[1000px] bg-gray-100 mt-15 rounded-[16px] flex flex-col justify-center items-center'>
          <h1 className='text-[31px] text-teal-700'>Scan the QR code</h1>
          <p className='text-gray-500'>You can also check the allergy advices using your phone as well</p>
          <div className='mt-[40px]'>
            <img src={advice5} alt="" className='h-[168px] w-[168px] border-4 rounded-[12px]' />
            <h1 className='flex text-orange-600 text-[30px] font-bold'>SCAN <span className='text-black'>ME!</span><ImMobile className='text-black mt-[10px]' /> </h1>
          </div>
        </div>
      </div>

      <div className='mt-[40px] h-[400px] bg-gray-100 p-[50px]'>
        <div className=' flex justify-between items-center w-[1128px] h-[200px]'>
          <div className='w-[408px] h-[192px]'>
            <img src={momologo1} alt="" className='w-[152px] h-[48px]' />
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

export default AllergyAdvice