import ScrollToTop from '@/app/_Components/ScrollToTop'
import Welho_banner from "@/public/Photos/Welho_banner.png";
import Welho_logo from "@/public/Photos/welho_logo.png";
import welho_Challenges from "@/public/Photos/welho_Challenges.png";
import welho_Solutions from "@/public/Photos/welho_Solutions.png";
import welho_Results from "@/public/Photos/welho_Results.png";
import welho_Inconclusion from "@/public/Photos/welho_Inconclusion.png";
import ChallengesBg from "@/public/Photos/Challenges_BG.png";
import Image from 'next/image';
import Scrool_Icons from '@/app/_Components/Scrool_Icons';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import Link from 'next/link';

const Welho = () => {
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
          <Image src={Welho_logo} className='m-auto py-4' alt='Welho_logo.png' />
          <p className='m-auto text-[20px] font-[600]'> Welho.in </p>
          <p className='w-[65%] m-auto text-center'>Welho is a outstanding on line platform providing a huge variety of well being services and products to sell
            holistic fitness and well-being. The internet site serves as a one-forestall vacation spot for customers
            looking for get right of entry to to top rate well being merchandise, professional advice,
            and customized services. Developed with a focal point on consumer revel
            in and accessibility, Welho.in pursuits to empower people to
            prioritize their fitness and lead satisfying lives
          </p>
          <Image src={Welho_banner} className='w-full' alt='Welho_banner.png' />

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
            <Image src={welho_Challenges} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
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
              <strong>Enhanced Product Discovery :</strong>The implementation of a complete categorization device has progressed
              product discovery and navigation for customers, permitting them to discover applicable well being
              merchandise greater without difficulty and efficiently.


            </p>
            <p className="mb-2">
              <strong>Improved User Engagement : </strong> The responsive layout of the internet site has led to improved consumer
              engagement and satisfaction, with site visitors taking part in a continuing and intuitive surfing revel in
              throughout gadgets.


            </p>
            <p className="mb-2">
              <strong>Efficient Customer Support : </strong>The advent of stay chat help has brought about greater green and
              responsive customer service, with customers taking advantage of instantaneously help and
              steerage from informed representatives.

            </p>
          </div>
          <div className="w-[35%] flex items-center justify-center">
            <Image src={welho_Results} alt="welho Challenges" className="rounded-lg shadow-lg" />
          </div>
        </div>


        <div className='w-full flex text-white gap-[50px] justify-center items-center py-[70px] px-[30px]'>

          <div className="w-[35%] flex items-center justify-center">
            <Image src={welho_Inconclusion} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>

          <div className="w-[60%]">
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white">
                Conclusion
              </h2>
            </div>
            <p className="mb-2">
              Welho has effectively addressed the demanding situations of product diversity, consumer revel
              in, and customer service, turning in tangible effects with inside the shape of more suitable
              product discovery, progressed consumer engagement, and green customer service. As a
              result, the internet site maintains to function a relied on platform for people looking for get
              right of entry to to top rate well being services and products, empowering them to
              prioritize their fitness and well-being

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

export default Welho
