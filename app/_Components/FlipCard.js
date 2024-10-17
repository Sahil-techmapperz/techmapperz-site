"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const FlipCard = ({ frontImage, backImage, backdiv_arr, title, subtitle }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setIsFlipped((prev) => !prev);
    //     }, 4000); 

    //     return () => clearInterval(intervalId);
    // }, []);


    const handaleFlip = ()=>{
        setIsFlipped((prev) => !prev);
    };

    return (
        <div className="relative w-full mb-6 h-80 perspective-1000 ">
            <motion.div
                className="relative w-full h-full cursor-pointer"
                initial={{ rotateY: 0 }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 1 }} // Set duration to 1 second
                style={{ transformStyle: "preserve-3d" }}
                onClick={handaleFlip}
            >
                <div
                    className="absolute inset-0 backface-hidden"
                    style={{ transform: "rotateY(0deg)" }}
                >
                    <Image
                        src={frontImage}
                        alt="Front Side"
                        className="w-full h-full rounded-md"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-2 text-center text-white h-full flex items-center justify-center" style={{ background: "linear-gradient(0deg, rgba(55, 102, 186, 0.9) 14.46%, rgba(27, 50, 91, 0.37) 39.16%)" }}>
                        <div className="absolute bottom-2 left-0 right-0">
                            <h3 className="font-bold text-[25px]">{title}</h3>
                            
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-0 backface-hidden flex flex-col items-center justify-center text-white font-[18px] rounded-md"
                    style={{
                        transform: "rotateY(180deg)", background: "linear-gradient(0deg, rgba(55, 102, 186, 0.9) 14.46%, rgba(27, 50, 91, 0.37) 39.16%)"
                    }}
                >
                    <Image
                        src={backImage}
                        alt="Back Side"
                        className="absolute inset-0 w-full h-full object-cover rounded-md"
                    />
                    <div className="w-full h-full relative z-10"
                     style={{ background: "linear-gradient(0deg, rgba(55, 102, 186, 0.9) 14.46%, rgba(27, 50, 91, 0.37) 39.16%)"}}
                    >
                        <div className="absolute font-[600] left-4 top-[150px]">
                            <p className="text-[25px]">{title}</p>
                            {isFlipped && (
                                <motion.div
                                    className="h-1 bg-white rounded"
                                    initial={{ width: "0%" }}  // Start width at 10%
                                    animate={{ width: "100%" }}  // Animate width to 100%
                                    transition={{ duration: 3 }}  // Duration of 3 seconds
                                ></motion.div>
                            )}
                        </div>
                        <div className="absolute left-4 top-[200px]">
                            {backdiv_arr.map((item, index) => (
                                <p key={index} className="font-[400]">{item}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default FlipCard;
