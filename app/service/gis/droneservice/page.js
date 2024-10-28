import Link from 'next/link';
import Image from 'next/image';
import ScrollToTop from '@/app/_Components/ScrollToTop';
import Drone_Service1 from '@/public/Photos/drone_service_1.png';
import Drone_Service2 from '@/public/Photos/drone_service_2.png';
import Drone_Service3 from '@/public/Photos/drone_service_3.png';
// import Drone_Service4 from '@/public/Photos/DroneService4.png';
import { FaArrowRightLong } from "react-icons/fa6";

export const metadata = {
    title: "Techmapperz Drone Service",
    description: "Techmapperz map your business",
};

const DroneService = () => {
    return (
        <div className="bg-black overflow-hidden text-white">
            <ScrollToTop />
            <section className="h-96 max-sm:h-[250px] w-full flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url("/Photos/banner_3.jpg")` }}>
                <h1 className="text-4xl max-sm:text-2xl">Drone Services</h1>
                <p className="text-xl max-sm:text-[18px]">
                    <Link href="/">Home</Link> / <Link href="/service">Services</Link> / Drone Services
                </p>
            </section>

            <section className="w-full max-sm:px-4 py-8 px-[50px]  bg-black relative overflow-hidden">
                <div className="flex flex-col">
                    {/* <p className="text-[18px] font-normal text-center leading-7 tracking-wide text-gray-300">
                        Techmapperz has expertise in cutting-edge drone technology, and high-quality data processing techniques to provide <br />
                        spatial services for a range of requirements. Since drones can provide current and high-quality data at low <br />
                        costs they becoming used more frequently for the collection of data. Our drone technology can <br />
                        capture high resolution orthoimagery, video and elevation data with the use of various <br />
                        cameras and sensors. Techmapperz can capture multispectral imagery (NDVI), <br />
                        thermal imagery and video and precision LiDAR imagery on a <br />
                        substantial high level with additional payloads.<br />
                    </p> */}

                    <p className="text-[18px] max-sm:text-[16px] text-center font-normal leading-7 tracking-wide text-gray-300">
                        Techmapperz specializes in advanced drone technology and high-quality data processing for spatial services. Drones provide accurate, up-to-date data at low costs, making them a popular choice for data collection. Our drones capture high-resolution orthoimagery, video, and elevation data using various cameras and sensors. We also offer multispectral (NDVI), thermal imagery, video, and precise LiDAR imagery with additional payloads for enhanced data accuracy.
                    </p>
                </div>
                <h1 className="text-[100px] font-bold absolute top-8 left-8 opacity-10 text-gray-300">Drone</h1>
                <div className="py-8 relative">
                    <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-10">
                        <div className="flex flex-col justify-center items-center mt-[2rem]">
                            <Image src={Drone_Service1} alt="Geospatial Mapping" className="w-[80%] max-sm:w-[90vw] object-contain mb-4" />

                        </div>
                        {/* <Image src={Drone_Service4} alt="Data Acquisition & Processing" className="object-cover absolute right-10 top-[3rem] mb-4" /> */}
                        <div className="relative">
                            <div className="flex flex-col gap-4">
                                <h1 className="text-2xl max-sm:text-xl font-bold mb-4">Data Acquisition & Processing</h1>
                                <p className="text-[18px] max-sm:text-[16px] leading-7 text-justify">
                                    Our experienced and skilled pilots and high configured Drone allow us to acq-
                                    uire Drone data faster than any other traditional methods. We have a team of
                                    skilled GIS analysts for Drone data processing and analysis. We use high pow-
                                    er processing workstations and sophisticated post-processing tools and met-
                                    hods to process the high-resolution drone dataset. We can deliver Seamless
                                    orthophotos, Topographic survey, DTM, DSM, and contour maps as per your
                                    requirement within short time intervals
                                </p>
                                <ul className='text-[18px] max-sm:text-[16px] font-semibold list-disc ml-5'>
                                    <li>Topographical Mapping</li>
                                    <li>Utility Mapping</li>
                                    <li>Cadastral Mapping</li>
                                    <li>Navigation Mapping</li>
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
                    </div>

                    <div className="py-8">
                        <div className="flex flex-col max-sm:flex-col-reverse md:flex-row justify-center items-center gap-20">
                            <div className="relative md:w-1/2">
                                <h1 className="text-2xl max-sm:text-xl font-bold mb-4">2D/3D Feature Extraction</h1>
                                <p className="text-[18px] max-sm:text-[16px] leading-7 text-justify mb-4">
                                    Techmapperz uses drone survey with 2D & 3D feature extraction to
                                    assist you in survey and planning. We provide you Site Monitoring with <br />
                                    a comprehensive base map and topography data analysis to manage <br />
                                    complex issues associated with large infrastructure projects and land <br />
                                    record management. Our photogrammetry experts can even support <br />
                                    you in any remote sensing projects or drone data processing.<br />
                                </p>
                                <div className='flex max-sm:flex-col max-sm:text-[16px] max-sm:gap-1 gap-8 ml-5'>
                                    <ul className="list-disc font-semibold text-[18px]">
                                        <li>High-Resolution Base Map.</li>
                                        <li>Volumetric Calculation.</li>
                                        <li>Multiple GIS layers.</li>
                                        <li>KMZ,KML,SHP,DWG files</li>
                                    </ul>

                                    <ul className="list-disc font-semibold text-[18px]">
                                        <li>Cadastral data integration.</li>
                                        <li>Spot Level</li>
                                        <li>3D Feature Extraction.</li>
                                        <li>Cross Sections</li>
                                    </ul>
                                </div>
                                <button
                                    className='py-[10px] mt-4 px-[15px] w-fit rounded-sm'
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
                                <Image src={Drone_Service2} alt="2D/3D Feature Extraction" className="w-[80%] max-sm:w-[90vw] object-contain mt-4 md:mt-0" />
                            </div>
                        </div>
                    </div>

                    <div className="py-8 bg-cover bg-center relative" >
                        <div className="flex flex-col md:flex-row justify-center items-center gap-20">
                            <div className="md:w-1/2">
                                <Image src={Drone_Service3} alt="3D Modelling" className="w-[80%] max-sm:w-[90vw] object-contain md:mt-0" />
                            </div>
                            {/* <Image src={Drone_Service4} alt="Data Acquisition & Processing" className="object-cover absolute right-10 top-[6rem] mb-4" /> */}
                            <div className="md:w-1/2">
                                <h1 className="text-2xl max-sm:text-xl font-bold mb-4">3D Modelling</h1>
                                <p className="text-[18px] max-sm:text-[16px] leading-7 text-justify mb-4">
                                    3D Modelling uses aerial photogrammetry to generate a 3D model. It uses a series of photographs taken by a drone to measure everything in the 3D model such as volumetric calculation, distance measurement and etc. 3D modelling can visualize the building before they start the projects, helping us to capture details, intricacies, and beauty of a structure not easily seen from the ground level. We are a drone specialist with a team to provide solutions to our clients. We can also provide 2D and 3D mapping services to the clients.
                                </p>
                                <button
                                    className='py-[10px] mt-4 px-[15px] w-fit rounded-sm'
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
                    </div>
                </div>
            </section>
        </div>
    );
}

export default DroneService;
