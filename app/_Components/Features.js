"use client"
import { motion, useAnimation, useScroll } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Home_1 from '@/public/Photos/Home/Home_1.png';
import Home_2 from '@/public/Photos/Home/Home_2.png';
import Home_3 from '@/public/Photos/Home/Home_3.png';
import feature_1 from '@/public/Photos/feature_1.png';
import feature_2 from '@/public/Photos/feature_2.png';
import feature_3 from '@/public/Photos/feature_3.png';
import KnowMoreButton from './KnowMoreButton';
import { useEffect } from 'react';
import FlipCard from './FlipCard';

const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
  }
};

const Features = () => {
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest > 0.1) {
        controls.start('visible');
      } else {
        controls.start('hidden');
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, controls]);

  return (
    <section className="bg-black py-8 px-[4rem] relative">
      <div className="grid grid-cols-1 m-auto">
        <div className='flex flex-col items-center'>
          <p className="text-gray-400 text-lg mb-4">Features</p>
          <h1 className="text-white text-center w-[60%] text-4xl mb-6">These Services to Expand your Business</h1>
        </div>
        <div className='flex flex-col items-center'>
          <p className="text-gray-300 w-[70%] text-center text-lg mb-8">To assist companies in thriving in the digital age, we provide a variety of technological services. We can assist businesses in managing their resources, connecting with their audiences online, and optimizing their operations thanks to our knowledge and expertise.</p>
        </div>
      </div>


      <div className='grid grid-cols-3 max-sm:grid-cols-1 gap-4 w-[80%] m-auto'>
        <FlipCard frontImage ={feature_1} backImage={feature_1}  title={"Website Development"} subtitle={"Give Your Brand Face"} backdiv_arr={['Mobile App Development','Mobile App Development','Mobile App Development']}/>
        <FlipCard frontImage ={feature_2} backImage={feature_2} title={"Website Development"} subtitle={"Give Your Brand Face"} backdiv_arr={['Mobile App Development','Mobile App Development','Mobile App Development']}/>
        <FlipCard frontImage ={feature_3} backImage={feature_3} title={"Website Development"} subtitle={"Give Your Brand Face"} backdiv_arr={['Mobile App Development','Mobile App Development','Mobile App Development']}/>
        <FlipCard frontImage ={feature_1} backImage={feature_1} title={"Website Development"} subtitle={"Give Your Brand Face"} backdiv_arr={['Mobile App Development','Mobile App Development','Mobile App Development']}/>
        <FlipCard frontImage ={feature_2} backImage={feature_2} title={"Website Development"} subtitle={"Give Your Brand Face"} backdiv_arr={['Mobile App Development','Mobile App Development','Mobile App Development']}/>
        <FlipCard frontImage ={feature_1} backImage={feature_1} title={"Website Development"} subtitle={"Give Your Brand Face"} backdiv_arr={['Mobile App Development','Mobile App Development','Mobile App Development']}/>

      </div>

      <div className='flex relative justify-center mt-5 mb-[50px]'>
        <div className='flex absolute'>
          <div className='bg-blue-500 w-12 h-12 rounded-full'></div>
          <button className='text-white text-[26px] relative ml-[-25px]'>
            <Link href="/contact">View All Services</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
