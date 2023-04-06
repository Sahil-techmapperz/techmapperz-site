import React from 'react';
import styles from './Footer.module.css';
import { BsLinkedin,BsInstagram,BsFacebook,BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
    <div className={styles.Footer}>
      <div className={styles.Footer_main}>
      <div className={styles.footer_part_one}>
        <p>Let's Have a talk about your project.</p>
        <h1>Need more information or want to get in touch?</h1>
       <Link to={"/contact"}> <div className={styles.Submit_btn}>
            <div></div>
            <h2>Get in touch</h2>
        </div></Link>
       
      </div>
      <div className={styles.footer_part_two}>
        <p className={styles.title}>About</p>
        <p>There are many variation of passages of lorem ipsum available, but the majority suffered.</p><br/><br/>
        <p className={styles.title}>Follow on -</p>
        <div className={styles.social_media_icons}>
            <a href='#'><h3><BsLinkedin/></h3></a>
            <a href='#'><h3><BsInstagram/></h3></a>
            <a href='#'><h3><BsTwitter/></h3></a>
            <a href='#'><h3><BsFacebook/></h3></a>
        </div>
      </div>
      <div className={styles.footer_part_three}>
        <p className={styles.title}>Explore More</p>
        <div className={styles.explore_content}>
            <ul>
                <Link to={"/"}><li>Home</li></Link>
                <Link to={"/support"}><li>Support</li></Link>
                <Link to={"/about"}><li>About Us</li></Link>
                <Link to={"/privacy"}><li>Privacy & Policy</li></Link>
                <Link to={"/service"}><li>Services</li></Link>
                <Link to={"/terms"}><li>Terms of Use</li></Link>
                <Link to={"/news&article"}><li>News & Article</li></Link>
                <Link to={"/help"}><li>Help</li></Link>
                <Link to={"/contact"}><li>Contact</li></Link>
                <Link to={"/sitemap"}><li>Sitemap</li></Link>
            </ul>
        </div>
      </div>
    </div>
    </div>
    <div className={styles.copyright}>
    Copyright &copy; Techmapperz.com All Rights Reserved
    </div>
    </>
  )
}

export default Footer
