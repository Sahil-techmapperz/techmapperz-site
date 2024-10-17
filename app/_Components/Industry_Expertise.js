// Industry_Expertise.js
"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Industry_Expertise_Image from "@/public/Photos/Industry Expertise.jpg";
import Retail_Image from "@/public/Photos/Retail_Image.png";
import Education_Image from "@/public/Photos/Education_Image.png";
import Government_Image from "@/public/Photos/Goverment_Image.png";
import Travel_Image from "@/public/Photos/Travel_Image.png";
import Heathcare_Image from "@/public/Photos/Heathcare.png";
import Manufacturing_Image from "@/public/Photos/Manufacturing_Image.png";
import Logistic_Image from "@/public/Photos/Logistic.png";
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";
import Industry_Expertise_CarouselComponent from './CarouselComponent';

// Define the category data
const categoryData = [
    {
        name: 'E-Commerce',
        image: Industry_Expertise_Image,
        desc: "IT services are crucial for the e-commerce sector as they ensure seamless website functionality, enhance security, streamline payment processing, and improve customer experience:",
        listarr: ["Optimize e-commerce platforms for faster load times, mobile compatibility, and SEO to boost customer attraction and increase sales.", "Enhanced Customer Experience by integrating secure payment gateways, data encryption, and fraud detection.", "Efficient delivery tracking.", "IT solutions automate inventory management, order processing, and customer service, boosting efficiency and minimizing manual errors."],
        categoryTypes: ["Business to Business", "Business to Consumer", "Consumer to Consumer", "Consumer to Business"]
    },
    {
        name: 'Retail',
        image: Retail_Image,
        desc: "IT services are essential for the retail sector, enhancing inventory management, streamlining payment systems, and improving customer experiences.",
        listarr: ["Increased Online Visibility", "Enhanced Customer Experience by using CRM tools, data analysis and AI-powered recommendations.", "Scalability for E-commerce", "Improve Inventory Management by using Inventory management solution", "Seamless Omni-Channel Integration", "Real-Time Monitoring and Alerts:"],
        categoryTypes: ["Health & Wellness", "Apparel & Accessories", "Electronics & Appliances", "Grocery & Gourmet Foods"]
    },
    {
        name: 'Education and E-Learning',
        image: Education_Image,
        desc: "IT services are crucial for education and e-learning, enabling virtual classrooms, enhancing accessibility, and supporting interactive learning. They streamline administration and provide personalized, flexible learning experiences for students:",
        listarr: ["Access to Online Learning Resources", "IT services enable virtual classrooms and collaboration tools for real-time interaction between students, teachers, and peers, regardless of location.", "IT solutions streamline increase the Administrative Efficiency", "IT services enable adaptive learning platforms"],
        categoryTypes: ["Virtual coaching", "Online courses", "Computer-Guided Learning", "Adaptive E-Learning"]
    },
    {
        name: 'Government and Public Sector',
        image: Government_Image,
        desc: "In the government and public sector, IT plays a critical role in enhancing the efficiency, transparency, and accessibility of public services. Here are seven key points on the role of IT in the government and public sector:",
        listarr: ["Enhanced Citizen Services", "IT services can make public services more accessible to citizens", "IT services can help public sector organizations manage data more effectively", "Increased government processes more transparent and accountable.", "Easier collaboration across the organisation"],
        categoryTypes: ["Government Sector", "Public Sector", "Education Sector", "Municipal Sector"]
    },
    {
        name: 'Travel and Hospitality',
        image: Travel_Image,
        desc: "IT services are vital for the travel and hospitality sector, streamlining booking systems, enhancing customer experiences, managing operations efficiently, and enabling personalized services, leading to improved customer satisfaction and business growth:",
        listarr: ["Improved Booking Convenience", "Real-Time Updates and Communication", "Seamless Payment Solutions", "Streamlined Online Ordering & Delivery", "Websites and apps are providing an all-in-one solution for travellers and guests"],
        categoryTypes: ["Event management", "Restaurant", "Hotels", "Travel and Tourism"]
    },
    {
        name: 'Manufacturing',
        image: Manufacturing_Image,
        desc: "In the manufacturing sector, IT plays a transformative role by enhancing productivity, streamlining operations, and enabling more efficient and flexible production processes. Here are the key points on the role of IT in manufacturing sector:",
        listarr: ["Improved Maintenance and Quality Control", "Remote Monitoring & Control", "Customer and vendor portals allow real-time order tracking, communication, and transparency", "Improve Data-Driven Decision Making", "Automation of Production Processes"],
        categoryTypes: ["Food industry", "Pharmaceuticals", "Textiles", "Apparel manufacturing"]
    },
    {
        name: 'Logistic and supply chain',
        image: Logistic_Image,
        desc: "IT services are crucial for the logistics and supply chain sector, enabling real-time tracking, optimizing route planning, automating inventory management, and enhancing communication. These technologies boost efficiency, reduce costs, and improve overall operational control and transparency:",
        listarr: ["Real-Time Tracking and Visibility", "Data-Driven Decision Making", "Inventory Management", "Automated Operation", "Enhanced Customer Service and Satisfaction"],
        categoryTypes: ["Inbound Logistics", "Outbound Logistics", "Reverse Logistics", "International Logistics"]
    },
    {
        name: 'Healthcare',
        image: Heathcare_Image,
        desc: "Software companies play a vital role in healthcare by developing innovative solutions. These tools streamline processes, improve patient care, and facilitate research. Ultimately, software companies are driving digital transformation and enhancing healthcare outcomes:",
        listarr: ["Telemedicine & Remote Consultations", "Easy Appointment Scheduling & Patient Management", "Pharmacy & Prescription Management", "Electronic Health Records (EHR) Management", "Hospital Management Systems"],
        categoryTypes: ["Hospital & Nursing Homes", "Online Health consulting", "Pharmaceuticals", "Clinics"]
    }
];

const CategoryItem = ({ item, index, setHoveredItem, isActive }) => (
    <li
        key={`${item}-${index}`}
        onClick={() => setHoveredItem(index)}
        className={`cursor-pointer font-bold text-[20px] mb-5 p-4 rounded-tl-full rounded-bl-full ${isActive ? 'bg-gray-700' : ''}`}
    >
        {item.name}
    </li>
);

const InfoPanel = ({ variants, name, image, desc, listarr, categoryTypes }) => (
    <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
        className="absolute h-[612px] inset-0 flex space-x-8 bg-gray-700 px-7 p-4 rounded-md rounded-tl-[0px] rounded-bl-[0px]"
    >
        <div className="w-full">
            <Image src={image} alt={name} className=" w-[90%] object-cover rounded-md" />
            <p className="mt-4 text-sm font-[600]">{desc}</p>
            <ul className="mt-4 space-y-2 text-sm list-disc pl-4">
                {listarr.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
        <div className="w-1/2 relative">
            <h3 className="text-[25px] font-semibold mb-[50px] flex justify-center">Category Types</h3>
            <ul className="flex flex-col gap-[50px]">
                {categoryTypes.map((type, index) => (
                    <li
                        key={index}
                        className="bg-[#00B0FE;] h-12 rounded-full flex items-center justify-center px-4  font-[600] text-white"
                        style={{
                            boxShadow: '0 0 15px rgba(0, 176, 254, 0.6)', // Light effect around the element
                            transition: 'box-shadow 0.3s ease-in-out'
                        }}
                    >
                        {type}
                    </li>
                ))}
            </ul>
            <button className="mt-[40px] absolute right-[50px]  px-4 py-2 bg-white rounded-md text-[#00B0FE] uppercase font-semibold shadow-[0px_0px_8px_0px_#00B0FE]">
                <Link className='flex gap-2 items-center' href={"/contact"}>
                    Get Started <FaArrowRightLong />
                </Link>
            </button>
        </div>
    </motion.div>
);

const IndustryExpertise = () => {
    const [hoveredItem, setHoveredItem] = useState(0);  // Initialize to 0 to display 'E-Commerce' by default

    const variants = {
        initial: { x: '-100%', opacity: 0 },
        enter: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.3,  // Fast and smooth, adjust as needed
                ease: 'easeInOut',  // Use easeInOut for a smooth transition
                delay: 0.05
            }
        },
        exit: {
            x: '100%',
            opacity: 0,
            transition: {
                duration: 0.3,  // Fast and smooth exit
                ease: 'easeInOut'
            }
        }
    };



    return (
        <div className="bg-black text-white py-12 max-sm:pb-4">
            <div className="text-center mb-8">
                <h2 className="text-xl font-semibold max-sm:text-lg">Industry Expertise</h2>
                <p className="text-[26px] max-sm:text-[18px]">Navigating Businesses to the New Digital Era</p>
            </div>
            <div className="flex items-start mx-[20px] max-sm:hidden">
                <ul className="w-2/5 space-y-4 relative z-10">
                    {categoryData.map((item, index) => (
                        <CategoryItem
                            key={item.name}
                            item={item}
                            index={index}
                            setHoveredItem={setHoveredItem}
                            isActive={hoveredItem === index}
                        />
                    ))}
                </ul>
                <div className="w-3/5 rounded-md relative mb-6">
                    <AnimatePresence mode="wait">
                        <InfoPanel
                            key={hoveredItem} // Unique key based on the hovered item index
                            variants={variants}
                            {...categoryData[hoveredItem]}
                        />
                    </AnimatePresence>
                </div>
            </div>
            <div className='hidden max-sm:block'>
                <Industry_Expertise_CarouselComponent />
            </div>
        </div>
    );
}

export default IndustryExpertise;
