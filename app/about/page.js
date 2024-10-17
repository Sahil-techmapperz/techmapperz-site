import Link from 'next/link';
import Image from 'next/image';
import Choose from './choose';
import Rectangle_6 from '@/public/Photos/Rectangle_6.png';
import Group1 from '@/public/Photos/Group1.png'
import ScrollToTop from '../_Components/ScrollToTop';
import Missionvision from '../_Components/Missionvision';
import How_do_we_work_img from '@/public/Photos/How_do_we_work_img.png';
import about_us_banner_img from '@/public/Photos/about_us_banner.png';
import { FaArrowRightLong } from "react-icons/fa6";

export const metadata = {
  title: "Techmapperz About",
  description: "Techmapperz map your business",
};


const About = () => {


  return (
    <div className="bg-[#181818]">
      <ScrollToTop />

      <div className="max-w-full">

        <div className="mx-auto">
          <div className='relative w-full'>
            <Image src={about_us_banner_img} className='w-full h-[500px]' alt="About Us Banner" />
            <div className='absolute inset-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center'>
              <h1 className='text-center text-6xl max-sm:text-3xl text-white font-bold'>About Us</h1>
              <p className='text-center text-xl text-gray-200 mt-4 px-4 md:px-8 md:w-[50%]'>
                Chasing the Vision for a better tomorrow where technology simplifies complex functions
              </p>
              <Link href="/contact" className="text-lg flex items-center border-2 px-4 py-2 mt-4 font-semibold uppercase rounded-md bg-white text-[#00B0FE] shadow-[0px_0px_8px_0px_#00B0FE]">Let's Connect</Link>
            </div>
          </div>



          <div className="absolute rotate-[270deg] text-[60px] text-[rgba(238,237,237,0.02)] font-bold left-[-13rem] top-[67rem]">About Company</div>

          <section className="w-full mx-auto p-[2rem_5rem] max-sm:py[10px] max-sm:px-[15px]">
            <div className="grid grid-cols-2 gap-[5rem] max-sm:grid-cols-1 max-sm:gap-2 items-center">

              <div className=" flex">
                <video autoPlay controls loop muted className="w-full rounded-lg">
                  <source src="/media/Introducation_video.mp4" type="video/mp4"></source>
                </video>
              </div>

              <div className='h-full relative'>
                <h1 className="text-[22px] max-sm:text-[20px] max-sm:text-center font-bold text-white">Get known us</h1>
                <h2 className="text-[36px] max-sm:text-[25px] max-sm:text-center font-bold mt-[5px] mb-[2rem] text-white">About Company</h2>
                <p className="text-[18px] max-sm:text-[14px] leading-[33px] text-justify text-[#A3A3A3]" >Let your imagination fly, this has always been the spirit that made Techmapperz possible, we were always free-thinkers, a team that believed that the solution to a complex problem need not be complex, that complex issues should have very simple solutions, and this is the change that we all believe in.</p>
                <button
                  style={{ boxShadow: "0px 0px 8px 0px #00B0FE" }}
                  className="bg-white text-[#00B0FE] mt-2 py-2 px-4 w-max rounded-full"><Link href={"/contact"} className="flex gap-2 justify-center items-center">Know More <FaArrowRightLong /></Link> </button>
              </div>
            </div>
          </section>

          <section className="p-[2rem_5rem] max-sm:py[10px] max-sm:px-[15px] bg-[rgba(33,33,33,1)]">
            <Missionvision />
          </section>

          <section>
            <Choose />
          </section>

          <div className="mx-auto w-full p-[2rem_5rem] max-sm:py[10px] max-sm:px-[15px]  bg-[rgba(14,14,14,1)]">
            <div className="flex w-full h-full items-center justify-around max-sm:flex-col">
              <div className="w-1/2 h-3/5 ml-10 max-sm:ml-0 max-sm:w-full max-sm:h-auto ">
                <Image src={How_do_we_work_img} alt="" className="w-[75%] max-sm:w-full rounded-md z-20 max-sm:mx-auto" />
              </div>

              <div className="w-1/2 max-sm:w-full">
                <div className=" text-[40px] max-sm:text-[20px] leading-[54px] font-bold text-white"><h1>How Do We Work</h1></div>

                <div className="flex flex-col gap-[2rem] w-full">
                  <p className="text-[18px] max-sm:text-[14px] leading-[33px] text-white text-justify" >
                    We are constantly looking for ways to keep us updated with the changing technology and evolving markets and demands. We believe that our performance should be more efficient, nimble, and flexible than before. That's where the Agile methodology comes in. We follow 4 values of Agile:
                  </p>
                  <ul className="list-disc max-sm:text-[14px] ml-[1.3rem] flex flex-col gap-4">
                    <li className='text-[#396ba9]'><p className='text-white text-[18px] max-sm:text-[14px]'>Individual and interactions over processes and tools.</p></li>
                    <li className='text-[#396ba9]'><p className='text-white text-[18px] max-sm:text-[14px]'>Working software over complete documentation.</p></li>
                    <li className='text-[#396ba9]'><p className='text-white text-[18px] max-sm:text-[14px]'>Customer collaboration over contract negotiation.</p></li>
                    <li className='text-[#396ba9]'><p className='text-white text-[18px] max-sm:text-[14px]'>Responding to change over following a plan.</p></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <section className="flex flex-col justify-center items-center gap-[1rem] p-[2rem_5rem] max-sm:py[10px] max-sm:px-[15px]">
            <div className="text-[18px] leading-[33px] text-white text-justify">
              <p className='text-lg max-sm:text-[14px]'>Following Agile methodology gives us a high degree of understanding of client requirements and collaboration between the client and the development team. We have happier clients because we maintain transparency throughout the process and our teams know and understand the client requirements and limitations better.</p>
            </div>
            <div className="text-[26px] max-sm:text-[20px] w-full text-center text-white p-4">
              <p>Some of the benefits that we would like to highlight of using the Agile methodology in our work are:</p>
            </div>
            <ul className="list-disc grid grid-cols-2 gap-[10px] justify-center items-center max-sm:items-start p-[2rem_0] max-sm:pl-4">
              <li className="text-[#396ba9]"><p className='text-white'>Cost protection and the time frame required.</p></li>
              <li className="text-[#396ba9]"><p className='text-white'>Constant feedback and a superior product result.</p></li>
              <li className="text-[#396ba9]"><p className='text-white'>Possibility of change during the process.</p></li>
              <li className="text-[#396ba9]"><p className='text-white'>Reduce the risk of error and the investment.</p></li>
            </ul>
          </section>

          <section className="w-full flex flex-col justify-center items-center p-[2rem_5rem] max-sm:py[10px] max-sm:px-[15px] border-t border-b border-gray-500">
            <div className="text-center mb-[3rem] max-sm:mb-0 text-[36px] leading-[54px] text-white">
              <h1 className='max-sm:text-[20px]'>Company value</h1>
            </div>
            <Image src={Group1} alt="" className="w-[1150px] max-sm:w-full" />
          </section>
        </div>
      </div>
    </div>
  )
}

export default About;
