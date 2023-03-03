import React from 'react'
import { Link } from 'react-router-dom';
import Styles from "./Contact.module.css";
import { BiTimeFive } from 'react-icons/bi';
import { AiFillHome } from 'react-icons/ai';
import { IconContext } from "react-icons";

const Contact = () => {
  return (
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
            <IconContext.Provider value={{className:"react_iconc"}}>
            <p>< BiTimeFive />9.30-6.30</p>
            <p ><AiFillHome/>Delhi Office 55, Lane- 2, Westend Marg, Saidullajab, Near Saket metro station,</p>
            <p ><AiFillHome/>Kolkata Office 37, Vivekananda Road, Dunlop, Kolkata-700035</p>
            </IconContext.Provider>
            </div>
        </div>
        <div className={Styles.secend_section_secend}>
            <div className={Styles.Input_box}>
            <div>
            <label>Full Name*</label><br/>
            <input placeholder='enter full name'></input>
            </div>
            <div>
            <label>Email*</label><br/>
            <input placeholder='enter email'></input>
            </div>
            <div>
            <label>Project Type*</label><br/>
            <input placeholder='enter project type'></input>
            </div>
            <div>
            <label>Mobile*</label><br/>
            <input placeholder='enter mobile'></input>
            </div>
            </div>

            <div>
            <label>Write Project Details*</label><br/>
            <textarea placeholder='Write Project Details'></textarea>
            </div>
            <Link> <div className={Styles.Submit_btn}>
            <div></div>
            <h2>Get in touch</h2>
        </div></Link>
        </div>
      </section>
      <section className={Styles.third_section}></section>
    </div>
  )
}

export default Contact
