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
          <li style={{ borderBottom: location.pathname === '/' && '3px solid red'  }}><Link  to={"/"}>Home</Link></li>
          <li style={{ borderBottom: location.pathname === '/service' && '3px solid red' }}><Link to={"/service"}>Service <IoIosArrowDown /></Link>
            <ul>
              <li><Link>Geospacial Services</Link>
                <ul>
                  <li to={""}><Link to={"/gis_service"}>GIS Services</Link></li>
                  <li ><Link to={"/Remote_Sensing"}>Remote Sensing</Link></li>
                  <li ><Link to={"/drone_service"}>Drone Services</Link></li>
                  <li ><Link to={"/Photogrammetry"}>Photogrammetry Services</Link></li>
                  <li ><Link to={"/web_GIS"}>Web GIS Services</Link></li>
                </ul>
              </li>
              <li><Link>IT Services</Link>
                <ul>
                  <li ><Link to={"/mobile_development"}>Mobile APP Development</Link></li>
                  <li ><Link to={"/web_development"}>Website Development</Link></li>
                  <li ><Link to={"/crm_page"}>CRM / ERP</Link></li>
                  <li><Link to={"/it_consulting"}>IT Consultancy</Link></li>
                </ul>
              </li>
            </ul>
          </li>
          <li style={{ borderBottom: location.pathname === '/article' && '3px solid red'  }}><Link to={"/article"}>News & Articles <IoIosArrowDown /></Link>
          </li>
          <li style={{ borderBottom: location.pathname === '/about' && '3px solid red'  }}><Link to={"/about"}>About us</Link></li>
          <li style={{ borderBottom: location.pathname === '/career' && '3px solid red'  }}><Link to={"/career"}>Careers</Link></li>
          <li style={{ borderBottom: location.pathname === '/contact' && '3px solid red'  }}><Link to={"/contact"}>Contact us</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar