// Industry_Expertise.js
"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Industry_Expertise_Image from "@/public/Photos/Industry Expertise.jpg";
import Sports_Image from "@/public/Photos/Sports.png";
import Fitness_Wallnes_Image from "@/public/Photos/Fitness&Wallnes.png";
import Travel_Tourism_Image from "@/public/Photos/Travel&Tourism.png";
import Heathcare_Image from "@/public/Photos/Heathcare.png";
import Logistic_Image from "@/public/Photos/Logistic.png";

// Define the category data
const categoryData = [
    {
        name: 'E-Commerce',
        image: Industry_Expertise_Image,
        desc: "In the e-commerce sector, IT is central to driving growth, improving customer experiences, and optimizing operations. ",
        listarr: ["Optimize e-commerce platforms for faster load times, mobile compatibility, and SEO to boost customer attraction and increase sales.", "Enhanced Customer Experience by integrating secure payment gateways, data encryption, and fraud detection.", "Efficient delivery tracking.","IT solutions automate inventory management, order processing, and customer service, boosting efficiency and minimizing manual errors."],
        categoryTypes: ["Business to Business (B2B)", "Business to Consumer (B2C)", "Consumer to Consumer (C2C)", "Consumer to Business (C2B)"]
    },
    {
        name: 'Retail',
        image: Industry_Expertise_Image,
        desc: "the retail sector, IT offers numerous benefits that enhance operational efficiency, improve customer experiences, and drive sales.",
        listarr: ["Increased Online Visibility", "Enhanced Customer Experience by using CRM tools, data analysis and AI-powered recommendations.", "Scalability for E-commerce","Improve Inventory Management by using Inventory management solution","Seamless Omni-Channel Integration","Real-Time Monitoring and Alerts:"],
        categoryTypes: ["Health & Wellness", "Apparel & Accessories", "Electronics & Appliances", "Grocery & Gourmet Foods","Home & Furniture"]
    },
    {
        name: 'Education and E-Learning',
        image: Industry_Expertise_Image,
        desc: "In the education and e-learning sector, IT has revolutionized how knowledge is delivered, accessed, and managed, providing new opportunities for learners and educators alike. Here are key points on the role of IT in education and e-learning: ",
        listarr: ["Access to Online Learning Resources", "IT services enable virtual classrooms and collaboration tools for real-time interaction between students, teachers, and peers, regardless of location.", "IT solutions streamline increase the Administrative Efficiency","IT services enable adaptive learning platforms"],
        categoryTypes: ["Virtual coaching", "Online courses", "Professional Development","Computer-Managed Learning","Adaptive E-Learning"]
    },
    {
        name: 'Government and Public Sector',
        image: Industry_Expertise_Image,
        desc: "In the government and public sector, IT plays a critical role in enhancing the efficiency, transparency, and accessibility of public services. Here are seven key points on the role of IT in the government and public sector",
        listarr: ["Enhanced Citizen Services", "IT services can make public services more accessible to citizens", "IT services can help public sector organizations manage data more effectively","Increased government processes more transparent and accountable.","Easier collaboration across the organisation"],
        categoryTypes: ["Government Sector", "Public Sector"]
    },
    {
        name: 'Travel and Hospitality',
        image: Industry_Expertise_Image,
        desc: "In the travel and hospitality industry, IT plays a pivotal role in enhancing customer experiences, streamlining operations, and enabling personalized services. Here are seven key points on the role of IT in the travel and hospitality sector",
        listarr: ["Improved Booking Convenience", "Real-Time Updates and Communication", "Seamless Payment Solutions","Streamlined Online Ordering & Delivery","Websites and apps are providing an all-in-one solution for travellers and guests"],
        categoryTypes: ["Travel Agencies", "Event management", "Restaurant","Hotels","Travel and Tourism"]
    },
    {
        name: 'Manufacturing',
        image: Industry_Expertise_Image,
        desc: " In the manufacturing sector, IT plays a transformative role by enhancing productivity, streamlining operations, and enabling more efficient and flexible production processes. Here are seven key points on the role of IT in manufacturing:",
        listarr: ["Improved Maintenance and Quality Control", "Remote Monitoring & Control", "Customer and vendor portals allow real-time order tracking, communication, and transparency","Improve Data-Driven Decision Making","Automation of Production Processes"],
        categoryTypes: ["Food industry", "Pharmaceuticals", "Textiles","Chemical manufacturing","Apparel manufacturing"]
    },
    {
        name: 'Logistic and supply chain',
        image: Travel_Tourism_Image,
        desc: "Logistics is also improved in the IT sector through improving the ways and means of supply management and chain, tracking and monitoring of shipment, control in the warehouses and methods of automation as well as the ability to make intelligent decisions based on data. These developments make work easier, are cost saving, and increase over efficiency in the management of the supply chain",
        listarr: ["Real-Time Tracking and Visibility", "Data-Driven Decision Making", "Inventory Management","Automated Operation","Enhanced Customer Service and Satisfaction"],
        categoryTypes: ["Inbound Logistics","Outbound Logistics", "Reverse Logistics", "International Logistics","Third-Party Logistics"]
    },
    {
        name: 'Healthcare',
        image: Industry_Expertise_Image,
        desc: "Software companies play a vital role in healthcare by developing innovative solutions. These tools streamline processes, improve patient care, and facilitate research. Ultimately, software companies are driving digital transformation and enhancing healthcare outcomes.",
        listarr: ["Telemedicine & Remote Consultations", "Easy Appointment Scheduling & Patient Management", "Pharmacy & Prescription Management","Electronic Health Records (EHR) Management","Hospital Management Systems"],
        categoryTypes: ["Hospital & Nursing Homes", "Pathology centre", "Health consulting","Pharmaceuticals","Clinics"]
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
            <Image src={image} alt={name} className="h-[200px] w-full object-cover rounded-md" />
            <p className="mt-4 text-sm font-[600]">{desc}</p>
            <ul className="mt-4 space-y-2 text-sm list-disc pl-4">
                {listarr.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
        <div className="w-1/2">
            <h3 className="text-[25px] font-semibold mb-[50px]">Category Types</h3>
            <ul className="flex flex-col gap-[40px]">
                {categoryTypes.map((type, index) => (
                    <li
                        key={index}
                        className="bg-[#00B0FE;] h-12 rounded-full flex items-center justify-center px-4 w-max font-[600] text-white"
                        style={{
                            boxShadow: '0 0 15px rgba(0, 176, 254, 0.6)', // Light effect around the element
                            transition: 'box-shadow 0.3s ease-in-out'
                        }}
                    >
                        {type}
                    </li>
                ))}
            </ul>
            <button className="mt-[40px] px-4 py-2 bg-white rounded-md text-black">
                Explore More
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
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 0.1
            }
        },
        exit: {
            x: '100%',
            opacity: 0,
            transition: {
                type: 'spring',
                stiffness: 260,
                damping: 20
            }
        }
    };

    return (
        <div className="bg-black text-white p-8 pb-[80px]">
            <div className="text-center mb-8">
                <h2 className="text-xl font-semibold">Industry Expertise</h2>
                <p className="text-2xl">Navigating Businesses to the New Digital Era</p>
            </div>
            <div className="flex items-start mx-[20px]">
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
        </div>
    );
}

export default IndustryExpertise;
