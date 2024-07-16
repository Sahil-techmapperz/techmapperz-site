import getJobsdata from "@/lib/getJobsdata";
import JoinUs from "../_Components/JoinUs";
import ScrollToTop from "../_Components/ScrollToTop";
import Image from "next/image";


const Career = async () => {
  const Jobsdata = await getJobsdata();

  return (
    <div className="bg-gray-900 text-white">

    <ScrollToTop/>
      <section className="h-[400px] flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url("/Photos/banner_2.png")' }}>
        <h1 className="font-bold text-6xl">Career</h1>
        <p><a href="/">Home</a> / Career</p>
      </section>

      <div className="text-center py-8 px-20 max-sm:px-5">
        <h3 className="text-2xl">In your journey at Techmapperz you will get</h3>
        <div className="grid grid-cols-3 max-sm:grid-cols-1 max-sm:gap-2 gap-8 my-12">
          {[
            { img: '/Photos/career_idea-1.png', title: 'Possibilities unmatched', description: 'With techmapperz being a start up with business interests and prospects in many IT fields, weather its. And working with us will give you exposure to many sectors, private and government across many cities across India.' },
            { img: '/Photos/career_idea-2.png', title: 'Diversity unmatched', description: 'Since we operate all over India , you will have a spectrum of cultures that people that you can interact with.' },
            { img: '/Photos/career_idea-3.png', title: 'Flexibility unparalleled', description: 'You will have flexible working hours and work environment, not tied to work and time regime, the world is your office as long as you are connected to the office.' },
            { img: '/Photos/career_idea-4.png', title: 'Grow unhindered', description: 'The world is a digital canvas, evolving with every passing day, you will have the opportunity of developing new ideas and executing them with expertise, not just make a better world , but paint a better digital canvas.' },
            { img: '/Photos/career_idea-5.png', title: 'Shine Unrestricted', description: 'At Techmapperz, you will get the freedom to choose your timings your approach for getting the job done with in the alloted time.' },
            { img: '/Photos/career_idea-6.png', title: 'Earn unlimited', description: 'No matter what, Salary is an important parameter at Techmapperz we acknowledge your talent with premium compensation , which grows as your skills grow.' }
          ].map((item, index) => (
            <div key={index} className="flex flex-col justify-center p-6 border-2 border-white rounded-lg">
              <Image width={500} height={400} src={item.img} alt="" />
              <h3 className="text-2xl font-bold mt-4">{item.title}</h3>
              <p className="text-lg text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <JoinUs Jobsdata={Jobsdata} />
    </div>
  );
};

export default Career;
