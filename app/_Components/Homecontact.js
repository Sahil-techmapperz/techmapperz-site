'use client'

import Link from "next/link"
import { FaArrowRightLong } from "react-icons/fa6";

const Homecontact = () => {
    return (
        <div className="bg-gray-800 bg-opacity-75 flex justify-center items-center">
            <div className="relative w-full">
                <div className='w-full'>
                    <img src={"/Photos/Home_contact_banner.png"} alt="Main Banner" className="w-full h-[300px] object-cover" />
                </div>

                <div className="absolute inset-0 flex justify-center items-center text-center">
                    <div className='text-white px-4'>
                        <p className='text-4xl font-bold'>“ Empowering Your Business with Innovation</p>
                        <p className='text-4xl font-bold'><span className='text-[#3766BA]'>IT</span> and <span className='text-[#3766BA]'>GIS</span> Solution ”</p>
                    </div>

                    <button className="bg-white text-black py-2 px-4 absolute w-max rounded-full bottom-4"><Link href={"/contact"} className="flex gap-2 justify-center items-center">Contact Us <FaArrowRightLong/></Link> </button>
                </div>

            </div>
        </div>
    )
}

export default Homecontact
