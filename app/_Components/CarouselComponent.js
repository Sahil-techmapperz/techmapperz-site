"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const gethomeBanner = async () => {
  let url = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/banner`;
  let results = await axios.get(url);
  return results.data;
};

const CarouselComponent = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await gethomeBanner();
        setSlides(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // You can customize this loading state as needed
  }

  return (
    <Carousel
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      showThumbs={false}
      stopOnHover={true}
      showIndicators={false}
      useKeyboardArrows={true}
    >
      {slides.map(slide => (
        <div key={slide._id} className="relative">
          <img className="object-cover w-full h-screen" src={slide.banner_img_url} alt={slide.caption} />
          <p className="absolute text-white text-6xl w-[70%] font-semibold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{slide.heading}</p>
          <p className="absolute text-white bottom-48 left-24 w-96 text-lg font-semibold">{slide.subTitle}</p>
          <div className='flex justify-center mt-[15px] absolute bottom-[10rem] left-[50%]'>
            <div className='flex absolute'>
              <div className='bg-blue-500 w-12 h-12 rounded-full'></div>
              <button className='text-white text-[26px] font-bold relative w-max ml-[-25px]'>
                <Link href="/contact">Know More</Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
