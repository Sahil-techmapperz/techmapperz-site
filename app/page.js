import AboutUs from "./_Components/AboutUs";
import CarouselComponent from "./_Components/CarouselComponent";
import Features from "./_Components/Features";
import HappyClients from "./_Components/HappyClients";
import OurBlog from "./_Components/OurBlog";
import ScrollToTop from "./_Components/ScrollToTop";
import Technology from "./_Components/Technology";
import Testimonial from "./_Components/Testimonial";


const Home = () => {


  return (
    <div>
     
    <ScrollToTop/>
      <section className="relative w-full bg-gray-100 overflow-hidden">
        <CarouselComponent />
      </section>

      <Features />
      <Technology />
      <AboutUs />
      <HappyClients />
      <OurBlog/>
      <Testimonial/>

      {/* The rest of your content */}
    </div>
  );
};



export default Home;
