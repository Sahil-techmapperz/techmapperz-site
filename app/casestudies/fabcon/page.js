import ScrollToTop from '@/app/_Components/ScrollToTop'
import fabcon_banner from "@/public/Photos/fabcon_banner.png";
import Cocreatelab_logo from "@/public/Photos/Cocreatelab_logo.png";
import fabcon_Challenges from "@/public/Photos/fabcon_Challenges.png";
import fabcon_Solutions from "@/public/Photos/fabcon_Solutions.png";
import fabcon_Results from "@/public/Photos/fabcon_Results.png";
import fabcon_Inconclusion from "@/public/Photos/fabcon_Inconclusion.png";
import ChallengesBg from "@/public/Photos/Challenges_BG.png";
import Image from 'next/image';
import Scrool_Icons from '@/app/_Components/Scrool_Icons';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
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
          <p className='m-auto text-2xl font-bold'>LOGO</p>
          {/* <Image src={Cocreatelab_logo} className='m-auto py-4' alt='Co-Createall2.png' /> */}
          <p className='m-auto text-[20px] font-[600]'> Changing Insides Plan with the Fabcon Versatile App </p>
          <p className='w-[65%] m-auto text-center'>Fabcon could be a driving insides plan company committed to revolutionizing the way individuals plan and enhance
            their living spaces. To improve client involvement and availability, Fabcon propelled a portable application
            pointed at giving clients with helpful get to to their insides plan administrations and items.
          </p>
          <Image src={fabcon_banner} className='m-auto' alt='Co-Createall2.png' />

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
              <strong>Restricted Availability:</strong> Earlier to the versatile app dispatch, Fabcon's administrations were fundamentally
              open through their site, restricting the reach to clients who favored versatile gadgets for browsing and shopping.
            </p>
            <p className="mb-2">
              <strong>Need of Personalization:</strong> Fabcon struggled to provide tailored recommendations and create arrangements
              according to individual client preferences in the absence of a dedicated flexible platform.
            </p>
            <p className="mb-2">
              <strong>Complex Route :</strong> Exploring Fabcon's broad item catalog and plan administrations was awkward on littler
              screens, driving to a subpar client involvement for versatile clients.
            </p>
          </div>
          <div className="w-[35%] flex items-center justify-center">
            <Image src={fabcon_Challenges} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>
        </div>

        <div className='w-full flex text-white gap-[50px] justify-center items-center py-[70px] px-[30px]'>

          <div className="w-[35%] flex items-center justify-center">
            <Image src={fabcon_Solutions} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>

          <div className="w-[60%]">
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white">
                Solutions
              </h2>
            </div>
            <p className="mb-2">
              <strong> Portable App Improvement:</strong> Fabcon contributed within the advancement of a portable application
              accessible on both iOS and Android stages, giving clients with simple get to to their administrations and
              items on the go.

            </p>
            <p className="mb-2">
              <strong> Personalized Suggestions :</strong> The Fabcon app utilizes client information and inclinations to provide
              personalized plan proposals and item proposals, enhancing the overall shopping involvement.
            </p>
            <p className="mb-2">
              <strong> Rearranged Route :</strong>The versatile app highlights natural route and user-friendly interfacing, making it less
              demanding for clients to browse items, investigate plan thoughts, and lock in with Fabcon's administrations.
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
              <strong>Expanded Openness :</strong>The Fabcon versatile app essentially extended the company's reach, permitting clients
              to get to their administrations and items anytime, anyplace, driving to a boost in client engagement and deals.
            </p>
            <p className="mb-2">
              <strong>Improved Client Encounter : </strong> Enhanced Customer Experience: Customers reported a more enjoyable and
              consistent shopping experience because to the tailored recommendations and expedited path, which increased
              customer fulfillment and maintenance rates.

            </p>
            <p className="mb-2">
              <strong>Progressed Change Rates : </strong>The portable app contributed to an increment in transformations and income for
              Fabcon, illustrating the adequacy of portable innovation in driving commerce development and victory.
            </p>
          </div>
          <div className="w-[35%] flex items-center justify-center">
            <Image src={fabcon_Results} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>
        </div>


        <div className='w-full flex text-white gap-[50px] justify-center items-center py-[70px] px-[30px]'>

          <div className="w-[35%] flex items-center justify-center">
            <Image src={fabcon_Inconclusion} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>

          <div className="w-[60%]">
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white">
                In conclusion
              </h2>
            </div>
            <p className="mb-2">
              The Fabcon portable app has changed the way clients lock in with interior plan administrations, overcoming
              challenges related to availability and client encounter to convey personalized and helpful arrangements
              to clients.
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
