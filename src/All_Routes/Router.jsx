import React from 'react'
import {Route,Routes} from "react-router-dom";
import About from '../Pages/About_page/About';
import Career from '../Pages/Career_page/Career';
import Contact from '../Pages/Contact_page/Contact';
import Home from '../Pages/Home_page/Home';
import Service from '../Pages/Service_page/Service';
const Router = () => {
  return (
    <Routes>
       <Route path='/' element={<Home/>}></Route> 
       <Route path='/about' element={<About/>}></Route> 
       <Route path='/contact' element={<Contact/>}></Route> 
       <Route path='/career' element={<Career/>}></Route> 
       <Route path='/service' element={<Service/>}></Route> 
    </Routes>
  )
}

export default Router
