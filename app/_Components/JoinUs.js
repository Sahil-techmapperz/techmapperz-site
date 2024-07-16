// components/JoinUs.js
'use client'

import { useState, useRef } from 'react';
import { HiOutlineInformationCircle } from 'react-icons/hi';
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
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

const init = {
  name: "",
  mobile: "",
  message: "",
  designetion: ""
};

const JoinUs = ({ Jobsdata }) => {
  const [careerdata,setcareerdata ] = useState(init);
  const [resume, setresume] = useState('');
  const [job, setJob] = useState();
  const [errornumber, seterrornumber] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setcareerdata({ ...careerdata, [name]: value });
  };

  const handleResumeChange = (e) => {
    setresume(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const { name, mobile, message, designetion } = careerdata;

    if (name && message && mobile && resume && designetion) {
      const mobilePattern = /^\d{10}$/;
      if (!mobilePattern.test(mobile)) {
        toast({
          title: 'Error:',
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

      setIsSubmitting(true);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/career`, {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
            setcareerdata(init);
            setresume('');
          toast({
            title: 'Success',
            description: "Your job application was successfully submitted",
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: "top-right"
          });
        } else {
          const errorData = await response.json();
          toast({
            title: 'Error:',
            description: errorData.message,
            status: 'error',
            duration: 5000,
            isClosable: true,
            position: "bottom-right"
          });
        }
      } catch (err) {
        toast({
          title: 'Error:',
          description: err.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: "bottom-right"
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      for (let i = 0; i < inputRefs.length; i++) {
        if (!inputRefs[i].current.value) {
          inputRefs[i].current.focus();
          return;
        }
      }
    }
  };

  const showMoreInfo = (Job) => {
    setJob(Job);
    onOpen();
  };

  return (
    <section className="py-8 px-20 max-sm:px-5 relative">
      <h3 className="text-center text-2xl">Get Involved Now</h3>
      <h1 className="text-center text-6xl font-bold">Current Openings</h1>
      <h1 className="absolute max-sm:hidden top-20 left-80 text-gray-400 opacity-10 text-9xl font-bold">Let's join us !!</h1>
      <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1 max-sm:gap-6 mt-12">
        <div className="grid grid-cols-2 max-sm:justify-center max-sm:grid-cols-1 max-sm:gap-3 gap-6">
          {Jobsdata.map((job) => (
            <div key={job.userId} className="flex flex-col justify-center gap-2 p-6 border-2 border-white rounded-lg">
              <h3 className="text-xl font-bold">{job.Jobtype}</h3>
              <h1 className="text-2xl font-bold">{job.designetion}</h1>
              <p className="text-lg">Experience: {job.experience}</p>
              <p className="text-lg">Location: {job.location}</p>
              <div className="flex justify-between p-2">
                <button className="border-2 border-white rounded-full px-4 py-2 hover:bg-blue-600" onClick={() => inputRefs[0].current.focus()}>Apply Now</button>
                <button onClick={() => showMoreInfo(job)}><HiOutlineInformationCircle size={24} /></button>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full bg-blue-700 rounded-lg p-8">
          <h2 className="text-center text-2xl font-bold text-white">Be a Volunteer</h2>
          <p className="text-center text-white">Join our team to work on exciting initiatives, meet others who share your interests, and change the world for the better.</p>
          <div className="flex flex-col gap-4 mt-4">
            <input ref={inputRefs[0]} value={careerdata.name} placeholder='Your Name' type="text" name="name" onChange={handleChange} className="p-2 rounded-lg text-black" />
            <input ref={inputRefs[1]} value={careerdata.mobile} placeholder='Your Mobile Number' name='mobile' type="number" onChange={handleChange} className="p-2 rounded-lg text-black" />
            {errornumber && <label className="text-red-500 ">Please enter a 10 digit number</label>}
            <select ref={inputRefs[2]} onChange={handleChange} name="designetion" className="p-2 rounded-lg text-black">
              <option value="">Select the Designation</option>
              {Jobsdata.map((job) => <option key={job.JobID} value={`${job.JobID} - ${job.designetion}`}>{`${job.JobID} - ${job.designetion}`}</option>)}
            </select>
            <textarea ref={inputRefs[3]} value={careerdata.message} placeholder='Type Your Message' name='message' onChange={handleChange} className="p-2 rounded-lg text-black"></textarea>
            <input ref={inputRefs[4]} accept=".pdf,.doc" type="file" className="hidden" name="resume" id="Resume" onChange={handleResumeChange} />
            <label htmlFor="Resume" className="p-2 bg-white text-gray-600 rounded-lg cursor-pointer ">{resume ? resume.name : "Upload Resume*"}</label>
            <button onClick={handleSubmit} className="p-2 bg-white text-blue-700 rounded-lg">
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="#396ba9" color="white"><div className="border-b-4 border-red-500">Job Info</div></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p><strong>Job Id:</strong> {job && job.JobID}</p>
            <p><strong>Job Type:</strong> {job && job.Jobtype}</p>
            <p><strong>Education:</strong> {job && job.education}</p>
            <p><strong>Experience:</strong> {job && job.experience}</p>
            <p><strong>Designation:</strong> {job && job.designetion}</p>
            <p><strong>Location:</strong> {job && job.location}</p>
            <p><strong>Salary:</strong> {job && job.salary}</p>
            <p><strong>Role & Responsibility:</strong> {job && job.roleResponsibility}</p>
            <p><strong>Perks & Benefits:</strong> {job && job.perksBenefits}</p>
            <p><strong>Description:</strong> {job && job.description}</p>
          </ModalBody>
          <ModalFooter bgColor="white">
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </section>
  );
}

export default JoinUs;
