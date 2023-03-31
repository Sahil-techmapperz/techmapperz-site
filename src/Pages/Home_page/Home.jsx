import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AboutUs from '../../Components/Home_Component/Home_aboutUs/aboutUs';
import Home_carousel from '../../Components/Home_Component/Home_Carosel/Home_carousel';
import Home_Features from '../../Components/Home_Component/Home_Features/Home_Features';
import Home_Technology from '../../Components/Home_Component/Home_Technology/Home_Technology';
import Blog from '../../Components/Home_Component/Home_blog/Blog';
import TechBlog from '../../Components/Home_Component/Home_technoBlog/techBlog';
import styles from "./Home.module.css";
import Testimonial from '../../Components/Home_Component/Home_testimonial/Testimonial';
const Home = () => {
const[posts,setPosts]=useState([]);
  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/article/posts?page=1&perpage=3`
      );
      setPosts(response.data.posts);
    } catch (err) {
      
    }
  };

  useEffect(() => {
    fetchPosts();
    const options = {
      top: 0,
      left: 0,
      behavior: 'smooth'
    };
    window.scrollTo(options);
  }, []);

  return (
    <div className={styles.home}>
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
        <TechBlog postdata={posts&&posts}/>
      </section>


      <section>
       <Testimonial />
      </section>

    </div>

  )
}

export default Home
