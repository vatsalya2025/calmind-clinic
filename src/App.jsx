
import React from 'react'
import {  Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Contact from './contact';
import Blog from './Blog';
import About from "./About";
import Services from "./Services";
import Header from "./components/Header";
import BookaSession from "./BookaSession";
const App = () => {
  return (
    <>
   <Header />
        <Routes>
          

          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
            <Route path='/about' element={<About />} />
          <Route path="/blog" element={<Blog /> } />
          <Route path="/services" element={<Services />} />
             <Route path="/Book a Session" element={<BookaSession />} />
        </Routes>


 




    </>
  )
}

export default App
