import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { RiMailFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
const contact = () => {
    return (
        <>
            <div className='Contact_section_image'>
                <div className='section_Contact_1'>
                    <div className='container'>
                        <div className='main_container_1'>
                            <h2>What Do We</h2>
                            <p>Contact Us</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* contact_section_2 */}


            <div className='contact_section_2'>
                <div className='container'>
                    <div className='main_section_contact_2'>
                        <div className='section_rigth_contact_2'>
                            <h1>Write a Message</h1>
                            <h2>Get In Touch</h2>
                            <p>Have a question, suggestion, or just want to say hi? We’re here and happy to hear from you!</p>
                            <div className='rigth_section_contact_2'>
                                <div className=''>
                                    <FaLocationDot />
                                    <div>
                                        <h1>Address</h1>
                                        <p>742 Evergreen Terrace</p>
                                    </div>
                                </div>
                                <div>
                                    <RiMailFill />
                                    <div>
                                        <h1>Email</h1>
                                        <p>contact@rivora.com
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <FaPhoneAlt />
                                        <div>
                                            <h1>Phone</h1>
                                            <p>(123) 202-9296</p>
                                        </div>
                                    </div>
                                    <div>
                                        <SiInstagram />
                                        <div>
                                            <h1>Instagram</h1>
                                            <p>rivora_hotel_theme</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default contact
