// components/ContactForm.js
'use client'
import React, { useState } from 'react';
import {
  VStack,
  HStack,
  Input,
  Textarea,
  Button,
  useToast,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';

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
          toast({
            title: 'Success',
            description: "we will get in touch with you soon",
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
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
    <VStack spacing={8}>
      <HStack spacing={[4, 14, 14]}>
        <FormControl isInvalid={hasError.name}>
          <FormLabel>Full Name*</FormLabel>
          <Input
            name="name"
            value={contactdata.name}
            onChange={handalechange}
            placeholder="Enter Full Name"
          />
          <FormErrorMessage>{hasError.name}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={hasError.email}>
          <FormLabel>Email*</FormLabel>
          <Input
            name="email"
            value={contactdata.email}
            onChange={handalechange}
            placeholder="Enter Email"
          />
          <FormErrorMessage>{hasError.email}</FormErrorMessage>
        </FormControl>
      </HStack>

      <HStack spacing={[4, 14, 14]}>
        <FormControl isInvalid={hasError.projectType}>
          <FormLabel>Project Type</FormLabel>
          <Input
            name="projectType"
            value={contactdata.projectType}
            onChange={handalechange}
            placeholder="Enter Project Type"
          />
          <FormErrorMessage>{hasError.projectType}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={hasError.mobile}>
          <FormLabel>Mobile*</FormLabel>
          <Input
            name="mobile"
            value={contactdata.mobile}
            onChange={handalechange}
            placeholder="Enter Mobile"
            type="tel"
            pattern="\d{10}"
          />
          <FormErrorMessage>{hasError.mobile}</FormErrorMessage>
        </FormControl>
      </HStack>

      <HStack className="w-[85%]">
        <FormControl isInvalid={hasError.projectdetails}>
          <FormLabel>Write Project Details*</FormLabel>
          <Textarea
            name="projectdetails"
            value={contactdata.projectdetails}
            onChange={handalechange}
            placeholder="Write Project Details"
            height={"200px"}
            width={"100%"}
          />
          <FormErrorMessage>{hasError.projectdetails}</FormErrorMessage>
        </FormControl>
      </HStack>

      <Button size={"lg"} w="40%" colorScheme="blue" onClick={handalesubmit}>
        Submit
      </Button>
    </VStack>
  );
};

export default ContactForm;
