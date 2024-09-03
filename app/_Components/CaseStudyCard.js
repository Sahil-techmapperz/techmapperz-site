"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const CaseStudyCard = ({ filter:category }) => {
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`/api/casestudies/${category}`);
            const data = await res.json();
            setFilteredData(data);
        }
        
        fetchData();
    }, [category]); // Re-fetch when category changes

    return (
      <div className='grid grid-cols-3 gap-4 max-sm:grid-cols-1 mt-2 mb-8'>
      {filteredData.map((data, index) => (
        <div
          key={`${data.category}-${data.name}-${index}`} // Unique key
          className='case-study-container rounded-md border-[5px] border-[#FFFFFF]'
          style={{ width: '100%', height: '350px' }} // Set a fixed size for the container
        >
          <div className='relative h-[100%] w-full '>
            <Image
              src={data.image}
              alt={`${data.name} image`}
              layout="fill" // This ensures the image fills the container
              objectFit="cover" // This ensures the image covers the container area
              className="rounded-md"
            />
          </div>
          <div className='case-study-info h-[100%] pt-2 px-4 overflow-x-auto'>
            <p className='font-bold text-2xl mb-2'>
              <Link href={`/casestudies/${data.link}`}>{data.name}</Link>
            </p>
            <ul className='list-decimal ml-[15px]'>
              {data.details.map((detail, index) => <li  key={index}>{detail}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </div>
    
    );
};

export default CaseStudyCard;

