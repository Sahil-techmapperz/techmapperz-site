import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Styles from "./Home.module.css"
import { Link } from 'react-router-dom';
import { FaPython, FaJava, FaVuejs, FaAngular, FaReact, FaPhp, FaCss3Alt, FaNodeJs, FaSwift, FaHtml5 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
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
import Drone_gif from '../../Photos/Home/drone.gif';
import App_development from '../../Photos/Home/App_development.gif';
import Multi_carousel from '../../Components/Home_Component/Multi_carousel/Multi_carousel';
import TechBlog from '../../Components/Home_Component/Home_technoBlog/techBlog';

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

const Home = () => {
    const[Testimonial,setTestimonial]=useState([]);
    const[TechBlogpost,setTechBlog]=useState([]);



    useEffect(()=>{
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
    },[])


    useEffect(() => {
        const options = {
          top: 0,
          left: 0,
          behavior: 'smooth'
        };
        window.scrollTo(options);
      }, []);




    return (
        <div>
            <section className={Styles.home_first_part}>
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
                            <p className={Styles.title}>{slide.caption}</p>
                        </div>
                    ))}
                </Carousel>

            </section>
            <section className={Styles.home_secend_part}>
                <div className={Styles.features}>
                    <p className={Styles.title}>Features</p>
                    <img className={Styles.setting_icon} src={Home_4} alt='' />
                    <div className={Styles.features_top}>
                        <h1>These Services to Expand your Business</h1>
                        <div className={Styles.info}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
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
                            <img src={Home_1} alt='' />
                            <h1>IT Services</h1>
                        </div>
                        <div className={`${Styles.card} ${Styles.card_2}`}>
                            <img src={Home_2} alt='' />
                            <h1>GIS Services</h1>
                        </div>
                        <div className={`${Styles.card} ${Styles.card_3}`}>
                            <img src={Home_3} alt='' />
                            <h1>Drone Services</h1>
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
                    <img className={Styles.technology_icon} src={Home_5} alt='' />
                </div>

                <div className={Styles.About_us}>
                    <div className={Styles.about_left}>
                        <img className={Styles.Circul_1} src={Home_8} alt='' />
                        <img className={Styles.Circul_2} src={Home_8} alt='' />
                        <img className={Styles.about_img_1} src={Home_7} alt='' />
                        <img className={Styles.about_img_2} src={Home_6} alt='' />
                    </div>
                    <div className={Styles.about_right}>
                    <img className={Styles.about_us_drone} src={App_development} alt=''/>
                        <p className={Styles.title}>About Us</p>
                        <div className={Styles.about_right_contener}>
                            <h1>Why Choose Techmapperz</h1>
                            <p>We are a learn of free-thinking individuals who believe that
                                the solution to a complex problem need not be complex,
                                that complex issues should have very simple solutions,and
                                this is the change that we all beleive in.we aim for a digital
                                transformation towards innovation with simplicity.</p>
                            <p>We strive to be a software Development Company that
                                delivers cutting edge solutions,helping not just Fortune 500
                                companies and enterprise clients on their digital evolution journey.</p>
                            <div className={Styles.know_more }>
                                <Link to={"/service"}> <div className={Styles.know_more_btn}>
                                    <div></div>
                                    <h2>View All Services</h2>
                                </div></Link>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className={Styles.Brand_Partners}>
                    <div className={Styles.Brand_Partners_left}>
                        <Multi_carousel/>
                    </div>
                    <div className={Styles.Brand_Partners_right}>
                        <p>Technology</p>
                        <h1>Our Brand Partners</h1>
                    </div>
                </div>


                <TechBlog postdata={TechBlogpost&&TechBlogpost}/>


                <div className={Styles.Testimonial}>
                    <p>Testimonial</p>
                    <h1>What our Clients Say</h1>
               
                <Carousel
             
             showStatus={false}
             infiniteLoop={true}
             autoPlay={true}
             showArrows={false}
             showThumbs={false}
             stopOnHover={true}
             showIndicators={false}
             useKeyboardArrows={true}
            
          >
          {Testimonial.map(data=>{
            return(
              <div className={Styles.card}>
              <h2>{data.message}</h2>
              <div className={Styles.client}>
                <img src={data.avater} />
                <div>
                <p>{data.name}</p>
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
    )
}

export default Home
