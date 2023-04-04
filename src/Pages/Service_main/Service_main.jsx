import React, { useEffect } from 'react';
import Styles from './Service.main.module.css';
// import Combind1 from '../../Photos/Combind1.png';
// import Combind3 from '../../Photos/Combind3.png'
// import Combind5 from '../../Photos/Combind5.png';
import Webdevelop from '../../Photos/Webdevelop.png';
import Vector7 from '../../Photos/Develop1.png';
import Vector8 from '../../Photos/Develop2.png';
import Vector9 from '../../Photos/Develop3.png';
import Consulting7 from '../../Photos/Consulting7.png';


const Service_main = () => {


    useEffect(() => {
        const options = {
            top: 0,
            left: 0,
            behavior: 'smooth'
        };
        window.scrollTo(options);
    }, []);

    return (
        <div className={Styles.service}>
            <section className={Styles.first_part}>
                <h1>Our Services</h1>
                <p>Services / IT Service / IT Consulting Services</p>
            </section>



            <section className={Styles.secand_part}>

                <p>We provide IT consulting services to business in a wide range of industries.We use our expertise to identify your opportunities and deliver solutions that will help you outperform your competitors.Whether it's strategy,innovaton,or implementation, we're able to provide exceptional services thanks to the skills of our impeccable team.</p>

                <div className={Styles.newmain}>
                    <h1 className={Styles.heading}>Our GIS Services</h1>
                    <div className={Styles.design}>


                        <div className={Styles.card1}>
                             <img src={Webdevelop} alt='' /> 
                            <h3 >GIS Services</h3>
                            <p>With the accumulated experience of more then 20 years, Our team is well equipped to help you solve all possible challenges in the customer management field</p>
                        </div>


                        <div className={Styles.card1}>
                        <img src={Webdevelop} alt='' />   
                            <h3>Remote Sensing  Services</h3>
                            <p>With the accumulated experience of more then 20 years, Our team is well equipped to help you solve all possible challenges in the customer management field</p>
                        </div>


                        <div className={Styles.card1}>
                        <img src={Vector7} alt='' /> 
                            <h3>Photogammetry Services</h3>
                            <p>With the accumulated experience of more then 20 years, Our team is well equipped to help you solve all possible challenges in the customer management field</p>
                      
                      </div>

                        <div className={Styles.card1}>
                            <img src={Vector8} alt='' />
                            <h3>Web GIS Services</h3>
                            <p>With the accumulated experience of more then 20 years, Our team is well equipped to help you solve all possible challenges in the customer management field</p>
                      
                        </div>

                        <div className={Styles.card1}>
                            <img src={Vector8} alt='' />
                            <h3>Drone Services</h3>
                            <p>With the accumulated experience of more then 20 years, Our team is well equipped to help you solve all possible challenges in the customer management field</p>
                      
                           </div>

                        <div className={Styles.card1}>
                            <img src={Vector9} alt='' />
                            <h3>Modernization</h3>
                            <p>With the accumulated experience of more then 20 years, Our team is well equipped to help you solve all possible challenges in the customer management field</p>
                         </div>


                       

                    </div>
                </div>



                <div className={Styles.harbour}>
                        <h1 className={Styles.heading}>Our IT Services</h1>
                    <div className={Styles.main}>
                        <div className={Styles.card2}>
                        <img src={Webdevelop} alt='' /> 
                            <h3>Web Development Services</h3>
                            <p>With the accumulated experience of more than 20 years, our team is well equipped to help you solve all possible challenges in the customer management field... </p>
                        </div>

                        <div className={Styles.card2}>
                        <img src={Vector7} alt='' /> 
                            <h3>Mobile Application Development</h3>
                            <p>With global competition and greater customer expectations companies look forward to enhance customer relationship and experience,many business entities..</p>
                        </div>


                        <div className={Styles.card2}>
                        <img src={Vector8} alt='' />
                            <h3>CRM/ERP</h3>
                            <p>At custom CRM consulting we understand your current capabilities, map your organisation's desired future state, and then recommend CRM implentation</p>
                        </div>

                        
                         <div className={Styles.card2}>
                         <img src={Vector8} alt='' />
                            <h3>IT Consulting Services</h3>
                            <p>At custom CRM consulting we understand your current capabilities,map your organisation's desired future state, and then recommend CRM implementation</p>
                        </div>

                        

                    </div>
                    <div className={Styles.Squared_img}>
                        <img src={Consulting7} alt='' />
                        </div>
                    
                </div>


            </section>
        </div>
    )
}

export default Service_main