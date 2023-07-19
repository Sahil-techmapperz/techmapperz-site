import React, { useEffect, useState } from "react";
import styles from './Details.module.css'
import { HiOutlineMail } from 'react-icons/hi';
import { BsWhatsapp } from 'react-icons/bs';
import { ImArrowLeft } from 'react-icons/im';
import { MdCall } from 'react-icons/md';
import ReactWhatsapp from 'react-whatsapp';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    useToast,
} from '@chakra-ui/react'


const init = {
    "name": "",
    "email": "",
    "mobile": "",
    "projectType": "",
    "projectdetails": ""
}




const Details = () => {

    const [contactdata, setcontactdata] = useState(init);
    const[clickcontact,setclickcontact]=useState(false);
    const [hasError, setHasError] = useState({})
    const { isOpen, onOpen, onClose } = useDisclosure()

    const toast = useToast();

    const handalechange = (e) => {
        const { name, value } = e.target;
        setcontactdata({ ...contactdata, [name]: value })
        console.log(contactdata);
    }

    useEffect(()=>{
        onOpen();
    return () => {
      onClose();
    };
    },[])


    const handalecontactform=()=>{
        setclickcontact(true)
        onOpen()
    }


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
            errors.mobile = "enter 10 digit mobile number"
        }

        if (!contactdata.projectdetails) {
            errors.projectdetails = "required*";
        }

        return errors;
    };

    const handalesubmit = (e) => {
        e.preventDefault();
        const{name,email,mobile,projectType,projectdetails}=contactdata;
            let data={name,email,mobile,projectType,projectdetails};
            if(data.projectType==""){
                data.projectType="none";
                
            }


            if(data.projectdetails==""){
                data.projectType="none";
                
            }
        // const validationErrors = validateForm();

            fetch(`${process.env.REACT_APP_Backend_baseUrl}/contact`, {
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
    


    return (
        <div className={styles.Details}>


            <div className={styles.arrow}>
                <h3 ><ImArrowLeft /></h3>
            </div>


            <div className={styles.contact}>
                <h3 onClick={handalecontactform} className={styles.class1}>Contact Us</h3>
                <h3 className={styles.class2}><HiOutlineMail /></h3>
            </div>

            <div className={styles.main}>
                <div className={styles.text}>
                    <ReactWhatsapp number="9643002065" message="">
                        <h3 className={styles.class3}><BsWhatsapp /></h3>
                    </ReactWhatsapp>

                </div>
                {/* <div className={styles.Whatsapp}>
                    <h3>WhatsApp</h3>
                </div> */}

            </div>


            <div className={styles.phone}>
                <div className={styles.icon1}>
                    <a href="tel:+919643002065"><h3><MdCall /></h3></a>

                </div>
                {/* <div className={styles.icon2}>
                    <h3>Phone</h3>
                </div> */}
            </div>


            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>

                    <ModalCloseButton background={"red"} />
                    
                    <ModalBody >
                        <form >
                            <div className={styles.contactform_contaner}>
                                {clickcontact? <h1 style={{"color":"#396ba9"}}>Contact Us</h1>: <h1 style={{"color":"#396ba9","textAlign":"center","marginLeft":"-20px","textDecoration":"underline","fontSize":"20px"}}>The Internet is Pretty Huge,<br/> We're So Glad You Found US</h1>}
                               
                               
                                <input required={"true"} value={contactdata.name} name="name" onChange={handalechange} type="text" placeholder="Enter Full Name" />
                                
                                <input required={"true"} name="email"
                                    value={contactdata.email}
                                    onChange={handalechange} type="email" placeholder="Enter Email" />
                               
                               
                                
                                <input required={"true"}  name="mobile"
                                    value={contactdata.mobile}
                                    onChange={handalechange} type="tel" placeholder="Enter Mobile No" pattern="\d{10}" />
                                
                                <textarea required={"true"} name="projectdetails"
                                value={contactdata.projectdetails}
                                onChange={handalechange} placeholder="Enter Project Details">
                                </textarea>
                                <button onClick={handalesubmit} className={styles.submit_btn}>Submit</button>
                            </div>

                        </form>
                    </ModalBody>


                </ModalContent>
            </Modal>

        </div>
    )
}


export default Details