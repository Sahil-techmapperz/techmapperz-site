"use client";
import { AnimatePresence,motion } from "framer-motion";
import BackgroundImage from "@/app/_Components/(Carousel)/BackgroundImage";
import SliderInfo from "@/app/_Components/(Carousel)/SliderInfo";
import Slider from "@/app/_Components/(Carousel)/Slides";
import Controls from "@/app/_Components/(Carousel)/Controls";
import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowDown  } from "react-icons/md";

let Bannersdata=[
  {
      "_id": "6438ba942ac4bdb1bd93806d",
      "heading": "MOBILE & WEB APPLICATION DEVELOPMENT",
      "banner_img_url": "https://ik.imagekit.io/ntktfi8dx/blogImages/1St_banner_1_1YU4lIOsQ.png",
      "userId": "1",
      "subTitle": "Website and mobile application development are vital for businesses to impose an online presence and reach a broader spectrum of audience. ",
      "__v": 0
  },
  {
      "_id": "6438bafd2ac4bdb1bd938070",
      "heading": "DRONE DATA ACQUISITION & PROCESSING",
      "banner_img_url": "https://ik.imagekit.io/ntktfi8dx/uploads/Drone_uqEqphI9c.png",
      "userId": "2",
      "subTitle": "Drones capture affordable, current, and high-res data using various cameras and sensors, including multispectral, thermal, and LiDAR imagery.",
      "__v": 0
  },
  {
      "_id": "6438bb242ac4bdb1bd938073",
      "heading": "ERP & CRM SOLUTION",
      "banner_img_url": "https://ik.imagekit.io/ntktfi8dx/uploads/ERP_CRM__1__UldiLYKmi.png",
      "userId": "3",
      "subTitle": "Integrating CRM & ERP provides a comprehensive view of operations, efficiency, and customer experience.",
      "__v": 0
  },
  {
      "_id": "6438bb432ac4bdb1bd938076",
      "heading": "BUSINESS INTELLIGENCE & DATA ANALYTICS",
      "banner_img_url": "https://ik.imagekit.io/ntktfi8dx/uploads/Business_Inteligence_rpNpgIrgAv.png",
      "userId": "4",
      "subTitle": "Organizations gain valuable insights from their data to make informed decisions, improve efficiency, and increase profitability.",
      "__v": 0
  },
  {
      "_id": "6438bba02ac4bdb1bd938079",
      "heading": "IT CONSULTANCY SERVICES",
      "banner_img_url": "https://ik.imagekit.io/ntktfi8dx/uploads/Frame_3_ikQbypHSU.png",
      "userId": "5",
      "subTitle": "IT consultancy services provide strategic planning, risk management, software development, and technology applications to businesses.",
      "__v": 0
  }
]

export default function CarouselComponent() {
  const [data, setData] = useState();
  const [sliderData, setsliderData] = useState([]);
  const [transitionData, setTransitionData] = useState();
  const [currentSliderData, setCurrentSliderData] = useState();
  const [initData, setinitData] = useState();


  const scrollToBottom = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

    useEffect(() => {
        const banners=Bannersdata;
        setsliderData(banners);
        setData(banners.slice(1));
        setTransitionData(banners[0]);
        setinitData(banners[0]);
        setCurrentSliderData({ data: banners[0], index: 0 });
  }, []);

  return (
    <>
      <main className="relative min-h-screen select-none overflow-hidden text-white antialiased">
        <AnimatePresence mode="wait">
          <BackgroundImage
            transitionData={transitionData && transitionData}
            currentSliderData={currentSliderData && currentSliderData}
          />
          <div className="absolute z-20 w-full h-full">
            <div className="flex w-full h-full flex-col md:grid grid-cols-10">
              <div className="col-span-4 md-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0m md:justify-center md:px-10">
                <SliderInfo
                  transitionData={transitionData && transitionData}
                  currentSliderData={currentSliderData && currentSliderData}
                />
              </div>
              <div className="col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
                <Slider data={data && data} />
                <Controls
                  currentSliderData={currentSliderData && currentSliderData}
                  data={data && data}
                  transitionData={transitionData && transitionData}
                  initData={ initData && initData}
                  handleData={setData}
                  handleTransitionData={setTransitionData}
                  handleCurrentSlideData={setCurrentSliderData}
                  sliderData={sliderData && sliderData}
                />
              </div>
            </div>
          </div>
        </AnimatePresence>

        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          onClick={scrollToBottom}
        >
          <MdKeyboardDoubleArrowDown  className="text-6xl cursor-pointer" />
        </motion.div>
      </main>
    </>
  );
}





