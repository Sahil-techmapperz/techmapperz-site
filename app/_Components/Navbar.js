"use client"; // Add this directive at the top

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiOutlineMenu } from 'react-icons/ai';
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
} from '@chakra-ui/react';
import Image from 'next/image';

import company_logo from "@/public/company_logo.webp"
import styles from './Navbar.module.css';
import Resources from './Resources';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const pathname = usePathname();

  const sections = [
    {
      title: 'Geospatial Services',
      items: [
        { name: 'GIS Services', link: '/service/gis/gisservice' },
        { name: 'Remote Sensing', link: '/service/gis/remotesensing' },
        { name: 'Drone Services', link: '/service/gis/droneservice' },
        { name: 'Photogrammetry Services', link: '/service/gis/photogrammetry' },
        { name: 'Web GIS Services', link: '/service/gis/webgis' },
      ],
    },
    {
      title: 'IT Services',
      items: [
        { name: 'Mobile APP Development', link: '/service/it/mobiledevelopment' },
        { name: 'Website Development', link: '/service/it/webdevelopment' },
        { name: 'CRM/ERP', link: '/service/it/crmservice' },
        { name: 'IT Consultancy', link: '/service/it/itconsultingservice' },
      ],
    },
  ];


  const sections2 = [
    {
      title: 'Blogs',
      items: [
        { name: 'Latest Blogs', link: '/blog' },
      ],
    },
    {
      title: 'Portfolios',
      items: [
        { name: 'IT Portfolio', link: '/casestudies' },
        { name: 'GIS Portfolio', link: '/casestudies' },
      ],
    },
  ];

  return (
    <>
      <div className={`${styles.navbar} fixed top-0 w-full flex justify-between items-center py-3 px-2 z-[200] bg-black bg-opacity-95`}>
        <div className="md:w-1/5 w-1/2">
          <Link href="/">
            <Image
              src={company_logo}
              alt="company logo"
              priority
              className='w-[200px]'
            />
          </Link>
        </div>
        <div className="hidden md:flex justify-center items-center absolute right-0">
          <ul className="list-none relative flex gap-6 mr-[80px]">
            <li className={`relative text-center `}>
              <Link href="/" className={`text-lg text-white flex items-center ${pathname === '/' ? 'border-b-4 border-red-500' : ''}`}>Home</Link>
            </li>

            <Resources
              sections={sections}
              title={"Service"}
              subtitle={
                "Providing cutting-edge IT solutions and GIS services to streamline operations, enhance decision-making, and drive business success."
              }
              color={"#007F7B"}
              link={"/service"}
            />

            <Resources
              sections={sections2}
              title={"Resources"}
              subtitle={
                "Explore valuable resources on IT and GIS solutions, empowering your business with insights, tools, and industry best practices."
              }
              color={"#007F7B"}
              link={"/blog"}
            />

            <li className={`relative text-center ${pathname === '/about' ? 'border-b-4 border-red-500' : ''}`}>
              <Link href="/about" className="text-lg text-white flex items-center">About us</Link>
            </li>
            <li className={`relative text-center ${pathname === '/career' ? 'border-b-4 border-red-500' : ''}`}>
              <Link href="/career" className="text-lg text-white flex items-center">Careers</Link>
            </li>
            <li className={`relative text-center ml-[60px] ${pathname === '/contact' ? 'border-b-4 border-red-500' : ''}`}>
              <Link href="/contact" className="text-lg text-white flex items-center border-2 px-2 rounded-md hover:bg-white hover:text-black shadow-[0px_0px_8px_0px_#00B0FE]">Contact us</Link>
            </li>

          </ul>
        </div>

        <div ref={btnRef} onClick={onOpen} className="block text-white md:hidden text-3xl cursor-pointer">
        {!isOpen && <AiOutlineMenu />}
        </div>

        <Drawer
          isOpen={isOpen}
          placement="right"
          size="full"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent backgroundColor="#181818">
            <DrawerCloseButton size="lg" className='text-white  absolute right-4 top-[70px]' />
            <DrawerBody className="h-full flex flex-col justify-center items-center gap-8 text-white">
              <Box fontSize="2xl" onClick={onClose}>
                <Link href="/">Home</Link>
              </Box>
              <Box fontSize="2xl" onClick={onClose}>
                <Link href="/service">Service</Link>
              </Box>
              <Box fontSize="2xl" onClick={onClose}>
                <Link href="/blog">Resources</Link>
              </Box>
              <Box fontSize="2xl" onClick={onClose}>
                <Link href="/about">About us</Link>
              </Box>
              <Box fontSize="2xl" onClick={onClose}>
                <Link href="/career">Career</Link>
              </Box>
              <Box fontSize="2xl" onClick={onClose}>
                <Link href="/contact">Contact</Link>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>


    </>
  );
};

export default Navbar;
