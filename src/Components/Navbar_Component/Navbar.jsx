import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlineMenu, AiOutlineDown } from 'react-icons/ai';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
} from '@chakra-ui/react'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const location = useLocation();
  return (
    <div className={styles.Navbar}>
      <div className={styles.left_nav}>
        <Link to={"/"}> <img src='https://ik.imagekit.io/ntktfi8dx/logo/Logo.png?updatedAt=1681285604682' alt='logo' /></Link>
      </div>
      <div className={styles.right_nav}>
        <ul>
          <li style={{ borderBottom: location.pathname === '/' && '3px solid red' }}><Link to={"/"}>Home</Link></li>
          <li style={{ borderBottom: location.pathname === '/service' && '3px solid red' 
          || location.pathname === '/gis_service' && '3px solid red' || location.pathname === '/Remote_Sensing' && '3px solid red' ||
           location.pathname === '/drone_service' && '3px solid red' 
           || location.pathname === '/Photogrammetry' && '3px solid red'||location.pathname === '/web_GIS' && '3px solid red'||
           location.pathname === '/mobile_development' && '3px solid red'||location.pathname === '/web_development' && '3px solid red'||location.pathname === '/crm_page' && '3px solid red'||
           location.pathname === '/it_consulting' && '3px solid red'||location.pathname === '/crm_integretion' && '3px solid red'||location.pathname === '/custom_consulting' && '3px solid red'||location.pathname === '/crm_implement' && '3px solid red'||location.pathname === '/crm_consulting' && '3px solid red'
            }}><Link to={"/service"}>Service <IoIosArrowDown /></Link>
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
          <li style={{ borderBottom: location.pathname === '/article' && '3px solid red' }}><Link to={"/article"}>News & Articles <IoIosArrowDown /></Link>
          </li>
          <li style={{ borderBottom: location.pathname === '/about' && '3px solid red' }}><Link to={"/about"}>About us</Link></li>
          <li style={{ borderBottom: location.pathname === '/career' && '3px solid red' }}><Link to={"/career"}>Careers</Link></li>
          <li style={{ borderBottom: location.pathname === '/contact' && '3px solid red' }}><Link to={"/contact"}>Contact us</Link></li>
        </ul>
      </div>
      <div ref={btnRef} onClick={onOpen} className={styles.menue}><AiOutlineMenu /></div>

      <Drawer
        isOpen={isOpen}
        placement='right'
        size={"full"}
        onClose={onClose}
        finalFocusRef={btnRef}

      >
        <DrawerOverlay />
        <DrawerContent backgroundColor={"gray.400"}>
          <DrawerCloseButton />
          <DrawerBody display={"flex"} flexDirection="column" justifyContent={"center"} alignItems="center" gap="2rem">
            <Box fontSize={"25px"} ><Link to={"/"}>Home</Link></Box>
            <Box fontSize={"25px"} ><Link to={"/service"}>Service</Link></Box>
            <Box fontSize={"25px"} ><Link to={"/article"}>News & Article</Link></Box>
            <Box fontSize={"25px"} ><Link to={"/about"}>About us</Link></Box>
            <Box fontSize={"25px"} ><Link to={"/career"}>Career</Link></Box>
            <Box fontSize={"25px"} ><Link to={"/contact"}>Contact</Link></Box>

          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme={"red"} variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>


    </div>
  )
}

export default Navbar