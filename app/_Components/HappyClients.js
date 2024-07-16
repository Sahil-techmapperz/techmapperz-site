"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Images = [
  '/Photos/PAS.webp',
  '/Photos/Genesys.webp',
  '/Photos/English_Faculties.webp',
  '/Photos/Cocreatelab_logo.png',
  '/Photos/manusherghorbari_logo.png',
  '/Photos/Novusterchsurvery_logo.png',
  '/Photos/Shrc_logo.png',
  '/Photos/whitespreadfoods_logo.png'
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const HappyClients = () => {
  return (
    <section className="bg-gray-900 py-8 px-[4rem] text-center">
      <h1 className='text-white text-4xl font-bold mb-6'>Our Happy Clients</h1>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1500}
        keyBoardControl={true}
        customTransition="all .5s ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {Images.map((img, index) => (
          <img className="w-[150px] h-[250px] object-contain rounded-md" src={img} alt={`Client logo ${index}`} key={index} />
        ))}
      </Carousel>
    </section>
  );
};

export default HappyClients;
