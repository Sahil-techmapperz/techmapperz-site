// pages/gisServices.js
import Image from 'next/image';
import Link from 'next/link';
import Geospatial_Mapping from '@/public/Photos/gis_service_img_1.png';
import Geo_health from '@/public/Photos/gis_service_img_2.png';
import Geogoverence from '@/public/Photos/gis_service_img_3.png';
import GIS_Suvey from '@/public/Photos/gis_service_img_4.png';
import ScrollToTop from '@/app/_Components/ScrollToTop';
import { FaArrowRightLong } from "react-icons/fa6";

export const metadata = {
  title: "Techmapperz GIS Services",
  description: "Techmapperz map your business",
};

const gisservice = () => {

  return (
    <div className="bg-black text-white">
      <ScrollToTop />
      <section className="h-96 max-sm:h-[250px] flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url("/Photos/banner_1.jpg")' }}>
        <h1 className="text-4xl font-bold max-sm:text-2xl">GIS Services</h1>
        <p className="text-xl max-sm:text-[16px] mt-4">
          <Link href="/">Home</Link> / <Link href="/service">Services</Link> / GIS Services
        </p>
      </section>

      <section className="p-8 lg:p-20 lg:px-[150px]">
        <div className="mb-16">
          <p className="text-center text-white text-[18px] max-sm:text-[16px] max-sm:text-left">
          GIS (Geographical Information System) is used to store, create, manage, analyze, and display spatial data. Geospatial services describe objects or events with a location, often combining coordinates with characteristics of the object or event. This information can be static or dynamic (e.g., a moving vehicle or the spread of disease). Techmapperz provides end-to-end GIS solutions for spatial data management and analysis for government and enterprise sectors. Using cutting-edge technology, research, and skilled GIS analysts, Techmapperz offers simple solutions to complex problems through a range of GIS data services.
          </p>
        </div>

        <div className="mb-16">
          <div className="flex flex-col justify-center items-center lg:flex-row gap-[50px]">
            <Image src={Geospatial_Mapping} alt="Geospatial Mapping" className="w-full lg:w-1/3 " />
            <div className="flex flex-col gap-4 justify-center">
              <h2 className="text-4xl max-sm:text-2xl font-bold">Geospatial Mapping</h2>
              <p className="text-white text-[18px] max-sm:text-[16px]">
                Geospatial mapping is a type of spatial analysis technique that typically uses software capable of rendering maps processing spatial data, and applying analytical methods to terrestrial or geographic datasets. Techmapperz offers different kinds of GIS mapping Services:
              </p>
              <ul className="list-disc list-inside text-[18px] max-sm:text-[16px] flex flex-col gap-4">
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

        <div className="mb-16">
          <h2 className="text-4xl max-sm:text-2xl font-bold mb-6">Geo-health</h2>
          <div className="flex flex-col lg:flex-row-reverse gap-8">
            <Image src={Geo_health} alt="Geo-health" width={500} height={350} className="w-full lg:w-1/2" />
            <div className="flex flex-col gap-4">
              <p className="text-white text-[18px] max-sm:text-[16px]">
                GIS plays a very vital role in the modern health sector. A GIS can play an important role in the surveillance, management and analysis of diseases. Techmapperz's GIS-based Health solution will help you to monitor and management of both diseases and health programs. We use the latest software and accurate GIS data to improve your strategic planning, research and evaluation, emergency preparedness and both response and location of health care service too.
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
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl max-sm:text-2xl font-bold mb-6">Geo-governance</h2>
          <div className="flex flex-col lg:flex-row gap-8">
            <Image src={Geogoverence} alt="Geo-governance" width={500} height={350} className="w-full lg:w-1/2" />
            <div className="flex flex-col gap-4">
              <p className="text-white text-[18px] max-sm:text-[16px]">
                GIS, a new edge technology, has opened several new prospects for the day-to-day life of civil society. GIS is rapidly becoming a digital revolution for different transformational changes in the world. It improves the Decision making system of the government body. Governments body are using GIS technology to manage different government program and policy. With the help of deep GIS knowledge, Techmapperz integrates different types of data in GIS systems to derive understanding, operationalize solutions and engage the Government and public.
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
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl max-sm:text-2xl max-sm:text-[16px] font-bold mb-6">GIS Field Survey</h2>
          <div className="flex flex-col lg:flex-row-reverse gap-8">
            <Image src={GIS_Suvey} alt="GIS Survey" width={500} height={350} className="w-full lg:w-1/2" />
            <div className="flex flex-col gap-4">
              <p className="text-white text-[18px]">
                Techmapperz offers a wide range of GIS surveying services using both Traditional and modern survey techniques. We have a very highly experienced and skilled team for the survey. We help clients across the different sectors by providing accurate, precise and up-to-date GIS survey data. Our range of GIS field survey services includes all types of Land surveys, Total Station Survey, DGPS surveys, Drone Survey, Household surveys, Road surveys & Networking Survey, Utility Survey, Hydrological surveys etc.
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default gisservice;
