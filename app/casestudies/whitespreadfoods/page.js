import ScrollToTop from '@/app/_Components/ScrollToTop'
import whitespreadfoods_banner from "@/public/Photos/whitespreadfoods_banner.png";
import whitespreadfoods_logo from "@/public/Photos/whitespreadfoods_logo.png";
import whitespreadfoods_Challenges from "@/public/Photos/whitespreadfoods_Challenges.png";
import whitespreadfoods_Solutions from "@/public/Photos/whitespreadfoods_Solutions.png";
import whitespreadfoods_Results from "@/public/Photos/whitespreadfoods_Results.png";
import whitespreadfoods_Inconclusion from "@/public/Photos/whitespreadfoods_Inconclusion.png";
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
          {/* <p className='absolute top-8 left-5'>Case Studies/IT Services</p> */}
          <Image src={whitespreadfoods_logo} className='m-auto py-4 w-[350px]' alt='Co-Createall2.png' />
          <p className='m-auto text-[20px] font-[600]'>White Spread Foods </p>
          <p className='w-[65%] m-auto text-center'>The White Spread Foods Dashboard can be described as an all-encompassing solution intended to give information on
            multiple facets of the company’s functioning in real time. With this core interface, executives get a single, central
            view into KPIs, supply chain figures, quality assurance and control figures, market trends, and sustainability
            initiatives. The aim is to facilitate improvement to decision making, efficiency and effectiveness of the business processes.
          </p>
          <Image src={whitespreadfoods_banner} className='m-auto' alt='Co-Createall2.png' />

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
              <strong>Data Integration:</strong> Aggregating information from different sources into one system or, more specifically, into a
              single dashboard.
            </p>
            <p className="mb-2">
              <strong>Real-Time Monitoring:</strong> The dashboard must update in real-time so that the relevant decisions can be made
              when the data is current.
            </p>
            <p className="mb-2">
              <strong>User Accessibility:</strong> Designing the dashboard in such way that there will no problem faced by different departments
              with different requirements.
            </p>
            <p className="mb-2">
              <strong>Actionable Insights:</strong> Turning unstructured data into information that can be used when making choices on the
              organization’s strategic direction.
            </p>
            <p className="mb-2">
              <strong>Scalability:</strong> Making certain that the integrated dashboard can easily grow with the size of the company and
              complex data demands of the organization.
            </p>
          </div>
          <div className="w-[35%] flex items-center justify-center">
            <Image src={whitespreadfoods_Challenges} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>
        </div>

        <div className='w-full flex text-white gap-[50px] justify-center items-center py-[70px] px-[30px]'>

          <div className="w-[35%] flex items-center justify-center">
            <Image src={whitespreadfoods_Solutions} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>

          <div className="w-[60%]">
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white">
                Solutions
              </h2>
            </div>
            <p className="mb-2">
              <strong> Unified Data Platform :</strong> The need to come up with a more effective information integration strategy
              to merge data from various sources to the dashboard.
            </p>
            <p className="mb-2">
              <strong> Real-Time Data Processing :</strong> Employing techniques in the processing of data that ensures that the
              latest information is available to the client as and when it happens.
            </p>
            <p className="mb-2">
              <strong> Intuitive Interface :</strong> It can be an effectively designed navigation menu and additional views most
              appropriate for every department
            </p>
            <p className="mb-2">
              <strong> Advanced Analytics :</strong> Organizing the materials by analytics which involves the various modeling
              and analyzing tools that work on the data.
            </p>
            <p className="mb-2">
              <strong> Scalable Architecture :</strong>  Establishing organizational dashboard architecture that can accommodate
              large amounts and levels of processed data.
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
              <strong>Improved Efficiency :</strong> Implementation of centralized data management allowed to always have up-to-date
              and accurate customers’ details.
            </p>
            <p className="mb-2">
              <strong>Timely Decision-Making : </strong> This helped for instance in decision-making processes since the data could be updated
              in real-time.
            </p>
            <p className="mb-2">
              <strong>Enhanced User Experience  : </strong>A more user-friendly and simple interface were positively received and ensured better
              work in every department.
            </p>
            <p className="mb-2">
              <strong>Actionable Insights : </strong>Additional analytical features include detailed analysis of business indicators that allowed for
              new strategic and operational adjustments
            </p>
            <p className="mb-2">
              <strong>Scalability Achieved : </strong>These aspects made the possibility of the further development of the dashboard using the
              scalable architecture into the company’s needs possible.
            </p>
          </div>
          <div className="w-[35%] flex items-center justify-center">
            <Image src={whitespreadfoods_Results} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>
        </div>


        <div className='w-full flex text-white gap-[50px] justify-center items-center py-[70px] px-[30px]'>

          <div className="w-[35%] flex items-center justify-center">
            <Image src={whitespreadfoods_Inconclusion} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>

          <div className="w-[60%]">
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white">
                In conclusion
              </h2>
            </div>
            <p className="mb-2">
              As it has been previously described, the White Spread Foods Dashboard effectively tackled the issues of
              the company regarding data management, real-time tracking, user interface, creation of useful
              outputs, and maintainability. The tool depends on analysing sales data, which has become a core
              strategy that enhances organisational decision making and effectiveness.

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
