// pages/services.js
import Link from 'next/link';
import Image from 'next/image';
import Drone_race_gif from '@/public/Photos/Our Services/Drone_race.gif';
import Coworking_gif from '@/public/Photos/Our Services/Coworking.gif';
import Ourservice11 from '@/public/Photos/Ourservice11.png';
import Ourservice10 from '@/public/Photos/Ourservice10.png';
import Ourservice9 from '@/public/Photos/Ourservice9.png';
import Ourservice8 from '@/public/Photos/Ourservice8.png';
import Ourservice7 from '@/public/Photos/Ourservice7.png';
import Ourservice4 from '@/public/Photos/Ourservice4.png';
import Ourservice3 from '@/public/Photos/OurService3.png';
import Ourservice2 from '@/public/Photos/Ourservice2.png';
import T01 from '@/public/Photos/01.png';
import T02 from '@/public/Photos/02.png';
import T03 from '@/public/Photos/03.png';
import T04 from '@/public/Photos/04.png';
import T05 from '@/public/Photos/05.png';
import ScrollToTop from '@/app/_Components/ScrollToTop';
import service_banner_img from '@/public/Photos/service_banner.png';

export const metadata = {
  title: "Techmapperz Service",
  description: "Techmapperz map your business",
};

const service = () => {

  return (
    <div className="service bg-black text-white">
        <ScrollToTop/>
        <div className='relative w-full'>
            <Image src={service_banner_img} className='w-full h-[500px]' alt="About Us Banner" />
            <div className='absolute inset-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center'>
              <h1 className='text-center text-6xl max-sm:text-3xl text-white font-bold'>Service</h1>
              <p className='text-center text-lg max-sm:text-sm text-gray-200 mt-4 px-4 md:px-8 md:w-[50%]'>
              Powering Your Business with Smart Tech Solutions
              </p>
              <Link href="/contact" className="text-lg flex items-center border-2 px-4 py-2 mt-4 font-semibold uppercase rounded-md bg-white text-[#00B0FE] shadow-[0px_0px_8px_0px_#00B0FE]">Talk to our Expert</Link>
            </div>
          </div>

      <section className="p-20 max-sm:px-[12px]">
        <p className="text-justify">
          To assist companies in thriving in the digital age, we provide a variety of technological services. Drone, GIS, and remote sensing services, mobile app development, website design, CRM solutions, and IT consulting are just a few of the things we offer. We can assist businesses in managing their resources, connecting with their audiences online, and optimizing their operations thanks to our knowledge and expertise.
        </p>

        <div className="mt-10">
          <h1 className="text-4xl max-sm:text-[20px] font-bold text-center mb-10">Our GIS Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 border border-gray-700">
              <div className="flex items-center gap-4">
                <Image src={Ourservice11} className='h-[90px]' alt="GIS Services" width={90} height={120} />
                <Image src={T01} alt="01" width={70} height={20} />
              </div>
              <h3 className="text-2xl max-sm:text-[18px] font-bold mt-4"><Link href="/service/gis/gisservice">GIS Services</Link></h3>
              <p className="text-gray-400">Techmapperz offers GIS services with a complete solution for spatial data storing, management and analysis to Government and Enterprise sectors through GIS services.</p>
            </div>
            <div className="p-4 border border-gray-700">
              <div className="flex items-center gap-4">
                <Image src={Ourservice10} alt="Remote Sensing Services" width={90} height={120} />
                <Image src={T02} alt="02" width={70} height={20} />
              </div>
              <h3 className="text-2xl max-sm:text-[18px] font-bold mt-4"><Link href="/service/gis/remotesensing">Remote Sensing Services</Link></h3>
              <p className="text-gray-400">Techmapperz has extensive expertise in Satellite Image Processing & Interpretation. We use some of the best software and hardware available commercially to process high-quality images.</p>
            </div>
            <div className="p-4 border border-gray-700">
              <div className="flex items-center gap-4">
                <Image src={Ourservice9} alt="Photogrammetry Services" width={90} height={120} />
                <Image src={T03} alt="03" width={70} height={20} />
              </div>
              <h3 className="text-2xl max-sm:text-[18px] font-bold mt-4"><Link href="/service/gis/photogrammetry">Photogrammetry Services</Link></h3>
              <p className="text-gray-400">Photogrammetry is the process to obtain information and measurements of physical objects from photographs and use them for the development of maps, drawings, or 3D models.</p>
            </div>
            <div className="p-4 border border-gray-700">
              <div className="flex items-center gap-4">
                <Image src={Ourservice8} alt="Web GIS Services" width={90} height={120} />
                <Image src={T04} alt="04" width={70} height={20} />
              </div>
              <h3 className="text-2xl max-sm:text-[18px] font-bold mt-4"><Link href="/service/gis/webgis">Web GIS Services</Link></h3>
              <p className="text-gray-400">WebGIS is an advanced form of Geospatial Information System that is available on the web platform. WebGIS offers a diverse set of analytical functions.</p>
            </div>
            <div className="p-4 border border-gray-700">
              <div className="flex items-center gap-4">
                <Image src={Ourservice7} alt="Drone Services" width={90} height={120} />
                <Image src={T05} alt="05" width={70} height={20} />
              </div>
              <h3 className="text-2xl max-sm:text-[18px] font-bold mt-4"><Link href="/service/gis/droneservice">Drone Services</Link></h3>
              <p className="text-gray-400">Techmapperz has expertise in cutting-edge drone technology, and high-quality data processing techniques to provide spatial services for a range of requirements.</p>
            </div>
            <div className="p-4 border border-gray-700">
              <Image src={Drone_race_gif} alt="Drone Race" layout="responsive" unoptimized />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h1 className="text-4xl max-sm:text-[20px] font-bold text-center mb-10">Our IT Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 border border-gray-700">
              <div className="flex items-center gap-4">
                <Image src={Ourservice11} alt="Web Development Services" className='h-[90px]' width={90} height={120} />
                <Image src={T01} alt="01" width={70} height={20} />
              </div>
              <h3 className="text-2xl max-sm:text-[18px] font-bold mt-4"><Link href="/service/it/webdevelopment">Web Development Services</Link></h3>
              <p className="text-gray-400">Website development is an umbrella term for two major parts-Design & Development, Design represents the look and feel whereas Development determines how it functions.</p>
            </div>
            <div className="p-4 border border-gray-700">
              <div className="flex items-center gap-4">
                <Image src={Ourservice4} alt="Mobile Application Development" className='h-[90px]' width={90} height={120} />
                <Image src={T02} alt="02" width={70} height={20} />
              </div>
              <h3 className="text-2xl max-sm:text-[18px] font-bold mt-4"><Link href="/service/it/mobiledevelopment">Mobile Development</Link></h3>
              <p className="text-gray-400">The mobile app software intelligently combines the latest technology, and design solutions which constantly get updated. It incorporates API, GPS, Camera, Microphone, AI and other latest technologies and becomes a Launchpad hurling your business to the next level.</p>
            </div>
            <div className="p-4 border border-gray-700">
              <div className="flex items-center gap-4">
                <Image src={Ourservice3} alt="CRM/ERP" width={90} height={120} />
                <Image src={T03} alt="03" width={70} height={20} />
              </div>
              <h3 className="text-2xl max-sm:text-[18px] font-bold mt-4"><Link href="/service/it/crmservice">CRM/ERP</Link></h3>
              <p className="text-gray-400">At custom CRM consulting we understand your current capabilities, map your organisation's desired future state, and then recommend CRM implementation.</p>
            </div>
            <div className="p-4 border border-gray-700">
              <div className="flex items-center gap-4">
                <Image src={Ourservice2} alt="IT Consulting Services" width={90} height={120} />
                <Image src={T04} alt="04" width={70} height={20} />
              </div>
              <h3 className="text-2xl max-sm:text-[18px] font-bold mt-4"><Link href="/service/it/itconsultingservice">IT Consulting Services</Link></h3>
              <p className="text-gray-400">We provide IT consulting services to businesses in a wide range of industries. We use our expertise to identify your opportunities and deliver solutions that will help you outperform your competitors.</p>
            </div>
            <div className="p-4 border border-gray-700">
              <Image src={Coworking_gif} alt="Coworking" layout="responsive" unoptimized />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default service;
