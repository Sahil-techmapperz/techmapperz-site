// pages/itServices.js
import Image from 'next/image';
import Link from 'next/link';
import Fabcon1 from '@/public/Photos/MarketingScreen.png';
import Fabcon2 from '@/public/Photos/Homescreen.png';
import Fabcon3 from '@/public/Photos/VIEWProductScreen(1).png';
import SHRC1 from '@/public/Photos/shrc-all1.png';
import AutoSource1 from '@/public/Photos/AutoSource21.png';
import AutoSource2 from '@/public/Photos/AutoSource11.png';
import AutoSource3 from '@/public/Photos/AutoSource12.png';
import Welho1 from '@/public/Photos/Welho-all-2.png';
import WhiteSpread1 from '@/public/Photos/wsfl1.png';
import ManuserGhorbari1 from '@/public/Photos/manuser-ghorbaari1.png';
import CoCreateLab1 from '@/public/Photos/Co-Createall2.png';
import TechmapperzCRM1 from '@/public/Photos/Group1000004122.png';
import ScrollToTop from '../_Components/ScrollToTop';
import ContactForm from '../_Components/ContactForm';
import { BiTimeFive } from 'react-icons/bi';
import { AiFillHome } from 'react-icons/ai';
import { IoMdContacts } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

export const metadata = {
    title: "Techmapperz IT Csse Studies",
    description: "Techmapperz map your business",
  };

function itcasestudies() {
  return (
    <div className='font-poppins' id='CaseStudiesITServices'>
      <ScrollToTop />
      <div className='flex flex-col h-[350px] text-center items-center justify-center bg-cover bg-center' style={{ backgroundImage: 'url("/Photos/Rectangle41.png")' }}>
        <p className='text-white mt-[66px] mb-[66px] text-[66px] font-bold max-sm:text-[50px]'>IT Services</p>
        <p className='text-white'>Case Studies / IT Services</p>
      </div>

      <p className='font-normal text-center mb-0 text-[26px] p-16 text-white bg-gray-700 max-sm:p-4 max-sm:text-justify max-sm:text-[24px]'>
        TechMapperz offers software development, web design, mobile app development, digital marketing, and IT consulting services. We collaborate with clients to create tailored solutions using the latest technology, aiming to provide creative, dependable, and adaptable solutions for business expansion.
      </p>

      <div className='bg-gray-800 flex px-16 justify-center items-center max-sm:flex-col max-sm:px-0'>
        <div className='w-[50%] max-sm:p-4 max-sm:pb-16 max-sm:w-[100%]'>
          <p className='text-white text-[36px] font-medium max-sm:text-center'>Fabcon</p>
          <p className='font-normal text-[22px] serviceItParagraph text-gray-400'>
            Elevate your interior design skills with Fabcon, a user-friendly app that helps you optimize your space. From smart storage solutions to expert tips, this app empowers you to maximize the potential of any room while maintaining your personal style.
          </p>
          <div className='flex absolute mt-[15px]'>
            <div className='bg-blue-500 w-12 h-12 rounded-full'></div>
            <Link href="/contact" className='text-white text-[26px] font-bold relative ml-[-25px]'>
              Know More
              </Link>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div>
            <Image src={Fabcon1} alt="Fabcon1" />
            <Image src={Fabcon2} alt="Fabcon2" />
          </div>
          <Image className='w-[50%]' src={Fabcon3} alt="Fabcon3" />
        </div>
      </div>

      <div className='bg-gray-900'>
        <div className='p-16 max-sm:p-4 max-sm:pb-16'>
          <p className='text-white text-center text-[36px] font-medium'>Special Human Rights Commission</p>
          <p className='font-normal text-center text-[22px] text-gray-400 max-sm:text-justify'>
            Special Human Rights commissions is a civil rights’ group comprised of advocates, social activists and grassroots para-legal social workers dedicated to using the legal system to protect and advance the civil and human rights in India. SHRC, a non-profit and governmental civil rights’ group was set up in 2013 to defend the rights of the underprivileged sections of the society.
          </p>
          <div className='flex justify-center mt-[15px]'>
            <div className='flex absolute'>
              <div className='bg-blue-500 w-12 h-12 rounded-full'></div>
              <Link href="/contact" className='text-white text-[26px] font-bold relative ml-[-25px]'>
              Know More
              </Link>
            </div>
          </div>
        </div>
        <Image className='w-[100%] m-auto pb-16' src={SHRC1} alt="SHRC1" />
      </div>

      <div>
        <div className='bg-gray-800 p-16 max-sm:p-4 max-sm:pb-16'>
          <p className='text-white text-center text-[36px] font-medium'>Premium Auto Source</p>
          <p className='font-normal text-center text-[22px] text-gray-400 max-sm:text-justify'>
            Experience optimal performance and efficiency with PAS Auto Source, a leading manufacturer of automotive drivetrain components. Visit our website to explore our innovative drivetrain solutions, including powertrains, driveline systems, and hybrid technologies, designed to meet the demanding needs of modern vehicles.
          </p>
          <div className='flex justify-center mt-[15px] pb-4'>
            <div className='flex absolute'>
              <div className='bg-blue-500 w-12 h-12 rounded-full'></div>
              <Link href="/contact" className='text-white text-[26px] font-bold relative ml-[-25px]'>
              Know More
              </Link>
            </div>
          </div>
        </div>
        <Image className='m-auto w-[100%]' src={AutoSource1} alt="AutoSource1" />
        <div className='flex px-[16%] pb-16 mt-[-2%] items-center bg-gray-900 justify-between'>
          <Image className='w-[47%]' src={AutoSource2} alt="AutoSource2" />
          <Image className='w-[47%]' src={AutoSource3} alt="AutoSource3" />
        </div>
      </div>

      <div className='bg-gray-700'>
        <div className='p-16 max-sm:p-4 max-sm:pb-16'>
          <p className='text-white text-center text-[36px] font-medium'>Welho</p>
          <p className='font-normal text-center text-[22px] text-gray-400 max-sm:text-justify'>
            Say hello to Welho..! Welcome to the world of wellness. Made with high-quality natural ingredients and no artificial colours or flavours, our dairy-based refreshing beverages offer the perfect blend of nutrition and taste. Each Welho product comes with a revolutionary, nutrient-balanced formula that ensures your daily wholesome nourishment.
          </p>
          <div className='flex justify-center mt-[15px]'>
            <div className='flex absolute'>
              <div className='bg-blue-500 w-12 h-12 rounded-full'></div>
              <Link href="/contact" className='text-white text-[26px] font-bold relative ml-[-25px]'>
              Know More
              </Link>
            </div>
          </div>
        </div>
        <Image className='m-auto pb-8' src={Welho1} alt="Welho1" />
      </div>

      <div className='bg-gray-900'>
        <div className='p-16 max-sm:p-4 max-sm:pb-16'>
          <p className='text-white text-center text-[36px] font-medium'>White Spread Foods</p>
          <p className='font-normal text-center text-[22px] text-gray-400 max-sm:text-justify'>
            To begin with, we procure the best quality milk directly from farmers. We then put it through stringent quality checks in our chilling plants to make it even better. It is then preserved at exactly 40 Celsius and packaged with utmost care so that every drop stays delicious when it reaches you.
          </p>
          <div className='flex justify-center mt-[15px]'>
            <div className='flex absolute'>
              <div className='bg-blue-500 w-12 h-12 rounded-full'></div>
              <Link href="/contact" className='text-white text-[26px] font-bold relative ml-[-25px]'>
              Know More
              </Link>
            </div>
          </div>
        </div>
        <Image className='m-auto' src={WhiteSpread1} alt="WhiteSpread1" />
      </div>

      <div className='bg-gray-700 flex gap-[50px] p-16 justify-center items-center max-sm:p-4 max-sm:pb-16 max-sm:flex-col-reverse'>
        <Image className='m-auto w-[100%] h-[500px] max-sm:h-[300px] max-sm:mt-[20px]' src={ManuserGhorbari1} alt="ManuserGhorbari1" />
        <div>
          <p className='text-white text-center text-[36px] font-medium'>Manuser Ghorbari</p>
          <p className='font-normal text-center text-[22px] text-gray-400 serviceItParagraph max-sm:text-justify'>
            Manusher Ghorbari is not just a weekend destination only. Here one may experience a unique way of living life. Being inspired by Atin Bandopadhyay's four-part tetralogy on Partition (Nilkantha Pakhir Khonje, "Manusher Ghorbari" Aloukik Jalajan and Ishwarer Bagan), Aniket, named his dream project upon its second part.
          </p>
          <div className='flex absolute max-sm:mt-[15px] max-sm:pb-4'>
            <div className='bg-blue-500 w-12 h-12 rounded-full'></div>
            <Link href="/contact" className='text-white text-[26px] font-bold relative ml-[-25px]'>
              Know More
              </Link>
          </div>
        </div>
      </div>

      <div className='bg-gray-900'>
        <div className='p-16 max-sm:p-4 max-sm:pb-16'>
          <p className='text-white text-center text-[36px] font-medium'>CoCreate Lab</p>
          <p className='font-normal text-center text-[22px] text-gray-400 max-sm:text-justify'>
            A game-changer in the startup ecosystem It enables access to a global platform that brings together the best and brightest entrepreneurs, investors, mentors, and philanthropic organizations in an integrated ecosystem. With a network of world-class mentors from companies like Meta, Netflix, Uber, Shell, and Harvard University, along with the World Bank and OECD, and other multi-laterals, CoCreate Labs is set to revolutionize the way start-ups are launched and grown.
          </p>
          <div className='flex justify-center mt-[15px]'>
            <div className='flex absolute'>
              <div className='bg-blue-500 w-12 h-12 rounded-full'></div>
              <Link href="/contact" className='text-white text-[26px] font-bold relative ml-[-25px]'>
              Know More
              </Link>
            </div>
          </div>
        </div>
        <Image className='m-auto w-full' src={CoCreateLab1} alt="CoCreateLab1" />
      </div>

      <div className='bg-gray-700'>
        <div className='p-16 max-sm:p-4 max-sm:pb-16'>
          <p className='text-white text-center text-[36px] font-medium'>Techmapperz CRM</p>
          <p className='font-normal text-center text-[22px] text-gray-400 max-sm:text-justify'>
            Our CRM web app offers seamless customer management, allowing you to track interactions, manage leads, and nurture relationships all in one place. Stay organized, improve customer satisfaction, and drive growth with our user-friendly interface.
          </p>
          <div className='flex justify-center mt-[15px]'>
            <div className='flex absolute'>
              <div className='bg-blue-500 w-12 h-12 rounded-full'></div>
              <Link href="/contact" className='text-white text-[26px] font-bold relative ml-[-25px]'>
              Know More
              </Link>
            </div>
          </div>
        </div>
        <Image className='w-[75%] m-auto pb-8 max-sm:w-[95%]' src={TechmapperzCRM1} alt="TechmapperzCRM1" />
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

export default itcasestudies;
