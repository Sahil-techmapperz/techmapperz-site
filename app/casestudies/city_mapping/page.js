import ScrollToTop from '@/app/_Components/ScrollToTop'
import Gis_casestudies_1_banner from "@/public/Photos/Gis_casestudies_1.png";
import GIS_OBJECTIVES from "@/public/Photos/GIS_OBJECTIVES.png";
import welho_Solutions from "@/public/Photos/welho_Solutions.png";
import welho_Results from "@/public/Photos/welho_Results.png";
import welho_Inconclusion from "@/public/Photos/welho_Inconclusion.png";
import ChallengesBg from "@/public/Photos/Challenges_BG.png";
import Image from 'next/image';
import Scrool_Icons from '@/app/_Components/Scrool_Icons';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import Link from 'next/link';

const Gis = () => {
  return (
    <div id='CaseStudiesITServices' className='bg-gray-900'>
      <ScrollToTop />
      <div className='flex flex-col h-[250px] text-center items-center justify-center bg-cover bg-center' style={{ backgroundImage: 'url("/Photos/Rectangle41.png")' }}>
        <p className='text-white mt-[66px] mb-[30px] text-[66px] font-bold sm:text-[50px]'>GIS Portfolio</p>
        {/* <p className='text-white'>GIS Portfolio</p> */}
        <Link
          href="/contact"
          className="relative w-fit text-[18px] text-[#00B0FE] py-2 px-4 bg-white rounded-lg shadow-[0px_0px_8px_0px_#00B0FE] hover:text-[#D555B5] hover:shadow-[0px_0px_8px_0px_#D555B5] transition-all duration-300"
        >
         Contact Now 
        </Link>
      </div>
      <div className='w-full m-auto  bg-black'>
        <div className='text-white flex justify-center pb-[50px] items-center flex-col  relative'>
          <Image src={Gis_casestudies_1_banner} className='w-[60%] my-4 mt-[120px]' alt='Gis_casestudies_1_banner.png' />
          <p className='m-auto text-[20px] font-[600]'>City mapping</p>
          <p className='w-[65%] m-auto text-center'>
            Drones have revolutionized city mapping by providing high-resolution aerial imagery that can be integrated <br />
            into GIS systems. This technology enables cities to create detailed and up-to-date maps of urban <br />
            infrastructure, land use, and environmental conditions, supporting informed decision-<br />
            making and effective resource allocation. Drones play a crucial role in <br />
            optimizing emergency response, predicting potential hotspots, <br />
            and enhancing overall public safety.<br />

          </p>
        </div>

        <div className="flex gap-[50px] bg-gray-900 text-white py-[50px] px-[65px]" style={{ background: "linear-gradient(90deg, #393939 44.98%, #010101 86.2%)" }}>
          <div className="w-[65%]">
            <div className="relative w-fit">
              <Image src={ChallengesBg} alt="Challengesbg" />
              <h2 className="text-xl font-bold absolute inset-0 flex items-center left-[20px] text-black">
                OBJECTIVES
              </h2>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-transparent to-gray-500"></div>
            <p className="mb-2">
              <strong>Product Diversity:</strong> Curating and handling a various variety of well being merchandise, consisting of supplements,
              health equipment, and private care items, posed a task in phrases of categorization and organization.
            </p>
            <p className="mb-2">
              <strong>User Experience:</strong>  Ensuring a continuing and intuitive consumer revel in throughout gadgets and platforms,
              consisting of desktops, tablets, and smartphones, changed into a concern to beautify consumer engagement
              and satisfaction.
            </p>
            <p className="mb-2">
              <strong>Customer Support:</strong> Providing green and responsive customer service to cope with inquiries, clear up issues,
              and help customers in navigating the internet site and making knowledgeable shopping selections changed
              into crucial for constructing consider and loyalty.

            </p>
          </div>
          <div className="w-[35%] flex items-center justify-center">
            <Image src={GIS_OBJECTIVES} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>
        </div>

        <div className='w-full flex text-white gap-[50px] justify-center items-center py-[50px] px-[30px]'>

          <div className="w-[35%] flex items-center justify-center">
            <Image src={welho_Solutions} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>

          <div className="w-[60%]">
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white">
                Solutions
              </h2>
            </div>
            <p className="mb-2">
              <strong> Product Categorization :</strong> A complete categorization device changed into carried out to categorise well being
              merchandise into applicable classes and subcategories, facilitating clean navigation and product discovery
              for customers.


            </p>
            <p className="mb-2">
              <strong> Responsive Design :</strong> The internet site changed into advanced the usage of responsive layout concepts to make
              certain optimum overall performance and value throughout lots of gadgets and display sizes, improving
              accessibility and consumer revel in.
            </p>
            <p className="mb-2">
              <strong> Live Chat Support:</strong> A stay chat help function changed into included into the internet site to offer real-time help
              to customers, permitting them to hook up with customer service representatives and get hold of instantaneously
              assist and steerage as needed.

            </p>

          </div>
        </div>

        <div className="flex gap-[50px] bg-gray-900 text-white py-[50px] px-[65px]" style={{ background: "linear-gradient(90deg, #393939 44.98%, #010101 86.2%)" }}>
          <div className="w-[65%]">
            <div className="relative w-fit">
              <Image src={ChallengesBg} alt="Challengesbg" />
              <h2 className="text-xl font-bold absolute inset-0 flex items-center left-[20px] text-black">
              Benefits
              </h2>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-transparent to-gray-500"> </div>
              <h1 className='text-[20px] font-[600]'>City mapping in GIS offers numerous advantages:</h1>
              <ul className='list-disc m-8'>
                <li className='mt-2'>Data-driven insights for urban planning, resource allocation, and emergency response.</li>
                <li className='mt-2'>Streamlined workflows, reduced costs, and optimized resource utilization.</li>
                <li className='mt-2'>Environmental impact assessment, land use planning, and disaster risk reduction.</li>
                <li className='mt-2'>Streamlined workflows, reduced costs, and optimized resource utilization.</li>
                <li className='mt-2'>Site selection, market analysis, and investment planning.</li>
              </ul>
              <h1 className='text-[20px] font-[600]'>By effectively utilizing GIS, cities can achieve significant improvements in various 
              aspects of urban management and development.</h1>
             

          </div>
          <div className="w-[35%] flex items-center justify-center">
            <Image src={welho_Results} alt="welho Challenges" className="rounded-lg shadow-lg" />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Gis
