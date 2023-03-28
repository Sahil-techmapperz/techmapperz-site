import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
import Styles from "./Contact.module.css";
import { BiTimeFive } from 'react-icons/bi';
import { AiFillHome } from 'react-icons/ai';
import { IconContext } from "react-icons";
import Toaster from '../../Components/Popup_Component/Toster';
const init = {
  "name": "",
  "email": "",
  "mobile": "",
  "projectType": "",
  "projectdetails": ""
}

const hasError_init = {
  "name": false,
  "email": false,
  "mobile": false,
  "projectType": false,
  "projectdetails": false
}
const Contact = () => {
  const [contactdata, setcontactdata] = useState(init);
  const [hasError, setHasError] = useState(hasError_init);
  const [Successtoster, setSuccesstoster] = useState(false);
  const [Errortoster, setErrortoster] = useState(false);



  const handaleSuccesstoster = () => {
    setSuccesstoster(true);
    setTimeout(() => {
      setSuccesstoster(false);
    }, 3000)
  }
  const handaleErrortoster = () => {
    setErrortoster(true);
    setTimeout(() => {
      setErrortoster(false);
    }, 3000)
  }

  const handalechange = (e) => {
    const { name, value } = e.target;
    if(name==="mobile"){
      let newvalue = value;
      if (/^\d{10}$/.test(newvalue)){
         
          setHasError({ ...hasError, "mobile": hasError.mobile =false})
          setcontactdata({ ...contactdata, [name]: value })
      }else{
        setHasError({ ...hasError, "mobile": hasError.mobile = true})
       
      }
    }
    if(name==="email"){
      let newEmail = value;
      if (/^[a-zA-Z0-9._%+-]+@gmail.com$/.test(newEmail)) {
       
        setcontactdata({ ...contactdata, [name]: value })
      }else{
       
      }
    }
    setcontactdata({ ...contactdata, [name]: value })
  }

  const handalesubmit = () => {
   
    const { name, email, mobile, projectType, projectdetails } = contactdata;
    if (name && email && mobile && projectType && projectdetails) {
      setHasError(hasError_init);
      fetch("http://localhost:8080/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactdata)
      }).then(res => {
        if (res.status === 200) {
          handaleSuccesstoster();
        } else {
         
          handaleErrortoster()
        }

      }).catch(err => {
       
        handaleErrortoster();
      })
    }
     else if (email === ""&&name === ""&&mobile === ""&&projectType===""&&projectdetails==="") {
    
      setHasError({ ...hasError, "email": hasError.email = true,"name": hasError.name = true,"mobile": hasError.mobile =true,"projectType": hasError.projectType,"projectdetails": hasError.projectdetails})
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
    <>
      <div className={Styles.contact}>
        <section className={Styles.first_section}>
          <h1>Contact us</h1>
          <p>Home / Contast Us</p>
        </section>
        
        <section className={Styles.secend_section}>
          <div className={Styles.secend_section_first}>
            <p>Gettting Touch</p>
            <h1>Do you have a project in your mind?</h1>
            <div className={Styles.address}>
              <IconContext.Provider value={{ className: "react_iconc" }}>
                <p>< BiTimeFive  style={{ color: 'blue' }}  />9.30-6.30</p>
                <p><AiFillHome />Delhi Office 55, <span className={Styles.address_detils}>Lane- 2, Westend Marg, Saidullajab, Near Saket metro station,</span></p>
                <p ><AiFillHome />Kolkata Office 37,<span className={Styles.address_detils}> Vivekananda Road, Dunlop, Kolkata-700035</span></p>
              </IconContext.Provider>
            </div>
          </div>
          <div className={Styles.secend_section_secend}>
            {Successtoster ? <Toaster type="success" heading="Sussess" title="Thankyou" /> : null}
            {Errortoster ? <Toaster type="Error" heading="Error" title="something is wrong" /> : null}
            <div className={Styles.Input_box}>
              <div>
                <label>Full Name*</label>
                <input name='name' value={contactdata.name} onChange={handalechange} type={"text"} placeholder='enter full name'></input>
                {hasError.name && <label className={Styles.error_label}>you have to fill the name*</label>}
              </div>
              <div>
                <label>Email*</label>
                <input className={`input ${hasError.email ? 'error' : ''}`} name='email' value={contactdata.email} onChange={handalechange} type={"email"} placeholder='enter email'></input>
                {hasError.email && <label className={Styles.error_label}>enter your email address*</label>}
              </div>
              <div>
                <label>Project Type*</label>
                <input className={`input ${hasError.projectType ? 'error' : ''}`} name='projectType' value={contactdata.projectType} onChange={handalechange} type={"text"} placeholder='enter project type'></input>
                {hasError.projectType && <label className={Styles.error_label}>you have to fill the Project Type*</label>}
              </div>
              <div>
                <label>Mobile*</label>
                <input className={`input ${hasError.mobile ? 'error' : ''}`} name='mobile' value={contactdata.mobile} onChange={handalechange} type={"number"} placeholder='enter mobile' pattern="\d{10}" required></input>
                {hasError.mobile && <label className={Styles.error_label}>enter 10 degit number*</label>}
              </div>
            </div>

            <div className={Styles.text_area}>
              <label >Write Project Details*</label><br />
              <textarea className={`${Styles}.input${hasError.projectdetails ? 'error' : ''}`} name='projectdetails' value={contactdata.projectdetails} onChange={handalechange} type={"text"} placeholder='Write Project Details'></textarea>
              {hasError.projectdetails && <label className={Styles.error_label}>you have to fill the Project Details*</label>}
            </div>
            <div>
              <button type="button"  className={Styles.Submit_btn} onClick={handalesubmit}>Submit</button>
            </div>
          </div>
        </section>


        <section className={Styles.third_section}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.806246276118!2d88.35882551394677!3d22.586348838160177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277b573148aaf%3A0xc830ad0c222e6a1!2s37%2C%20Vivekananda%20Rd%2C%20Raja%20Katra%2C%20Singhi%20Bagan%2C%20Ram%20Bagan%2C%20Kolkata%2C%20West%20Bengal%20700006!5e0!3m2!1sen!2sin!4v1677844468005!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
      </div>

    </>
  )
}

export default Contact
