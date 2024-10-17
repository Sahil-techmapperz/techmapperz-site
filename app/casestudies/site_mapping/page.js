import ScrollToTop from '@/app/_Components/ScrollToTop'
import Gis_casestudies_1_banner from "@/public/Photos/Gis4_casestudies.png";
import GIS_OBJECTIVES from "@/public/Photos/GIS4_OBJECTIVES.png";
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
          <p className='m-auto text-[20px] font-[600]'>Site Suitability</p>
          <p className='w-[70%] m-auto text-center text-[18px]'>
            Site suitability for block-wise soil erosion involves evaluating a specific location's ability to withstand or <br />
            mitigate the effects of soil erosion. It involves assessing various factors that influence erosion <br />
            processes, including rainfall (R), flow accumulation and slope (LS), soil data(K), soil<br />
            conservation (C), elevation, slope, and land use/land cover.<br />

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
            <h1 className='text-[18px] font-semibold'>The primary objectives of a site suitability assessment for block-wise soil erosion are to:
            </h1>
            <ul className='list-disc text-[18px] ml-6'>
              <li>Determine locations within a region that are particularly susceptible to block-wise soil
                erosion.
              </li>
              <li> Assess the potential magnitude and severity of erosion in different areas.
              </li>
              <li>Identify areas that require immediate attention for erosion control measures.
              </li>
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
              A comprehensive GIS-based approach is essential for effectively addressing the challenges in
              site suitability analysis for block-wise soil erosion. By leveraging advanced GIS tools and
              techniques, we can overcome data limitations, account for spatial variability, and consider
              temporal dynamics. Integrating remote sensing data, hierarchical modelling, and integrated
              GIS analysis enables us to gain valuable insights into erosion risks and inform decision-
              making.


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
            <ul className='list-disc text-[18px] m-8'>
              <li className='mt-2'>Identification of vulnerable areas and implementation of targeted mitigation measures.
              </li>
              <li className='mt-2'>Protection of soil resources essential for sustainable farming.
              </li>
              <li className='mt-2'>Preservation of ecosystems and biodiversity.
              </li>
              <li className='mt-2'>Preservation of ecosystems and biodiversity.
              </li>
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
