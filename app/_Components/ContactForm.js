// components/ContactForm.js
'use client'
import React, { useState } from 'react';
import {useToast} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const init = {
  name: "",
  email: "",
  mobile: "",
  projectType: "",
  projectdetails: ""
};

const ContactForm = () => {
  const [contactdata, setcontactdata] = useState(init);
  const [hasError, setHasError] = useState({});
  const toast = useToast();
  const router = useRouter();

  const validateForm = () => {
    const errors = {};

    if (!contactdata.name) {
      errors.name = "required*";
    }

    if (!contactdata.email) {
      errors.email = "required*";
    }

    if (!contactdata.mobile) {
      errors.mobile = "required*";
    } else if (!/^\d{10}$/.test(contactdata.mobile)) {
      errors.mobile = "enter 10 digit mobile number";
    }

    return errors;
  };

  const handalechange = (e) => {
    const { name, value } = e.target;
    setcontactdata({ ...contactdata, [name]: value });
  };

  const handalesubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setHasError(validationErrors);
      return;
    } else {
      setHasError({});
      const { name, email, mobile, projectType, projectdetails } = contactdata;
      let data = { name, email, mobile, projectType, projectdetails };
      if (data.projectType == "") {
        data.projectType = "none";
      }
      if (data.projectdetails == "") {
        data.projectdetails = "none";
      }
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      }).then(res => {
        if (res.status === 200) {
          router.push('/thankyou');
          setHasError({});
          setcontactdata(init);

        } else {
          toast({
            title: 'Failed',
            description: "failed to save contact details",
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
          setHasError({});
          setcontactdata(init);
        }

      }).catch(err => {
        toast({
          title: 'Failed',
          description: err.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        setHasError({});
        setcontactdata(init);
      });
    }
  };

  return (
    <form onSubmit={handalesubmit} className="grid text-black grid-cols-1 gap-2 w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1">
        <input
          type="text"
          name="name"
          id="name"
          value={contactdata.name}
          onChange={handalechange}
          placeholder="Enter Full Name"
          className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm 
        focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${hasError.name ? "border-red-500" : ""}`}
        />
        {hasError.name && <p className="text-red-500 text-sm mt-2">{hasError.name}</p>}
      </div>

      <div className="grid grid-cols-1">
        <input
          type="email"
          name="email"
          id="email"
          value={contactdata.email}
          onChange={handalechange}
          placeholder="Enter Email"
          className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm 
        focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${hasError.email ? "border-red-500" : ""}`}
        />
        {hasError.email && <p className="text-red-500 text-sm mt-2">{hasError.email}</p>}
      </div>

      <div className="grid grid-cols-1">
        <input
          type="text"
          name="projectType"
          id="projectType"
          value={contactdata.projectType}
          onChange={handalechange}
          placeholder="Enter Project Type"
          className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm 
        focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        {hasError.projectType && <p className="text-red-500 text-sm mt-2">{hasError.projectType}</p>}
      </div>

      <div className="grid grid-cols-1">
        <input
          type="tel"
          name="mobile"
          id="mobile"
          value={contactdata.mobile}
          onChange={handalechange}
          placeholder="Enter Mobile"
          pattern="\d{10}"
          className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm 
        focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${hasError.mobile ? "border-red-500" : ""}`}
        />
        {hasError.mobile && <p className="text-red-500 text-sm mt-2">{hasError.mobile}</p>}
      </div>

      <div className="grid grid-cols-1">
        <textarea
          name="projectdetails"
          id="projectdetails"
          value={contactdata.projectdetails}
          onChange={handalechange}
          placeholder="Write Project Details"
          rows="6"
          className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm 
        focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${hasError.projectdetails ? "border-red-500" : ""}`}
        ></textarea>
        {hasError.projectdetails && <p className="text-red-500 text-sm mt-2">{hasError.projectdetails}</p>}
      </div>

      <div className="grid grid-cols-1">
        <button
          type="submit"
          className="inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#396BA9] hover:bg-[#3f7ecb] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </div>
    </form>

  );
};

export default ContactForm;
