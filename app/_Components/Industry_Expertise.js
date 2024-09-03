// Industry_Expertise.js
"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Industry_Expertise_Image from "@/public/Photos/Industry Expertise.jpg";

// Define the category data
const categoryData = [
    {
        name: 'E-Commerce',
        image: Industry_Expertise_Image,
        desc: "E-Commerce is transforming the way we shop and sell. Discover the latest trends in online retail.",
        listarr: ["Global reach", "24/7 shopping", "Personalized experience"],
        categoryTypes: ["B2B", "B2C", "C2C", "D2C"]
    },
    {
        name: 'Logistic',
        image: Industry_Expertise_Image,
        desc: "Logistics ensures that goods are available where and when they are needed, maintaining the flow of commerce.",
        listarr: ["Supply chain management", "Efficient transport", "Warehousing solutions"],
        categoryTypes: ["Freight", "Maritime", "Inventory", "Fulfillment"]
    },
    {
        name: 'Healthcare',
        image: Industry_Expertise_Image,
        desc: "Healthcare is evolving with technology, providing new ways to treat and manage patient health.",
        listarr: ["Telemedicine", "Patient data analytics", "Mobile health applications"],
        categoryTypes: ["Hospitals", "Clinics", "Specialty Care"]
    },
    {
        name: 'Travel & Tourism',
        image: Industry_Expertise_Image,
        desc: "Explore how travel and tourism are adapting to a more connected and environmentally conscious world.",
        listarr: ["Sustainable travel", "Cultural tourism", "Adventure and leisure"],
        categoryTypes: ["Eco Tourism", "Luxury Travel", "Budget Travel"]
    },
    {
        name: 'Fitness & Wellness',
        image: Industry_Expertise_Image,
        desc: "The fitness and wellness industry focuses on holistic approaches to physical and mental health.",
        listarr: ["Wellness apps", "Corporate wellness", "Personal training"],
        categoryTypes: ["Gyms", "Yoga Studios", "Personal Coaching"]
    },
    {
        name: 'Sports',
        image: Industry_Expertise_Image,
        desc: "Sports management and marketing are seeing significant innovation with new fan engagement strategies.",
        listarr: ["E-sports", "Sports analytics", "Fan engagement platforms"],
        categoryTypes: ["Professional Sports", "Amateur Sports", "College Sports"]
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
        className="absolute h-[500px] inset-0 flex space-x-8 bg-gray-700 px-7 p-4 rounded-md rounded-tl-[0px] rounded-bl-[0px]"
    >
        <div className="w-full">
            <Image src={image} alt={name} className="h-[200px] w-full object-cover rounded-md" />
            <p className="mt-4 text-sm">{desc}</p>
            <ul className="mt-4 space-y-2 text-sm list-disc pl-4">
                {listarr.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
        <div className="w-1/2">
            <h3 className="text-lg font-semibold mb-4">Category Types</h3>
            <ul className="space-y-6">
                {categoryTypes.map((type, index) => (
                    <li 
                    key={index} 
                    className="bg-[#00B0FE;] h-12 rounded-full flex items-center justify-center text-white"
                    style={{ 
                        boxShadow: '0 0 15px rgba(0, 176, 254, 1)', // Light effect around the element
                        transition: 'box-shadow 0.3s ease-in-out'
                    }}
                >
                    {type}
                </li>
                ))}
            </ul>
            <button className="mt-8 px-4 py-2 bg-white rounded-md text-black">
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
