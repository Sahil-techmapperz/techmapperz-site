import Link from 'next/link';
import { BsYoutube, BsLinkedin, BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs';
import { FaPinterest } from 'react-icons/fa';
import Gotop from './Gotop';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="w-full bg-black p-8 relative">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 justify-between items-center text-white">
          <div className="mt-[-25px] flex flex-col gap-4">
            <p>Let's talk to our expert.</p>
            <h1 className="font-bold text-2xl text-white">Need more information?</h1>
            <Link href="/contact">
              <div className="relative h-16 mt-10 cursor-pointer flex items-center">
                <div className="w-14 h-12 rounded-[50%] bg-blue-700 flex justify-center items-center"></div>
                <h2 className="absolute font-bold text-xl ml-2.5">Get in touch</h2>
              </div>
            </Link>
          </div>

          <div className="ml-7">
            <p className="pb-4 font-bold">About</p>
            <p className="text-left">Chasing the Vision for a better tomorrow where technology simplifies complex functions.</p>
            <br /><br />
            <div className='flex flex-col gap-[1.5rem]'>
              <p className="pb-4 font-bold">Follow us on -</p>
              <div className="flex gap-5 text-xl mt-[-2rem]">
                <a href='https://www.linkedin.com/company/techmapperz/' target="_blank"><BsLinkedin className="text-white text-2xl" /></a>
                <a href='https://www.instagram.com/techmapperz/' target="_blank"><BsInstagram className="text-white text-2xl" /></a>
                <a href='https://x.com/Techmapperzllp' target="_blank"><BsTwitter className="text-white text-2xl" /></a>
                <a href='https://www.facebook.com/techmapperz' target="_blank"><BsFacebook className="text-white text-2xl" /></a>
                <a href='https://www.youtube.com/channel/UCWogNBwwxTvoX8Ax24j6c6Q' target="_blank"><BsYoutube className="text-white text-2xl" /></a>
                <a href='https://pin.it/2nsXnBd' target="_blank"><FaPinterest className="text-white text-2xl" /></a>
              </div>
            </div>
          </div>

          <div className="ml-15">
            <p className="pb-4 font-bold">Explore More</p>
            <ul className="grid grid-cols-2 gap-5 ">
              <Link href="/"><li>Home</li></Link>
              <Link href="/support"><li>Support</li></Link>
              <Link href="/about"><li>About Us</li></Link>
              <Link href="/privacy&policy"><li>Privacy Policy</li></Link>
              <Link href="/service"><li>Services</li></Link>
              <Link href="/terms"><li>Terms of Use</li></Link>
              <Link href="/blog"><li>Blogs</li></Link>
              <Link href="/help"><li>Help</li></Link>
              <Link href="/contact"><li>Contact</li></Link>
              <Link href="/sitemap"><li>Sitemap</li></Link>
            </ul>
          </div>
        </div>
        <Gotop/>
      </div>
      <div className="w-full h-9 bg-gray-800 text-white flex items-center font-medium pl-20">
        Copyright &copy; {currentYear} Techmapperz LLP. All Rights Reserved
      </div>
    </>
  );
};

export default Footer;
