import axios from 'axios';
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import career_idea_1 from '../../Photos/career_idea-1.png';
import career_idea_2 from '../../Photos/career_idea-2.png';
import career_idea_3 from '../../Photos/career_idea-3.png';
import career_idea_4 from '../../Photos/career_idea-4.png';
import career_idea_5 from '../../Photos/career_idea-5.png';
import career_idea_6 from '../../Photos/career_idea-6.png';
import Styles from "./Career.module.css";

const init = {
  "name": "",
  "mobile": "",
  "message": "",
  "designetion": ""
}


const Career = () => {
  const [careerdata, setcareerdata] = useState(init);
  const [Jobsdata, setjobsdata] = useState([]);
  const [resume, setresume] = useState('');



  const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];

  const handalechange = async (e) => {
    const { name, value } = e.target;

    if (name == "designetion") {
      console.log(value);
    }
    setcareerdata({ ...careerdata, [name]: value })

  }




  const handaleresumechange = (e) => {
    setresume(e.target.files[0]);
  }


  const handalesubmit = async () => {
    const { name, mobile, message, designetion } = careerdata;

    console.log(careerdata)
    if (name && message && mobile && resume && designetion) {

      const formData = new FormData();
      formData.append("file", resume);
      formData.append("data", JSON.stringify(careerdata));

      axios.post("http://localhost:8080/career", formData).then((res) => {
        console.log(res)
      }).catch(err => {
        console.log(err);
      })
    } else {

      for (let i = 0; i < inputRefs.length; i++) {
        if (!inputRefs[i].current.value) {
          inputRefs[i].current.focus();
          return;
        }
      }

    }
  }


  const GetJodData =async () => {
    const response = await axios.get('http://localhost:8080/jobs');
    console.log(response.data)
    setjobsdata(response.data)
  };


  const options = {
    top: 0,
    left: 0,
    behavior: 'smooth'
  };

  useEffect(() => {
    window.scrollTo(options);
    GetJodData()
  }, [])


  return (
    <div className={Styles.career}>

      <section className={Styles.first_section}>
        <h1>Career</h1>
        <p>Home / Career</p>
      </section>
      <div className={Styles.journey}>
        <h3 className={Styles.heading}>In your journey at Techmapperz you will get</h3>
        <div className={Styles.main}>


          <div className={Styles.card}>
            <img src={career_idea_1} alt='' />
            <h3>Possibilities unmatched</h3>
            <p>With techmapperZ being a start up with business interests and prospects in many IT fields, weather its. </p>
            <Link to={"/contact"}> <div className={Styles.Submit_btn}>
              <div></div>
              <h2>Get in touch</h2>
            </div></Link>
          </div>
          <div className={Styles.card}>
            <img src={career_idea_2} alt='' />
            <h3>Diversity unmatched</h3>
            <p>Since we operate all over India , you will have a spectrum of cultures that people that you can interact with</p>
            <Link to={"/contact"}> <div className={Styles.Submit_btn}>
              <div></div>
              <h2>Get in touch</h2>
            </div></Link>
          </div>
          <div className={Styles.card}>
            <img src={career_idea_3} alt='' />
            <h3>Flexibility unparalleled</h3>
            <p>You will have flexible working hours and work environment, not tied to work and time regime,</p>
            <Link to={"/contact"}> <div className={Styles.Submit_btn}>
              <div></div>
              <h2>Get in touch</h2>
            </div></Link>
          </div>
          <div className={Styles.card}>
            <img src={career_idea_4} alt='' />
            <h3>Grow unhindered</h3>
            <p>The world is a digital canvas, evolving with every passing day, you will have the opportunity of developing</p>
            <Link to={"/contact"}> <div className={Styles.Submit_btn}>
              <div></div>
              <h2>Get in touch</h2>
            </div></Link>
          </div>

          <div className={Styles.card}>
            <img src={career_idea_5} alt='' />
            <h3>Shine Unrestricted</h3>
            <p>At Techmapperz, you will get the freedom to choose your timings your approach for getting.</p>
            <Link to={"/contact"}> <div className={Styles.Submit_btn}>
              <div></div>
              <h2>Get in touch</h2>
            </div></Link>
          </div>

          <div className={Styles.card}>
            <img src={career_idea_6} alt='' />
            <h3>Earn unlimited</h3>
            <p>No matter what, Salary is an important parameter at tech mappers we acknowledge your talent</p>
            <Link to={"/contact"}> <div className={Styles.Submit_btn}>
              <div></div>
              <h2>Get in touch</h2>
            </div></Link>
          </div>

        </div>


      </div>

      <section className={Styles.secend_section}>
        <h3>Get Involve Now</h3>
        <h1>Let's join with us !!</h1>
        <div className={Styles.secend_section_main}>
          <div className={Styles.secend_section_main_one}>
            {Jobsdata && Jobsdata.map(job => {
              return (
                <div key={job.userId}>
                  <h3>{job.Jobtype}</h3>
                  <h1>{job.designetion}</h1>
                  <p>Experience:  {job.experience}</p>
                  <p>Location:  {job.location}</p>
                  <button onClick={() => inputRefs[0].current.focus()}>Apply Now</button>
                </div>
              )
            })}
          </div>

        </div>
        <div className={Styles.secend_section_main_two} >
          <h2>Be a Volunteer</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, ex. Dolorem ipsum</p>
          <div className={Styles.input_from} >
            <input ref={inputRefs[0]} value={careerdata.name} placeholder='Your Name' type={"text"} name="name" onChange={handalechange} />
            <input ref={inputRefs[1]} value={careerdata.mobile} placeholder='Your Mobile Number' name='mobile' type={"number"} onChange={handalechange} />
            <select ref={inputRefs[2]} onChange={handalechange} name="designetion">
              <option value={""}>select the destination</option>
              {Jobsdata && Jobsdata.map((job) => <option value={`${job.JobID} - ${job.designetion}`}>{`${job.JobID} - ${job.designetion}`}</option>)}
            </select>

            <textarea ref={inputRefs[3]} value={careerdata.message} placeholder='Type your Message' type='text' name='message' onChange={handalechange}></textarea>
            <input ref={inputRefs[4]} accept={".pdf,.doc"} type="file" className={Styles.resume} name="resume" id="Resume" onChange={handaleresumechange} />
            <label for="Resume">{resume ? `${resume.name}` : "Upload Resume*"}</label>
            <button onClick={handalesubmit}>Submit</button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Career;
