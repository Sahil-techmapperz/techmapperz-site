import Link from 'next/link';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import ScrollToTop from '../_Components/ScrollToTop';

const Sitemap = () => {
 

  return (
    <div className="bg-gray-900 text-white">
      <ScrollToTop/>
      <div className="h-96 w-full flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/Photos/banner_2.png')" }}>
        <h1 className="font-semibold text-5xl leading-none tracking-widest">Sitemap</h1>
        <p className="font-normal text-xl leading-relaxed tracking-widest">
          <Link href="/">Home</Link> / Sitemap
        </p>
      </div>

      <div className="p-8 md:p-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/">
              <div className="flex items-center space-x-4">
                <div className="text-2xl bg-red-500 p-2">
                  <AiOutlineLeft />
                </div>
                <h2 className="font-semibold text-2xl bg-blue-600 px-2">Home</h2>
              </div>
            </Link>
            <ul className="pl-4 border-l-4 border-blue-600 space-y-2">
              <li><Link href="/">Features</Link></li>
              <li><Link href="/">Technology</Link></li>
              <li><Link href="/">Our Brand Partners</Link></li>
              <li><Link href="/">Our Blog</Link></li>
              <li><Link href="/">Testimonial</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <Link href="/about">
              <div className="flex items-center space-x-4">
                <div className="text-2xl bg-red-500 p-2">
                  <AiOutlineLeft />
                </div>
                <h2 className="font-semibold text-2xl bg-blue-600 px-2">About us</h2>
              </div>
            </Link>
            <ul className="pl-4 border-l-4 border-blue-600 space-y-2">
              <li><Link href="/about">About Company</Link></li>
              <li><Link href="/about">Our Mission</Link></li>
              <li><Link href="/about">Our Vision</Link></li>
              <li><Link href="/about">Why Choose Techmapperz</Link></li>
              <li><Link href="/about">How Do We Work</Link></li>
              <li><Link href="/about">Company value</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <Link href="/service">
              <div className="flex items-center space-x-4">
                <div className="text-2xl bg-red-500 p-2">
                  <AiOutlineLeft />
                </div>
                <h2 className="font-semibold text-2xl bg-blue-600 px-2">Service</h2>
              </div>
            </Link>
            <ul className="pl-4 border-l-4 border-blue-600 space-y-2">
              <li><Link href="/giscasestudies">GIS Case Studies</Link></li>
              <li><Link href="/gisservice">GIS Services</Link></li>
              <li><Link href="/crmservice">CRM-ERP</Link></li>
              <li><Link href="/droneservice">Drone Services</Link></li>
              <li><Link href="/photogrammetry">Photogrammetry Services</Link></li>
              <li><Link href="/webgis">Web GIS Services</Link></li>
              <li><Link href="/mobiledevelopment">Mobile Application Development</Link></li>
              <li><Link href="/webdevelopment">Website Development</Link></li>
              <li><Link href="/itconsultingservice">IT Consulting Services</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <Link href="/career">
              <div className="flex items-center space-x-4">
                <div className="text-2xl bg-red-500 p-2">
                  <AiOutlineLeft />
                </div>
                <h2 className="font-semibold text-2xl bg-blue-600 px-2">Career</h2>
              </div>
            </Link>
            <ul className="pl-4 border-l-4 border-blue-600 space-y-2">
              <li><Link href="/career">Possibilities unmatched</Link></li>
              <li><Link href="/career">Diversity unmatched</Link></li>
              <li><Link href="/career">Flexibility unparalleled</Link></li>
              <li><Link href="/career">Grow unhindered</Link></li>
              <li><Link href="/career">Shine Unrestricted</Link></li>
              <li><Link href="/career">Earn unlimited</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <Link href="/contact">
              <div className="flex items-center space-x-4">
                <div className="text-2xl bg-red-500 p-2">
                  <AiOutlineLeft />
                </div>
                <h2 className="font-semibold text-2xl bg-blue-600 px-2">Contact us</h2>
              </div>
            </Link>
            <ul className="pl-4 border-l-4 border-blue-600 space-y-2">
              <li><Link href="/contact">Getting in Touch</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <Link href="/privacy&policy">
              <div className="flex items-center space-x-4">
                <div className="text-2xl bg-red-500 p-2">
                  <AiOutlineLeft />
                </div>
                <h2 className="font-semibold text-2xl bg-blue-600 px-2">Privacy & Policy</h2>
              </div>
            </Link>
            <ul className="pl-4 border-l-4 border-blue-600 space-y-2">
              <li><Link href="/privacy&policy">Data Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <Link href="/itcasestudies">
              <div className="flex items-center space-x-4">
                <div className="text-2xl bg-red-500 p-2">
                  <AiOutlineLeft />
                </div>
                <h2 className="font-semibold text-2xl bg-blue-600 px-2">IT Case Studies</h2>
              </div>
            </Link>
          </div>

          <div className="space-y-4">
            <Link href="/article">
              <div className="flex items-center space-x-4">
                <div className="text-2xl bg-red-500 p-2">
                  <AiOutlineLeft />
                </div>
                <h2 className="font-semibold text-2xl bg-blue-600 px-2">Articles</h2>
              </div>
            </Link>
          </div>

          <div className="space-y-4">
            <Link href="/remotesensing">
              <div className="flex items-center space-x-4">
                <div className="text-2xl bg-red-500 p-2">
                  <AiOutlineLeft />
                </div>
                <h2 className="font-semibold text-2xl bg-blue-600 px-2">Remote Sensing</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
