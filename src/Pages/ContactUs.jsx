import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import momologo from "../assets/About/momologo.png"
import { NavLink } from "react-router-dom";

function ContactUs() {
  return (
    <div>
      <div className="ml-[110px]">
        <div className="flex flex-col justify-center items-center mr-[110px] mt-[60px]">
          <h1 className="text-[56px] text-teal-600 font-parisienne">
            Our Contact
          </h1>
          <h2 className="text-[24px] text-gray-500">GET IN TOUCH</h2>
          <p className="text-[30px] font-bold">
            <span className="text-orange-500">Our Friendly Team</span> would
            love to hear from you
          </p>
        </div>

        <div className="mt-[60px] h-[300px] flex space-x-3">
          <div className="h-[233px] w-[360px] shadow-2xl shadow-gray-500 rounded-[20px] space-y-10 pt-[30px] pl-[50px]">
            <div className="flex text-[20px] gap-x-3">
              <FaLocationDot className="h-[32px] w-[32px] text-orange-600" />
              LOCATION
            </div>
            <h1 className="w-[250px]">
              New Baneshwor -41201, Kathmandu, Bagmati, Nepal
            </h1>
          </div>
          <div className="h-[233px] w-[360px] shadow-2xl shadow-gray-500 rounded-[20px] space-y-10 p-[40px]">
            <div className="flex text-[20px] gap-x-3">
              <FaPhoneVolume className="h-[32px] w-[32px] text-orange-600" />
              PHONE
            </div>
            <div>
              <h1 className="flex gap-15 justify-between text-teal-600">
                Mobile:{" "}
                <span className="text-black">
                  (+977) 980 5689789{" "}
                  <span className="flex justify-end">(+977) 9841 275897</span>{" "}
                </span>
              </h1>
              <h1 className="flex gap-15 justify-between text-teal-600 ">
                Tel: <span className="text-black">01-4783972 </span>
              </h1>
            </div>
          </div>
          <div className="h-[233px] w-[360px] shadow-2xl shadow-gray-500 rounded-[20px] space-y-10 p-[40px]">
            <div className="flex text-[20px] gap-x-3">
              <MdAccessTimeFilled className="h-[32px] w-[32px] text-orange-600" />
              SERVICE TIME
            </div>
            <div>
              <h1 className="flex gap-15 justify-between text-teal-600">
                MON-FRI: <span className="text-black">8 am - 8 am</span>
              </h1>
              <h1 className="flex gap-15 justify-between text-teal-600 ">
                SAT-SUN <span className="text-black">Closed</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9371762787214!2d85.33296537405229!3d27.688336526332225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19001a6b8975%3A0x4e24a0c6bc2da3e4!2sNew%20Baneshwor%20Chowk!5e0!3m2!1sen!2snp!4v1739809631329!5m2!1sen!2snp"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[400px]"
        ></iframe>
      </div>

      <div className="mt-[40px] h-[400px] bg-gray-100 p-[50px]">
        <div className=" flex justify-between items-center w-[1128px] h-[200px]">
          <div className="w-[408px] h-[192px]">
            <img src={momologo} alt="" className="w-[152px] h-[48px]" />
            <p className="text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate nisi iusto unde quis quibusdam impedit ex facilis
              doloremque quaerat laudantium.
            </p>
          </div>
          <div className="w-[168px] h-[158px] flex flex-col justify-center">
            <h1 className="text-[25px] text-teal-700">Momos</h1>
            <NavLink to="/aboutus" className="hover:text-gray-600">
              About Us
            </NavLink>
            <NavLink to="/ourmenu" className="hover:text-gray-600">
              Our Menu
            </NavLink>
            <NavLink to="/ourservices" className="hover:text-gray-600">
              Our Services
            </NavLink>
            <NavLink to="/contactus" className="hover:text-gray-600">
              Contact Us
            </NavLink>
          </div>
          <div className="w-[168px] h-[158px] flex flex-col items-start">
            <h1 className="text-[25px] text-teal-700">Legals</h1>
            <h3>Terms & Conditions</h3>
            <h3>Privacy Policy</h3>
            <h3>Supports</h3>
          </div>
          <div className="w-[168px] h-[158px] space-y-2">
            <h1 className="text-[25px] text-teal-700">Follow Us</h1>
            <div className="flex gap-3">
              <FaFacebook className="h-[35px] w-[35px] text-gray-500" />
              <FaLinkedin className="h-[35px] w-[35px] text-gray-500" />
              <FaSquareTwitter className="h-[35px] w-[35px] text-gray-500" />
            </div>
            <div className="flex gap-3">
              <IoLogoYoutube className="h-[35px] w-[35px] text-gray-500" />
              <FaInstagram className="h-[35px] w-[35px] text-gray-500" />
              <AiFillTikTok className="h-[35px] w-[35px] text-gray-500" />
            </div>
          </div>
        </div>
        <div className="border-b-1 border-gray-500 mt-[50px]"></div>
        <div>
          <h1 className="text-gray-500 flex justify-center mt-[30px]">
            Copyright ©2025 Everest Momo Pvt Ltd. All Rights Reserved.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;