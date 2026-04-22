
import React from 'react'
import { Link } from 'react-router-dom'
import { IoLocationSharp } from "react-icons/io5";
import { IoTimeSharp } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaSquarePinterest } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";

const Headar = () => {
    return (
        <div>
          
            <div className=' header'>
                <div className='container'>
                    <div className='main_header'>
                        <div className='section_header_rigth'>
                            <div className='header_rigth_1'>
                                <a>
                                    <IoLocationSharp />Our Workshop: 100 S Main St, New York, NY</a>
                            </div>
                            <div className='header_rigth_2'>
                                <a> <IoTimeSharp />Monday - Saturday 08.00 - 18.00</a>
                            </div>
                        </div>
                        <div className='section_header_left'>
                            <a><IoLogoFacebook /></a>
                            <a><RiTwitterXFill /></a>
                            <a>  <FaYoutube /></a>
                            <a><FaSquarePinterest /></a>
                            <a><FaInstagram /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Header_section'>
                <div className='container'>
                    <div className='Header01_section'>
                        <div className='Header_section_1'>
                            <img src="image/logo.png" width={250} />

                        </div>
                        <div className='Header_section_2'>

                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='contact'>Contact</Link></li>
                                <li><Link to='services'>Services</Link></li>
                                <li><Link to='blog'>Blog</Link></li>
                                <li><Link to='about'>About</Link></li>
                            </ul>
                        </div>
                        <div className='Header_section_3'><ul>
                            <li><Link to='/'>Book a Session</Link></li>
                        </ul>
                        </div>




                    </div>
                </div>
            </div>
        </div>
    )
}

export default Headar;
