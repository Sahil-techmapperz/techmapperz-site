import Link from 'next/link';
import Image from 'next/image';
import Choose from './choose';
import Rectangle_6 from '@/public/Photos/Rectangle_6.png';
import Group1 from '@/public/Photos/Group1.png'
import Career4 from '@/public/Photos/career_idea-4.png'
import Career5 from '@/public/Photos/career_idea-5.png'
import ScrollToTop from '../_Components/ScrollToTop';

export const metadata = {
  title: "Techmapperz About",
  description: "Techmapperz map your business",
};

const About = () => {


  return (
    <div className="bg-[#181818]">
      <ScrollToTop/>
      <div className="max-w-full">

        <div className="mx-auto">
          <header className="w-full h-[400px] bg-cover bg-center flex flex-col justify-center items-center bg-[url('/Photos/banner_2.png')]">
            <h1 className="text-[66px] font-semibold leading-[99px] text-white">About US</h1>
            <p className="text-[20px] leading-[30px] text-white"><Link href="/">Home</Link> / About us</p>
          </header>

          <div className="text-center mt-[5%]">
            <h1 className="text-[26px] mb-[3rem] leading-[39px] text-white">Chasing the Vision for a better tomorrow where technology simplifies complex functions</h1>
          </div>
          <div className="absolute rotate-[270deg] text-[60px] text-[rgba(238,237,237,0.02)] font-bold left-[-13rem] top-[67rem]">About Company</div>

          <section className="w-full mx-auto p-[2rem_5rem]">
            <div className="grid grid-cols-2 gap-[5rem] items-center">

              <div className=" flex">
                <video autoPlay controls loop muted className="w-full rounded-lg">
                  <source src="/media/Introducation_video.mp4" type="video/mp4"></source>
                </video>
              </div>

              <div className='h-full relative'>
                <h1 className="text-[22px] font-bold  absolute top-[-60px]  text-white">Get known us</h1>
                <h2 className="text-[36px] font-bold mt-[-15px] mb-[2rem] text-white">About Company</h2>
                <p className="text-[18px] leading-[33px] text-justify text-[#A3A3A3]">Let your imagination fly, this has always been the spirit that made Techmapperz possible, we were always free-thinkers, a team that believed that the solution to a complex problem need not be complex, that complex issues should have very simple solutions, and this is the change that we all believe in.</p>
                
                <Link href="/" >
                  <div className="relative h-[40px] w-[120px] cursor-pointer mt-[2rem]">
                    <div className="absolute w-[30px] h-[30px] rounded-full bg-[#396ba9] right-0 "></div>
                    <h2 className="absolute text-[20px] text-white font-bold">Know More</h2>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          <section className="p-[2rem_5rem] bg-[rgba(33,33,33,1)]">
            <div className="grid grid-cols-2 gap-[5rem] justify-center items-center">

              <div className="flex flex-col">
                <Image src={Career4} alt="" className="h-[300px] object-fill mx-auto" />
                <h2 className="text-[26px] mt-[-10px] text-white">Our Mission</h2>
                <p className="text-[18px] leading-[33px] text-justify text-[#A3A3A3] mt-[2rem]">We at Techmapperz, understand that each organisation is different, and so are their challenges, so when we tailor solutions, we ensure that it is as simplified as it can be. Our mission is simplified solutions for complex problems.</p>
                <Link href="/contact">
                <div className="relative h-[40px] w-[120px] cursor-pointer mt-[2rem]">
                    <div className="absolute w-[30px] h-[30px] rounded-full bg-[#396ba9] right-0 "></div>
                    <h2 className="absolute text-[20px] text-white font-bold">Know More</h2>
                  </div>
                </Link>
              </div>

              <div className="flex flex-col">
                <Image src={Career5} alt="" className="h-[300px] object-fill mx-auto" />
                <h2 className="text-[26px] mb-[1.5rem] text-white">Our Vision</h2>
                <p className="text-[18px] leading-[33px] text-justify text-[#A3A3A3]">With technology becoming the most important part of our day to day life, we are driven by the commitment to deliver the best of IT solutions, to be a trusted provider of end-to-end IT services and solutions to businesses globally.</p>
                <Link href="/contact">
                <div className="relative h-[40px] w-[120px] cursor-pointer mt-[2rem]">
                    <div className="absolute w-[30px] h-[30px] rounded-full bg-[#396ba9] right-0 "></div>
                    <h2 className="absolute text-[20px] text-white font-bold">Know More</h2>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          <section>
            <Choose />
          </section>

          <div className="mx-auto w-full h-[800px] p-[2rem_5rem] bg-[rgba(14,14,14,1)]">
            <div className="flex gap-[100px] w-full h-full items-center justify-center">
              <div className="w-1/2 h-3/5 flex relative">
                <div className="w-[150px] h-[150px] rounded-full bg-[rgba(57,107,169,1)] absolute top-[-4rem] right-[1rem]"></div>
                <div className="w-[150px] h-[150px] rounded-full bg-[rgba(57,107,169,1)] absolute bottom-[-4rem] left-0"></div>
                <Image src={Rectangle_6} alt="" className="w-full h-full z-20" />
              </div>

              <div className="w-1/2 mt-[-4rem]">
                <div className=" text-[40px] leading-[54px] font-bold text-white"><h1>How Do We Work</h1></div>

                <div className="flex flex-col gap-[2rem] w-full">
                  <p className="text-[22px] leading-[33px] text-white text-justify">
                    We are constantly looking for ways to keep us updated with the changing technology and evolving markets and demands. We believe that our performance should be more efficient, nimble, and flexible than before. That's where the Agile methodology comes in. We follow 4 values of Agile:
                  </p>
                  <ul className="list-disc ml-[1.3rem] flex flex-col gap-4">
                    <li className='text-[#396ba9]'><p className='text-white text-xl'>Individual and interactions over processes and tools.</p></li>
                    <li className='text-[#396ba9]'><p className='text-white text-xl'>Working software over complete documentation.</p></li>
                    <li className='text-[#396ba9]'><p className='text-white text-xl'>Customer collaboration over contract negotiation.</p></li>
                    <li className='text-[#396ba9]'><p className='text-white text-xl'>Responding to change over following a plan.</p></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <section className="flex flex-col justify-center items-center gap-[1rem] p-[2rem_5rem]">
            <div className="text-[18px] leading-[33px] text-white text-justify">
              <p className='text-lg'>Following Agile methodology gives us a high degree of understanding of client requirements and collaboration between the client and the development team. We have happier clients because we maintain transparency throughout the process and our teams know and understand the client requirements and limitations better.</p>
            </div>
            <div className="text-[26px] w-full text-center text-white p-4">
              <p>Some of the benefits that we would like to highlight of using the Agile methodology in our work are:</p>
            </div>
            <ul className="list-disc grid grid-cols-2 gap-[10px] justify-center items-center p-[2rem_0]">
              <li className="text-[#396ba9]"><p className='text-white'>Cost protection and the time frame required.</p></li>
              <li className="text-[#396ba9]"><p className='text-white'>Constant feedback and a superior product result.</p></li>
              <li className="text-[#396ba9]"><p className='text-white'>Possibility of change during the process.</p></li>
              <li className="text-[#396ba9]"><p className='text-white'>Reduce the risk of error and the investment.</p></li>
            </ul>
          </section>

          <section className="w-full flex flex-col justify-center items-center p-[2rem_5rem] border-t border-gray-500 border-b border-gray-500">
            <div className="text-center mb-[3rem] text-[36px] leading-[54px] text-white">
              <h1>Company value</h1>
            </div>
            <Image src={Group1} alt="" className="w-[1150px]" />
          </section>
        </div>
      </div>
    </div>
  )
}

export default About;
