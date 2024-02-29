import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Multi_carouel.css"
let Images = [
    "https://ik.imagekit.io/ntktfi8dx/uploads/PAS.png?updatedAt=1680755047359",
    "https://ik.imagekit.io/ntktfi8dx/uploads/Genesys-removebg-preview.png?updatedAt=1680755067922",
    "https://ik.imagekit.io/ntktfi8dx/uploads/WhatsApp_Image_2023-05-20_at_12.53.16_PM.jpeg?updatedAt=1684590726666"
]

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
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
const Multi_carousel = () => {
    return (
        <>
        <h1 className='multi_carousel_headind'>Our Happy Clients</h1>
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
            {Images.map(img => {
                return (
                    <img src={img} alt='' />
                )
            })}

        </Carousel>
        </>
    )
}

export default Multi_carousel
