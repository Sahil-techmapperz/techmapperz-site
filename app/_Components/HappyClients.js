"use client";

import Genesys_logo from "@/public/Photos/Genesys_logo.png";
import Cocreatelab_logo from "@/public/Photos/Cocreatelab_logo.png";
import manusherghorbari_logo from "@/public/Photos/manusherghorbari_logo.png";
import premierautosource_logo from "@/public/Photos/premierautosource_logo.png";
import shrc_logo from "@/public/Photos/Shrc_logo.png";
import whitespreadfoods_logo from "@/public/Photos/whitespreadfoods_logo.png";
import client_gradient_bg from "@/public/Photos/client_gradient-bg 1.png";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

let Clients = [
  Genesys_logo,
  Cocreatelab_logo,
  manusherghorbari_logo,
  premierautosource_logo,
  whitespreadfoods_logo,
  shrc_logo,
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const HappyClients = () => {
  return (
    <section className="relative h-[450px]" style={{ background: "linear-gradient(270.25deg, rgba(2, 24, 50, 0.69) 0.9%, rgba(0, 49, 109, 0.69) 50.43%, rgba(2, 24, 50, 0.69) 97.19%)" }} >
      <Image className="absolute z-30 w-full h-full" src={client_gradient_bg} alt="client_gradient_bg" />
      <div className="p-[20px]">
        <h1 className="text-white text-center text-2xl relative z-30 font-[600] mb-6">Our Happy Clients</h1>
        <p className="text-[18px] pb-4 text-white text-center relative z-30 font-[400]">Our Awesome Clients Solution for you Company.</p>
      </div>

      <div className="w-[90%] mx-auto relative z-30">
        <Carousel
          responsive={responsive}
          ssr={true}
          arrows={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all 0.5s"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-padding-40-px"
        >
          {Clients.map((client, index) => (
            <div
              key={index}
              style={{background: 'rgba(255, 255, 255, 0.1)'}}
              className="flex w-[250px] h-[200px] p-3 justify-center items-center"
            >
              <Image
                className=""
                src={client}
                alt={`Client logo ${index + 1}`}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default HappyClients;
