import React, { useEffect } from 'react';
import AboutUs from '../../Components/Home_Component/Home_aboutUs/aboutUs';
import Home_carousel from '../../Components/Home_Component/Home_Carosel/Home_carousel';
import Home_Features from '../../Components/Home_Component/Home_Features/Home_Features';
import Home_Technology from '../../Components/Home_Component/Home_Technology/Home_Technology';
import Blog from '../../Components/Home_Component/Home_blog/Blog';
import TechBlog from '../../Components/Home_Component/Home_technoBlog/techBlog';
import styles from "./Home.module.css";
import Testimonial from '../../Components/Home_Component/Home_testimonial/Testimonial';
const Home = () => {


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
      <section className={styles.carousel}>
        <Home_carousel />
      </section>

      <section>
        <Home_Features />
        <Home_Technology />
      </section>


      <section>
        <AboutUs/>
      </section>


      <section>
        <Blog/>
      </section>


      <section>
        <TechBlog/>
      </section>


      <section>
       <Testimonial/>
      </section>

    </div>

  )
}

export default Home
