import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Styles from "./Sitemap.module.css";
import { AiOutlineRight,AiOutlineLeft} from 'react-icons/ai';
const Sitemap = () => {
  useEffect(() => {
    const options = {
        top: 0,
        left: 0,
        behavior: 'smooth'
    };
    window.scrollTo(options);
}, []);
  return (
    <div className={Styles.sitemap}>
      <div className={Styles.Top}>
      <h1>Sitemap</h1>
        <p>Home / Sitemap</p>
      </div>
      <div className={Styles.bottem}>
        <div className={Styles.card_contanier}>
            <div className={Styles.card}>
              <Link to={"/"}><div className={Styles.card_top}><div className={Styles.arrow}> <AiOutlineLeft/> </div> <h2>Home</h2></div></Link> 
                <ul>
                  <li><Link to={"/"}>Features</Link></li>
                  <li><Link to={"/"}>Technology</Link></li>
                  <li><Link to={"/"}>Our Brand Partners</Link></li>
                  <li><Link to={"/"}>Our Blog</Link></li>
                  <li><Link to={"/"}>Testimonial</Link></li>
                </ul>
                
            </div>
            <div className={Styles.card}>
              <Link to={"/about"}> <div className={Styles.card_top}><div className={Styles.arrow}> <AiOutlineLeft/> </div> <h2>About us</h2></div></Link> 
                <ul>
                  <li><Link to={"/about"}>About Company</Link></li>
                  <li><Link to={"/about"}>Our Mission</Link></li>
                  <li><Link to={"/about"}>Our Vision</Link></li>
                  <li><Link to={"/about"}>Why Choose Techmapparz</Link></li>
                  <li><Link to={"/about"}>How Do We Work</Link></li>
                  <li><Link to={"/about"}>Company value</Link></li>
                </ul>
                
            </div>
            <div className={Styles.card}>
               <Link to={"/service"}> <div className={Styles.card_top}><div className={Styles.arrow}> <AiOutlineLeft/> </div> <h2>Service</h2></div></Link>
                <ul>
                  <li><Link to={"/service"}>GIS Services</Link></li>
                  <li><Link to={"/service"}>Remote Sensing Services</Link></li>
                  <li><Link to={"/service"}>Drone Services</Link></li>
                  <li><Link to={"/service"}>Photogrammetry Services</Link></li>
                  <li><Link to={"/service"}>Web GIS Services</Link></li>
                  <li><Link to={"/service"}>Mobile Application Development</Link></li>
                  <li><Link to={"/service"}>Website Development</Link></li>
                  <li><Link to={"/service"}>CRM-ERP</Link></li>
                  <li><Link to={"/service"}>IT Consulting Services</Link></li>
                </ul>
                
            </div>

            <div className={Styles.card}>
               <Link to={"/career"}> <div className={Styles.card_top}><div className={Styles.arrow}> <AiOutlineLeft/> </div> <h2>Career</h2></div></Link>
                <ul>
                  <li><Link to={"/career"}>Possibilities unmatched</Link></li>
                  <li><Link to={"/career"}>Diversity unmatched</Link></li>
                  <li><Link to={"/career"}>Flexibility unparalleled</Link></li>
                  <li><Link to={"/career"}>Grow unhindered</Link></li>
                  <li><Link to={"/career"}>Shine Unrestricted</Link></li>
                  <li><Link to={"/career"}>Earn unlimited</Link></li>
                </ul>
                
            </div>
            <div className={Styles.card}>
               <Link to={"/contact"}> <div className={Styles.card_top}><div className={Styles.arrow}> <AiOutlineLeft/> </div> <h2>Contact us</h2></div></Link>
                <ul>
                  <li><Link to={"/contact"}>Gettting Touch</Link></li>
                </ul>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sitemap
