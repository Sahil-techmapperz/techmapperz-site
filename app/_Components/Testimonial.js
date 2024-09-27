"use client";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import axios from 'axios';
import avater from "@/public/Photos/testimonial_aveter.png";
import Image from "next/image";
import { Box, Text, keyframes } from "@chakra-ui/react";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/Testimonial`;
        const results = await axios.get(url, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setTestimonials(results.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching testimonials: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const pulseAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

  if (loading) {
    return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Text fontSize="2xl" fontWeight="bold" animation={`${pulseAnimation} 2s infinite`}>
        Loading Techmapperz...
      </Text>
    </Box>
  }

  const CustomLeftArrow = ({ onClickHandler, hasPrev, label }) => (
    <button
      type="button"
      onClick={onClickHandler}
      title={label}
      className="absolute left-[-15px] top-1/2 transform -translate-y-1/2 z-10 p-2 focus:outline-none max-sm:hidden"
      aria-label={label}
      disabled={!hasPrev}
    >
      <IoIosArrowBack size={40}  color="white" />
    </button>
  );

  const CustomRightArrow = ({ onClickHandler, hasNext, label }) => (
    <button
      type="button"
      onClick={onClickHandler}
      title={label}
      className="absolute right-[-15px] top-1/2 transform -translate-y-1/2 z-10 p-2 focus:outline-none max-sm:hidden"
      aria-label={label}
      disabled={!hasNext}
    >
      <IoIosArrowForward size={40} color="white" />
    </button>
  );

  return (
    <div className="bg-black py-8 max-sm:pb-2 px-4 text-center">
      <p className="text-xl font-semibold text-white">Testimonial</p>
      <h1 className="text-[26px] mb-6 text-white">What our Clients Say</h1>
      <div className="p-[3rem] max-sm:px-2">
        <div className="w-full m-auto relative">
          <Carousel
            showStatus={false}
            infiniteLoop={true}
            showArrows={true}
            showThumbs={false}
            stopOnHover={true}
            showIndicators={false}
            useKeyboardArrows={true}
            swipeable={false}
            autoPlay={true}
            className="testimonial-carousel"
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              CustomLeftArrow({ onClickHandler, hasPrev, label })
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              CustomRightArrow({ onClickHandler, hasNext, label })
            }
          >
            {testimonials.map((data, index) => (
              <div key={index} className="text-white max-sm:mx-2 max-sm:px-2 p-6 m-[50px] rounded-lg shadow-lg relative overflow-visible" style={{background: "linear-gradient(90deg, rgba(0, 0, 0, 0.3) 4.63%, rgba(197, 197, 197, 0.3) 50.08%, rgba(0, 0, 0, 0.3) 95.86%)"}}>
                <div className="w-[100px] h-[100px] flex justify-center items-center absolute top-[-50px] left-1/2 transform -translate-x-1/2 z-10">
                  <Image
                    src={data.image || avater}
                    alt={data.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="mt-16">
                  <div className="flex gap-4 mb-4">
                    <div className="text-left">
                      <p className=" h-[100px] overflow-auto">{data.message}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-left">
                      <p className="text-lg font-semibold">{data.name}</p>
                      <p>{data.Companyname}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
