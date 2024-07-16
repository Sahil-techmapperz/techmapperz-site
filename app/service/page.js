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
import Ourservice3 from '@/public/Photos/Ourservice3.png';
import Ourservice2 from '@/public/Photos/Ourservice2.png';
import T01 from '@/public/Photos/01.png';
import T02 from '@/public/Photos/02.png';
import T03 from '@/public/Photos/03.png';
import T04 from '@/public/Photos/04.png';
import ScrollToTop from '../_Components/ScrollToTop';

export const metadata = {
  title: "Techmapperz Service",
  description: "Techmapperz map your business",
};

const service = () => {

  return (
    <div className="service bg-gray-900 text-white">
        <ScrollToTop/>
      <section className="flex flex-col items-center justify-center h-96 bg-cover bg-center" style={{ backgroundImage: 'url("/Photos/banner_3.jpg")' }}>
        <h1 className="text-6xl font-bold">Our Services</h1>
        <p className="text-2xl mt-4"><Link href="/">Home</Link> / Services</p>
      </section>

      <section className="p-20">
        <p className="text-justify">
          To assist companies in thriving in the digital age, we provide a variety of technological services. Drone, GIS, and remote sensing services, mobile app development, website design, CRM solutions, and IT consulting are just a few of the things we offer. We can assist businesses in managing their resources, connecting with their audiences online, and optimizing their operations thanks to our knowledge and expertise.
        </p>

        <div className="mt-10">
          <h1 className="text-4xl font-bold text-center mb-10">Our GIS Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 border border-gray-700">
              <div className="flex items-center gap-4">
                <Image src={Ourservice11} alt="GIS Services" width={90} height={120} />
                <Image src={T01} alt="01" width={70} height={20} />
              </div>
              <h3 className="text-2xl font-bold mt-4"><Link href="/GIS_Service">GIS Services</Link></h3>
              <p className="text-gray-400">Techmapperz offers GIS services with a complete solution for spatial data storing, management and analysis to Government and Enterprise sectors through GIS services.</p>
            </div>
            <div className="p-4 border border-gray-700">
              <div className="flex items-center gap-4">
                <Image src={Ourservice10} alt="Remote Sensing Services" width={90} height={120} />
                <Image src={T02} alt="02" width={70} height={20} />
              </div>
              <h3 className="text-2xl font-bold mt-4"><Link href="/Remote_Sensing">Remote Sensing Services</Link></h3>
              <p className="text-gray-400">Techmapperz has extensive expertise in Satellite Image Processing & Interpretation. We use some of the best software and hardware available commercially to process high-quality images.</p>
            </div>
            <div className="p-4 border border-gray-700">
              <div className="flex items-center gap-4">
                <Image src={Ourservice9} alt="Photogrammetry Services" width={90} height={120} />
                <Image src={T03} alt="03" width={70} height={20} />
              </div>
              <h3 className="text-2xl font-bold mt-4"><Link href="/Photogrammetry">Photogrammetry Services</Link></h3>
              <p className="text-gray-400">Photogrammetry is the process to obtain information and measurements of physical objects from photographs and use them for the development of maps, drawings, or 3D models.</p>
            </div>
            <div className="p-4 border border-gray-700">
              <div className="flex items-center gap-4">
                <Image src={Ourservice8} alt="Web GIS Services" width={90} height={120} />
                <Image src={T04} alt="04" width={70} height={20} />
              </div>
              <h3 className="text-2xl font-bold mt-4"><Link href="/Web_GIS">Web GIS Services</Link></h3>
              <p className="text-gray-400">WebGIS is an advanced form of Geospatial Information System that is available on the web platform. WebGIS offers a diverse set of analytical functions.</p>
            </div>
            <div className="p-4 border border-gray-700">
              <div className="flex items-center gap-4">
                <Image src={Ourservice7} alt="Drone Services" width={90} height={120} />
                <Image src={T04} alt="05" width={70} height={20} />
              </div>
              <h3 className="text-2xl font-bold mt-4"><Link href="/Drone_Service">Drone Services</Link></h3>
              <p className="text-gray-400">Techmapperz has expertise in cutting-edge drone technology, and high-quality data processing techniques to provide spatial services for a range of requirements.</p>
            </div>
            <div className="p-4 border border-gray-700">
              <Image src={Drone_race_gif} alt="Drone Race" layout="responsive" unoptimized />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h1 className="text-4xl font-bold text-center mb-10">Our IT Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 border border-gray-700">
              <div className="flex items-center gap-4">
                <Image src={Ourservice11} alt="Web Development Services" width={90} height={120} />
                <Image src={T01} alt="01" width={70} height={20} />
              </div>
              <h3 className="text-2xl font-bold mt-4"><Link href="/web_development">Web Development Services</Link></h3>
              <p className="text-gray-400">Website development is an umbrella term for two major parts-Design & Development, Design represents the look and feel whereas Development determines how it functions.</p>
            </div>
            <div className="p-4 border border-gray-700">
              <div className="flex items-center gap-4">
                <Image src={Ourservice4} alt="Mobile Application Development" width={90} height={120} />
                <Image src={T02} alt="02" width={70} height={20} />
              </div>
              <h3 className="text-2xl font-bold mt-4"><Link href="/mobile_app_development">Mobile Application Development</Link></h3>
              <p className="text-gray-400">The mobile app software intelligently combines the latest technology, and design solutions which constantly get updated. It incorporates API, GPS, Camera, Microphone, AI and other latest technologies and becomes a Launchpad hurling your business to the next level.</p>
            </div>
            <div className="p-4 border border-gray-700">
              <div className="flex items-center gap-4">
                <Image src={Ourservice3} alt="CRM/ERP" width={90} height={120} />
                <Image src={T03} alt="03" width={70} height={20} />
              </div>
              <h3 className="text-2xl font-bold mt-4"><Link href="/crm_page">CRM/ERP</Link></h3>
              <p className="text-gray-400">At custom CRM consulting we understand your current capabilities, map your organisation's desired future state, and then recommend CRM implementation.</p>
            </div>
            <div className="p-4 border border-gray-700">
              <div className="flex items-center gap-4">
                <Image src={Ourservice2} alt="IT Consulting Services" width={90} height={120} />
                <Image src={T04} alt="04" width={70} height={20} />
              </div>
              <h3 className="text-2xl font-bold mt-4"><Link href="/It_consulting">IT Consulting Services</Link></h3>
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
