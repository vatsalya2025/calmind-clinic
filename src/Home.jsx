import React from 'react'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsFillBagXFill } from "react-icons/bs";
import { IoIosContacts } from "react-icons/io";

const Home = () => {
  return (
    <>
      <Swiper>
        <SwiperSlide>  <div className='imag_home02'>
          <div className='section_home02'>
            <div className='container'>
              <div className='main_home02'>
                <div className='rigth_home02'>
                  <h2>Welcome to Calmind</h2>
                  <h1>Find Balance</h1>
                  <p>Empower your physical and mental well-being. Develop the resilience needed to push boundaries and reach your full potential through our expert-led fitness programs today.</p>
                  <a href=''>Explore More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide><div className='imag_home01'>
          <div className='section_home01'>
            <div className='container'>
              <div className='main_home01'>
                <div className='rigth_home01'>
                  <h2>Welcome to Calmind</h2>
                  <h1>Find Balance</h1>
                  <p>Discover a sense of inner peace and harmony. Our holistic approach helps you align your mind and body, ensuring you navigate life's daily challenges with calm energy.</p>
                  <a href=''>Explore More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </SwiperSlide>
      </Swiper>
      {/* section_Home_2 */}
      <div className='section_home_2'>
        <div className='main_section_home_2'>
          <div className='fast_1section_Home_2'>

            <BsFillBagXFill />
            <h2>Get Free Consultation </h2>
            <p>We offer free consultations to explore your concerns and begin your counseling journey with confidence and care.</p>

          </div>
          <div className='second_1section_Home_2'>
            <IoIosContacts />
            <h2>Personalized Counseling</h2>
            <p>Each client receives a personalized therapy plan to address challenges, set goals, and foster growth in a safe space where meaningful change is possible.</p>
          </div>
          <div className=' thard_1section_Home_2'>
            <img src="image/love.png" width="71" height="71" alt="love" />
            <h2>Evidence-Based Methods</h2>
            <p>Our therapists use proven methods like CBT and mindfulness to support measurable progress, lasting stability, and renewed wellbeing.</p>
          </div>
        </div>
      </div>


    </>
  )
}

export default Home
