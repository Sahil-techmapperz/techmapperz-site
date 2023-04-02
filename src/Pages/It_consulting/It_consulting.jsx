import React, {useEffect} from 'react';
import Styles from './It_consulting.module.css';
import Consulting1 from '../../Photos/Consulting1.png'
import Consulting2 from '../../Photos/Consulting2.png'
import Consulting3 from '../../Photos/Consulting3.png'
import Consulting4 from '../../Photos/Consulting4.png'
import Consulting5 from '../../Photos/Consulting5.png'
import Consulting6 from '../../Photos/Consulting6.png'
import Consulting7 from '../../Photos/Consulting7.png'
import Consulting8 from '../../Photos/Consulting8.png'
import Consulting9 from '../../Photos/Consulting9.png'
// import Consulting10 from '../../Photos/Consulting10.png'

import Combind1 from '../../Photos/Combind1.png';
import Combind3 from '../../Photos/Combind3.png'
import Combind5 from '../../Photos/Combind5.png';
import Webdevelop from '../../Photos/Webdevelop.png';
import Vector7 from '../../Photos/Develop1.png';
import Vector8 from '../../Photos/Develop2.png';
import Vector9 from '../../Photos/Develop3.png';


const It_consulting = () => {
    useEffect(() => {
        const options = {
            top: 0,
            left: 0,
            behavior: 'smooth'
        };
        window.scrollTo(options);
    }, []);

    return (
        <div className={Styles.consulting}>
            <section className={Styles.first_part}>
                <h1>IT Consulting Services</h1>
                <p>Services / IT Service / IT Consulting Services</p>
            </section>



            <section className={Styles.secand_part}>

                <p>We provide IT consulting services to business in a wide range of industries.We use our expertise to identify your opportunities and deliver solutions that will help you outperform your competitors.Whether it's strategy,innovaton,or implementation, we're able to provide exceptional services thanks to the skills of our impeccable team.</p>

                <div className={Styles.newmain}>

                    <div className={Styles.design}>

                        <div className={Styles.card}>
                            <img src={Consulting1} alt='' />
                            <h3>Infrastructure</h3>
                            <p>Our Infrastructure consulting will help you power through the use of under-utilization of your Infrastructure, and deliver something that can make your business thrive...</p>
                        </div>


                        <div className={Styles.card}>
                            <img src={Consulting9} alt='' />
                            <h3>Design and Implementation</h3>
                            <p>Our team can work with you on designing a network to secure your data and other intelligent infrastructures...</p>

                        </div>


                        <div className={Styles.card}>
                            <img src={Consulting8} alt='' />
                            <h3>Planning</h3>
                            <p>Techmapperz provides strategic information Systems Planning and Assesment services that help organizations leverage the benefits of technology...</p>

                        </div>

                        <div className={Styles.card}>
                            <img src={Consulting3} alt='' />
                        </div>

                        <div className={Styles.card}>
                            <img src={Consulting6} alt='' />
                            <h3>Digital Transformations</h3>
                            <p>Digital Transformation is the integration of Digital technology into your business. With our team of experts, we'll help you work smarter...</p>
                        </div>

                        <div className={Styles.card}>
                            <img src={Consulting4} alt='' />
                            <h3>Modernization</h3>
                            <p>We replatform your apps in order to make functionality easier.Re-architecting your apps to make it more scalable and flexible.This will be done through code...  </p>
                        </div>


                        <div className={Styles.card}>
                            <img src={Consulting2} alt='' />
                            <h3>Strattegy Consulting</h3>
                            <p>strategy consulting is an important aspect of digital transformation. With this package, we offer one-on-ones with our consultants to assess where you are at now... </p>
                        </div>

                        <div className={Styles.card}>
                            <img src={Consulting8} alt='' />
                            <h3>Implementation</h3>
                            <p>We,ll help define the required skill sets for our team (including developers,project managers, QA, etc.) so that we can build a robust architecture and prototype..</p>
                        </div>

                        <div className={Styles.card}>
                            <img src={Consulting3} alt='' />
                        </div>

                    </div>
                </div>



                <div className={Styles.harbour}>
                    <div>
                        <h1 className={Styles.heading1}>Why Choose <br/>Techmapperz <br/> for your IT Services?</h1>
                     <img src={Consulting3} alt='' /> 
                    </div>
                    <div className={Styles.main}>
                        <div className={Styles.card1}>
                            <h3>Reliability</h3>
                            <p>With the accumulated experience of more than 20 years, our team is well equipped to help you solve all possible challenges in the customer management field..</p>
                        </div>

                        <div className={Styles.card2}>

                            <h3>Revenue</h3>
                            <p>With global competition and greater customer expectations companies look farward to enhance customer relationship and experience,many business entities .</p>
                        </div>


                        <div className={Styles.card3}>

                            <h3>Robust</h3>
                            <p>At custom CRM consulting we understand your current capabilities,map your organisation's desired future state, and then recommend CRM implementation</p>
                        </div>


                        <div className={Styles.card4}>

                            <h3>Skilled Management</h3>
                            <p>CRM integration is connecting all the applications you use to run your business to customer information, it's a 360-degree view of customer data that can be seamlessly..</p>
                        </div>

                    </div>
                </div>


            </section>
        </div>
    )
}

export default It_consulting
