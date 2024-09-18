"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
// import Home_banner_1 from "@/public/Photos/Home_banner_1.png"; 
import Home_banner_1 from "@/public/Photos/new_banner_home_1.png"; 
import Home_banner_2 from "@/public/Photos/new_home_banner_2.png"; 

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
      title: "Mobile & Web Application Development",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
      image: Home_banner_1,
    },
    {
      title: "Custom Software Solutions",
      description:
        "Suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.",
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
                  background: "linear-gradient(101.3deg, rgba(57, 107, 169, 0.35) 40.68%, rgba(23, 42, 67, 0) 54.8%)",
                }}
              >
                <h3 className="text-[60px] w-[50%] font-semibold">
                  {item.title}
                </h3>
                <p className="my-3 w-[50%]">{item.description}</p>
                <a
                style={{boxShadow: "0px 0px 8px 0px #00B0FE"}}
                  href="/contact"
                  className="relative w-fit inline-block text-[#00B0FE] py-2 px-4 bg-white rounded-lg hover:shadow-lg mt-3"
                >
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomCarousel;
