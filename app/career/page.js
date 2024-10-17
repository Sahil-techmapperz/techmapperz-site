import getJobsdata from "@/lib/getJobsdata";
import ScrollToTop from "../_Components/ScrollToTop";
import Image from "next/image";
import JobCard from "../_Components/JobCard";
import career_question_img from "@/public/Photos/career_question_img.png 1.png"
import careers_do_what_you_love_img from "@/public/Photos/careers_do_what_you_love.png"
import career_banner_img from "@/public/Photos/career_banner.png"
import Link from "next/link";


const Career = async () => {
  const Jobsdata = await getJobsdata();

  return (
    <div className="bg-black text-white">

      <ScrollToTop />
      {/* <section className="h-[250px]  flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url("/Photos/banner_2.png")' }}>
        <h1 className="font-bold mt-10 text-6xl">Career</h1>
        <p><a href="/">Home</a> / Career</p>
      </section> */}

      <div className='relative w-full'>
        <Image src={career_banner_img} className='w-full h-[500px]' alt="About Us Banner" />
        <div className='absolute inset-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center'>
          <h1 className='text-center text-6xl max-sm:text-4xl text-white font-bold'>Career</h1>
          <p className='text-center text-xl text-gray-200 mt-4 px-4 md:px-8 md:w-[50%]'>
            Chasing the Vision for a better tomorrow where technology simplifies complex functions
          </p>
          <Link href="/contact" className="text-lg flex items-center border-2 px-4 py-2 mt-4 font-semibold uppercase rounded-md bg-white text-[#00B0FE] shadow-[0px_0px_8px_0px_#00B0FE]">Let's Connect</Link>
        </div>
      </div>

      <div className="flex max-sm:flex-col-reverse max-sm:px-[10px] justify-between px-[50px] py-4 items-center">
        <div className="flex flex-col justify-center max-sm:items-center gap-4">
          <h1 className="text-[45px] max-sm:text-[30px]">Do what you love <br /> Love what you do</h1>
          <p className="max-sm:text-[14px]">Come Build the Future with  <span className="text-[#396BA9] font-bold"> Techmapperz </span></p>
          <div className="bg-white text-[#396BA9] w-fit py-2 px-4 rounded-md">  <a href="#jobs">Search Open Position</a></div>
        </div>
        <div>
          <Image src={careers_do_what_you_love_img} alt="careers_do_what_you_love_img" />
        </div>
      </div>

      <div className="text-center py-8 px-20 max-sm:px-5">
        <h3 className="text-2xl font-[600]">Why choose Us ?</h3>
        <div className="grid grid-cols-3 max-sm:grid-cols-1 max-sm:gap-2 gap-8 my-12">
          <div className="flex career_why_choose_us   py-4 flex-col justify-center bg-white text-black rounded-lg">
            <Image className="mx-auto" width={350} height={300} src={"/Photos/career_idea-1.png"} alt="" />
            <h3 className="text-[20px] font-bold">{"Possibilities unmatched"}</h3>
            <p className="text-lg text-gray-400">{"With techmapperz being a start up with business interests and prospects in many IT fields, weather its. And working with us will give you exposure to many sectors, private and government across many cities across India."}</p>
          </div>
          <div className="flex career_why_choose_us flex-col justify-center text-black bg-white py-4 rounded-lg">
            <Image className="mx-auto" width={300} height={250} src={"/Photos/career_idea-2.png"} alt="" />
            <h3 className="text-2xl font-bold">{"Diversity unmatched"}</h3>
            <p className="text-lg text-gray-400">{"Since we operate all over India , you will have a spectrum of cultures that people that you can interact with."}</p>
          </div>
          <div className="flex career_why_choose_us flex-col justify-center text-black bg-white py-4 rounded-lg">
            <Image className="mx-auto" width={350} height={300} src={"/Photos/career_idea-3.png"} alt="" />
            <h3 className="text-2xl font-bold mt-[6.5rem]">{"Flexibility unparalleled"}</h3>
            <p className="text-lg text-gray-400">{"You will have flexible working hours and work environment, not tied to work and time regime, the world is your office as long as you are connected to the office."}</p>
          </div>
          <div className="flex career_why_choose_us flex-col justify-center text-black bg-white py-4 rounded-lg">
            <Image className="mx-auto" width={350} height={300} src={"/Photos/career_idea-4.png"} alt="" />
            <h3 className="text-2xl font-bold">{"Grow unhindered"}</h3>
            <p className="text-lg text-gray-400">{"The world is a digital canvas, evolving with every passing day, you will have the opportunity of developing new ideas and executing them with expertise, not just make a better world , but paint a better digital canvas."}</p>
          </div>
          <div className="flex career_why_choose_us flex-col justify-center text-black bg-white py-4 rounded-lg">
            <Image className="mx-auto" width={350} height={300} src={"/Photos/career_idea-5.png"} alt="" />
            <h3 className="text-2xl font-bold mt-[3.5rem]">{"Shine Unrestricted"}</h3>
            <p className="text-lg text-gray-400">{"At Techmapperz, you will get the freedom to choose your timings your approach for getting the job done with in the alloted time."}</p>
          </div>
          <div className="flex career_why_choose_us flex-col justify-center text-black bg-white py-4 rounded-lg">
            <Image className="mx-auto" width={350} height={300} src={"/Photos/career_idea-6.png"} alt="" />
            <h3 className="text-2xl font-bold mt-[3.5rem]">{"Earn unlimited"}</h3>
            <p className="text-lg text-gray-400">{"No matter what, Salary is an important parameter at Techmapperz we acknowledge your talent with premium compensation , which grows as your skills grow."}</p>
          </div>


        </div>
      </div>

      <div id="jobs">
        <h1 className="text-center text-[30px] font-[600]">Current Opening Position</h1>
        {Jobsdata.map((job) => {
          return <JobCard key={job.userId} job={job} />
        })}
      </div>

      {/* <JoinUs Jobsdata={Jobsdata} /> */}

      <div className="bg-[#ECF1FD] w-full flex max-sm:flex-col-reverse justify-between text-black py-[20px] px-[50px] max-sm:px-[10px] max-sm:justify-center">
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-[45px] max-sm:text-[30px] font-[600]">Have a Question ?</h1>
          <p className="font-[600] max-sm:text-[14px]">For Job Inquiry : - <span className="text-[#E81515]"> info@tchmapperz.com </span></p>
          <Link href={"/contact"} className="py-2 px-4 rounded-md text-[20px] font-[500] w-fit text-white" style={{ background: "linear-gradient(90deg, #EC212C 0%, #396BA9 100%)" }}>Let’s Talk</Link>
        </div>
        <div>
          <Image src={career_question_img} alt="career_question_img" className="max-sm:m-auto" />
        </div>

      </div>
    </div>
  );
};

export default Career;
