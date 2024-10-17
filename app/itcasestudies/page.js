"use client";
import ScrollToTop from '../_Components/ScrollToTop';
import { useState} from 'react';
import Scrolltextanimation from '../_Components/Scrolltextanimation';
import CashstudieCard from '../_Components/CaseStudyCard';




function ItCaseStudies() {
  const [filter, setFilter] = useState('All');

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  return (
    <div className='font-poppins' id='CaseStudiesITServices'>
      <ScrollToTop />
      <div className='flex flex-col h-[350px] text-center items-center justify-center bg-cover bg-center' style={{ backgroundImage: 'url("/Photos/Rectangle41.png")' }}>
        <p className='text-white mt-[66px] mb-[66px] text-[66px] font-bold sm:text-[50px]'>IT Services</p>
        <p className='text-white'>Case Studies / IT Services</p>
      </div>
      <Scrolltextanimation text="TechMapperz offers software development, web design, mobile app development." />
      <div className='bg-gray-800 h-auto flex px-16 justify-center items-center sm:flex-col sm:px-0'>
        <div className='w-[90%] m-auto'>
          <div className='w-[75%] py-4 m-auto flex justify-around mt-[70px] mb-[50px] border-t-[3px] border-b-[3px] text-white'>
            {['All', 'IT', 'GIS'].map((category) => (
              <p
                key={category}
                className={`cursor-pointer ${filter === category ? 'border-b-4 border-blue-500 text-blue-500' : 'text-white'}`}
                onClick={() => handleFilterChange(category)}
              >
                {category === 'IT' ? 'IT Case Studies' : category === 'GIS' ? 'GIS Case Studies' : 'All'}
              </p>
            ))}
          </div>
          <h1 className='font-bold text-2xl text-white w-full flex justify-center'>Robust, cost-effective website design for your business.</h1>
          <CashstudieCard filter={filter} />
        </div>
      </div>
    </div>
  );
}

export default ItCaseStudies;
