import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import { IoIosArrowDown } from 'react-icons/io';
const Navbar = () => {
  const location = useLocation();
  return (
    <div className={styles.Navbar}>
      <div className={styles.left_nav}>
       <Link to={"/"}> <img src='https://www.techmapperz.com/images/v421_18528.png' alt='logo' /></Link>
      </div>
      <div className={styles.right_nav}>
        <ul>
          <li style={{ backgroundColor: location.pathname === '/' && '#396ba9'  }}><Link  to={"/"}>Home</Link></li>
          <li style={{ backgroundColor: location.pathname === '/service' && '#396ba9' }}><Link to={"/service"}>Service <IoIosArrowDown /></Link>
            {/* <ul>
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
            </ul> */}
          </li>
          <li style={{ backgroundColor: location.pathname === '/news&articles' && '#396ba9'  }}><Link>News & Articles <IoIosArrowDown /></Link>
            {/* <ul>
              <li><Link>Blog</Link></li>
            </ul> */}
          </li>
          <li style={{ backgroundColor: location.pathname === '/about' && '#396ba9'  }}><Link to={"/about"}>About us</Link></li>
          <li style={{ backgroundColor: location.pathname === '/career' && '#396ba9'  }}><Link to={"/career"}>Careers</Link></li>
          <li style={{ backgroundColor: location.pathname === '/contact' && '#396ba9'  }}><Link to={"/contact"}>Contact us</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
