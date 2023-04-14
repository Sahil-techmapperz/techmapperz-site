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
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { Text } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'

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
  const [job, setJob] = useState();
  const [errornumber, seterrornumber] = useState(false);

  const toast = useToast();

  const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handalechange = async (e) => {
    const { name, value } = e.target;
    setcareerdata({ ...careerdata, [name]: value })

  }




  const handaleresumechange = (e) => {
    setresume(e.target.files[0]);
  }


  const handalesubmit = async () => {
    const { name, mobile, message, designetion } = careerdata;


    if (name && message && mobile && resume && designetion) {


      const mobilePattern = /^\d{10}$/;
      if (!mobilePattern.test(mobile)) {
        toast({
          title: 'Error: ',
          description: 'Invalid mobile number. Please enter a valid mobile number.',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: "bottom-right"
        });
        return;
      }


      const formData = new FormData();
      formData.append("file", resume);
      formData.append("data", JSON.stringify(careerdata));

      axios.post(`${process.env.REACT_APP_Backend_baseUrl}/career`, formData).then((res) => {
        toast({
          title: 'Success',
          description: "Your details have been Seved",
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: "bottom-right"
        })
      }).catch(err => {
        toast({
          title: 'Error: ',
          description: err.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: "bottom-right"
        })
      })
    }
    else {

      for (let i = 0; i < inputRefs.length; i++) {
        if (!inputRefs[i].current.value) {
          inputRefs[i].current.focus();
          return;
        }
      }

    }
  }


  const GetJodData = async () => {
    const response = await axios.get(`${process.env.REACT_APP_Backend_baseUrl}/jobs`);

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


  const ShowMoreInfo = (Job) => {
    setJob(Job)

    onOpen();

  }


  return (
    <div className={Styles.career}>

      <section className={Styles.first_section}>
        <h1>Career</h1>
        <p><Link to={"/"}> Home </Link>/ Career</p>
      </section>
      <div className={Styles.journey}>
        <h3 className={Styles.heading}>In your journey at Techmapperz you will get</h3>
        <div className={Styles.main}>


          <div className={Styles.card}>
            <img src={career_idea_1} alt='' />
            <h3>Possibilities unmatched</h3>
            <p>With techmapperZ being a start up with business interests and prospects in many IT fields, weather its. And working with us will give you exposure to many sectors , private and government across many cities across India. </p>

          </div>
          <div className={`${Styles.card} ${Styles.card2}`}>
            <img src={career_idea_2} alt='' />
            <h3>Diversity unmatched</h3>
            <p>Since we operate all over India , you will have a spectrum of cultures that people that you can interact with.</p>

          </div>
          <div className={Styles.card}>
            <img src={career_idea_3} alt='' />
            <h3>Flexibility unparalleled</h3>
            <p>You will have flexible working hours and work environment, not tied to work and time regime, the world is your office as long as you are connected to the office.</p>

          </div>
          <div className={Styles.card}>
            <img src={career_idea_4} alt='' />
            <h3>Grow unhindered</h3>
            <p>The world is a digital canvas, evolving with every passing day, you will have the opportunity of developing new ideas and executing them with expertise, not just make a better world , but paint a better digital canvas.</p>

          </div>

          <div className={Styles.card}>
            <img src={career_idea_5} alt='' />
            <h3>Shine Unrestricted</h3>
            <p>At Techmapperz, you will get the freedom to choose your timings your approach for getting the job done with in the alloted time.</p>

          </div>

          <div className={Styles.card}>
            <img src={career_idea_6} alt='' />
            <h3>Earn unlimited</h3>
            <p>No matter what, Salary is an important parameter at tech mappers we acknowledge your talent with premium compensation , which grows as your skills grow.</p>

          </div>

        </div>


      </div>

      <section className={Styles.secend_section}>
        <h3>Get Involved Now</h3>
        <h1>Let's join with us !!</h1>
        <div className={Styles.secend_section_main}>
          <div className={Styles.secend_section_main_one}>
            {Jobsdata && Jobsdata.map(job => {


              return (
                <div key={job.userId}>
                  <h3>{job.Jobtype}</h3>
                  <h1>{job.designetion}</h1>
                  <p>Experience:  {job.experience}</p>
                  <p className={Styles.location}>Location:  {job.location}</p>
                  <div className={Styles.card_apply}>
                    <button className={Styles.apply_now} onClick={() => inputRefs[0].current.focus()}>Apply Now</button>
                    <button onClick={() => ShowMoreInfo(job)}><HiOutlineInformationCircle /></button>
                  </div>

                </div>
              )
            })}

          </div>

          <div className={Styles.secend_section_main_two} >
            <h2>Be a Volunteer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, ex. Dolorem ipsum</p>
            <div className={Styles.input_from} >
              <input   ref={inputRefs[0]} value={careerdata.name} placeholder='Your Name' type={"text"} name="name" onChange={handalechange} />
              <input  ref={inputRefs[1]} value={careerdata.mobile} placeholder='Your Mobile Number' name='mobile' type={"number"} onChange={handalechange} />
              {errornumber && <label style={{ "color": "red" }}>pleases enter 10 digit number</label>}
              <select ref={inputRefs[2]} onChange={handalechange} name="designetion">
                <option value={""}>Select the Designetion</option>
                {Jobsdata && Jobsdata.map((job) => <option value={`${job.JobID} - ${job.designetion}`}>{`${job.JobID} - ${job.designetion}`}</option>)}
              </select>

              <textarea ref={inputRefs[3]} value={careerdata.message} placeholder='Type Your Message' type='text' name='message' onChange={handalechange}></textarea>
              <input ref={inputRefs[4]} accept={".pdf,.doc"} type="file" className={Styles.resume} name="resume" id="Resume" onChange={handaleresumechange} />
              <label for="Resume">{resume ? `${resume.name}` : "Upload Resume*"}</label>
              <button onClick={handalesubmit}>Submit</button>
            </div>
          </div>
        </div>
      </section>


      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Job Info</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text color='black'><b style={{ "color": "black" }}>Job Id -</b> {job && job.JobID}</Text><br />
            <Text color='black'><b style={{ "color": "black" }}> JobType -</b>  {job && job.Jobtype}</Text><br />
            <Text color='black'><b style={{ "color": "black" }}>Education - </b> {job && job.education}</Text><br />
            <Text color='black'><b style={{ "color": "black" }}>Experience -</b> {job && job.experience}</Text><br />
            <Text color='black'><b style={{ "color": "black" }}>Designetion -</b>  {job && job.designetion}</Text><br />
            <Text color='black'><b style={{ "color": "black" }}>Location -</b>  {job && job.location}</Text><br />
            <Text color='black'><b style={{ "color": "black" }}>Salary - </b> {job && job.salary}</Text><br />
            <Text color='black'><b style={{ "color": "black" }}>RoleResponsibility - </b> {job && job.roleResponsibility}</Text><br />
            <Text color='black'><b style={{ "color": "black" }}>PerksBenefits -</b> {job && job.perksBenefits}</Text><br />
            <Text color='black'><b style={{ "color": "black" }}>Description - </b> {job && job.description}</Text><br />

          </ModalBody>
          <ModalFooter bgColor={"white"}>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </div>
  )

}


export default Career;