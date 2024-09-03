import Technology_banner_new from "@/public/Photos/Technology_banner_new.png";
import Image from 'next/image';


const Technology = () => {
  return (
    <section className="bg-white text-black py-8 px-[4rem] relative">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <p className="text-lg mb-4">Technology</p>
          
        </div>

        <h1 className="text-4xl font-bold mb-6 absolute top-[70px]">Latest Technology That we use</h1>
          <p className="text-lg mb-8 absolute top-[120px]">Let the Data Take Your Business to Higher Ground</p>

        <div className="w-full">
          <Image src={Technology_banner_new}  className='w-full' alt="Technology Banner"/>
        </div>
      </div>
    </section>
  );
};

export default Technology;
