"use client"; // Add this directive at the top

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoIosArrowDown } from 'react-icons/io';
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

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const pathname = usePathname();

  return (
    <div className={`${styles.navbar} fixed top-0 w-full flex justify-between items-center p-4 z-20 bg-black bg-opacity-95`}>
      <div className="md:w-1/5 w-1/2">
        <Link href="/">
          <Image
            src={company_logo}
            alt="company logo"
            priority
          />
        </Link>
      </div>
      <div className="hidden md:flex">
        <ul className="list-none relative flex gap-5">
          <li className={`relative text-center ${pathname === '/' ? 'border-b-4 border-red-500' : ''}`}>
            <Link href="/" className="text-lg text-white flex items-center">Home</Link>
          </li>
          <li className={`relative text-center ${pathname.startsWith('/service') ? 'border-b-4 border-red-500' : ''} ${styles.dropdown}`}>
            <Link href="/service" className="text-lg text-white flex items-center">
              Service <IoIosArrowDown />
            </Link>
            <ul className={`${styles.dropdownMenu}`}>
              <li className={`${styles.dropdownItem} ${styles.subDropdown}`}>
                <Link href="#" className="p-2 hover:bg-gray-300 block">Geospatial Services</Link>
                <ul className={`${styles.subDropdownMenu}`}>
                  <li className="p-2 hover:bg-gray-300"><Link href="/gisservice" className="text-sm block">GIS Services</Link></li>
                  <li className="p-2 hover:bg-gray-300"><Link href="/remotesensing" className="text-sm block">Remote Sensing</Link></li>
                  <li className="p-2 hover:bg-gray-300"><Link href="/droneservice" className="text-sm block">Drone Services</Link></li>
                  <li className="p-2 hover:bg-gray-300"><Link href="/photogrammetry" className="text-sm block">Photogrammetry Services</Link></li>
                  <li className="p-2 hover:bg-gray-300"><Link href="/webgis" className="text-sm block">Web GIS Services</Link></li>
                </ul>
              </li>
              <li className={`${styles.dropdownItem} ${styles.subDropdown}`}>
                <Link href="#" className="p-2 hover:bg-gray-300 block">IT Services</Link>
                <ul className={`${styles.subDropdownMenu}`}>
                  <li className="p-2 hover:bg-gray-300"><Link href="/mobiledevelopment" className="text-sm block">Mobile APP Development</Link></li>
                  <li className="p-2 hover:bg-gray-300"><Link href="/webdevelopment" className="text-sm block">Website Development</Link></li>
                  <li className="p-2 hover:bg-gray-300"><Link href="/crmservice" className="text-sm block">CRM / ERP</Link></li>
                  <li className="p-2 hover:bg-gray-300"><Link href="/itconsultingservice" className="text-sm block">IT Consultancy</Link></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className={`relative text-center ${pathname === '/article' ? 'border-b-4 border-red-500' : ''} ${styles.dropdown}`}>
            <Link href="#" className="text-lg text-white flex items-center">
              Blogs & Case Studies <IoIosArrowDown />
            </Link>
            <ul className={`${styles.dropdownMenu}`}>
              <li className="p-2 hover:bg-gray-300"><Link href="/blog?page=1" className="text-sm block">Blogs</Link></li>
              <li className={`relative ${styles.subDropdown}`}>
                <Link href="#" className="p-2 hover:bg-gray-300 block">Case Studies</Link>
                <ul className={`${styles.subDropdownMenu}`}>
                  <li className="p-2 hover:bg-gray-300"><Link href="/itcasestudies" className="text-sm block">IT Case Studies</Link></li>
                  <li className="p-2 hover:bg-gray-300"><Link href="/giscasestudies" className="text-sm block">GIS Case Studies</Link></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className={`relative text-center ${pathname === '/about' ? 'border-b-4 border-red-500' : ''}`}>
            <Link href="/about" className="text-lg text-white flex items-center">About us</Link>
          </li>
          <li className={`relative text-center ${pathname === '/career' ? 'border-b-4 border-red-500' : ''}`}>
            <Link href="/career" className="text-lg text-white flex items-center">Careers</Link>
          </li>
          <li className={`relative text-center ${pathname === '/contact' ? 'border-b-4 border-red-500' : ''}`}>
            <Link href="/contact" className="text-lg text-white flex items-center">Contact us</Link>
          </li>
        </ul>
      </div>
      <div ref={btnRef} onClick={onOpen} className="block text-white md:hidden text-3xl cursor-pointer">
        <AiOutlineMenu />
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
          <DrawerCloseButton size="lg" className='text-white absolute right-4 top-4' />
          <DrawerBody className="h-full flex flex-col justify-center items-center gap-8 text-white">
            <Box fontSize="2xl" onClick={onClose}>
              <Link href="/">Home</Link>
            </Box>
            <Box fontSize="2xl" onClick={onClose}>
              <Link href="/service">Service</Link>
            </Box>
            <Box fontSize="2xl" onClick={onClose}>
              <Link href="/article">Articles & Case Studies</Link>
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
  );
};

export default Navbar;
