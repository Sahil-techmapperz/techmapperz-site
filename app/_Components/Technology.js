import {
    FaPython, FaJava, FaVuejs, FaAngular, FaReact,
    FaPhp, FaCss3Alt, FaNodeJs, FaSwift, FaHtml5
  } from "react-icons/fa";
  import { TbBrandJavascript, TbBrandReactNative } from "react-icons/tb";
  import { SiSolidity, SiKotlin } from "react-icons/si";
  import Image from 'next/image';
  import Home_5 from '@/public/Photos/Home/Home_5.png';
  
  const Technology = () => {
    return (
      <section className="bg-gray-800 py-8 px-[4rem] relative">

        <div className="grid grid-cols-2 gap-[4rem] max-sm:grid-cols-1 max-sm:gap-[2rem]">
        <div>
          <p className="text-gray-400 text-lg mb-4">Technology</p>
          <h1 className="text-white text-4xl font-bold mb-6">Latest Technology That we use</h1>
          <p className="text-gray-300 text-lg mb-8">Let the Data Take Your Business to Higher Ground</p>
        </div>
  
        <div className="grid grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center">
            <FaJava className="text-white text-6xl mb-2" />
            <p className="text-white text-xl">Java</p>
          </div>
          <div className="flex flex-col items-center">
            <TbBrandJavascript className="text-white text-6xl mb-2" />
            <p className="text-white text-xl">Javascript</p>
          </div>
          <div className="flex flex-col items-center">
            <FaVuejs className="text-white text-6xl mb-2" />
            <p className="text-white text-xl">Vuejs</p>
          </div>
          <div className="flex flex-col items-center">
            <FaAngular className="text-white text-6xl mb-2" />
            <p className="text-white text-xl">Angular</p>
          </div>
          <div className="flex flex-col items-center">
            <FaReact className="text-white text-6xl mb-2" />
            <p className="text-white text-xl">React</p>
          </div>
          <div className="flex flex-col items-center">
            <SiSolidity className="text-white text-6xl mb-2" />
            <p className="text-white text-xl">Solidity</p>
          </div>
          <div className="flex flex-col items-center">
            <FaPhp className="text-white text-6xl mb-2" />
            <p className="text-white text-xl">PHP</p>
          </div>
          <div className="flex flex-col items-center">
            <TbBrandReactNative className="text-white text-6xl mb-2" />
            <p className="text-white text-xl">ReactNative</p>
          </div>
          <div className="flex flex-col items-center">
            <FaCss3Alt className="text-white text-6xl mb-2" />
            <p className="text-white text-xl">CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <FaNodeJs className="text-white text-6xl mb-2" />
            <p className="text-white text-xl">Node.js</p>
          </div>
          <div className="flex flex-col items-center">
            <FaSwift className="text-white text-6xl mb-2" />
            <p className="text-white text-xl">Swift</p>
          </div>
          <div className="flex flex-col items-center">
            <FaHtml5 className="text-white text-6xl mb-2" />
            <p className="text-white text-xl">HTML</p>
          </div>
          <div className="flex flex-col items-center">
            <FaPython className="text-white text-6xl mb-2" />
            <p className="text-white text-xl">Python</p>
          </div>
          <div className="flex flex-col items-center">
            <SiKotlin className="text-white text-6xl mb-2" />
            <p className="text-white text-xl">Kotlin</p>
          </div>
        </div>
        </div>
  
        <Image src={Home_5} alt="" className="absolute bottom-0 left-[80px] w-32 mt-8" />
      </section>
    );
  };
  
  export default Technology;
  