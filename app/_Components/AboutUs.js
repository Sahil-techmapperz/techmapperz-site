import Image from 'next/image';
import Home_9 from '@/public/Photos/Home/Home_9.png';
import home_about_us_banner from '@/public/Photos/home_about_us_banner.png';  // Adding the missing import
import home_about_us_paralax_banner from '@/public/Photos/home_about_us_banner_2.png';  // The parallax image
import Link from 'next/link';

const AboutUs = () => {
  return (
    <section 
      className="relative py-[70px] max-sm:py-4 max-sm:px-1 px-[4rem] flex flex-col justify-center items-center overflow-hidden bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${home_about_us_paralax_banner.src})`,  // Parallax background
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black z-[2]" style={{ opacity: "0.5" }}></div>

      <div className="z-[2] flex flex-col max-sm:gap-2 gap-[6rem] md:flex-row justify-between items-center  w-full max-w-7xl mx-auto">
        <div className="w-full md:w-1/2 flex flex-col items-center relative">
          <Image src={home_about_us_banner} alt="Home About Us Banner" className="mb-8 " />  {/* Correct image added here */}
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left  z-[2]">
          <Image src={Home_9} alt="Decorative Image" className="absolute top-4 right-6 w-24 max-sm:hidden" />
          <p className="text-white text-lg max-sm:text-[22px] font-semibold mb-4">About Us</p>
          <h1 className="text-white text-4xl max-sm:text-[20px] font-bold mb-6">Why Choose Techmapperz?</h1>
          <p className="text-gray-300 text-lg max-sm:text-[16px] mb-4">
            The smaller things make a big difference in everything that we do. At Techmapperz, we believe in the attention-to-detail methodology, and our eye for detail in every project is what makes us stand out from the rest. We have a 4-step approach to executing a project plan.
          </p>
          <p className="text-gray-300 text-lg max-sm:text-[16px] mb-4">
            We strive to be a software development company that delivers cutting-edge solutions, helping not just Fortune 500 companies but also enterprise clients on their digital evolution journey.
          </p>
          <Link href="/about" className="bg-white text-[#D555B5] font-semibold px-4 py-2 rounded-md shadow-[0px_0px_8px_0px_#D555B5]">
            Know more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
