import Technology_banner_new from "@/public/Photos/Technology_banner_new.png";
import Image from 'next/image';


const Technology = () => {
  return (
    <section className="bg-white text-black py-8 px-[4rem] max-sm:px-2 max-sm:py-2 relative">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <p className="text-xl max-sm:text-[20px] font-semibold mb-4 max-sm:absolute max-sm:top-0">Technology</p>
          
        </div>

        <h1 className="text-[26px] max-sm:text-[14px] mb-6 absolute top-[70px] max-sm:absolute max-sm:top-[22px]">Latest Technology That we use</h1>
          <p className="text-lg max-sm:text-[14px] mb-8 absolute top-[120px] max-sm:absolute max-sm:top-[35px]">Let the Data Take Your Business to Higher Ground</p>

        <div className="w-full">
          <Image src={Technology_banner_new}  className='w-full max-sm:mt-8' alt="Technology Banner"/>
        </div>
      </div>
    </section>
  );
};

export default Technology;
