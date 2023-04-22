import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Styles from "./Home.module.css"
import { Link } from 'react-router-dom';
import { FaPython, FaJava, FaVuejs, FaAngular, FaReact, FaPhp, FaCss3Alt, FaNodeJs, FaSwift, FaHtml5 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { BsArrowLeftCircle,BsArrowRightCircle,BsChevronDoubleDown } from 'react-icons/bs';
import { SiSolidity } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { SiKotlin } from "react-icons/si";
import Home_1 from '../../Photos/Home/Home_1.png';
import Home_2 from '../../Photos/Home/Home_2.png';
import Home_3 from '../../Photos/Home/Home_3.png';
import Home_4 from '../../Photos/Home/Home_4.png';
import Home_5 from '../../Photos/Home/Home_5.png';
import Home_6 from '../../Photos/Home/Home_6.png';
import Home_7 from '../../Photos/Home/Home_7.png';
import Home_8 from '../../Photos/Home/Home_8.png';
import Home_9 from '../../Photos/Home/Home_9.png';
import Cotation from '../../Photos/Home/Cotation.png';
import Drone_gif from '../../Photos/Home/drone.gif';
import App_development from '../../Photos/Home/App_development.gif';
import Multi_carousel from '../../Components/Home_Component/Multi_carousel/Multi_carousel';
import TechBlog from '../../Components/Home_Component/Home_technoBlog/techBlog';
// import Chatbot from '../../Components/Home_Component/Chatbot/Chatbot';



const Home = () => {
    const [Testimonial, setTestimonial] = useState([]);
    const [TechBlogpost, setTechBlog] = useState([]);
    const [Techbanner, setTechBanner] = useState([]);


    const CustomPrevArrow = (onClickHandler, hasPrev, label) => (
        <button
            type="button"
            onClick={onClickHandler}
            disabled={!hasPrev}
            className={`${Styles.custom_arrow} ${Styles.custom_arrow_prev}`}
            aria-label={label}
        >
            <BsArrowLeftCircle />
        </button>
    );

    const CustomNextArrow = (onClickHandler, hasNext, label) => (
        <button
            type="button"
            onClick={onClickHandler}
            disabled={!hasNext}
            className={`${Styles.custom_arrow} ${Styles.custom_arrow_next}`}
            aria-label={label}
        >
            <BsArrowRightCircle />
        </button>
    );
    const CustomPrevArrow2 = ({ onClickHandler, hasPrev, label }) => {
        return (
            <button
                type="button"
                onClick={onClickHandler}
                disabled={!hasPrev}
                className={`${Styles.custom_arrow2} ${Styles.custom_arrow_prev2}`}
                aria-label={label}
            >
                <BsArrowLeftCircle />
            </button>
        );
    };
    
    
    const CustomNextArrow2 = (onClickHandler, hasNext, label) => (
        <button
            type="button"
            onClick={onClickHandler}
            disabled={!hasNext}
            className={`${Styles.custom_arrow2} ${Styles.custom_arrow_next2}`}
            aria-label={label}
        >
            <BsArrowRightCircle />
        </button>
    );
    





    useEffect(() => {
        fetch(`${process.env.REACT_APP_Backend_baseUrl}/Testimonial`)
            .then(res => res.json())
            .then(data => {
                setTestimonial(data);
            });
        fetch(`${process.env.REACT_APP_Backend_baseUrl}/article/posts?perpage=3`)
            .then(res => res.json())
            .then(data => {
                setTechBlog(data.posts);
            });
        fetch(`${process.env.REACT_APP_Backend_baseUrl}/banner`)
            .then(res => res.json())
            .then(data => {
                setTechBanner(data);
            });
    }, [])


    useEffect(() => {
        const options = {
            top: 0,
            left: 0,
            behavior: 'smooth'
        };
        window.scrollTo(options);
    }, []);

const handaledown=()=>{
    const options = {
        top: 700,
        left: 0,
        behavior: 'smooth'
    };
    window.scrollTo(options);
}


    return (
        <>
            <div>
                <section className={Styles.home_first_part}>
                    <Carousel
                        className={Styles.carousel_container}
                        showStatus={false}
                        infiniteLoop={true}
                        autoPlay={true}
                        showThumbs={false}
                        stopOnHover={true}
                        showIndicators={false}
                        useKeyboardArrows={true}
                        renderArrowPrev={(onClickHandler, hasPrev, label) =>
                            CustomPrevArrow(onClickHandler, hasPrev, label)
                        }
                        renderArrowNext={(onClickHandler, hasNext, label) =>
                            CustomNextArrow(onClickHandler, hasNext, label)
                        }
                    >
                        {Techbanner && Techbanner.map(slide => (
                            <div key={slide.id}>
                                <img className={Styles.carousel_img} loading="lazy" src={slide.banner_img_url} alt={slide.caption} />
                                <p className={Styles.title}>{slide.heading}</p>
                                <p className={Styles.subTitle}>{slide.subTitle}</p>
                                <div className={Styles.know_more}>
                                    <Link to={"/contact"}> <div className={Styles.know_more_btn}>
                                        <div></div>
                                        <h2>Know More</h2>
                                    </div></Link>
                                </div>
                                <div onClick={handaledown} className={Styles.SCROLL_DOWN}>
                                    <h1>SCROLL DOWN</h1>
                                    <BsChevronDoubleDown/>
                                </div>
                            </div>
                        ))}
                    </Carousel>

                </section>

                <section className={Styles.home_secend_part}>

                    <div className={Styles.features}>
                        <p className={Styles.title}>Features</p>
                        <img className={Styles.setting_icon} src={Home_4} alt='' loading="lazy" />
                        <div className={Styles.features_top}>
                            <h1>These Services to Expand your Business</h1>
                            <div className={Styles.info}>
                                <p>To assist companies in thriving in the digital age, we provide a variety of technological services. We can assist businesses in managing their resources, connecting with their audiences online, and optimising their operations thanks to our knowledge and expertise.</p>
                                <div className={Styles.know_more}>
                                    <Link to={"/contact"}> <div className={Styles.know_more_btn}>
                                        <div></div>
                                        <h2>Know More</h2>
                                    </div></Link>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.card_contaner}>
                            <div className={Styles.card}>
                                <img src={Home_1} alt='' loading="lazy" />
                                <Link to={"/it_consulting"}> <h1>IT Services</h1></Link>
                            </div>
                            <div className={`${Styles.card} ${Styles.card_2}`}>
                                <img src={Home_2} alt='' loading="lazy" />
                                <Link to={"/gis_service"}> <h1>GIS Services</h1></Link>
                            </div>
                            <div className={`${Styles.card} ${Styles.card_3}`}>
                                <img src={Home_3} alt='' loading="lazy" />
                                <Link to={"/drone_service"}> <h1>Drone Services</h1></Link>
                            </div>
                        </div>
                        <div className={`${Styles.know_more} ${Styles.View_All_Services}`}>
                            <Link to={"/service"}> <div className={Styles.know_more_btn}>
                                <div></div>
                                <h2>View All Services</h2>
                            </div></Link>
                        </div>
                    </div>
                    <div className={Styles.Technology}>
                        <p className={Styles.title}>Technology</p>
                        <div className={Styles.technology_contaner}>
                            <div className={Styles.technology_left}>
                                <h1>Latest Technology That we used</h1>
                                <p>Let Your Data Take Your Business to Higher Grounds</p>
                            </div>

                            <div className={Styles.technology_right}>
                                <div><FaJava className={Styles.logo} /> <p>Java</p></div>
                                <div><TbBrandJavascript className={Styles.logo} /><p>Javascript</p></div>
                                <div><FaVuejs className={Styles.logo} /><p>Vuejs</p></div>
                                <div><FaAngular className={Styles.logo} /><p>Angular</p></div>
                                <div><FaReact className={Styles.logo} /><p>React</p></div>
                                <div><SiSolidity className={Styles.logo} /><p>Solidity</p></div>
                                <div><FaPhp className={Styles.logo} /><p>PHP</p></div>
                                <div><TbBrandReactNative className={Styles.logo} /><p>ReactNative</p></div>
                                <div><FaCss3Alt className={Styles.logo} /><p>CSS</p></div>
                                <div><FaNodeJs className={Styles.logo} /><p>Node.js</p></div>
                                <div><FaSwift className={Styles.logo} /><p>Swift</p></div>
                                <div><FaHtml5 className={Styles.logo} /><p>HTML</p></div>
                                <div><FaPython className={Styles.logo} /><p>Python</p></div>
                                <div><SiKotlin className={Styles.logo} /><p>Kotlin</p></div>
                            </div>
                        </div>
                        <img className={Styles.technology_icon} src={Home_5} alt='' loading="lazy" />
                    </div>

                    <div className={Styles.About_us}>
                        <div className={Styles.about_left}>
                            <img className={Styles.Circul_1} src={Home_8} alt='' loading="lazy" />
                            <img className={Styles.Circul_2} src={Home_8} alt='' loading="lazy" />
                            <img className={Styles.about_img_1} src={Home_7} alt='' loading="lazy" />
                            <img className={Styles.about_img_2} src={Home_6} alt='' loading="lazy" />
                        </div>
                        <div className={Styles.about_right}>
                            <img className={Styles.about_us_drone} src={Home_9} alt='' loading="lazy" />
                            <p className={Styles.title}>About Us</p>
                            <div className={Styles.about_right_contener}>
                                <h1>Why Choose Techmapperz</h1>
                                <p>The smaller things make big difference in everything that we do, we at Techmapperz also believe in the attention to detail methodology, and our eye to the detail in every project that we manage is what makes us stand out from the rest, we have a 4 step approach on how we execute a project plan</p>
                                <p>We strive to be a software Development Company that
                                    delivers cutting edge solutions,helping not just Fortune 500
                                    companies and enterprise clients on their digital evolution journey.</p>
                                <div className={Styles.know_more}>
                                    <Link to={"/about"}> <div className={Styles.know_more_btn}>
                                        <div></div>
                                        <h2>Know more</h2>
                                    </div></Link>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={Styles.Brand_Partners}>
                        <div className={Styles.Brand_Partners_left}>
                            <Multi_carousel />
                        </div>
                        <div className={Styles.Brand_Partners_right}>
                            <p>Technology</p>
                            <h1>Our Brand Partners</h1>
                            <img src='https://ik.imagekit.io/ntktfi8dx/uploads/Microsoft_logo_1.png?updatedAt=1680756385301' alt='' loading="lazy" />
                        </div>
                    </div>

                    <div className={Styles.techblog_contaner}>
                        <TechBlog postdata={TechBlogpost} />
                    </div>

                    <div className={Styles.Testimonial}>
                        <p>Testimonial</p>
                        <h1>What our Clients Say</h1>

                        <Carousel

                            showStatus={false}
                            infiniteLoop={true}
                            showArrows={true}
                            showThumbs={false}
                            stopOnHover={true}
                            showIndicators={false}
                            useKeyboardArrows={true}
                            className={Styles.Carousel}
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                CustomPrevArrow2(onClickHandler, hasPrev, label)
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                CustomNextArrow2(onClickHandler, hasNext, label)
                            }
                            
                        >
                            {Testimonial.map(data => {
                                return (
                                    <div className={Styles.card}>
                                        <div style={{ "display": "flex", "gap": "10px" }}>
                                            <img src={Cotation} alt='' />
                                            <h2 >{data.message}</h2>
                                        </div>
                                        <div className={Styles.client}>
                                            <img src={data.avater} />
                                            <div>
                                                <p className={Styles.name}>{data.name}</p>
                                                <p>{data.Companyname}</p>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })}


                        </Carousel>
                    </div>

                </section>
            </div>
        </>
    )
}

export default Home
