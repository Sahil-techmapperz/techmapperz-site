import ScrollToTop from '@/app/_Components/ScrollToTop'
import CoCreateall from "@/public/Photos/Co-Createall2.png";
import Cocreatelab_logo from "@/public/Photos/Cocreatelab_logo.png";
import Cocreatelabs_Challenges from "@/public/Photos/Cocreatelabs_Challenges.png";
import Cocreatelabs_Solutions from "@/public/Photos/Cocreatelabs_Solutions.png";
import Cocreatelabs_Results from "@/public/Photos/Cocreatelabs_Results.png";
import Cocreatelabs_Inconclusion from "@/public/Photos/Cocreatelabs_Inconclusion.png";
import ChallengesBg from "@/public/Photos/Challenges_BG.png";
import Image from 'next/image';
import Scrool_Icons from '@/app/_Components/Scrool_Icons';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare,FaArrowRightLong } from 'react-icons/fa';
import Link from 'next/link';

const Cocreatelabs = () => {
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
          <Image src={Cocreatelab_logo} className='m-auto py-4' alt='Co-Createall2.png' />
          <p className='m-auto text-[20px] font-[600]'> Mentor and Mentee Dashboard for CoCreate Labs AMC </p>
          <p className='w-[65%] m-auto text-center'>First of all, A state-of-the-art net tool, the CoCreate Labs AMC Mentor and Mentee Dashboard, become created
            to assist with mentorship and teamwork within the CoCreate Labs program. The platform offers a easy and
            interactive revel in for contributors to engage with mentors, get right of entry to resources, and screen
            their progress, with wonderful dashboards for mentors and mentees. The dashboard, that is hosted
            on Amazon Web Services (AWS), makes use of current net technology to offer a dynamic and
            intuitive consumer interface.
          </p>
          <Image src={CoCreateall} className='w-full' alt='Co-Createall2.png' />

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
              <strong>Complexity of Data Management:</strong> CoCreate Labs offers a huge extent of statistics associated with
              application participants, mentors, sessions, and resources. Managing these statistics
              efficiently posed a big challenge.
            </p>
            <p className="mb-2">
              <strong>User Access Control:</strong> Ensuring that only authorized employees have access to sensitive statistics and
              administrative capabilities while retaining ease of use for directors posed another challenge.
            </p>
            <p className="mb-2">
              <strong>Real-time Updates:</strong> Providing directors with real-time updates and insights into application performance and player
              engagement required seamless integration with backend structures.
            </p>
          </div>
          <div className="w-[35%] flex items-center justify-center">
            <Image src={Cocreatelabs_Challenges} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>
        </div>

        <div className='w-full flex text-white gap-[50px] justify-center items-center py-[70px] px-[30px]'>

          <div className="w-[35%] flex items-center justify-center">
            <Image src={Cocreatelabs_Solutions} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>

          <div className="w-[60%]">
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white">
                Solutions
              </h2>
            </div>
            <p className="mb-2">
              <strong> Robust Data Management System :</strong> The dashboard changed into constructed with a sturdy statistics
              control machine that lets in directors to effortlessly organize, filter, and examine statistics associated with
              application sports, participants, and resources.

            </p>
            <p className="mb-2">
              <strong> A cutting-edge system :</strong> It was set up to provide different levels of access to administrators based on
              their roles. By seamlessly connecting with backend systems and APIs, the dashboard can offer instant
              updates and insights, ensuring administrators always have access to the latest information.
            </p>

          </div>
        </div>

        <div className="flex gap-4 bg-gray-900 text-white py-5 px-5 mt-[100px]" style={{ background: "linear-gradient(90deg, #393939 44.98%, #010101 86.2%)" }}>
          <div className="w-[65%]">
            <div className="relative w-fit">
              <Image src={ChallengesBg} alt="Challengesbg" />
              <h2 className="text-xl font-bold absolute inset-0 flex items-center left-[20px] text-black">
                Results
              </h2>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-transparent to-gray-500"></div>
            <p className="mb-2">
              <strong>Improved Efficiency :</strong>The Cocreate Labs AMC Super Admin Dashboard has appreciably stepped forward the
              performance of administrative duties via way of means of supplying directors with a centralized platform to
              control application sports, participants, and resources.

            </p>
            <p className="mb-2">
              <strong>Enhanced Security : </strong> The implementation of granular consumer permissions has greater the safety of touchy
              statistics and administrative capabilities, making sure that simplest legal employees have get admission to to
              applicable records.

            </p>
            <p className="mb-2">
              <strong>Better Decision Making : </strong>Real-time updates and insights supplied via way of means of the dashboard have
              empowered directors to make knowledgeable selections and take proactive measures to optimize application
              consequences and player engagement.

            </p>
          </div>
          <div className="w-[35%] flex items-center justify-center">
            <Image src={Cocreatelabs_Results} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>
        </div>


        <div className='w-full flex text-white gap-[50px] justify-center items-center py-[70px] px-[30px]'>

          <div className="w-[35%] flex items-center justify-center">
            <Image src={Cocreatelabs_Inconclusion} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>

          <div className="w-[60%]">
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white">
                In conclusion
              </h2>
            </div>
            <p className="mb-2">
              the CoCreate Labs AMC Super Admin Dashboard has effectively addressed the demanding
              situations confronted via way of means of directors and added tangible outcomes in phrases of performance,
              security, and decision-making capabilities. With its intuitive interface and effective capabilities, the dashboard
              keeps to play a crucial position in assisting the fulfillment of the Cocreatelabs

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

export default Cocreatelabs
