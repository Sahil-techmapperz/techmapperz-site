import ScrollToTop from '@/app/_Components/ScrollToTop'
import premierautosource_banner from "@/public/Photos/premierautosource_banner.png";
import premierautosource_logo from "@/public/Photos/premierautosource_logo.png";
import premierautosource_Challenges from "@/public/Photos/premierautosource_Challenges.png";
import premierautosource_Solutions from "@/public/Photos/premierautosource_Solutions.png";
import premierautosource_Results from "@/public/Photos/premierautosource_Results.png";
import premierautosource_Inconclusion from "@/public/Photos/premierautosource_Inconclusion.png";
import ChallengesBg from "@/public/Photos/Challenges_BG.png";
import Image from 'next/image';
import Scrool_Icons from '@/app/_Components/Scrool_Icons';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import Link from 'next/link';

const Premierautosource = () => {
  return (
    <div id='CaseStudiesITServices' className='bg-gray-900'>
      <ScrollToTop />
      <div className='flex flex-col h-[350px] text-center items-center justify-center bg-cover bg-center' style={{ backgroundImage: 'url("/Photos/Rectangle41.png")' }}>
        <p className='text-white mt-[66px] mb-[30px] text-[66px] font-bold sm:text-[50px]'>IT Portfolio</p>
        {/* <p className='text-white'>IT Portfolio</p> */}
        <Link
          href="/contact"
          className="relative w-fit text-[18px] text-[#00B0FE] py-2 px-4 bg-white rounded-lg shadow-[0px_0px_8px_0px_#00B0FE] hover:text-[#D555B5] hover:shadow-[0px_0px_8px_0px_#D555B5] transition-all duration-300"
        >
         Contact Now 
        </Link>
      </div>
      <div className='w-full m-auto bg-gray-900'>
        {/* <div className="w-full h-[70px]" style={{ background: "linear-gradient(90deg, #9F9F9F 0%, #393939 49%, #9F9F9F 100%)" }}>
          <p className='text-white text-xl h-full font-[600] flex justify-center items-center'>TechMapperz offers software development, web design, mobile app development, digital marketing, and IT consulting services. </p>
        </div> */}
        <div className='text-white flex justify-center flex-col  relative'>
          {/* <p className='absolute top-8 left-5'>Case Studies/IT Services</p> */}
          <Image src={premierautosource_logo} className='m-auto py-4' alt='Welho_logo.png' />
          <p className='m-auto text-[20px] font-[600]'> PremierAutoSource </p>
          <p className='w-[65%] m-auto text-center'>
            PremierAutoSource is a dynamic on-line platform devoted to offering complete facts and sources associated with
            automobiles. Developed with a focal point on person revel in and functionality, the internet site serves as a
            one-prevent vacation spot for automobile enthusiasts, imparting information, reviews, guides, and
            enterprise insights. Powered via way of means of present day internet technologies, Premier
            AutoSource can provide a continuing and interactive revel in for site visitors, catering to
            their various wishes and pursuits with inside the automobile world.

          </p>
          <Image src={premierautosource_banner} className='mt-[20px] w-full' alt='Welho_banner.png' />

        </div>

        <div className="flex gap-4 bg-gray-900 text-white py-5 px-5 mt-[100px]" style={{ background: "linear-gradient(90deg, #393939 44.98%, #010101 86.2%)" }}>
          <div className="w-[65%]">
            <div className="relative w-fit">
              <Image src={ChallengesBg} alt="Challengesbg" />
              <h2 className="text-xl font-bold absolute inset-0 flex items-center left-[20px] text-black">
                Challenges
              </h2>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-transparent to-gray-500"></div>
            <p className="mb-2">
              <strong>Content Managemen:</strong>
              Curating and dealing with a full-size quantity of dynamic content material, along with
              information updates, articles, and videos, posed a undertaking in phrases of agency and accessibility.
            </p>
            <p className="mb-2">
              <strong>User Engagemen:</strong>   Encouraging energetic engagement and participation from site visitors inside the shape
              of comments, shares, and interactions with the internet site’s sources supplied a undertaking.
            </p>
            <p className="mb-2">
              <strong>Mobile Responsiveness:</strong>  Ensuring that the internet site is absolutely responsive and optimized for cellular
              gadgets to offer a steady and exciting person revel in throughout all systems changed into a key undertaking
            </p>
          </div>
          <div className="w-[35%] flex items-center justify-center">
            <Image src={premierautosource_Challenges} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>
        </div>

        <div className='w-full flex text-white gap-[50px] justify-center items-center py-[50px] px-[30px]'>

          <div className="w-[35%] flex items-center justify-center">
            <Image src={premierautosource_Solutions} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>

          <div className="w-[60%]">
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white">
                Solutions
              </h2>
            </div>
            <p className="mb-2">
              <strong> Content Management System :</strong> A strong content material control system (CMS) changed into carried
              out to streamline the method of content material creation, editing, and publishing, permitting efficient
              organization and categorization of sources.

            </p>
            <p className="mb-2">
              <strong> Interactive Features :</strong>  Interactive factors inclusive of remark sections, social media sharing buttons,
              and person polls had been included into the internet site to inspire vacationer engagement and
              interplay with the content material.
            </p>
            <p className="mb-2">
              <strong> Mobile Optimization:</strong>
              The internet site underwent rigorous checking out and optimization to make sure
              compatibility and responsiveness throughout a huge variety of gadgets and display screen sizes, offering
              a continuing surfing revel in for cellular users.
            </p>
          </div>
        </div>

        <div className="flex gap-4 bg-gray-900 text-white py-5 px-5" style={{ background: "linear-gradient(90deg, #393939 44.98%, #010101 86.2%)" }}>
          <div className="w-[65%]">
            <div className="relative w-fit">
              <Image src={ChallengesBg} alt="Challengesbg" />
              <h2 className="text-xl font-bold absolute inset-0 flex items-center left-[20px] text-black">
                Results
              </h2>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-transparent to-gray-500"></div>
            <p className="mb-2">
              <strong>Comprehensive Resource Hub :</strong>PremierAutoSource.in has set up itself as a go-to useful resource hub for
              automobile enthusiasts, imparting a wealth of facts and insights on numerous automobile topics.
            </p>
            <p className="mb-2">
              <strong>Increased User Engagement : </strong>  The implementation of interactive capabilities has brought about improved
              person engagement and participation, with site visitors actively commenting, sharing, and interacting with the
              internet site's content material.

            </p>
            <p className="mb-2">
              <strong>Enhanced Mobile Experience : </strong> The internet site's cellular optimization efforts have led to a substantially stepped
              forward person revel in for cellular site visitors, main to better retention costs and improved site visitors from
              cellular gadgets.
            </p>
          </div>
          <div className="w-[35%] flex items-center justify-center">
            <Image src={premierautosource_Results} alt="welho Challenges" className="rounded-lg shadow-lg" />
          </div>
        </div>


        <div className='w-full flex text-white gap-[50px] justify-center items-center py-[70px] px-[30px]'>

          <div className="w-[35%] flex items-center justify-center">
            <Image src={premierautosource_Inconclusion} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>

          <div className="w-[60%]">
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white">
                In  Conclusion
              </h2>
            </div>
            <p className="mb-2">
              PremierAutoSource  has efficiently addressed the demanding situations of content material control, person
              engagement, and cellular responsiveness, handing over tangible consequences withinside the shape of a
              complete useful resource hub, improved person engagement, and an stronger cellular revel in. As a result,
              the internet site keeps to function a precious on-line vacation spot for automobile enthusiasts, riding
              endured increase and fulfillment withinside the automobile enterprise.
            </p>

          </div>
        </div>

        <div className="w-full flex flex-col justify-center text-white items-center">
          <h1 className='text-2xl font-bold'>Technology Stacks</h1>
          <p className='w-[40%] text-center'>We have used the latest technologies that can justify client requirements at
            the best to deliver bug-free solutions.</p>
        </div>

        <Scrool_Icons icons={[
          <FaReact color="#61DBFB" size={60} />,
          <FaNodeJs color="#68A063" size={60} />,
          <FaPython color="#306998" size={60} />,
          <FaHtml5 color="#E44D26" size={60} />,
          <FaCss3Alt color="#264de4" size={60} />,
          <FaJsSquare color="#F0DB4F" size={60} />
        ]} />

        <div>

        </div>

      </div>

    </div>
  )
}

export default Premierautosource
