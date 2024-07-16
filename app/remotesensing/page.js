import Link from 'next/link';
import Geospatial_Mapping from '@/public/Photos/Geospatial_Mapping.png';
import Geo_health from '@/public/Photos/Geo_health.png';
import RemoteSence1 from '@/public/Photos/RemoteSence1.png';
import RemoteSence2 from '@/public/Photos/RemoteSence2.png';
import Image from 'next/image';
import ScrollToTop from '../_Components/ScrollToTop';

export const metadata = {
    title: "Techmapperz Remote Sensing",
    description: "Techmapperz map your business",
};

const RemoteSensing = () => {
    return (
        <div className="bg-black overflow-hidden text-white">
            <ScrollToTop />
            <div className="h-96 w-full flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url("/Photos/banner_3.jpg")` }}>
                <h1 className="text-6xl">Remote Sensing Services</h1>
                <p className="text-xl">
                    <Link href="/">Home</Link> / <Link href="/service">Services</Link> / Remote Sensing Services
                </p>
            </div>
            <div className="w-full bg-black">
                <div className="p-8 lg:px-20">
                    <p className="text-gray-400 text-lg text-justify">
                        Measuring the physical characteristics of an area by measuring its reflected and emitted radiation from satellite or aircraft is Remote sensing. This helps researchers "sense" things about the Earth. Techmapperz has extensive expertise in Satellite Image Processing & Interpretation. Various Remote Sensing services offered by Techmapperz are:
                    </p>

                    <div className="mt-8 flex flex-col space-y-8">
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                            <div className="md:w-1/2">
                                <h1 className="text-3xl font-semibold mb-4">Image Processing</h1>
                                <Image src={RemoteSence1} alt="" className="w-full object-cover mb-4" />
                            </div>
                            <div className="md:w-1/2 relative">
                                <p className="text-lg text-justify mb-8">
                                    Most remote sensing data are recorded in the digital format in today's world of advanced technology, almost all image interpretation and analysis involves some element of digital processing. It involves various processes to enhance the image, we at Techmapperz use some of the best software and hardware available commercially to process high-quality images for commercial use.
                                </p>
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
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 bg-cover bg-center p-8" style={{ backgroundImage: `url("/Photos/banner_3.jpg")` }}>
                            <div className="md:w-1/2 relative">
                                <h1 className="text-3xl font-semibold mb-4">Land Use / Land Cover Mapping</h1>
                                <p className="text-lg text-justify mb-8">
                                    Land use and land cover may sound the same but there is a slight difference between them. Land cover refers to the surface cover on the ground like vegetation, urban infrastructure, water, bare soil, etc. whereas Land use refers to the purpose the land serves, for example, recreation, wildlife habitat, or agriculture. Land use and Land cover mapping play a significant role in economic development. It is required for a better understanding and use of land in urban and rural areas.
                                </p>
                                <div className='flex mt-[15px] pb-4'>
                                    <div className='flex absolute'>
                                        <div className='bg-blue-500 w-12 h-12 rounded-full'></div>
                                        <button className='text-white text-[26px] font-bold relative ml-[-25px]'>
                                            <Link href="/contact">Know More</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <Image src={RemoteSence2} alt="" className="w-full object-contain mt-4 md:mt-0" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center py-8 bg-gray-800">
                    <h1 className="text-3xl font-semibold mb-8">Techmapperz's Remote sensing services include</h1>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
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
