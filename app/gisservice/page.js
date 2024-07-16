// pages/gisServices.js
import Image from 'next/image';
import Link from 'next/link';
import Geospatial_Mapping from '@/public/Photos/Geospatial_Mapping.png';
import Geo_health from '@/public/Photos/Geo_health.png';
import Geogoverence from '@/public/Photos/Geogoverence.png';
import GIS_Suvey from '@/public/Photos/GIS_Suvey.png';
import ScrollToTop from '../_Components/ScrollToTop';

export const metadata = {
  title: "Techmapperz GIS Services",
  description: "Techmapperz map your business",
};

const gisservice = () => {

  return (
    <div className="bg-gray-900 text-white">
        <ScrollToTop/>
      <section className="h-96 flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url("/Photos/banner_1.jpg")' }}>
        <h1 className="text-6xl font-bold">GIS Services</h1>
        <p className="text-xl mt-4">
          <Link href="/">Home</Link> / <Link href="/service">Services</Link> / GIS Services
        </p>
      </section>

      <section className="p-8 lg:p-20">
        <div className="mb-16">
          <p className="text-justify text-gray-400 text-xl">
            GIS (Geographical Information System) is a process that stores, creates, manages, analyses, and displays different types of spatial data. Geospatial services describe objects, events or other features with a location on or near the surface of the earth typically combining coordinates on the earth and the characteristics of the object, event or The location information provided may be static in the short or dynamic (for example, a moving vehicle or pedestrian, the spread of an infectious disease). Techmapperz offers GIS services with an end-to-end solution for spatial data storing, management and analysis to Government and Enterprise sectors through GIS services. Techmapperz uses new-edge technology, deep research and innovation that are implemented by high skilled and experienced GIS analysts to create a simple solutions for a complex problems. The various GIS Data services offered by Techmapperz are:
          </p>
        </div>
        
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Geospatial Mapping</h2>
          <div className="flex flex-col lg:flex-row gap-8">
            <Image src={Geospatial_Mapping} alt="Geospatial Mapping"  className="w-full lg:w-1/3 " />
            <div className="flex flex-col gap-4">
              <p className="text-gray-400 text-xl">
                Geospatial mapping is a type of spatial analysis technique that typically uses software capable of rendering maps processing spatial data, and applying analytical methods to terrestrial or geographic datasets. Techmapperz offers different kinds of GIS mapping Services:
              </p>
              <ul className="list-disc list-inside text-xl flex flex-col gap-4">
                <li>Topographical Mapping</li>
                <li>Utility Mapping</li>
                <li>Cadastral Mapping</li>
                <li>Navigation Mapping</li>
                <li>Parcel Mapping</li>
              </ul>
              <Link href="/contact" className="flex items-center gap-2 mt-4 relative">
                  <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
                  <h2 className="text-2xl font-bold absolute left-3">Know More</h2>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Geo-health</h2>
          <div className="flex flex-col lg:flex-row-reverse gap-8">
            <Image src={Geo_health} alt="Geo-health" width={500} height={350} className="w-full lg:w-1/2" />
            <div className="flex flex-col gap-4">
              <p className="text-gray-400 text-xl">
                GIS plays a very vital role in the modern health sector. A GIS can play an important role in the surveillance, management and analysis of diseases. Techmapperz's GIS-based Health solution will help you to monitor and management of both diseases and health programs. We use the latest software and accurate GIS data to improve your strategic planning, research and evaluation, emergency preparedness and both response and location of health care service too.
              </p>
              <Link href="/contact" className="flex items-center gap-2 mt-4 relative">
                  <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
                  <h2 className="text-2xl font-bold absolute left-3">Know More</h2>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Geo-governance</h2>
          <div className="flex flex-col lg:flex-row gap-8">
            <Image src={Geogoverence} alt="Geo-governance" width={500} height={350} className="w-full lg:w-1/2" />
            <div className="flex flex-col gap-4">
              <p className="text-gray-400 text-xl">
                GIS, a new edge technology, has opened several new prospects for the day-to-day life of civil society. GIS is rapidly becoming a digital revolution for different transformational changes in the world. It improves the Decision making system of the government body. Governments body are using GIS technology to manage different government program and policy. With the help of deep GIS knowledge, Techmapperz integrates different types of data in GIS systems to derive understanding, operationalize solutions and engage the Government and public.
              </p>
              <Link href="/contact" className="flex items-center gap-2 mt-4 relative">
                  <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
                  <h2 className="text-2xl font-bold absolute left-3">Know More</h2>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-6">GIS Field Survey</h2>
          <div className="flex flex-col lg:flex-row-reverse gap-8">
            <Image src={GIS_Suvey} alt="GIS Survey" width={500} height={350} className="w-full lg:w-1/2" />
            <div className="flex flex-col gap-4">
              <p className="text-gray-400 text-xl">
                Techmapperz offers a wide range of GIS surveying services using both Traditional and modern survey techniques. We have a very highly experienced and skilled team for the survey. We help clients across the different sectors by providing accurate, precise and up-to-date GIS survey data. Our range of GIS field survey services includes all types of Land surveys, Total Station Survey, DGPS surveys, Drone Survey, Household surveys, Road surveys & Networking Survey, Utility Survey, Hydrological surveys etc.
              </p>
              <Link href="/contact" className="flex items-center gap-2 mt-4 relative">
                  <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
                  <h2 className="text-2xl font-bold absolute left-3">Know More</h2>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default gisservice;
