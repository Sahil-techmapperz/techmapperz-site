// import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaArrowRight } from 'react-icons/fa'; // For the arrow icon


const categoryData = [
  {
      name: 'E-Commerce',
      image: "Photos/Industry Expertise.jpg",
      desc: "IT services are crucial for the e-commerce sector as they ensure seamless website functionality, enhance security, streamline payment processing, and improve customer experience:",
      listarr: ["Optimize e-commerce platforms for faster load times, mobile compatibility, and SEO to boost customer attraction and increase sales.", "Enhanced Customer Experience by integrating secure payment gateways, data encryption, and fraud detection.", "Efficient delivery tracking.", "IT solutions automate inventory management, order processing, and customer service, boosting efficiency and minimizing manual errors."],
      categoryTypes: ["Business to Business", "Business to Consumer", "Consumer to Consumer", "Consumer to Business"]
  },
  {
      name: 'Retail',
      image: "Photos/Retail_Image.png",
      desc: "IT services are essential for the retail sector, enhancing inventory management, streamlining payment systems, and improving customer experiences.",
      listarr: ["Increased Online Visibility", "Enhanced Customer Experience by using CRM tools, data analysis and AI-powered recommendations.", "Scalability for E-commerce", "Improve Inventory Management by using Inventory management solution", "Seamless Omni-Channel Integration", "Real-Time Monitoring and Alerts:"],
      categoryTypes: ["Health & Wellness", "Apparel & Accessories", "Electronics & Appliances", "Grocery & Gourmet Foods"]
  },
  {
      name: 'Education and E-Learning',
      image: "Photos/Education_Image.png",
      desc: "IT services are crucial for education and e-learning, enabling virtual classrooms, enhancing accessibility, and supporting interactive learning. They streamline administration and provide personalized, flexible learning experiences for students:",
      listarr: ["Access to Online Learning Resources", "IT services enable virtual classrooms and collaboration tools for real-time interaction between students, teachers, and peers, regardless of location.", "IT solutions streamline increase the Administrative Efficiency", "IT services enable adaptive learning platforms"],
      categoryTypes: ["Virtual coaching", "Online courses", "Computer-Guided Learning", "Adaptive E-Learning"]
  },
  {
      name: 'Government and Public Sector',
      image: "Photos/Goverment_Image.png",
      desc: "In the government and public sector, IT plays a critical role in enhancing the efficiency, transparency, and accessibility of public services. Here are seven key points on the role of IT in the government and public sector:",
      listarr: ["Enhanced Citizen Services", "IT services can make public services more accessible to citizens", "IT services can help public sector organizations manage data more effectively", "Increased government processes more transparent and accountable.", "Easier collaboration across the organisation"],
      categoryTypes: ["Government Sector", "Public Sector", "Education Sector", "Municipal Sector"]
  },
  {
      name: 'Travel and Hospitality',
      image: "Photos/Travel_Image.png",
      desc: "IT services are vital for the travel and hospitality sector, streamlining booking systems, enhancing customer experiences, managing operations efficiently, and enabling personalized services, leading to improved customer satisfaction and business growth:",
      listarr: ["Improved Booking Convenience", "Real-Time Updates and Communication", "Seamless Payment Solutions", "Streamlined Online Ordering & Delivery", "Websites and apps are providing an all-in-one solution for travellers and guests"],
      categoryTypes: ["Event management", "Restaurant", "Hotels", "Travel and Tourism"]
  },
  {
      name: 'Manufacturing',
      image: "Photos/Manufacturing_Image.png",
      desc: "In the manufacturing sector, IT plays a transformative role by enhancing productivity, streamlining operations, and enabling more efficient and flexible production processes. Here are the key points on the role of IT in manufacturing sector:",
      listarr: ["Improved Maintenance and Quality Control", "Remote Monitoring & Control", "Customer and vendor portals allow real-time order tracking, communication, and transparency", "Improve Data-Driven Decision Making", "Automation of Production Processes"],
      categoryTypes: ["Food industry", "Pharmaceuticals", "Textiles", "Apparel manufacturing"]
  },
  {
      name: 'Logistic and supply chain',
      image: "Photos/Logistic.png",
      desc: "IT services are crucial for the logistics and supply chain sector, enabling real-time tracking, optimizing route planning, automating inventory management, and enhancing communication. These technologies boost efficiency, reduce costs, and improve overall operational control and transparency:",
      listarr: ["Real-Time Tracking and Visibility", "Data-Driven Decision Making", "Inventory Management", "Automated Operation", "Enhanced Customer Service and Satisfaction"],
      categoryTypes: ["Inbound Logistics", "Outbound Logistics", "Reverse Logistics", "International Logistics"]
  },
  {
      name: 'Healthcare',
      image: "Photos/Heathcare.png",
      desc: "Software companies play a vital role in healthcare by developing innovative solutions. These tools streamline processes, improve patient care, and facilitate research. Ultimately, software companies are driving digital transformation and enhancing healthcare outcomes:",
      listarr: ["Telemedicine & Remote Consultations", "Easy Appointment Scheduling & Patient Management", "Pharmacy & Prescription Management", "Electronic Health Records (EHR) Management", "Hospital Management Systems"],
      categoryTypes: ["Hospital & Nursing Homes", "Online Health consulting", "Pharmaceuticals", "Clinics"]
  }
];

const Industry_Expertise_CarouselComponent = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive} arrows={false} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
      {categoryData && categoryData.map((category, index) => (
        <div key={index} className="carousel-card bg-white shadow-md overflow-hidden mx-4">
          <img src={category.image} alt={category.name} width={100} height={100} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl  text-gray-500  font-semibold">{category.name}</h2>
            <p className="text-sm text-gray-500 mt-2">{category.desc}</p>
            <div className="mt-3 grid grid-cols-1 gap-4 justify-center">
              {category.categoryTypes.map((type, idx) => (
                <div key={idx} className="mx-1 w-fit bg-blue-200 text-blue-800 py-1 px-2 rounded-full text-xs">
                  {type}
                </div>
              ))}
            </div>
            <div className="mt-4">
              <button className="flex items-center text-blue-500">
                Explore More <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Industry_Expertise_CarouselComponent;
