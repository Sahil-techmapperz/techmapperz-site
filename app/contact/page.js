// pages/contact.js
import Link from 'next/link';
import { BiTimeFive } from 'react-icons/bi';
import { AiFillHome } from 'react-icons/ai';
import { IoMdContacts } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import ContactForm from '../_Components/ContactForm';
import ScrollToTop from '../_Components/ScrollToTop';

export const metadata = {
  title: "Techmapperz Contact",
  description: "Techmapperz map your business",
};

const Contact = () => {
  return (
    <div className="bg-black text-white">
      <ScrollToTop/>
      <div className="flex flex-col items-center justify-center h-96 bg-cover bg-center" style={{ backgroundImage: 'url("/Photos/Contact/banner_2.png")' }}>
        <h1 className="text-5xl font-bold">Contact us</h1>
        <p className="text-xl mt-4"><Link href="/">Home</Link> / Contact Us</p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between p-20 bg-gray-900">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <p className="text-lg font-semibold">Get In Touch</p>
          <h1 className="text-3xl font-bold mb-4">The internet is pretty huge, <br /> We're so glad you found us</h1>
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <BiTimeFive className="text-blue-600" />
              <p>9:30-6:30 IST</p>
            </div>
            <div className="flex items-start space-x-2">
              <MdEmail className="text-blue-600" />
              <div>
                <p>Email</p>
                <p>info@techmapperz.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <IoMdContacts className="text-blue-600" />
              <div>
                <p>Phone no</p>
                <p>+91-9643002065 / +91-3335752689</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <AiFillHome className="text-blue-600" />
              <div>
                <p>Delhi</p>
                <p>55, Lane - 2, Westend Marg, Saidullajab,<br />
                  Near Saket metro station, New Delhi - 110030, India</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <AiFillHome className="text-blue-600" />
              <div>
                <p>Kolkata</p>
                <p>CF 401, Block CF, Sector 1, Salt Lake, Kolkata-700064, India</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <ContactForm />
        </div>
      </div>
      <div className="w-full h-96">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.596906446634!2d88.415269676073!3d22.594174726557426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02754e9bb6f449%3A0xfef69449a7f4a853!2sCF-401%2C%20CF%20Block%2C%20Sector%201%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal%20700064!5e0!3m2!1sen!2sin!4v1681305583641!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full"></iframe>
      </div>
    </div>
  );
};

export default Contact;
