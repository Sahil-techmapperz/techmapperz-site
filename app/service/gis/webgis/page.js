import Image from 'next/image';
import Link from 'next/link';
import WebGis1 from '@/public/Photos/webgis_service_1.png';
import WebGis2 from '@/public/Photos/webgis_service_2.png';
import ScrollToTop from '@/app/_Components/ScrollToTop';
import { FaArrowRightLong } from "react-icons/fa6";

export const metadata = {
    title: "Techmapperz Web GIS",
    description: "Techmapperz map your business",
};

const WebGIS = () => {
    return (
        <div className="bg-gray-900 text-white">
            <ScrollToTop />
            <div className="flex flex-col justify-center items-center h-96 max-sm:h-[250px] bg-cover bg-center" style={{ backgroundImage: 'url("/Photos/banner_3.jpg")' }}>
                <h1 className="text-4xl max-sm:text-2xl font-bold">Web GIS Services</h1>
                <p className="text-[18px] max-sm:text-[16px] mt-4">
                    <Link href="/">Home</Link> / <Link href="/service">Services</Link> / Web GIS Services
                </p>
            </div>
            <div className="bg-black">
                <div className="py-10 px-[50px] max-sm:px-2">
                    {/* <p className="text-center text-[18px] mb-8">
                        WebGIS is an advanced form of Geospatial Information System (most commonly known as Geographic Information System) this <br />
                        is available on the web platform. This system comprises of computer hardware, software and applications that capture, <br />
                        edit, analyse, manipulate and visualize geo-referenced data. Geospatial Intelligence maps provide a new prototype <br />
                        for how people everywhere access and use geographic information to take significant decisions, plan and <br />
                        execute operations. People use GIS maps on their desktops, tablets, and smartphones to perform a <br />
                        sophisticated range of activities.<br />
                    </p> */}

                    <p className="text-center text-[18px] max-sm:text-[16px] mb-8">
                    WebGIS is an advanced form of Geographic Information System (GIS) available on the web. It includes hardware, software, and applications to capture, edit, analyze, and visualize geo-referenced data. Geospatial Intelligence maps offer a new way for users to access and utilize geographic data for decision-making and operations. GIS maps are accessible on desktops, tablets, and smartphones for a variety of tasks.
                    </p>
                    <div className="grid gap-8">
                        <div className="flex flex-col justify-center items-center md:flex-row gap-2">
                            <div className="md:w-1/2 ">
                                <Image src={WebGis1} alt="" className="w-[60%] max-sm:w-[90vw] mx-auto mb-4" />
                            </div>
                            <div className="md:w-1/2 relative">
                                <h1 className="text-2xl max-sm:text-xl font-semibold mb-4">Geospatial programming & Web Map Development</h1>
                                <p className="mb-8 text-[18px] max-sm:text-[16px]">
                                    Geographic Information System (GIS) has the potential to go beyond mapping. GIS offers a diverse set of analytical functions.
                                </p>
                                <ul className="list-disc max-sm:text-[16px] ml-5 text-[18px] font-semibold mb-8 text-blue-500">
                                    <li className="mb-2"> <span className='text-white'> Assessing optimal driving path </span></li>
                                    <li className="mb-2"> <span className='text-white'> Planning projects </span></li>
                                    <li className="mb-2"> <span className='text-white'> Forest mapping </span></li>
                                    <li className="mb-2"> <span className='text-white'> Flood management </span></li>
                                    <li className="mb-2"> <span className='text-white'> Location: specific advertising </span></li>
                                    <li className="mb-2"> <span className='text-white'> Discovering the nearest ATM, restaurant, shops and hotels etc. </span></li>
                                </ul>
                                <button
                                    className='py-[10px] px-[15px] w-fit rounded-sm'
                                    style={{
                                        background: "linear-gradient(90deg, #EC212C 0%, #396BA9 100%)",
                                        border: 'none',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Link
                                        href='/contact'
                                        style={{
                                            color: 'white',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        Know more
                                        <FaArrowRightLong className="inline-block ml-2" />
                                    </Link>
                                </button>
                            </div>
                        </div>
                        <div className="flex max-sm:flex-col-reverse justify-center pl-[120px] max-sm:pl-0  items-center gap-4 w-full" >
                            <div className="md:w-1/2">
                                <p className="mb-8 text-[18px] max-sm:text-[16px]">
                                    Geographic Information System (GIS) has the potential to go beyond mapping. GIS offers a diverse set of analytical functions.
                                </p>
                                <ul className="list-disc ml-5 text-[18px] max-sm:text-[16px] font-semibold  mb-8 text-blue-500">
                                    <li className="mb-2"><span className='text-white'> Web GIS </span></li>
                                    <li className="mb-2"><span className='text-white'> Mobile GIS </span></li>
                                    <li className="mb-2"><span className='text-white'> GIS Enable Dashboard development </span></li>
                                    <li className="mb-2"><span className='text-white'> Geo-Server </span></li>
                                </ul>
                                <button
                                    className='py-[10px] px-[15px] w-fit rounded-sm'
                                    style={{
                                        background: "linear-gradient(90deg, #EC212C 0%, #396BA9 100%)",
                                        border: 'none',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Link
                                        href='/contact'
                                        style={{
                                            color: 'white',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        Know more
                                        <FaArrowRightLong className="inline-block ml-2" />
                                    </Link>
                                </button>
                            </div>

                            <div className="md:w-1/2">
                                <Image src={WebGis2} alt="" className="w-[60%] max-sm:w-[90vw] h-auto mb-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebGIS;

