import React from 'react';
import styles from './Footer.module.css';
import {BsYoutube, BsLinkedin,BsInstagram,BsFacebook,BsTwitter } from 'react-icons/bs';
import {FaPinterest} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Up_arrow from '../../Photos/Up_arrow.png';


const Footer = () => {

  const Gotop=()=>{
    const options = {
      top: 0,
      left: 0,
      behavior: 'smooth'
    };
    window.scrollTo(options);
  }
  return (
    <>
    <div className={styles.Footer}>
      <div className={styles.Footer_main}>
      <div className={styles.footer_part_one}>
        <p>Let's talk to our expert.</p>
        <h1>Need more information?</h1>
       <Link to={"/contact"}> <div className={styles.Submit_btn}>
            <div></div>
            <h2>Get in touch</h2>
        </div></Link>
       
      </div>

      <div className={styles.footer_part_two}>
        <p className={`${styles.title} ${styles.title1}`}>About</p>
        <p className={styles.abuot_title}>Chasing the Vision for a better tomorrow where technology simplifies complex functions.</p><br/><br/>
        <p className={styles.title}>Follow us on -</p>
        <div className={styles.social_media_icons}>
            <a href='https://www.linkedin.com/company/techmapperz/' target="_blank"><h3><BsLinkedin className={styles.icon}/></h3></a>
            <a href='https://www.instagram.com/techmapperz/' target="_blank"><h3><BsInstagram className={styles.icon}/></h3></a>
            <a href='https://twitter.com/techmapperz?t=Rbrwd-5pDZ_pwkW2OEZ2Ng&s=09' target="_blank"><h3><BsTwitter className={styles.icon}/></h3></a>
            <a href='https://www.facebook.com/techmapperz' target="_blank"><h3><BsFacebook className={styles.icon}/></h3></a>
            <a href='https://www.youtube.com/channel/UCWogNBwwxTvoX8Ax24j6c6Q' target="_blank"><h3><BsYoutube className={styles.icon}/></h3></a>
            <a href='https://pin.it/2nsXnBd' target="_blank"><h3><FaPinterest className={styles.icon}/></h3></a>
        </div>
      </div>

      <div className={styles.footer_part_three}>
        <p className={styles.title3}>Explore More</p>
        <div className={styles.explore_content}>
            <ul>
                <Link to={"/"}><li>Home</li></Link>
                <Link to={"/support"}><li>Support</li></Link>
                <Link to={"/about"}><li>About Us</li></Link>
                <Link to={"/Privacy_Policy"}><li>Privacy Policy</li></Link>
                <Link to={"/service"}><li>Services</li></Link>
                <Link to={"/terms"}><li>Terms of Use</li></Link>
                <Link to={"/news&article"}><li>News & Articles</li></Link>
                <Link to={"/help"}><li>Help</li></Link>
                <Link to={"/contact"}><li>Contact</li></Link>
                <Link to={"/sitemap"}><li>Sitemap</li></Link>
            </ul>
        </div>
      </div>
    </div>
    <img className={styles.backtoTop} onClick={Gotop}  src={Up_arrow} alt=''/>
    </div>
    <div className={styles.copyright}>
    Copyright &copy; 2022 Techmapperz LLP. All Rights Reserved
    </div>
    </>
  )
}

export default Footer
