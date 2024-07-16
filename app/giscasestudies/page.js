// pages/gisServices.js
import Image from 'next/image';
import Link from 'next/link';
import { BiTimeFive } from 'react-icons/bi';
import { AiFillHome } from 'react-icons/ai';
import { IoMdContacts } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import GIS1 from '@/public/Photos/image279.png';
import GIS2 from '@/public/Photos/image280.png';
import GIS3 from '@/public/Photos/image281.png';
import GIS4 from '@/public/Photos/image282.png';
import GIS5 from '@/public/Photos/image283.png';
import GIS6 from '@/public/Photos/image284.png';
import ScrollToTop from '../_Components/ScrollToTop';
import ContactForm from '../_Components/ContactForm';

export const metadata = {
  title: "Techmapperz GIS Csse Studies",
  description: "Techmapperz map your business",
};

function giscasestudies() {

  return (
    <div className='font-poppins' id='CaseStudiesGISServices'>
    <ScrollToTop/>
      <div className='flex flex-col h-[350px] text-center items-center justify-center bg-cover bg-center' style={{ backgroundImage: 'url("/Photos/Rectangle41.png")' }}>
        <p className='text-white mt-[66px] mb-[66px] text-[66px] font-bold max-sm:text-[50px]'>GIS Services</p>
        <p className='text-white'>Case Studies / GIS Services</p>
      </div>
      <p className='font-normal text-center mb-0 text-[26px] p-16 text-white bg-gray-700 max-sm:p-4 max-sm:text-justify max-sm:text-[24px]'>
        TechMapperz specializes in GIS solutions, offering mapping, spatial analysis, and data visualization services tailored to clients' geographic data needs, employing cutting-edge technology to provide precise, efficient, and insightful spatial solutions for diverse industries.
      </p>

      <div className='bg-gray-900'>
        <div className='p-16 max-sm:p-4 max-sm:pb-16'>
          <p className='font-normal text-center text-[22px] text-gray-400 max-sm:text-justify'>
            In our recent project, we've utilized advanced drone imagery to develop comprehensive maps for various Industrial Areas. This process included the meticulous digitization of over twenty distinct layers for each region,
          </p>
          <div className='flex justify-center mt-[15px] relative'>
            <div className='flex absolute'>
              <div className='bg-blue-500 w-12 h-12 rounded-full'></div>
              <button className='text-white text-[26px] font-bold relative ml-[-25px]'>
                <Link href="/contact">Know More</Link>
              </button>
            </div>
          </div>
        </div>
        <Image className='w-[75%] m-auto pb-8 max-sm:w-[95%]' src={GIS1} alt="GIS1" />
      </div>

      <div className='bg-gray-700'>
        <div className='p-16 max-sm:p-4 max-sm:pb-16'>
          <p className='font-normal text-center text-[22px] text-gray-400 max-sm:text-justify'>
            We have prepared map for City Mapping. Here we have used Drone Imagery as the source of digitization. We captured all the features in 1:100 scale.
          </p>
          <div className='flex justify-center mt-[15px] relative'>
            <div className='flex absolute'>
              <div className='bg-blue-500 w-12 h-12 rounded-full'></div>
              <button className='text-white text-[26px] font-bold relative ml-[-25px]'>
                <Link href="/contact">Know More</Link>
              </button>
            </div>
          </div>
        </div>
        <Image className='w-[75%] m-auto pb-8 max-sm:w-[95%]' src={GIS2} alt="GIS2" />
      </div>

      <div className='bg-gray-900'>
        <div className='p-16 max-sm:p-4 max-sm:pb-16'>
          <p className='font-normal text-center text-[22px] text-gray-400 max-sm:text-justify'>
            We have created Agricultural map of a particular area using Drone Imagery. Eventually, we have classified the agricultural land on the basis of crop.
          </p>
          <div className='flex justify-center mt-[15px] relative'>
            <div className='flex absolute'>
              <div className='bg-blue-500 w-12 h-12 rounded-full'></div>
              <button className='text-white text-[26px] font-bold relative ml-[-25px]'>
                <Link href="/contact">Know More</Link>
              </button>
            </div>
          </div>
        </div>
        <Image className='w-[75%] m-auto pb-8 max-sm:w-[95%]' src={GIS3} alt="GIS3" />
      </div>

      <div className='bg-gray-700'>
        <div className='p-16 max-sm:p-4 max-sm:pb-16'>
          <p className='font-normal text-center text-[22px] text-gray-400 max-sm:text-justify'>
            We have used Drone Imagery for digitization and mapping of habitation areas. We have digitized more than Eight (8) Layers in this project and more than 8 other sub layers too as per the individual areas. All the feature extraction is done in 1:50 scale.
          </p>
          <div className='flex justify-center mt-[15px] relative'>
            <div className='flex absolute'>
              <div className='bg-blue-500 w-12 h-12 rounded-full'></div>
              <button className='text-white text-[26px] font-bold relative ml-[-25px]'>
                <Link href="/contact">Know More</Link>
              </button>
            </div>
          </div>
        </div>
        <Image className='w-[75%] m-auto pb-8 max-sm:w-[95%]' src={GIS4} alt="GIS4" />
      </div>

      <div className='bg-gray-900'>
        <div className='p-16 max-sm:p-4 max-sm:pb-16'>
          <p className='font-normal text-center text-[22px] text-gray-400 max-sm:text-justify'>
            We have done the Landuse and Landcover mapping with the help of Higher resolution drone imagery. Digitization of more than 12 layers and 9 sub layers for mapping are done.
          </p>
          <div className='flex justify-center mt-[15px] relative'>
            <div className='flex absolute'>
              <div className='bg-blue-500 w-12 h-12 rounded-full'></div>
              <button className='text-white text-[26px] font-bold relative ml-[-25px]'>
                <Link href="/contact">Know More</Link>
              </button>
            </div>
          </div>
        </div>
        <Image className='w-[75%] m-auto pb-8 max-sm:w-[95%]' src={GIS5} alt="GIS5" />
      </div>

      <div className='bg-gray-700'>
        <div className='p-16 max-sm:p-4 max-sm:pb-16'>
          <p className='font-normal text-center text-[22px] text-gray-400 max-sm:text-justify'>
            Georeferencing of images are done in this project. Digitization of sheets of a particular Village or Tehsil is done when the sheets are aligned after Georeferencing.
          </p>
          <div className='flex justify-center mt-[15px] relative'>
            <div className='flex absolute'>
              <div className='bg-blue-500 w-12 h-12 rounded-full'></div>
              <button className='text-white text-[26px] font-bold relative ml-[-25px]'>
                <Link href="/contact">Know More</Link>
              </button>
            </div>
          </div>
        </div>
        <Image className='w-[75%] m-auto pb-8 max-sm:w-[95%]' src={GIS6} alt="GIS6" />
      </div>
      <div className="flex flex-col lg:flex-row justify-between p-20 bg-gray-900 text-white">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <p className="text-lg font-semibold">Get In Touch</p>
          <h1 className="text-3xl font-bold mb-4">The internet is pretty huge, <br /> We're so glad you found us</h1>
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <BiTimeFive className="text-blue-600" />
              <p>9:30-6:30 IST</p>
            </div>
            <div className="flex items-start space-x-2">
              <MdEmail className="text-blue-600" />
              <div>
                <p>Email</p>
                <p>info@techmapperz.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <IoMdContacts className="text-blue-600" />
              <div>
                <p>Phone no</p>
                <p>+91-9643002065 / +91-3335752689</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <AiFillHome className="text-blue-600" />
              <div>
                <p>Delhi</p>
                <p>55, Lane - 2, Westend Marg, Saidullajab,<br />
                  Near Saket metro station, New Delhi - 110030, India</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <AiFillHome className="text-blue-600" />
              <div>
                <p>Kolkata</p>
                <p>CF 401, Block CF, Sector 1, Salt Lake, Kolkata-700064, India</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default giscasestudies;
