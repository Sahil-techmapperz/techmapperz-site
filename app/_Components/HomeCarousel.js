"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
// import Home_banner_1 from "@/public/Photos/Home_banner_1.png"; 
import Home_banner_1 from "@/public/Photos/new_home_banner_1.png";
import Home_banner_2 from "@/public/Photos/new_home_banner_2.png";
import Link from "next/link";

// Slick settings for autoplay and fade effects
const settings = {
  dots: true,
  infinite: true,
  speed: 1500,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const CustomCarousel = () => {
  const carouselItems = [
    {
      title: "Driving Growth Through Smart IT Solution",
      description:
        "Unlock growth with smart IT solutions that optimize processes, enhance productivity, and foster innovation, empowering businesses to scale efficiently and succeed in today’s digital era.",
      image: Home_banner_1,
    },
    {
      title: "Navigating Solutions with GIS Expertise",
      description:
        "Navigating solutions with GIS expertise to deliver precise spatial insights, optimize decision-making, and drive innovation across industries through advanced mapping, data analysis, and geospatial technology.",
      image: Home_banner_2,
    },
  ];

  return (
    <div className="">
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div key={index}>
            <div className="relative w-full  h-[100vh]">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                priority
              />
              <div
                className="absolute inset-0 flex flex-col justify-center pl-8 text-white"
                style={{
                  // background:"linear-gradient(99.69deg, #396BA9 41.11%, rgba(23, 42, 67, 0) 80.25%)",
                  background: "linear-gradient(101.3deg, rgba(57, 107, 169, 0.92) 40.68%, rgba(23, 42, 67, 0) 54.8%)",
                }}
              >
                <h3 className="text-[40px] max-sm:text-[30px] w-[50%] max-sm:w-full font-semibold">
                  {item.title}
                </h3>
                <p className="my-3 w-[40%] max-sm:w-full">{item.description}</p>
                <div className="flex gap-2 max-sm:flex-col-reverse">
                <Link
                  href="/contact"
                  className="relative inline-block uppercase w-fit font-semibold text-[22px] text-[#00B0FE] py-2 px-4 bg-white rounded-lg shadow-[0px_0px_8px_0px_#00B0FE] hover:text-[#D555B5] hover:shadow-[0px_0px_8px_0px_#D555B5] transition-all duration-300"
                >
                  Request a Quote
                </Link>
                <a
                  target="_blank"
                  href="https://calendly.com/techmapperz-projects/30min"
                  class="relative inline-block uppercase w-fit font-semibold text-[22px] text-[#4CAF50] py-2 px-4 bg-white rounded-lg shadow-[0px_0px_8px_0px_#4CAF50] hover:text-[#9C27B0] hover:shadow-[0px_0px_8px_0px_#9C27B0] transition-all duration-300"
                >
                  Book a Demo
                </a>
                </div>


              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomCarousel;
