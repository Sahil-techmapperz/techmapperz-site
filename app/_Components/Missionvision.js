"use client"
import Career4 from '@/public/Photos/career_idea-4.png'
import Career5 from '@/public/Photos/career_idea-5.png'
import Image from 'next/image'
import Link from 'next/link'


const Missionvision = () => {

  return (
    <div className="grid grid-cols-2 gap-[5rem] justify-center items-center overflow-x-hidden">
                    <div className="flex flex-col">
                <Image src={Career4} alt="" className="h-[300px] object-fill mx-auto" />
                <h2 className="text-[26px] mt-[-10px] text-white">Our Mission</h2>
                <p className="text-[18px] leading-[33px] text-justify text-[#A3A3A3] mt-[2rem]">We at Techmapperz, understand that each organisation is different, and so are their challenges, so when we tailor solutions, we ensure that it is as simplified as it can be. Our mission is simplified solutions for complex problems.</p>
                <Link href="/contact">
                <div className="relative h-[40px] w-[120px] cursor-pointer mt-[2rem]">
                    <div className="absolute w-[30px] h-[30px] rounded-full bg-[#396ba9] right-0 "></div>
                    <h2 className="absolute text-[20px] text-white font-bold">Know More</h2>
                  </div>
                </Link>
              </div>

              <div className="flex flex-col" >
                <Image src={Career5} alt="" className="h-[300px] object-fill mx-auto" />
                <h2 className="text-[26px] mb-[1.5rem] text-white">Our Vision</h2>
                <p className="text-[18px] leading-[33px] text-justify text-[#A3A3A3]">With technology becoming the most important part of our day to day life, we are driven by the commitment to deliver the best of IT solutions, to be a trusted provider of end-to-end IT services and solutions to businesses globally.</p>
                <Link href="/contact">
                <div className="relative h-[40px] w-[120px] cursor-pointer mt-[2rem]">
                    <div className="absolute w-[30px] h-[30px] rounded-full bg-[#396ba9] right-0 "></div>
                    <h2 className="absolute text-[20px] text-white font-bold">Know More</h2>
                  </div>
                </Link>
              </div>
    </div>
  )
}

export default Missionvision
