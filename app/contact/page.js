// pages/contact.js
import Link from 'next/link';
import contact_img1 from "@/public/Photos/contact_img1.png"
import contact_img2 from "@/public/Photos/contact_2.png"
import ScrollToTop from '../_Components/ScrollToTop';
import Image from 'next/image';
import ContactForm from '../_Components/ContactForm';
import JobCard from '../_Components/JobCard';
import { IoLocation } from "react-icons/io5";

export const metadata = {
  title: "Techmapperz Contact",
  description: "Techmapperz map your business",
};

const Contact = () => {
  return (
    <div className="bg-black text-white">
      <ScrollToTop />
      {/* <div className="flex flex-col items-center justify-center h-96 bg-cover bg-center" style={{ backgroundImage: 'url("/Photos/Contact/banner_2.png")' }}>
        <h1 className="text-5xl font-bold">Contact us</h1>
        <p className="text-xl mt-4"><Link href="/">Home</Link> / Contact Us</p>
      </div> */}
      <div className="p-20 max-sm:px-[10px] max-sm:pb-[10px] bg-black">
        <div className='flex flex-col gap-4 justify-center'>
          <p className='text-[30px] max-sm:text-[20px] font-[600] text-center'>Your concerns are our priority, we are just a click away</p>
          <p className='text-[#396BA9] font-[600] text-[25px] max-sm:text-[18px] text-center'>We'd love to hear from you</p>
        </div>
        <div className='flex max-sm:flex-col gap-[30px] mt-[50px]'>
          <div className="lg:w-1/2">
            <Image src={contact_img1} className='w-[80%] max-sm:w-full' />
          </div>
          <div className="lg:w-1/2">
            <ContactForm />
          </div>
        </div>
        <div className='flex max-sm:flex-col-reverse border-2 max-sm:border-none px-4 gap-[30px] mt-[50px]'>
          <div className='w-[70%] max-sm:w-full max-sm:border-none flex flex-col gap-[20px] justify-center border-r'>
            <p className='text-[30px] font-[600]'>Let’s Take Your Enterprise to a
              New Level</p>
            <p className='text-[#EC212C]'>Want to know how our customized CRM solutions work for your business?</p>
            <button
              className='py-[10px] px-[15px] w-fit rounded-sm'
              style={{
                background: "linear-gradient(90deg, #EC212C 0%, #396BA9 100%)",
                border: 'none',  // Add this to remove default button border styling
                cursor: 'pointer'  // Ensures the cursor changes to a pointer when hovering over the button
              }}
            >
              <a
              target='_blank'
                href='https://calendly.com/techmapperz-projects/30min'
                style={{
                  color: 'white',  // Ensures the text color is white for better visibility
                  textDecoration: 'none'  // Removes underline from the link
                }}
              >
                Request a Demo
              </a>
            </button>
          </div>
          <div>
            <Image src={contact_img2} alt='contact_img2' />
          </div>
        </div>

      </div>

      <div className='flex max-sm:flex-col justify-between bg-[#396BA9] text-white max-sm:mt-[20px] mt-[50px] py-[20px] px-[50px] max-sm:px-[12px]'>
        <div className='flex flex-col gap-4 justify-between'>
          <p className='text-[30px] max-sm:text-[20px] font-[600]'>Let’s Talk</p>
          <p>Tell us about your next project.</p>
          <p className='border-b-2 border-[#87171D] w-fit text-black font-[500]'>Info@techmapperz.com</p>
        </div>
        <div className='flex flex-col gap-4 justify-between'>
          <p className='text-[30px] max-sm:text-[20px] font-[600]'>Say Hello</p>
          <p>Drop us a line or give us a call.</p>
          <p className='border-b-2 border-[#87171D] w-fit text-black font-[500]'>+91-9643002065 / +91-3335752689</p>
        </div>
        <div className='flex flex-col gap-[50px] max-sm:gap-[10px]'>
          <p className='text-[30px] max-sm:text-[20px] font-[600]'>Our Offices</p>
          <div>
            <p className='flex gap-2 mb-4'><IoLocation className='mt-2'/> 55, Lane - 2, Westend Marg, Saidullajab, <br /> Near Saket metro station, New Delhi - 110030, India</p>
            <p className='flex gap-2'><IoLocation className='mt-2'/> CF 401, Block CF, Sector 1, Salt Lake, Kolkata-700064,
              India</p>
          </div>
         
        </div>
      </div>



      <div className="w-full h-[50vh]">
        <p className='relative w-fit text-[30px] font-[600] m-auto mt-[40px] mb-[30px] before:content-[""] before:absolute before:w-[60%] before:h-[2px] before:bg-white before:top-1/2 before:left-[-80px] after:content-[""] after:absolute after:w-[60%] after:h-[2px] after:bg-white after:top-1/2 after:right-[-80px]'>
          Visit Us
        </p>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.596906446634!2d88.415269676073!3d22.594174726557426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02754e9bb6f449%3A0xfef69449a7f4a853!2sCF-401%2C%20CF%20Block%2C%20Sector%201%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal%20700064!5e0!3m2!1sen!2sin!4v1681305583641!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full"></iframe>
      </div>
    </div>
  );
};

export default Contact;
