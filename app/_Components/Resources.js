// components/Resources.js
"use client";

import { useState } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

const Resources = ({ sections, title, subtitle, link = "#" }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setDropdownVisible(false);
    }, 100); // Delay the closing by 1000ms
    setTimeoutId(id);
  };

  return (
    <li
      className="text-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={link}
        className="text-lg text-white flex items-center"
      >
        {title} <IoIosArrowDown className="ml-1" />
      </Link>
      {isDropdownVisible && (
        <ul className="absolute top-full mt-2 bg-[#007F7B] w-[60vw] right-0 z-50 flex gap-4 text-white p-2 rounded-md">
          <div className="w-[40%] text-center p-4">
            <Link href={link} className="text-4xl font-bold mb-4 underline">
              {title}
            </Link>
            <p className="mb-8 text-wrap text-justify">{subtitle}</p>
          </div>

          <div className="w-[70%] p-4 bg-white text-black grid grid-cols-2 gap-10 rounded-md">
            {sections?.map((section, index) => (
              <div key={index} className="text-left">
                <h3 className="text-2xl font-semibold mb-2">{section.title}</h3>
                <ul className="list-none ">
                  {section.items?.map((item, idx) => (
                    <li key={idx} className="mb-2">
                      <Link href={item.link} className="underline">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ul>
      )}
    </li>
  );
};

export default Resources;
