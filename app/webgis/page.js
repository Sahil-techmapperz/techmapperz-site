import Image from 'next/image';
import Link from 'next/link';
import WebGis1 from '@/public/Photos/WebGis1.png';
import WebGis2 from '@/public/Photos/WebGis2.png';
import ScrollToTop from '../_Components/ScrollToTop';

export const metadata = {
    title: "Techmapperz Web GIS",
    description: "Techmapperz map your business",
};

const WebGIS = () => {
    return (
        <div className="bg-gray-900 text-white">
            <ScrollToTop />
            <div className="flex flex-col justify-center items-center h-96 bg-cover bg-center" style={{ backgroundImage: 'url("/Photos/banner_3.jpg")' }}>
                <h1 className="text-6xl font-bold">Web GIS Services</h1>
                <p className="text-xl mt-4">
                    <Link href="/">Home</Link> / <Link href="/service">Services</Link> / Web GIS Services
                </p>
            </div>
            <div className="bg-gray-900">
                <div className="container mx-auto py-10 px-5 md:px-20">
                    <p className="text-justify mb-8">
                        WebGIS is an advanced form of Geospatial Information System (most commonly known as Geographic Information System) this is available on the web platform. This system comprises of computer hardware, software and applications that capture, edit, analyse, manipulate and visualize geo-referenced data. Geospatial Intelligence maps provide a new prototype for how people everywhere access and use geographic information to take significant decisions, plan and execute operations. People use GIS maps on their desktops, tablets, and smartphones to perform a sophisticated range of activities.
                    </p>
                    <p className="text-justify mb-8 md:hidden">
                        WebGIS is an advanced form of Geospatial Information System. This is available on the web platform. This system comprises of computer hardware, software and applications that capture, edit, analyse, manipulate and visualize geo-referenced data. Geospatial maps provide a new prototype for how people everywhere access and use geographic information to take significant decisions, plan and execute operations. People use GIS maps on their desktops, tablets, and smartphones to perform a sophisticated range of activities.
                    </p>
                    <div className="grid gap-8">
                        <div className="flex flex-col justify-center items-center md:flex-row gap-8">
                            <div className="md:w-1/2">
                                <h1 className="text-4xl font-semibold mb-4">Geospatial programming & Web Map Development</h1>
                                <Image src={WebGis1} alt="" className="w-full h-auto mb-4" />
                            </div>
                            <div className="md:w-1/2 relative">
                                <p className="mb-8">
                                    Geographic Information System (GIS) has the potential to go beyond mapping. GIS offers a diverse set of analytical functions.
                                </p>
                                <ul className="list-disc ml-5 mb-8 text-blue-500">
                                    <li className="mb-2"> <span className='text-white'> Assessing optimal driving path </span></li>
                                    <li className="mb-2"> <span className='text-white'> Planning projects </span></li>
                                    <li className="mb-2"> <span className='text-white'> Forest mapping </span></li>
                                    <li className="mb-2"> <span className='text-white'> Flood management </span></li>
                                    <li className="mb-2"> <span className='text-white'> Location: specific advertising </span></li>
                                    <li className="mb-2"> <span className='text-white'> Discovering the nearest ATM, restaurant, shops and hotels etc. </span></li>
                                </ul>
                                <div className='flex mt-[15px] pb-4'>
                                    <div className='flex absolute'>
                                        <div className='bg-blue-500 w-12 h-12 rounded-full'></div>
                                        <button className='text-white text-[26px] font-bold relative ml-[-25px]'>
                                            <Link href="/contact">Know More</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center md:flex-row gap-8 bg-cover bg-center" style={{ backgroundImage: 'url("/Photos/banner_4.png")' }}>
                            <div className="md:w-1/2">
                                <Image src={WebGis2} alt="" className="w-full h-auto mb-4" />
                            </div>
                            <div className="md:w-1/2 relative">
                                <p className="mb-8">
                                    Geographic Information System (GIS) has the potential to go beyond mapping. GIS offers a diverse set of analytical functions.
                                </p>
                                <ul className="list-disc ml-5 mb-8 text-blue-500">
                                    <li className="mb-2"><span className='text-white'> Web GIS </span></li>
                                    <li className="mb-2"><span className='text-white'> Mobile GIS </span></li>
                                    <li className="mb-2"><span className='text-white'> GIS Enable Dashboard development </span></li>
                                    <li className="mb-2"><span className='text-white'> Geo-Server </span></li>
                                </ul>
                                <div className='flex mt-[15px] pb-4'>
                                    <div className='flex absolute'>
                                        <div className='bg-blue-500 w-12 h-12 rounded-full'></div>
                                        <button className='text-white text-[26px] font-bold relative ml-[-25px]'>
                                            <Link href="/contact">Know More</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebGIS;

