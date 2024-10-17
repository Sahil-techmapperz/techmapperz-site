import ScrollToTop from '@/app/_Components/ScrollToTop'
import Gis_casestudies_1_banner from "@/public/Photos/Gis2_casestudies_1.png";
import GIS_OBJECTIVES from "@/public/Photos/GIS2_OBJECTIVES.png";
import welho_Solutions from "@/public/Photos/welho_Solutions.png";
import welho_Results from "@/public/Photos/welho_Results.png";
import ChallengesBg from "@/public/Photos/Challenges_BG.png";
import Image from 'next/image';
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
      <div className='w-full m-auto bg-black'>
        <div className='text-white  flex justify-center items-center flex-col  relative mb-[50px]'>
          <Image src={Gis_casestudies_1_banner} className='w-[30%] mt-[100px] mb-6' alt='Gis_casestudies_1_banner.png' />
          <p className='m-auto text-[20px] font-[600]'>Landuse and Landcover mapping</p>
          <p className='w-[70%] m-auto text-center text-[18px]'>
            Landuse and Landcover mapping involves creating detailed representations of human settlements using geogr-<br />
            aphic information systems. This entails identifying and delineating residential zones, urban areas, rural <br />
            settlements, and other inhabited regions. By overlaying various data layers such as population <br />
            density, building footprints, infrastructure, and land use, GIS facilitates comprehensive <br />
            analysis and visualization of habitation patterns. This information is crucial for <br />
            urban planning, disaster management, public health, and<br />
            resource allocation.<br />
          </p>
        </div>

        <div className="flex gap-4 px-[50px] bg-black text-white py-5" style={{ background: "linear-gradient(90deg, #393939 44.98%, #010101 86.2%)" }}>
          <div className="w-[65%]">
            <div className="relative w-fit">
              <Image src={ChallengesBg} alt="Challengesbg" />
              <h2 className="text-xl font-bold absolute inset-0 flex items-center left-[20px] text-black">
                OBJECTIVES
              </h2>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-transparent to-gray-500"></div>
            <ul className='list-disc text-[18px] ml-6'>
              <li>GIS allows for the creation of detailed and precise maps of habitation areas, incorporating various data layers such as land use, infrastructure, and population density</li>
              <li> Landuse and Landcover mapping can inform decisions about land use zoning, infrastructure
                development, and service provision, ensuring that urban areas are planned and managed effectively.
              </li>
              <li>LU/LCcan be used to identify vulnerable areas, assess damage, and allocate
                resources during emergencies.</li>
              <li>Promote sustainable development by identifying areas for conservation and assessing the
                impact of development projects.
              </li>
              <li>By understanding the distribution and density of habitation areas, decision makers can ident-
                ify areas for conservation, development, and infrastructure improvements that minimize
                negative environmental impacts.
              </li>
              <li>By understanding the distribution and density of habitation areas, decision makers can ident-
                ify areas for conservation, development, and infrastructure improvements that minimize
                negative environmental impacts.
              </li>
              <li>To help and optimize the delivery of public services, such as transportation, healthcare, and
                education, by identifying areas of need and ensuring equitable distribution of resources.</li>
            </ul>
          </div>
          <div className="w-[35%] flex items-center justify-center">
            <Image src={GIS_OBJECTIVES} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>
        </div>

        <div className='w-full flex px-[50px] text-white gap-[50px] justify-center items-center py-[50px]'>

          <div className="w-[35%] flex items-center justify-center">
            <Image src={welho_Solutions} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>

          <div className="w-[60%]">
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white">
                Solutions
              </h2>
            </div>
            <p className="mb-2 text-[18px]">
              An all-encompassing strategy is needed to address the problems with habitation area map-p
              ing. Crowdsourcing, ground truth data collection, and remote sensing (drone image) can all
              be used to improve data accuracy.

            </p>
            <p className="mb-2 text-[18px]">
              Defining settlement boundaries can be aided by using a combination of administrative, stati-
              stical, and physical criteria. A scale of 1:50 can provide sufficient detail for most mapping
              purposes, allowing for the creation of multiple layers (e.g., building footprints, roads, land use,
              etc.) and sub-layers (e.g., building types, road classifications, land use categories, etc.).

            </p>

          </div>
        </div>

        <div className="flex gap-4 bg-gray-900 text-white py-5 px-[50px]" style={{ background: "linear-gradient(90deg, #393939 44.98%, #010101 86.2%)" }}>
          <div className="w-[65%]">
            <div className="relative w-fit">
              <Image src={ChallengesBg} alt="Challengesbg" />
              <h2 className="text-xl font-bold absolute inset-0 flex items-center left-[20px] text-black">
                Benefits
              </h2>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-transparent to-gray-500"> </div>
            <ul className='list-disc m-8'>
              <li className='mt-2'>Determines the best use of land, infrastructural requirements, and growth patterns.</li>
              <li className='mt-2'>Optimizes service locations based on population density.</li>
              <li className='mt-2'>Encourages policymaking and demographic analysis. </li>
              <li className='mt-2'>Manages utility, housing, and transportation developments.</li>
              <li className='mt-2'>Assesses how habitation and natural elements interact. 
              </li>
              <li className='mt-2'>Locates possible markets and financial prospects. </li>
              <li className='mt-2'>Helps with land conservation and zoning considerations. </li>
              <li className='mt-2'>Aids in locating possible hotspots and conflicts over resources.</li>
            </ul>


          </div>
          <div className="w-[35%] flex items-center justify-center">
            {/* <Image src={welho_Results} alt="welho Challenges" className="rounded-lg shadow-lg" /> */}
          </div>
        </div>

      </div>

    </div>
  )
}

export default Gis
