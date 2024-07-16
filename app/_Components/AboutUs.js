import Image from 'next/image';
import Home_6 from '@/public/Photos/Home/Home_6.png';
import Home_7 from '@/public/Photos/Home/Home_7.png';
import Home_8 from '@/public/Photos/Home/Home_8.png';
import Home_9 from '@/public/Photos/Home/Home_9.png';
import KnowMoreButton from './KnowMoreButton';

const AboutUs = () => {
  return (
    <section className="relative bg-gray-800 py-[70px] px-[4rem] flex flex-col justify-center items-center overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('./Photos/Home/Why choose techmapperz-min.gif')" }}>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75 z-1"></div>
      <div className="relative z-2 flex flex-col gap-[6rem] md:flex-row justify-between items-center w-full max-w-7xl mx-auto">
        <div className="w-full md:w-1/2 flex flex-col items-center relative">
          <Image src={Home_7} alt="" className="w-4/5 mb-8" />
          <Image src={Home_6} alt="" className="absolute top-32 right-0 w-3/5" />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <Image src={Home_9} alt="" className="absolute top-0 right-0 w-24" />
          <p className="text-gray-400 text-lg mb-4">About Us</p>
          <h1 className="text-white text-4xl font-bold mb-6">Why Choose Techmapperz?</h1>
          <p className="text-gray-300 text-lg mb-4">The smaller things make big difference in everything that we do, we at Techmapperz also believe in the attention to detail methodology, and our eye to the detail in every project that we manage is what makes us stand out from the rest, we have a 4 step approach on how we execute a project plan.</p>
          <p className="text-gray-300 text-lg mb-4">We strive to be a software Development Company that delivers cutting edge solutions, helping not just Fortune 500 companies and enterprise clients on their digital evolution journey.</p>
          <KnowMoreButton href="/about" text="Know more" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
