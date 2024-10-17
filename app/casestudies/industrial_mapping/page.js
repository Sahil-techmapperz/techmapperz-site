import ScrollToTop from '@/app/_Components/ScrollToTop'
import Gis_casestudies_1_banner from "@/public/Photos/Gis3_casestudies.png";
import GIS_OBJECTIVES from "@/public/Photos/GIS3_OBJECTIVES.png";
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
          <Image src={Gis_casestudies_1_banner} className='w-[40%] mt-[100px] mb-6' alt='Gis_casestudies_1_banner.png' />
          <p className='m-auto text-[20px] font-[600]'>Industrial Region Mapping & Planning</p>
          <p className='w-[70%] m-auto text-center text-[18px]'>
            Industrial region planning refers to the process of designing, managing, and developing industrial areas <br />
            to optimize economic growth, sustainability, and quality of life. Industrial region planning involves <br />
            designing and managing industrial areas to optimize efficiency, sustainability, and <br />
            economic growth, identifying suitable locations for industrial development, <br />
            designing infrastructure such as transportation, utilities, etc., <br />
            Zoning and land-use planning.<br />
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
            <h1 className='text-[18px] font-semibold'>As we are aware industrial planning requires the need to identify and develop industrial
              clusters and corridors with the data-driven approach to plan and development.
            </h1>
            <ul className='list-disc text-[18px] ml-6'>
              <li>Identification of new landbanks for development of industrial region with limited coverage
                and availability of spatial data.
              </li>
              <li> Difficulty in keeping pace with rapidly changing technology and data needs for monitoring
                the various industrial development activities of the existing industrial region.

              </li>
              <li>Difficulty in keeping pace with rapidly changing technology and data needs for monitoring
                the various industrial development activities of the existing industrial region.
              </li>
              <li>Data accuracy and accurate measurement of lands.
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
              Flying drones over the existing agricultural regions along with the new landbanks acquired for
              new industrial regions. Image processing of the captured Drone images. GIS software are
              suitable with its available products which are used for the industrial mapping. Many of its
              extensions are specified for industrial needs such as utility networking, connectivity to roads,
              railway, airport, etc. which helps in gathering data to improve operations, enhance utility
              networks and on-site selection of industrial region.

            </p>

          </div>
        </div>

        <div className="flex gap-4 bg-gray-900 text-white py-5 px-[50px]" style={{ background: "linear-gradient(90deg, #393939 44.98%, #010101 86.2%)" }}>
          <div className="w-full">
            <div className="relative w-fit">
              <Image src={ChallengesBg} alt="Challengesbg" />
              <h2 className="text-xl font-bold absolute inset-0 flex items-center left-[20px] text-black">
                Benefits
              </h2>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-transparent to-gray-500"> </div>
            <ul className='list-disc text-[18px] m-8'>
              <li className='mt-2'>Land use land cover mapping is done so that the land utilization area can be found for the purpose of creation of new industrial area.
              </li>
              <li className='mt-2'>Environmental impact assessment can be done.
              </li>
              <li className='mt-2'>Change detection in the new landbanks can be identified leading to infrastructural and development decisions.
              </li>
              <li className='mt-2'>Vacant landbanks are digitized as according to plan of the new industrial setup which will help industrialists for their upcoming venture.
              </li>
              <li className='mt-2'>Individual data of each industrial regions are recorded which includes the single plot data of the region also.
              </li>
              <li className='mt-2'>Digital storage of data which is easily sharable and accessible among the important departments of the industrial region.
              </li>
              <li className='mt-2'>Using ArcGIS for mapping utility network of the industrial region for proper distribution of power supply and telecommunication network.
              </li>
              <li className='mt-2'>Transport connectivity from the site such as road (NH, SH), railway, airports.
              </li>
              <li className='mt-2'>Construction of required new road network near the industrial region.
              </li>
              <li className='mt-2'>Creation of new infrastructures in existing industrial region according to the need of the ongoing requirement of the market.
              </li>
              <li className='mt-2'>Proper drainage network can be identified.</li>
            </ul>


          </div>
          
        </div>

      </div>

    </div>
  )
}

export default Gis
