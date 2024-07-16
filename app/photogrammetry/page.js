import Image from 'next/image';
import GIS_Survey from '@/public/Photos/GIS_Suvey.png';
import Photogrammetry1 from '@/public/Photos/Photogametry1.png';
import Photogrammetry2 from '@/public/Photos/Photogametry2.png';
import Link from 'next/link';
import ScrollToTop from '../_Components/ScrollToTop';

export const metadata = {
    title: "Techmapperz Photogrammetry Services",
    description: "Techmapperz map your business",
};

const PhotogrammetryServices = () => {
    return (
        <div className="bg-gray-900 text-white">
            <ScrollToTop />

            <section className="h-96 w-full flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url("/Photos/banner_3.jpg")` }}>
                <h1 className="text-6xl leading-tight">Photogrammetry Services</h1>
                <p className="text-xl mt-4">
                    <Link href="/">Home</Link> / <Link href="/service">Services</Link> / Photogrammetry Services
                </p>
            </section>

            <section className="w-full bg-gray-900 py-8 px-20">
                <div className="flex flex-col w-full mb-8">
                    <p className="hidden sm:block text-lg leading-7 mb-6">
                        Photogrammetry is the process to obtain dependable information and measurements of physical objects from photographs and use them for the development of maps, drawings, or 3D models of terrains. Aerial images require pre- and post-processing using Photogrammetry before they can be used to extract valuable geo-data. Techmapperz offers the following Photogrammetry services:
                    </p>
                    <p className="block sm:hidden text-lg leading-7 mb-6">
                        Photogrammetry is the process to obtain dependable information from photographs and use them for the development of maps, drawings, or 3D models of terrains. Aerial images require pre and post-processing using Photogrammetry before they can be used to extract valuable geo-data. Techmapperz offers the following Photogrammetry services:
                    </p>
                </div>
                <div className="py-8">
                    <h1 className="text-3xl font-semibold mb-4">Aerial Triangulation & Ortho Photo generation</h1>
                    <div className="flex flex-col sm:flex-row items-center gap-12">
                        <Image src={Photogrammetry1} alt="Aerial Triangulation and Ortho Photo Generation" className="w-full sm:w-1/2 object-contain" />
                        <div className="flex flex-col gap-4 w-full sm:w-1/2">
                            <p className="text-lg leading-7">
                                Aerial Triangulation in Photogrammetry is a method of determining and calculating 3D object coordinates by photogrammetric means, by using photographs exposed from different positions, covering the same object. We follow a highly automated aerial triangulation method that minimizes the manual intervention and increases accuracy towards a combination of point selection, point measurement, point transfer, and block adjustment in a single process.
                            </p>
                            <Link href="/contact" className="inline-block">
                                <div className="flex relative items-center gap-2 text-lg font-semibold">
                                    <div className="w-12 h-12 bg-blue-600 rounded-full"></div>
                                    <h2 className='absolute top-2 left-4'>Know More</h2>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="w-full py-8 bg-cover bg-center" style={{ backgroundImage: `url("/Photos/banner_4.png")` }}>
                    <div className="flex flex-col sm:flex-row items-center gap-12">
                        <div className="flex flex-col gap-4 w-full sm:w-1/2 p-8">
                            <h1 className="text-3xl font-semibold mb-4">Digital Terrain model & 3D Visualization</h1>
                            <p className="hidden sm:block text-lg leading-7">
                                A DTM (Digital Terrain Models) is a highly enhanced and filtered topographic model of the bare earth where vegetation, buildings, and other man-made components are removed digitally – leaving just the underlying terrain for specialized applications such as 3D modeling, volumetric calculations, and power line surveys. DTMs are typically created through photogrammetry and also use LiDAR, which measures reflected light that bounces off the ground and back to the sensor to obtain the elevation of the Earth’s surface. We use sophisticated post-processing tools and methods to detect errors and anomalies in DTM. The final delivery is in a client-specific format. Common uses of models include:
                            </p>
                            <p className="block sm:hidden text-lg leading-7">
                                A DTM is a highly enhanced and filtered topographic model of the bare earth where vegetation, buildings, and other man-made components are removed digitally - leaving just the underlying terrain for specialized applications such as 3D modeling, volumetric calculations, and power line surveys. DTMs are typically created through photogrammetry and also use LiDAR. We use post-processing tools and methods to detect errors and anomalies in DTM. The final delivery is in a client-specific format. Common uses of models include:
                            </p>
                            <ul className="list-disc pl-6 text-lg leading-7 text-blue-400">
                                <li><span className='text-white'>Extracting terrain contour </span></li>
                                <li><span className='text-white'>Creation of relief maps </span></li>
                                <li><span className='text-white'>3D visualizations of the terrain </span></li>
                                <li><span className='text-white'>Terrain analysis </span></li>
                                <li><span className='text-white'>Geomorphology and physical geography of the terrain </span></li>
                            </ul>
                            <Link href="/contact" className="inline-block">
                                <div className="flex relative items-center gap-2 text-lg font-semibold">
                                    <div className="w-12 h-12 bg-blue-600 rounded-full"></div>
                                    <h2 className='absolute top-2 left-4'>Know More</h2>
                                </div>
                            </Link>
                        </div>
                        <Image src={Photogrammetry2} alt="Digital Terrain Model and 3D Visualization" className="w-full sm:w-1/2 object-contain" />
                    </div>
                </div>

                <div className="py-8">
                    <div className="flex flex-col  items-center gap-12">
                        <div className="text-center flex flex-col items-center gap-4 w-full sm:w-1/2">
                            <h1 className="text-3xl font-semibold mb-4">Contour Maps</h1>
                            <p className="text-lg leading-7 text-center">
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
