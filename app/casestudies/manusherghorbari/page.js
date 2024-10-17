import ScrollToTop from '@/app/_Components/ScrollToTop'
import manusherghorbari_banner from "@/public/Photos/manusherghorbari_banner.png";
import manusherghorbari_logo from "@/public/Photos/manusherghorbari_logo.png";
import manusherghorbari_Challenges from "@/public/Photos/manusherghorbari_Challenges.png";
import manusherghorbari_Solutions from "@/public/Photos/welho_Results.png";
import manusherghorbari_Results from "@/public/Photos/manusherghorbari_Results.png";
import manusherghorbari_Inconclusion from "@/public/Photos/manusherghorbari_Inconclusion.png";
import ChallengesBg from "@/public/Photos/Challenges_BG.png";
import Image from 'next/image';
import Scrool_Icons from '@/app/_Components/Scrool_Icons';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import Link from 'next/link';

const Manusherghorbari = () => {
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
          <Image src={manusherghorbari_logo} className='m-auto py-4' alt='Welho_logo.png' />
          <p className='m-auto text-[20px] font-[600]'> Manusher Ghorbari </p>
          <p className='w-[65%] m-auto text-center'>The Manusher Ghorbari Room Booking internet site is a person-pleasant platform devoted to simplifying the manner of
            reserving inns on the Manusher Ghorbari guesthouse. Developed with the goal of selling tourism and offering a
            unbroken enjoy for site visitors, the internet site gives specified room listings, an intuitive reserving
            machine, and real-time availability updates. Built the use of PHP, CSS3, and MySQL database,
            the internet site caters to the desires of tourists looking for a tranquil break out and
            ambitions to beautify engagement with  the Manusher Ghorbari guesthouse.

          </p>
          <Image src={manusherghorbari_banner} className='mx-auto' alt='Welho_banner.png' />

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
              <strong>Booking Convenience:</strong> The number one task changed into to create a person-pleasant platform that permits site
              visitors to ee-e book rooms effortlessly, thinking about the various options and necessities of tourists.
            </p>
            <p className="mb-2">
              <strong>Real-Time Availability:</strong>  Ensuring correct and real-time updates on room availability posed a task, requiring the
              mixing of a dependable availability calendar and stock control machine
            </p>
            <p className="mb-2">
              <strong>Payment Security:</strong> Implementing a steady fee gateway changed into essential to instill believe and self
              assurance amongst customers and shield their touchy statistics at some stage in on-line transactions.
            </p>
          </div>
          <div className="w-[35%] flex items-center justify-center">
            <Image src={manusherghorbari_Challenges} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>
        </div>

        <div className='w-full flex text-white gap-[50px] justify-center items-center py-[50px] px-[30px]'>

          <div className="w-[35%] flex items-center justify-center">
            <Image src={manusherghorbari_Solutions} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>

          <div className="w-[60%]">
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white">
                Solutions
              </h2>
            </div>
            <p className="mb-2">
              <strong> Intuitive Booking System :</strong> A easy and intuitive reserving machine changed into developed, permitting
              customers to effortlessly navigate room listings, choose their preferred inns, and entire the reserving
              manner seamlessly.
            </p>
            <p className="mb-2">
              <strong> Real-Time Availability Updates:</strong>  An availability calendar changed into incorporated to offer customers
              with real-time statistics on room availability, permitting them to make knowledgeable reserving selections
              primarily based totally on their desired dates.
            </p>
            <p className="mb-2">
              <strong> Secure Payment Gateway:</strong>
              A steady fee gateway changed into applied to facilitate on-line transactions
              securely, encrypting touchy facts and making sure the confidentiality of customers` fee statistics.
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
            <Image src={manusherghorbari_Results} alt="welho Challenges" className="rounded-lg shadow-lg" />
          </div>
        </div>


        <div className='w-full flex text-white gap-[50px] justify-center items-center py-[70px] px-[30px]'>

          <div className="w-[35%] flex items-center justify-center">
            <Image src={manusherghorbari_Inconclusion} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>

          <div className="w-[60%]">
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white">
                In  Conclusion
              </h2>
            </div>
            <p className="mb-2">
              The Manusher Ghorbari Room Booking internet site has efficaciously addressed the demanding
              situations of reserving convenience, real-time availability updates, and fee security, ensuing in
              a unbroken and fun reserving enjoy for site visitors. By leveraging generation and person-
              centric design, the internet site has now no longer most effective facilitated lodging bookings
              however additionally promoted tourism and engagement with the Manusher Ghorbari
              guesthouse, contributing to its achievement and reputation amongst tourists looking
              for a tranquil break out.

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

export default Manusherghorbari
