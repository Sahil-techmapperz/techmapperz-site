"use client"
import Career4 from '@/public/Photos/career_idea-4.png'
import Career5 from '@/public/Photos/career_idea-5.png'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRightLong } from "react-icons/fa6";


const Missionvision = () => {

  return (
    <div className="grid grid-cols-2 gap-[5rem] max-sm:gap-2 max-sm:grid-cols-1 justify-center items-center overflow-x-hidden">
      <div className="flex flex-col">
        <Image src={Career4} alt="" className="h-[300px] object-fill mx-auto" />
        <h2 className="text-[26px] max-sm:text-[20px] max-sm:text-center mt-[-10px] text-white">Our Mission</h2>
        <p className="text-[18px] max-sm:text-[14px] leading-[33px] text-justify text-[#A3A3A3] mt-[2rem]">We at Techmapperz, understand that each organisation is different, and so are their challenges, so when we tailor solutions, we ensure that it is as simplified as it can be. Our mission is simplified solutions for complex problems.</p>
        <button
          style={{ boxShadow: "0px 0px 8px 0px #00B0FE" }}
          className="bg-white text-[#00B0FE] mt-2 py-2 px-4 w-max rounded-full"><Link href={"/contact"} className="flex gap-2 justify-center items-center">Know More <FaArrowRightLong /></Link> </button>
      </div>

      <div className="flex flex-col" >
        <Image src={Career5} alt="" className="h-[300px] object-fill mx-auto" />
        <h2 className="text-[26px] mb-[1.5rem] max-sm:text-[20px] max-sm:text-center text-white">Our Vision</h2>
        <p className="text-[18px] max-sm:text-[14px] leading-[33px] text-justify text-[#A3A3A3]">With technology becoming the most important part of our day to day life, we are driven by the commitment to deliver the best of IT solutions, to be a trusted provider of end-to-end IT services and solutions to businesses globally.</p>
        <button
          style={{ boxShadow: "0px 0px 8px 0px #00B0FE" }}
          className="bg-white text-[#00B0FE] mt-2 py-2 px-4 w-max rounded-full"><Link href={"/contact"} className="flex gap-2 justify-center items-center">Know More <FaArrowRightLong /></Link> </button>
      </div>
    </div>
  )
}

export default Missionvision
