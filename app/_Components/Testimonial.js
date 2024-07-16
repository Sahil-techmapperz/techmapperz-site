"use client";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { FaQuoteLeft } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import axios from 'axios';
import avater from "@/public/Photos/testimonial_aveter.webp";
import Image from "next/image";
import { Box, Text,keyframes } from "@chakra-ui/react";

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

  return (
    <div className="bg-gray-900 py-8 px-4 text-center">
      <p className="text-lg font-semibold text-gray-500">Testimonial</p>
      <h1 className="text-4xl font-bold mb-6 text-white">What our Clients Say</h1>
      <div className="p-[3rem]">
        <div className="w-[70%] m-auto relative">
          <Carousel
            showStatus={false}
            infiniteLoop={true}
            showArrows={true}
            showThumbs={false}
            stopOnHover={true}
            showIndicators={false}
            useKeyboardArrows={true}
            swipeable={false}
            className="testimonial-carousel"
          >
            {testimonials.map((data, index) => (
              <div key={index} className="bg-white p-6 m-[50px] rounded-lg shadow-lg relative overflow-visible">
                <div className="w-[100px] h-[100px] flex justify-center items-center absolute top-[-50px] left-1/2 transform -translate-x-1/2 z-10">
                  <Image
                    src={data.image || avater}
                    alt={data.name}
                    className="w-full h-full object-cover rounded-full"
                    style={{ border: "5px solid #1a202c" }}
                  />
                </div>
                <div className="mt-16"> {/* Adjusted margin-top to ensure there's no overlap */}
                  <div className="flex gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <FaQuoteLeft className="w-8 h-8 text-gray-500" />
                    </div>
                    <div className="text-left">
                      <p className="text-gray-700 h-[100px] overflow-auto">{data.message}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-left">
                      <p className="text-lg font-semibold">{data.name}</p>
                      <p className="text-gray-600">{data.Companyname}</p> {/* Corrected the field name */}
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
