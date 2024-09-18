import Link from 'next/link';
import feature_1 from '@/public/Photos/feature_1.png';
import feature_2 from '@/public/Photos/feature_2.png';
import feature_3 from '@/public/Photos/feature_3.png';
import feature_4 from '@/public/Photos/feature_4.png';
import feature_5 from '@/public/Photos/feature_5.png';
import feature_6 from '@/public/Photos/feature_6.png';
import FlipCard from './FlipCard';



const Features = () => {

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


      <div className='grid grid-cols-3 max-sm:grid-cols-1 gap-4 w-[100%] m-auto'>
        <FlipCard frontImage ={feature_1} backImage={feature_1}  title={"Website Development"} subtitle={"Give Your Brand Face"} backdiv_arr={['Mobile App Development','Mobile App Development','Mobile App Development']}/>
        <FlipCard frontImage ={feature_2} backImage={feature_2} title={"Mobile Application development"} subtitle={"Give Your Brand Face"} backdiv_arr={['Mobile App Development','Mobile App Development','Mobile App Development']}/>
        <FlipCard frontImage ={feature_3} backImage={feature_3} title={"Drone Solution"} subtitle={"Give Your Brand Face"} backdiv_arr={['Mobile App Development','Mobile App Development','Mobile App Development']}/>
        <FlipCard frontImage ={feature_4} backImage={feature_4} title={"CRM Solution"} subtitle={"Give Your Brand Face"} backdiv_arr={['Mobile App Development','Mobile App Development','Mobile App Development']}/>
        <FlipCard frontImage ={feature_5} backImage={feature_5} title={"IT Consulting"} subtitle={"Give Your Brand Face"} backdiv_arr={['Mobile App Development','Mobile App Development','Mobile App Development']}/>
        <FlipCard frontImage ={feature_6} backImage={feature_6} title={"Digital Marketing"} subtitle={"Give Your Brand Face"} backdiv_arr={['Mobile App Development','Mobile App Development','Mobile App Development']}/>

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
