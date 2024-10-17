import ScrollToTop from '@/app/_Components/ScrollToTop'
import crm_banner from "@/public/Photos/crm_banner.png";
import crm_logo from "@/public/Photos/crm_logo.png";
import crm_Challenges from "@/public/Photos/crm_Challenges.png";
import crm_Solutions from "@/public/Photos/crm_Solutions.png";
import crm_Results from "@/public/Photos/crm_Results.png";
import crm_Inconclusion from "@/public/Photos/crm_Inconclusion.png";
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
          <Image src={crm_logo} className='m-auto py-4' alt='Co-Createall2.png' />
          <p className='m-auto text-[20px] font-[600]'> Techmapperz CRM </p>
          <p className='w-[65%] m-auto text-center'>The sales, enhancements, customers relationship management software is aimed at providing the factual data and
            management for customer interaction for the organization known as Techmapperz CRM. It  is this powerful tool,
            which consolidates sales, marketing and customer service data and activity and presents it in the
            neatly established Customer Relationship Management framework.
          </p>
          <Image src={crm_banner} className='m-auto' alt='Co-Createall2.png' />

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
              <strong>Data Management:</strong>Processing and controlling large amounts of customer data and their correctness.
            </p>
            <p className="mb-2">
              <strong>Integration Issues:</strong> Encompassing the CRM with the other systems and tools which are employed by the organization.
            </p>
            <p className="mb-2">
              <strong>User Adoption:</strong> Making sure that everyone in the team is at ease, and capable of effectively operating on the new CRM.
            </p>
            <p className="mb-2">
              <strong>Customization:</strong> Adapting to the CRM to the needs of the business.
            </p>
            <p className="mb-2">
              <strong>Reporting and Analytics:</strong> The fourth common challenge that inventors faced is centerd on the ability to yield
              significant information from the data that is gathered.
            </p>
          </div>
          <div className="w-[35%] flex items-center justify-center">
            <Image src={crm_Challenges} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>
        </div>

        <div className='w-full flex text-white gap-[50px] justify-center items-center py-[70px] px-[30px]'>

          <div className="w-[35%] flex items-center justify-center">
            <Image src={crm_Solutions} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>

          <div className="w-[60%]">
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white">
                Solutions
              </h2>
            </div>
            <p className="mb-2">
              <strong>Centralized Data Repository :</strong> Adopting an easy to manage system by having a centralized database
              in the existing Techmapperz CRM to keep customers records.
            </p>
            <p className="mb-2">
              <strong> Seamless Integration :</strong>  Implementing good satisfying APIs and middleware solutions to enable the
              integration of CRM with the other systems.
            </p>
            <p className="mb-2">
              <strong> STraining Programs :</strong>  Providing detailed orientational training sessions in order to increase the users’
              engagement and effectiveness.
            </p>
            <p className="mb-2">
              <strong> Customization Options :</strong>   Having many customizable settings that would help incorporate the CRM
              into business processes.
            </p>
            <p className="mb-2">
              <strong> Advanced Analytics Tools :</strong>   The ability to incorporate high level analytics and effective reporting to
              analyze data captured on customers in order to get insights.
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
              <strong>Improved Data Accuracy :</strong>Implementation of centralized data management allowed to always have up-to-date
              and accurate customers’ details.
            </p>
            <p className="mb-2">
              <strong>Enhanced Efficiency : </strong>  In this case, the integration with the existing systems made operational processes more
              efficient.
            </p>
            <p className="mb-2">
              <strong>Higher User Adoption : </strong>Selective implementation and subsequent training helped in enhancing general purpose
              users’ effectiveness, as well as the usage rates.
            </p>
            <p className="mb-2">
              <strong>Business Alignment : </strong>Some of the elements were developed to increase the level of customization so that the
              CRM fitted the particular needs and functions of a business.
            </p>
            <p className="mb-2">
              <strong>Insightful Reporting : </strong> Increased efficiency of the analytics offered better understanding of customers and
              organization’s processes.
            </p>
          </div>
          <div className="w-[35%] flex items-center justify-center">
            <Image src={crm_Results} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>
        </div>


        <div className='w-full flex text-white gap-[50px] justify-center items-center py-[70px] px-[30px]'>

          <div className="w-[35%] flex items-center justify-center">
            <Image src={crm_Inconclusion} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>

          <div className="w-[60%]">
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white">
                In conclusion
              </h2>
            </div>
            <p className="mb-2">
              As observed, Techmapperz CRM was able to overcome the problems encountered in the organization, and in doing
              so created enriched opportunities for better data handling and unification, as well as increasing user take-up of corresponding tools. It is stated that decision-makers were able to customize the CRM options and gain valuable analytic insights using the options that are provided for the business, which in return helped the business to work towards meeting customers’ needs and gain positive outcomes for the business entity.

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
