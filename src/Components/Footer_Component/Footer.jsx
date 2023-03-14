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
       <Link> <div className={styles.Submit_btn}>
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
            <a href='#'><h3><BsFacebook/></h3></a>
        </div>
      </div>
      <div className={styles.footer_part_three}>
        <p className={styles.title}>Explore More</p>
        <div className={styles.explore_content}>
            <ul>
                <Link><li>Home</li></Link>
                <Link><li>Support</li></Link>
                <Link><li>About</li></Link>
                <Link><li>Privacy & Policy</li></Link>
                <Link><li>Services</li></Link>
                <Link><li>Terms of Use</li></Link>
                <Link><li>News & Article</li></Link>
                <Link><li>Help</li></Link>
                <Link><li>Contact</li></Link>
                <Link><li>Sitemap</li></Link>
            </ul>
        </div>
      </div>
    </div>
    </div>
    <div className={styles.copyright}>
    <p>&copy; copyright 2021 by Techmapperz.com</p>
    </div>
    </>
  )
}

export default Footer
