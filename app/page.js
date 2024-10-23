import AboutUs from "./_Components/AboutUs";
import Features from "./_Components/Features";
import HappyClients from "./_Components/HappyClients";
import Carousel from "./_Components/HomeCarousel";
import Homecontact from "./_Components/Homecontact";
import IndustryExpertise from "./_Components/Industry_Expertise";
import OurBlog from "./_Components/OurBlog";
import QueryDelayedForm from "./_Components/QueryDelayedForm";
import ScrollToTop from "./_Components/ScrollToTop";
import Technology from "./_Components/Technology";
import Testimonial from "./_Components/Testimonial";


const Home = () => {


  return (
    <div>
     
    <ScrollToTop/>
    <QueryDelayedForm/>
      <Carousel/>
      <Features />
      <Technology />
      <IndustryExpertise/>
      <Homecontact/>
      <AboutUs />
      <HappyClients />
      <OurBlog/>
      <Testimonial/>

      {/* The rest of your content */}
    </div>
  );
};



export default Home;
