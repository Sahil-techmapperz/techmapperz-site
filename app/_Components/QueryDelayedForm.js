'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';

const QueryDelayedForm = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowForm(true); // Show the form every 20 seconds
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const handleCloseForm = () => {
    setShowForm(false);
  };



  return (
    <>
      {showForm && (
        <div className="fixed z-50 inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="rounded-md relative">
          <button
              onClick={handleCloseForm}
              className="absolute z-50 top-3 right-3 text-2xl bg-white text-gray-500 hover:text-gray-800"
            >
              <AiOutlineClose /> {/* Close Icon */}
            </button>
            <div className='w-full relative'>
              <img src={"/Photos/Popuop_Banner.png"} alt="Main Banner" className="w-full h-[300px] object-cover" />
              <img src={"/Photos/popup_form_watermark.png"} alt="Watermark" className="absolute top-0 left-0 w-[180px]" />

              <div className="absolute inset-0 flex justify-around items-center text-center">
                <div className='text-white px-4'>
                  <p className='text-2xl'>Welcome to Techmapperz</p>
                  <p className='text-4xl font-bold'>“ Empowering Your Business with Innovation</p>
                  <p className='text-4xl font-bold'><span className='text-black'>IT</span> and <span className='text-black'>GIS</span> Solution ”</p>
                </div>
                <button
                  className='mt-4 bg-[#00CAFF] text-white w-[200px] h-[200px] rounded-[50%] flex justify-center items-center hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 relative overflow-hidden'
                  onMouseEnter={() => document.getElementById('videoButton').play()}
                  onMouseLeave={() => document.getElementById('videoButton').pause()}
                >
                  <video
                    id="videoButton"
                    src="/media/popup_form_video.mp4"
                    loop
                    muted
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                  
                  <div className="z-10  font-bold  bg-[#00CAFF] w-full">
                  <Link href={"/contact"} className='flex justify-center items-center gap-2'>
                    Get Started <img src='/Photos/right-arrow.png' alt="Right Arrow" />
                    </Link>
                  </div>
                 
                </button>

              </div>
            </div>

          </div>
          {/* <ContactForm/> */}
        </div>
      )}
    </>
  );
};

export default QueryDelayedForm;
