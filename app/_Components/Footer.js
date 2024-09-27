import Link from 'next/link';
import { FaPinterest } from 'react-icons/fa';
import Gotop from './Gotop';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import footer_logo from "@/public/Photos/footer_logo.png";
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="w-full bg-[#272525] p-8 max-sm:p-1 max-sm:px-4 relative">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[50px] justify-between text-white">
          <div className="flex flex-col justify-center gap-4">
            <Link href={"/"}>
              <Image
                src={footer_logo}
                alt="footer_logo"
                className="object-fill mb-6 max-sm:mx-auto"
                width={300} // Specify width
                height={300} // Specify height
              />
            </Link>
            <p className='text-white font-semibold max-sm:text-[14px]'>Chasing the Vision for a better tomorrow where <br/>
              technology simplifies complex functions.</p>
            <div className='flex max-sm:w-full bg-white w-fit px-2 py-1 rounded-md gap-2 max-sm:gap-0 '>
              <input className='border-none max-sm:w-[70%]' placeholder='Enter your email...' />
              <button className="w-fit max-sm:w-[120px] px-4 py-2 h-[40px] text-white font-bold border-none rounded-md" style={{ background: "linear-gradient(90deg, #EC212C 0%, #396BA9 100%)" }}>Subscribe</button>
            </div>
          </div>

          <div className='flex gap-4 justify-between'>

            <div className=" max-sm:text-[12px]">
              <p className="pb-4 font-bold">Company</p>
              <ul className="grid grid-cols-1 gap-5 ">
                <Link href="/"><li>Home</li></Link>
                <Link href="/service"><li>Service</li></Link>
                <Link href="/blog"><li>Resources</li></Link>
                <Link href="/about"><li>About Us</li></Link>
                <Link href="/career"><li>Career</li></Link>
              </ul>
            </div>

            <div className="ml-15 max-sm:text-[12px]">
              <p className="pb-4 font-bold">Resources</p>
              <ul className="grid grid-cols-1 gap-5 ">
                <Link href="/blog"><li>Blogs</li></Link>
                <Link href="/casestudies"><li>Case Studies</li></Link>
                <Link href="/contact"><li>Contact Us</li></Link>
              </ul>
            </div>

            <div className="ml-15 max-sm:text-[12px]">
              <p className="pb-4 font-bold">Utility</p>
              <ul className="grid grid-cols-1 gap-5 ">
                <Link href="/privacy"><li>Privacy Policy</li></Link>
                <Link href="/terms"><li>Terms of Use</li></Link>
                <Link href="/help"><li>Help</li></Link>
                <Link href="/sitemap"><li>Sitemap</li></Link>
              </ul>
            </div>

          </div>

        </div>
        <Gotop />
      </div>
      <div className="w-full h-10 bg-[#4C4848] text-white flex justify-between  items-center font-medium px-[70px] max-sm:justify-center max-sm:items-center max-sm:px-0">
        <div className='flex gap-2 justify-center items-center max-sm:hidden'>
          <a href='https://www.linkedin.com/company/techmapperz/' target="_blank" className="text-white text-2xl"> <FaLinkedinIn /> </a>
          <a href='https://www.instagram.com/techmapperz/' target="_blank" className="text-white text-2xl">  <FaInstagram /></a>
          <a href='https://x.com/Techmapperzllp' target="_blank" className="text-white text-2xl"> <FaTwitter /></a>
          <a href='https://www.facebook.com/techmapperz' target="_blank" className="text-white text-2xl"> <FaFacebookF /></a>
          <a href='https://www.youtube.com/channel/UCWogNBwwxTvoX8Ax24j6c6Q' target="_blank" className="text-white text-2xl"> <FaYoutube /></a>
          <a href='https://pin.it/2nsXnBd' target="_blank"><FaPinterest className="text-white text-2xl" /></a>
        </div>
        <div className='max-sm:text-[12px]'> Copyright &copy; {currentYear} Techmapperz LLP. All Rights Reserved</div>
      </div>
    </>
  );
};

export default Footer;
