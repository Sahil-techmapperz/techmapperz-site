import Link from 'next/link';
import Image from 'next/image';
import ScrollToTop from '../_Components/ScrollToTop';
import Drone_Service1 from '@/public/Photos/DroneService1.png';
import Drone_Service2 from '@/public/Photos/DroneService2.png';
import Drone_Service3 from '@/public/Photos/DroneService3.png';
import Drone_Service4 from '@/public/Photos/DroneService4.png';

export const metadata = {
    title: "Techmapperz Drone Service",
    description: "Techmapperz map your business",
};

const DroneService = () => {
    return (
        <div className="bg-black overflow-hidden text-white">
            <ScrollToTop />
            <section className="h-96 w-full flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url("/Photos/banner_3.jpg")` }}>
                <h1 className="text-6xl">Drone Services</h1>
                <p className="text-xl">
                    <Link href="/">Home</Link> / <Link href="/service">Services</Link> / Drone Services
                </p>
            </section>

            <section className="w-full p-8  bg-black relative overflow-hidden">
                <div className="flex flex-col">
                    <p className="text-lg font-normal leading-7 tracking-wide text-justify text-gray-300">
                        Techmapperz has expertise in cutting-edge drone technology, and high-quality data processing techniques to provide spatial services for a range of requirements. Since drones can provide current and high-quality data at low costs they are becoming used more frequently for the collection of data. Our drone technology can capture high-resolution orthoimagery, video and elevation data with the use of various cameras and sensors. Techmapperz can capture multispectral imagery (NDVI), thermal imagery and video and precision LiDAR imagery on a substantially high level with additional payloads.
                    </p>
                </div>
                <h1 className="text-[100px] font-bold absolute top-8 left-8 opacity-10 text-gray-300">Drone</h1>
                <div className="py-8 relative">
                    <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-10">
                        <div className="flex flex-col justify-center items-center mt-[2rem]">
                            <h1 className="text-3xl font-bold mb-4">Data Acquisition & Processing</h1>
                            <Image src={Drone_Service1} alt="Geospatial Mapping" className="w-full object-contain mb-4" />
                            
                        </div>
                        <Image src={Drone_Service4} alt="Data Acquisition & Processing" className="object-cover absolute right-10 top-[6rem] mb-4" />
                        <div className="relative">
                            <div className="flex flex-col gap-4">
                                <p className="text-lg leading-7 text-justify">
                                    Our experienced and skilled pilots and high configured Drone allow us to acquire Drone data faster than any other traditional methods. We have a team of skilled GIS analysts for Drone data processing and analysis. We use high-power processing workstations and sophisticated post-processing tools and methods to process the high-resolution drone dataset. We can deliver Seamless orthophotos, Topographic survey, DTM, DSM, and contour maps as per your requirement within short time intervals.
                                </p>
                                <p className="text-lg leading-7 text-justify">
                                    Eventually, we do different types of analysis like volumetric analysis, haul road management, cut fill estimation, 3D feature extraction, and base map generation for the various sectors such as urban planning, land record digitization, mining, smart city etc. Our expertise in GIS and UAV data handling team can also help you to integrate drone data with cadastral maps, topographical maps, satellite imagery and report generation.
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
                    </div>

                    <div className="py-8">
                        <div className="flex flex-col md:flex-row justify-center items-center gap-20">
                            <div className="relative md:w-1/2">
                                <h1 className="text-3xl font-bold mb-4">2D/3D Feature Extraction</h1>
                                <p className="text-lg leading-7 text-justify mb-4">
                                    Techmapperz uses drone survey with 2D & 3D feature extraction to assist you in survey and planning. We provide you Site Monitoring with a comprehensive base map and topography data analysis to manage complex issues associated with large infrastructure projects and land record management. Our photogrammetry experts can even support you in any remote sensing projects or drone data processing.
                                </p>
                                <p className="text-lg leading-7 text-justify mb-4">
                                    2D/3D Feature Extraction can be used in:
                                </p>
                                <ul className="list-disc pl-6 mb-4">
                                    <li>High-Resolution Base Map.</li>
                                    <li>Volumetric Calculation.</li>
                                    <li>Multiple GIS layers.</li>
                                    <li>KMZ,KML,SHP,DWG files</li>
                                    <li>Cadastral data integration.</li>
                                    <li>Spot Level</li>
                                    <li>3D Feature Extraction.</li>
                                    <li>Cross Sections</li>
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
                            <div className="md:w-1/2">
                                <Image src={Drone_Service2} alt="2D/3D Feature Extraction" className="w-full object-contain mt-4 md:mt-0" />
                            </div>
                        </div>
                    </div>

                    <div className="py-8 bg-cover bg-center relative" style={{ backgroundImage: `url("/Photos/banner_3.jpg")` }}>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-20">
                            <div className="md:w-1/2">
                                <Image src={Drone_Service3} alt="3D Modelling" className="w-full object-contain mt-4 md:mt-0" />
                            </div>
                            <Image src={Drone_Service4} alt="Data Acquisition & Processing" className="object-cover absolute right-10 top-[6rem] mb-4" />
                            <div className="md:w-1/2">
                                <h1 className="text-3xl font-bold mb-4">3D Modelling</h1>
                                <p className="text-lg leading-7 text-justify mb-4">
                                    3D Modelling uses aerial photogrammetry to generate a 3D model. It uses a series of photographs taken by a drone to measure everything in the 3D model such as volumetric calculation, distance measurement and etc. 3D modelling can visualize the building before they start the projects, helping us to capture details, intricacies, and beauty of a structure not easily seen from the ground level. We are a drone specialist with a team to provide solutions to our clients. We can also provide 2D and 3D mapping services to the clients.
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
                    </div>
                </div>
            </section>
        </div>
    );
}

export default DroneService;
