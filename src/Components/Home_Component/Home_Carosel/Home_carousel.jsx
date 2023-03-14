import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Styles from "./Home_carousel.module.css"
const slides = [
    {
        id: 1,
        imageUrl: 'https://techmapperz.com/images/2022/05/07/frame-5.jpg',
        caption: 'MOBILE & WEB APPLICATION DEVELOPMENT'
    },
    {
        id: 2,
        imageUrl: 'https://techmapperz.com/images/2022/05/07/business-inteligence.jpg',
        caption: 'BUSINESS INTELLIGENCE & DATA ANALYTICS'
    },
    {
        id: 3,
        imageUrl: 'https://techmapperz.com/images/2022/05/07/drone-data-image-processing.jpg',
        caption: 'DRONE DATA ACQUISITION & PROCESSING'
    },
    {
        id: 4,
        imageUrl: 'https://techmapperz.com/images/2022/05/08/crm-erp-solutions.jpg',
        caption: 'ERP AND CRM SOLUTION'
    },
    {
        id: 5,
        imageUrl: 'https://techmapperz.com/images/2022/05/08/mapping-navigation.jpg',
        caption: 'GIS MAPPING & NAVIGATION'
    },
];


const Home_carousel = () => {

    const PrevArrow = ({ onClick }) => {
        return (
            <button className={`${Styles.arrow} ${Styles.prev}`} onClick={onClick}>
                <FaAngleLeft />
            </button>
        );
    };

    const NextArrow = ({ onClick }) => {
        return (
            <button className={`${Styles.arrow} ${Styles.next}`} onClick={onClick}>
                <FaAngleRight />
            </button>
        );
    };



    return (
        <div>
            <Carousel
             className={Styles.slider}
             showStatus={false}
             showArrows={false}
             infiniteLoop={true}
             autoPlay={true}
             showThumbs={false}
             stopOnHover={true}

            >
                {slides.map(slide => (
                    <div key={slide.id}>
                        <img src={slide.imageUrl} alt={slide.caption} />
                        <div className={Styles.title}>{slide.caption}</div>
                    </div>
                ))}
            </Carousel>

        </div>
    )
}

export default Home_carousel
