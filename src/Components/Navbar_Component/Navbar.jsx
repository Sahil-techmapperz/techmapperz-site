import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { IoIosArrowDown } from 'react-icons/io';
const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.left_nav}>
        <img src='https://www.techmapperz.com/images/v421_18528.png' alt='logo' />
      </div>
      <div className={styles.right_nav}>
        <ul>
          <li><Link>Home</Link></li>
          <li><Link>Service <IoIosArrowDown /></Link>
            <ul>
              <li><Link>Geospacial Services</Link>
                <ul>
                  <li><Link>GIS Services</Link></li>
                  <li><Link>GIS Services</Link></li>
                  <li><Link>GIS Services</Link></li>
                  <li><Link>GIS Services</Link></li>
                  <li><Link>GIS Services</Link></li>
                </ul>
              </li>
              <li><Link>IT Services</Link>
                <ul>
                  <li><Link>MOBILE APP DEELOPMENT</Link></li>
                  <li><Link>MOBILE APP DEELOPMENT</Link></li>
                  <li><Link>MOBILE APP DEELOPMENT</Link></li>
                  <li><Link>MOBILE APP DEELOPMENT</Link></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><Link>News & Articles <IoIosArrowDown /></Link>
            <ul>
              <li><Link>Blog</Link></li>
            </ul>
          </li>
          <li><Link>About us</Link></li>
          <li><Link>Careers</Link></li>
          <li><Link>Contact us</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
