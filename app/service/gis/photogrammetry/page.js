import Image from 'next/image';
import GIS_Survey from '@/public/Photos/Contour_Network.png';
import Photogrammetry1 from '@/public/Photos/photogrammetry_service_1.png';
import Photogrammetry2 from '@/public/Photos/photogrammetry_service_2.png';
import Link from 'next/link';
import ScrollToTop from '@/app/_Components/ScrollToTop';
import { FaArrowRightLong } from "react-icons/fa6";

export const metadata = {
    title: "Techmapperz Photogrammetry Services",
    description: "Techmapperz map your business",
};

const PhotogrammetryServices = () => {
    return (
        <div className="bg-gray-900 text-white">
            <ScrollToTop />

            <section className="h-96 max-sm:h-[250px] w-full flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url("/Photos/banner_3.jpg")` }}>
                <h1 className="text-4xl max-sm:text-2xl leading-tight">Photogrammetry Services</h1>
                <p className="text-xl max-sm:text-[16px] mt-4">
                    <Link href="/">Home</Link> / <Link href="/service">Services</Link> / Photogrammetry Services
                </p>
            </section>

            <section className="w-full bg-black py-8 px-[50px] max-sm:px-[10px]">
                <div className="flex flex-col w-full mb-8">
                    <p className="text-[18px] leading-7 text-center  max-sm:text-[16px] max-sm:text-left mb-6">
                        Photogrammetry is the process to obtain dependable information and measurements of physical objects from photographs <br />
                        and use them for the development of maps, drawings, or 3D models of terrains. Aerial images require pre- and <br />
                        post-processing using Photogrammetry before they can be used to extract valuable geo-data. <br />
                        Techmapperz offers the following Photogrammetry services:<br />
                    </p>
                </div>
                <div className="py-8">
                    <div className="flex flex-col sm:flex-row gap-12">
                        <Image src={Photogrammetry1} alt="Aerial Triangulation and Ortho Photo Generation" className="w-[40%] object-contain max-sm:w-[90vw] max-sm:ml-0" />
                        <div className="flex flex-col gap-2 w-full sm:w-1/2">
                        <h1 className="text-2xl max-sm:text-xl font-semibold mb-4">Aerial Triangulation & Ortho Photo generation</h1>
                            <p className="text-[18px] max-sm:text-[16px] leading-7">
                                Aerial Triangulation in Photogrammetry is a method of determining and calculating 3D object coordinates by photogrammetric means, by using photographs exposed from different positions, covering the same object. We follow a highly automated aerial triangulation method that minimizes the manual intervention and increases accuracy towards a combination of point selection, point measurement, point transfer, and block adjustment in a single process.
                            </p>
                            <button
                                    className='py-[10px] mt-[100px] max-sm:mt-2 px-[15px] w-fit rounded-sm'
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

                <div className="w-full py-8  bg-cover bg-center" >
                    <div className="flex flex-col max-sm:flex-col-reverse sm:flex-row gap-12 max-sm:gap-2">
                        <div className="flex flex-col gap-4 w-full sm:w-1/2 p-8 max-sm:px-2">
                            <h1 className="text-2xl max-sm:text-xl font-semibold mb-4">Digital Terrain model & 3D Visualization</h1>
                            <p className="hidden sm:block text-[18px]  leading-7">
                                A DTM (Digital Terrain Models) is a highly enhanced and filtered topographic model of the bare earth where vegetation, buildings, and other man-made components are removed digitally – leaving just the underlying terrain for specialized applications such as 3D modeling, volumetric calculations, and power line surveys. DTMs are typically created through photogrammetry and also use LiDAR, which measures reflected light that bounces off the ground and back to the sensor to obtain the elevation of the Earth’s surface. We use sophisticated post-processing tools and methods to detect errors and anomalies in DTM. The final delivery is in a client-specific format. Common uses of models include:
                            </p>
                            <ul className="list-disc pl-6 text-lg leading-7 text-blue-400 max-sm:text-[16px]">
                                <li><span className='text-white'>Extracting terrain contour </span></li>
                                <li><span className='text-white'>Creation of relief maps </span></li>
                                <li><span className='text-white'>3D visualizations of the terrain </span></li>
                                <li><span className='text-white'>Terrain analysis </span></li>
                                <li><span className='text-white'>Geomorphology and physical geography of the terrain </span></li>
                            </ul>
                            <button
                                    className='py-[10px] mt-[10px] px-[15px] w-fit rounded-sm'
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
                        <Image src={Photogrammetry2} alt="Digital Terrain Model and 3D Visualization" className="w-[60%]  mt-[-120px] max-sm:w-[90vw] max-sm:mt-0 sm:w-1/2 object-contain" />
                    </div>
                </div>

                <div className="py-8">
                    <div className="flex flex-col  items-center gap-12">
                        <div className="text-center flex flex-col items-center gap-4 w-full sm:w-1/2">
                            <h1 className="text-2xl max-sm:text-xl font-semibold mb-4">Contour Maps</h1>
                            <p className="text-[18px] max-sm:text-[16px] leading-7 text-center">
                                Based on the project requirements, either the DTM or DSM model, with custom contour lines map, giving you an improved understanding of the surface of the image taken by the drone.
                            </p>
                        </div>
                        <Image src={GIS_Survey} alt="Contour Maps" className="w-full sm:w-1/2 object-cover h-80 rounded-md" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PhotogrammetryServices;
