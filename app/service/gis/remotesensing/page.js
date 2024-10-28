import Link from 'next/link';
import Geospatial_Mapping from '@/public/Photos/Geospatial_Mapping.png';
import Geo_health from '@/public/Photos/Geo_health.png';
import RemoteSence1 from '@/public/Photos/remote_sensing_img_1.png';
import RemoteSence2 from '@/public/Photos/remote_sensing_img_2.png';
import Image from 'next/image';
import ScrollToTop from '@/app/_Components/ScrollToTop';
import { FaArrowRightLong } from "react-icons/fa6";

export const metadata = {
    title: "Techmapperz Remote Sensing",
    description: "Techmapperz map your business",
};

const RemoteSensing = () => {
    return (
        <div className="bg-black overflow-hidden text-white">
            <ScrollToTop />
            <div className="h-96 max-sm:h-[250px] w-full flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url("/Photos/banner_3.jpg")` }}>
                <h1 className="text-4xl max-sm:text-2xl">Remote Sensing Services</h1>
                <p className="text-xl max-sm:text-[16px] mt-4">
                    <Link href="/">Home</Link> / <Link href="/service">Services</Link> / Remote Sensing Services
                </p>
            </div>
            <div className="w-full bg-black">
                <div className="p-8 lg:px-20">
                    <p className="text-white text-[18px] max-sm:text-[16px] max-sm:text-justify text-center">
                        Measuring the physical characteristics of an area by measuring it's reflected and emitted radiation from satellite or <br />
                        aircraft is Remote sensing, this help researchers "sense" things about the Earth. Techmapperz has extensive <br />
                        expertise in Satellite Image Processing & Interpretation. Various Remote Sensing services <br />
                        offered by Techmapperz are: <br />
                    </p>

                    <div className="mt-8 flex flex-col space-y-8">
                        <div className="flex flex-col  md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                            <div className="md:w-1/2 m-auto">
                                <Image src={RemoteSence1} alt="" className="w-[80%] mb-4 ml-[80px] max-sm:w-[90vw] max-sm:ml-0" />
                            </div>
                            <div className="md:w-1/2 relative">
                                <h1 className="text-2xl max-sm:text-xl font-semibold mb-4">Image Processing</h1>
                                <p className="text-[18px] max-sm:text-[16px] max-sm:text-justify mb-8">
                                    Most remote sensing data are recorded in the digital format in today's world of advanced technology, almost all image interpretation and analysis involves some element of digital processing. It involves various processes to enhance the image, we at Techmapperz use some of the best software and hardware available commercially to process high-quality images for commercial use.
                                </p>
                                <ul className='flex flex-col max-sm:text-[16px] gap-2 my-6 font-semibold list-disc ml-6'>
                                    <li>Topographical Mapping</li>
                                    <li>Utility Mapping</li>
                                    <li>Cadastral Mapping</li>
                                    <li>Cadastral Mapping</li>
                                    <li>Parcel Mapping</li>
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
                        <div className="flex flex-col max-sm:flex-col-reverse md:flex-row md:space-y-0 md:space-x-4 bg-cover bg-center p-8 max-sm:px-0" >
                            <div className="md:w-1/2 relative">
                                <h1 className="text-2xl max-sm:text-xl font-semibold mb-4">Land Use / Land Cover Mapping</h1>
                                <p className="text-[18px] max-sm:text-[16px] text-justify mb-8">
                                    Land use and land cover may sound the same but there is a slight difference between them. Land cover refers to the surface cover on the ground like vegetation, urban infrastructure, water, bare soil, etc. whereas Land use refers to the purpose the land serves, for example, recreation, wildlife habitat, or agriculture. Land use and Land cover mapping play a significant role in economic development. It is required for a better understanding and use of land in urban and rural areas.
                                </p>
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
                            <div className="md:w-1/2 flex justify-end">
                                <Image src={RemoteSence2} alt="" className="w-[80%] mb-4 ml-[80px] max-sm:w-[90vw] max-sm:ml-0" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center p-8 bg-gray-800">
                    <h1 className="text-2xl max-sm:text-xl max-sm:text-center font-semibold mb-8">Techmapperz's Remote sensing services include</h1>
                    <div className="flex flex-col max-sm:text-[16px] md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <div className="w-80 text-left">
                            <ul className="list-disc space-y-4">
                                <li>
                                    <p>Change Detection Mapping & Analysis</p>
                                </li>
                                <li>
                                    <p>Slope aspect analysis</p>
                                </li>
                                <li>
                                    <p>Coastal ecosystem management</p>
                                </li>
                                <li>
                                    <p>Feature extraction and Digital terrain and surface modelling etc.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="w-80 text-left">
                            <ul className="list-disc space-y-4">
                                <li>
                                    <p>Forest Mapping</p>
                                </li>
                                <li>
                                    <p>Forest Fire Mapping</p>
                                </li>
                                <li>
                                    <p>Agriculture Crop acreage estimation and Crop yield estimation</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RemoteSensing;
