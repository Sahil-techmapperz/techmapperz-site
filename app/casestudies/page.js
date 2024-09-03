"use client";

import { useState } from "react";
import CaseStudyCard from "@/app/_Components/CaseStudyCard"; // Corrected import
import Scrolltextanimation from "../_Components/Scrolltextanimation";
import ScrollToTop from "../_Components/ScrollToTop";
import SocialMediaIcons from "../_Components/SocialMediaIcons";

const Casestudies = () => {
    const [filter, setFilter] = useState('All');

    const handleFilterChange = (category) => {
        setFilter(category);
    };

    return (
        <div id='CaseStudiesITServices'>
      <ScrollToTop />
      <SocialMediaIcons/>
      <div className='flex flex-col h-[250px] text-center items-center justify-center bg-cover bg-center' style={{ backgroundImage: 'url("/Photos/Rectangle41.png")' }}>
        <p className='text-white mt-[60px] mb-[40px] text-[66px] font-bold sm:text-[50px]'>IT Services</p>
        <p className='text-white'>Case Studies / IT Services</p>
      </div>
      {/* <Scrolltextanimation text="TechMapperz offers software development, web design, mobile app development." /> */}
      <div className='bg-gray-800 h-auto flex px-16 justify-center items-center sm:flex-col sm:px-0'>
        <div className='w-[90%] m-auto'>
          <div className='w-[75%]  m-auto flex justify-around mt-[50px] mb-[30px]  border-t-[3px] border-b-[3px] text-white'>
            {['All', 'IT', 'GIS'].map((category) => (
              <p
                key={category}
                className={`cursor-pointer py-2  hover:text-red-500 ${filter === category ? 'font-bold text-red-500' : 'text-white'}`}
                onClick={() => handleFilterChange(category)}
              >
                {category === 'IT' ? 'IT Case Studies' : category === 'GIS' ? 'GIS Case Studies' : 'All'}
              </p>
            ))}
          </div>
          {/* <h1 className='font-bold text-2xl text-white w-full flex justify-center'>Robust, functional & cost effective website design services for your business</h1> */}
          <CaseStudyCard filter={filter} />
        </div>
      </div>
    </div>
    );
}

export default Casestudies;
