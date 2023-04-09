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
import T01 from '../../Photos/01.png';
import T02 from '../../Photos/02.png';
import T03 from '../../Photos/03.png';
import T04 from '../../Photos/04.png';
// import T05 from '../../Photos/05.png';
import T06 from '../../Photos/06.png';
// import T07 from '../../Photos/07.png';


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
                <p>Home / IT Service / IT Consulting Services</p>
            </section>



            <section className={Styles.secand_part}>

                <p>We provide IT consulting services to business in a wide range of industries.We use our expertise to identify your opportunities and deliver solutions that will help you outperform your competitors.Whether it's strategy,innovaton,or implementation, we're able to provide exceptional services thanks to the skills of our impeccable team.</p>

                <div className={Styles.newmain}>
                    <h1 className={Styles.heading}>Our GIS Services</h1>
                    <div className={Styles.design}>


                        <div className={Styles.card1}>
                            <div className={Styles.testimg1}>
                             <img src={Webdevelop} alt='' /> 
                             <img src={T01} alt='' /> 
                             </div>
                            <h3 to={"/GIS_Service"} >GIS Services</h3>
                            <p>With the accumulated experience of more then 20 years, Our team is well equipped to help you solve all possible challenges in the customer management field</p>
                        </div>


                        <div className={Styles.card1}>
                        <div className={Styles.testimg1}>
                        <img src={Webdevelop} alt='' />
                        <img src={T02} alt='' />   
                        </div>

                            <h3 to={"/GIS_Service"}>Remote Sensing  Services</h3>
                            <p>With the accumulated experience of more then 20 years, Our team is well equipped to help you solve all possible challenges in the customer management field</p>
                        </div>


                        <div className={Styles.card4}>
                        <div className={Styles.testimg1}>
                        <img src={Vector7} alt='' />
                        <img src={T03} alt='' /> 
                        </div>

                            <h3 to={"/GIS_Service"}>Photogammetry Services</h3>
                            <p>With the accumulated experience of more then 20 years, Our team is well equipped to help you solve all possible challenges in the customer management field</p>
                      
                      </div>

                        <div className={Styles.card1}>
                        <div className={Styles.testimg1}>
                            <img src={Vector8} alt='' />
                            <img src={T04} alt='' />
                            </div>

                            <h3 to={"/GIS_Service"}>Web GIS Services</h3>
                            <p>With the accumulated experience of more then 20 years, Our team is well equipped to help you solve all possible challenges in the customer management field</p>
                      
                        </div>

                        <div className={Styles.card5}>
                        <div className={Styles.testimg1}>
                            <img src={Vector8} alt='' />
                            <img src={T04} alt='' />
                            </div>
                            <h3 to={"/GIS_Service"}>Drone Services</h3>
                            <p>With the accumulated experience of more then 20 years, Our team is well equipped to help you solve all possible challenges in the customer management field</p>
                      
                           </div>

                        <div className={Styles.card6}>
                     </div>
                            <img src={Vector9} alt='' />
                            <img src={T06} alt='' />
                            </div>
                            <h3>Modernization</h3>
                            <p>With the accumulated experience of more then 20 years, Our team is well equipped to help you solve all possible challenges in the customer management field</p> */}
                         </div>

                    </div>
                </div>



                <div className={Styles.harbour}>
                        <h1 className={Styles.heading}>Our IT Services</h1>
                    <div className={Styles.main}>

                        <div className={Styles.card2}>
                        <div className={Styles.testimg1}>
                        <img src={Webdevelop} alt='' /> 
                        <img src={T01} alt='' />
                        </div>
                            <h3>Web Development Services</h3>
                            <p>With the accumulated experience of more than 20 years, our team is well equipped to help you solve all possible challenges in the customer management field... </p>
                        </div>

                        <div className={Styles.card3}>
                        <div className={Styles.testimg1}>
                        <img src={Vector7} alt='' />
                        <img src={T02} alt='' />
                        </div> 
                            <h3 to={"/GIS_Service"}>Mobile Application Development</h3>
                            <p>With global competition and greater customer expectations companies look forward to enhance customer relationship and experience,many business entities..</p>
                        </div>


                        <div className={Styles.card2}>
                        <div className={Styles.testimg1}>
                        <img src={Vector8} alt='' />
                        <img src={T03} alt='' />
                        </div> 
                            <h3 to={"/GIS_Service"}>CRM/ERP</h3>n
                            <p>At custom CRM consulting we understand your current capabilities, map your organisation's desired future state, and then recommend CRM implentation</p>
                        </div>

                        
                         <div className={Styles.card2}>
                         <div className={Styles.testimg1}>
                         <img src={Vector8} alt='' />
                         <img src={T04} alt='' />
                        </div> 
                            <h3 to={"/GIS_Service"}>IT Consulting Services</h3>
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