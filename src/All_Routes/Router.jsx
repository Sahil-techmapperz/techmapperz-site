import React from 'react'
import {Route,Routes} from "react-router-dom";
import About from '../Pages/About_page/About';
import Article from '../Pages/Article_page/Article';
import Career from '../Pages/Career_page/Career';
import Contact from '../Pages/Contact_page/Contact';
import CRM_pages from '../Pages/CRM_page/CRM_pages.';
import Drone_Service from '../Pages/Drone_services/Drone_service';
import Home from '../Pages/Home_page/Home';
import Mobile_development from '../Pages/Mobile_page/Mobile_development';
import Photogrammetry_Services from '../Pages/Photogrammetry_Services_page/Photogrammetry_Services';
 import Remote_Sensing from '../Pages/Remote_Sensing_page/Remote_Sensing';
import Service from '../Pages/Service_page/Service';
import Singalearticle from '../Pages/Singale_Article_page/Singale_article';
import Web_Development from '../Pages/Web_Development/Web_development';
import Web_GIS from '../Pages/Web_GIS_page/Web_GIS';
import Service_main from '../Pages/Service_main/Service_main';
import It_consulting from '../Pages/It_consulting/It_consulting';




const Router = () => {
  return (
    <Routes>
       <Route path='/' element={<Home/>}></Route> 
       <Route path='/about' element={<About/>}></Route> 
       <Route path='/contact' element={<Contact/>}></Route> 
       <Route path='/career' element={<Career/>}></Route> 
       <Route path='/service' element={<Service/>}></Route> 
       <Route path='/article' element={<Article/>}></Route> 
       <Route path='/singal_article/:id' element={<Singalearticle/>}></Route> 
       <Route path='/drone_service' element={<Drone_Service/>}></Route>
       <Route path='/web_development' element={<Web_Development/>}></Route>
       <Route path='/mobile_development' element={<Mobile_development/>}></Route>

       <Route path='crm_page' element={<CRM_pages/>}></Route>
       <Route path='/web_GIS' element={<Web_GIS/>}></Route>
       <Route path='/Remote_Sensing' element={<Remote_Sensing/>}></Route>
       <Route path='/Photogrammetry' element={<Photogrammetry_Services/>}></Route>
       <Route path='/it_consulting' element={<It_consulting/>}></Route> 
       <Route path='/service_main' element={<Service_main/>}></Route>
      
       
       
    </Routes>
  )
}

export default Router
