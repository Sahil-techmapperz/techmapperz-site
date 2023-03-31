import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import { IoIosArrowDown } from 'react-icons/io';
const Navbar = () => {
  const location = useLocation();
  return (
    
<div>
<nav className={styles.navbar}>
           <Link to={"/"}> <div className={styles.logo}>
                <img src="https://www.techmapperz.com/images/v421_18528.png" alt="Company Logo"/>
            </div></Link>
            <ul className={styles.nav_list}>
                <li style={{ borderBottom: location.pathname === '/' && '3px solid red'  }}><Link to="/">Home</Link></li>
                <li style={{ borderBottom: location.pathname === '/service' && '3px solid red'  }} className={styles.nav_item}>
                    <Link to="/service">Services </Link>
                    <div className={styles.dropdown}>
                        <Link className={styles.dropdown_1} to="/geospatial-services">Geospatial Services</Link>
                        <div className={styles.inner_dropdown_1}>
                        <Link to="/geospatial-services">Geospatial Services</Link>
                        <Link to="/geospatial-services">Geospatial Services</Link>
                        <Link to="/geospatial-services">Geospatial Services</Link>
                        </div>
                        <Link to="/it-services">IT Services</Link>
                    </div>
                </li>
                <li style={{ borderBottom: location.pathname === '/article' && '3px solid red'  }}><Link to="/article">News & Articles</Link></li>
                <li style={{ borderBottom: location.pathname === '/about' && '3px solid red'  }}><Link to="/about">About Us</Link></li>
                <li style={{ borderBottom: location.pathname === '/career' && '3px solid red'  }}><Link to="/career">Careers</Link></li>
                <li style={{ borderBottom: location.pathname === '/contact' && '3px solid red'  }}><Link to="/contact">Contact Us</Link></li>
            </ul>
        </nav>

    </div>
  )
}

export default Navbar
