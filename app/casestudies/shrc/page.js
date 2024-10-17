import ScrollToTop from '@/app/_Components/ScrollToTop'
import shrc_banner from "@/public/Photos/shrc_banner.png";
import Shrc_logo from "@/public/Photos/Shrc_logo.png";
import shrc_Challenges from "@/public/Photos/shrc_Challenges.png";
import shrc_Solutions from "@/public/Photos/shrc_Solutions.png";
import shrc_Results from "@/public/Photos/shrc_Results.png";
import shrc_Inconclusion from "@/public/Photos/shrc_Inconclusion.png";
import ChallengesBg from "@/public/Photos/Challenges_BG.png";
import Image from 'next/image';
import Scrool_Icons from '@/app/_Components/Scrool_Icons';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import Link from 'next/link';

const Shrc = () => {
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
          <Image src={Shrc_logo} className='w-[50px] m-auto py-4' alt='Welho_logo.png' />
          <p className='m-auto text-[20px] font-[600]'> Empowering Welfare Societies with SHRC Introduction </p>
          <p className='w-[65%] m-auto text-center'>
            First of all, A specialized platform called the Special Human Rights Commision(SHRC) aims to encourage innovation
            and cooperation among welfare societies. Constructed using the CodeIgniter 4 framework and PHP, SHRC offers
            a safe environment for members to communicate and engage. By offering features like personalized
            notifications and two-step OTP verification, the platform increases community engagement
            while guaranteeing security.
          </p>
          <Image src={shrc_banner} className='mx-auto' alt='Welho_banner.png' />

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
              <strong>Security Issues:</strong>
              In order to build trust and protect sensitive member data, welfare societies require a secure
              platform.
            </p>
            <p className="mb-2">
              <strong>Absence of Engagement:</strong>  Conventional means of communication might not be able to successfully involve
              participants and foster a feeling of community.
            </p>
            <p className="mb-2">
              <strong>Complicated Registration Process:</strong> Protracted registration processes may discourage prospective users from
              signing up for the platform.
            </p>
          </div>
          <div className="w-[35%] flex items-center justify-center">
            <Image src={shrc_Challenges} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>
        </div>

        <div className='w-full flex text-white gap-[50px] justify-center items-center py-[50px] px-[30px]'>

          <div className="w-[35%] flex items-center justify-center">
            <Image src={shrc_Solutions} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>

          <div className="w-[60%]">
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white">
                Solutions
              </h2>
            </div>
            <p className="mb-2">
              <strong> Two-Step OTP Verification :</strong> To improve security and authenticate member registrations, a strong
              verification procedure was put in place
            </p>
            <p className="mb-2">
              <strong> Personalized Notifications:</strong>  Members' mobile devices display personalized notifications, which
              boost interaction and communication.
            </p>
            <p className="mb-2">
              <strong> Improved  the registration process:</strong>
              to make it easier for more members to join, with
              added security measures .
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
              <strong>wo-step OTP verification :</strong>for enhanced protection of sensitive information and secure member accounts.
            </p>
            <p className="mb-2">
              <strong>Enhanced Community Engagement : </strong> Sending out birthday greetings and notifications in a personalized
              way made members feel like they belonged, which increased their engagement in events held in the
              community.
            </p>
            <p className="mb-2">
              <strong>Enhanced User Experience : </strong> All members had a seamless and joyful experience thanks to the user-friendly
              interface and streamlined registration process, which raised user satisfaction.
            </p>
          </div>
          <div className="w-[35%] flex items-center justify-center">
            <Image src={shrc_Results} alt="welho Challenges" className="rounded-lg shadow-lg" />
          </div>
        </div>


        <div className='w-full flex text-white gap-[50px] justify-center items-center py-[70px] px-[30px]'>

          <div className="w-[35%] flex items-center justify-center">
            <Image src={shrc_Inconclusion} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>

          <div className="w-[60%]">
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white">
                In  Conclusion
              </h2>
            </div>
            <p className="mb-2">
              The SHRC India internet site has efficiently addressed the demanding situations confronted via way of means
              of welfare societies in communique, aid accessibility, and security, ensuing in progressed collaboration,
              stronger aid accessibility, and reinforced network engagement. By supplying a centralized platform for
              communique and aid-sharing, the internet site has empowered welfare societies to paintings collectively
              extra successfully toward their not unusual place goals, in the end contributing to the development of
              society and the welfare of its members.
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

export default Shrc
