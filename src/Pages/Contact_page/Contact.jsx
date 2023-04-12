import React, { useEffect, useState } from 'react'
// import "./Contact.css";
import Styles from "./Contact.module.css";
import { BiTimeFive } from 'react-icons/bi';
import { AiFillHome } from 'react-icons/ai';
import {
    Box,
    VStack,
    HStack,
    Input,
    Textarea,
    Text,
    Button,
    useToast,
    FormControl,
    FormLabel,
    FormErrorMessage,

} from '@chakra-ui/react';
const init = {
    "name": "",
    "email": "",
    "mobile": "",
    "projectType": "",
    "projectdetails": ""
}
const Contact = () => {
    const [contactdata, setcontactdata] = useState(init);
    const [hasError, setHasError] = useState({});
    const toast=useToast();


    const validateForm = () => {
        const errors = {};

        if (!contactdata.name) {
            errors.name = "required*";
        }

        if (!contactdata.email) {
            errors.email = "required*";
        }

        if (!contactdata.projectType) {
            errors.projectType = "required*";
        }

        if (!contactdata.mobile) {
            errors.mobile = "required*";
        } else if (!/^\d{10}$/.test(contactdata.mobile)) {
            errors.mobile = "enter 10 digit mobile number"
        }

        if (!contactdata.projectdetails) {
            errors.projectdetails = "required*";
        }

        return errors;
    };



    const handalechange = (e) => {
        const { name, value } = e.target;
        setcontactdata({ ...contactdata, [name]: value })
        console.log(contactdata);
    }

    const handalesubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setHasError(validationErrors);
            return;
        }else{
           setHasError({});
           fetch(`${process.env.REACT_APP_Backend_baseUrl}/contact`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contactdata)
          }).then(res => {
            if (res.status === 200) {
                toast({
                    title: 'Success',
                    description: "we will get in touch with you soon",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  })
                  setHasError({})
                  setcontactdata(init)
              
            } else {
                toast({
                    title: 'field',
                    description: "failed to save contact details",
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                  })
                  setHasError({})
                  setcontactdata(init)
            }
    
          }).catch(err => {
            toast({
                title: 'field',
                description: err.message,
                status: 'error',
                duration: 3000,
                isClosable: true,
              })
              setHasError({})
              setcontactdata(init)
          })


        }
    }



    useEffect(() => {
        const options = {
          top: 0,
          left: 0,
          behavior: 'smooth'
        };
        window.scrollTo(options);
      }, []);



    return (
        <div className={Styles.contact}>
            <div className={Styles.contact_top}>
                <h1>Contact us</h1>
                <p>Home / Contast Us</p>
            </div>
            <div className={Styles.contact_bottom}>
                <div className={Styles.contact_bottom_left}>
                    <p className={Styles.title}>Gettting Touch</p>
                    <h1>Do you have a project in your mind?</h1>
                    <div className={Styles.addres_contaner}>
                        <p className={Styles.logo_contaner}><BiTimeFive className={Styles.logo} />  9.30-6.30 </p>
                        <div className={Styles.address_card}>
                            <p className={Styles.logo_contaner}><AiFillHome className={Styles.logo} />Delhi</p>
                            <p>55, Lane - 2, Westend Marg, Saidullajab,
                                Near Saket metro station,</p>
                        </div>
                        <div className={Styles.address_card}>
                            <p className={Styles.logo_contaner}><AiFillHome className={Styles.logo} />Kolkata</p>
                            <p>37, Vivekananda Road,Dunlop,Kolkata-700035</p>
                        </div>
                    </div>
                </div>
                <div className={Styles.contact_bottom_right}>
                    <VStack spacing={8}>
                        <HStack spacing={4}>
                            <FormControl isInvalid={hasError.name}>
                                <FormLabel>Full Name*</FormLabel>
                                <Input
                                    name="name"
                                    value={contactdata.name}
                                    onChange={handalechange}
                                    placeholder="Enter full name"
                                   
                                />
                                <FormErrorMessage>{hasError.name}</FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={hasError.email}>
                                <FormLabel>Email*</FormLabel>
                                <Input
                                    name="email"
                                    value={contactdata.email}
                                    onChange={handalechange}
                                    placeholder="Enter email"
                                    
                                />
                                
                                <FormErrorMessage>{hasError.email}</FormErrorMessage>
                            </FormControl>
                        </HStack>

                        <HStack spacing={4}>
                            <FormControl isInvalid={hasError.projectType}>
                                <FormLabel>Project Type*</FormLabel>
                                <Input
                                    name="projectType"
                                    value={contactdata.projectType}
                                    onChange={handalechange}
                                    placeholder="Enter project type"
                                    
                                />
                                <FormErrorMessage>{ hasError.projectType}</FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={hasError.mobile}>
                                <FormLabel>Mobile*</FormLabel>
                                <Input
                                    name="mobile"
                                    value={contactdata.mobile}
                                    onChange={handalechange}
                                    placeholder="Enter mobile"
                                    type="tel"
                                    pattern="\d{10}"
                                    
                                />
                                <FormErrorMessage>{hasError.mobile}</FormErrorMessage>
                            </FormControl>
                        </HStack>

                        <FormControl isInvalid={hasError.projectdetails}>
                            <FormLabel>Write Project Details*</FormLabel>
                            <Textarea
                                name="projectdetails"
                                value={contactdata.projectdetails}
                                onChange={handalechange}
                                placeholder="Write Project Details"
                                
                            />
                            <FormErrorMessage>
                                { hasError.projectdetails}
                            </FormErrorMessage>
                        </FormControl>

                        <Button size={"lg"} colorScheme="blue" onClick={handalesubmit}>
                            Submit
                        </Button>
                    </VStack>
                </div>
            </div>
            <div className={Styles.map}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.596906446634!2d88.415269676073!3d22.594174726557426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02754e9bb6f449%3A0xfef69449a7f4a853!2sCF-401%2C%20CF%20Block%2C%20Sector%201%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal%20700064!5e0!3m2!1sen!2sin!4v1681305583641!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
        </div>
    )
}

export default Contact
