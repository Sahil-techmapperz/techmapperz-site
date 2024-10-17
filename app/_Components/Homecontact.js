'use client'

import Image from "next/image";
import Link from "next/link"
import { FaArrowRightLong } from "react-icons/fa6";
import home_contact_img from "@/public/Photos/home_contact_img.png"

const Homecontact = () => {
    return (
        <div className="bg-gray-800 bg-opacity-75 flex justify-center items-center">
            <div className="relative w-full">
                <div className='w-full'>
                    <img src={"/Photos/Home_contact_banner.png"} alt="Main Banner" className="w-full h-[300px] object-cover" />
                </div>

                <div className="absolute inset-0 flex max-sm:flex-col-reverse justify-between max-sm:px-2 max-sm:justify-center max-sm:items-center px-[30px] py-2">
                    <div className='text-white flex flex-col gap-4 justify-center max-sm:items-center max-sm:gap-0'>
                        <p className='text-4xl max-sm:text-[14px] font-bold'>“ Empowering Your Business with Innovation</p>
                        <p className='text-4xl max-sm:text-[14px] max-sm:ml-0 ml-[30px] font-bold'><span className='text-[#3766BA]'>IT</span> and <span className='text-[#3766BA]'>GIS</span> Solution ”</p>
                        <button
                        style={{boxShadow: "0px 0px 8px 0px #00B0FE"}}
                         className="bg-white text-[#00B0FE] ml-[30px] py-2 px-4 w-max rounded-full"><Link href={"/contact"} className="flex gap-2 justify-center items-center">Contact Us <FaArrowRightLong /></Link> </button>
                    </div>
                    <div>
                        <Image src={home_contact_img} className="max-sm:w-[100px]" alt="home_contact_img"/>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Homecontact
