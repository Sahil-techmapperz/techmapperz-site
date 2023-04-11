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
import T06 from '../../Photos/06.png';
import Ourservice1 from '../../Photos/Ourservice1.png';
import Ourservice2 from '../../Photos/Ourservice2.png';
import Ourservice3 from '../../Photos/OurService3.png';
import Ourservice4 from '../../Photos/Ourservice4.png';
import Ourservice5 from '../../Photos/Ourservice5.png';
import Ourservice6 from '../../Photos/Ourservice6.png';
import Ourservice7 from '../../Photos/Ourservice7.png';
import Ourservice8 from '../../Photos/Ourservice8.png';
import Ourservice9 from '../../Photos/Ourservice9.png';
import Ourservice10 from '../../Photos/Ourservice10.png';
import Ourservice11 from '../../Photos/Ourservice11.png';
import Rectangle_41 from '../../Photos/Rectangle 41.png';
import { Link } from 'react-router-dom';


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
                <p>Home / Services</p>
            </section>



            <section className={Styles.secand_part}>

                <p className={Styles.title}>We provide IT consulting services to business in a wide range of industries.We use our expertise to identify your opportunities and deliver solutions that will help you outperform your competitors.Whether it's strategy,innovaton,or implementation, we're able to provide exceptional services thanks to the skills of our impeccable team.</p>

                <div className={Styles.newmain}>
                    <h1 className={Styles.heading}>Our GIS Services</h1>
                    <div className={Styles.design}>


                        <div className={Styles.card1}>
                            <div className={Styles.testimg1}>
                             <img  className={Styles.icon} src={Ourservice11} alt='' /> 
                             <img src={T01} alt='' /> 
                             </div>
                            <h3  > <Link to={"/GIS_Service"}> GIS Services </Link></h3>
                            <p>With the accumulated experience of more then 20 years, Our team is well equipped to help you solve all possible challenges in the customer management field</p>
                        </div>


                        <div className={Styles.card2}>
                        <div className={Styles.testimg1}>
                        <img className={Styles.icon} src={Ourservice10} alt='' />
                        <img src={T02} alt='' />   
                        </div>
                            <h3 ><Link to={"/GIS_Service"}> Remote Sensing  Services</Link></h3>
                            <p>With the accumulated experience of more then 20 years, Our team is well equipped to help you solve all possible challenges in the customer management field</p>
                        </div>


                        <div className={Styles.card3}>
                        <div className={Styles.testimg1}>
                        <img className={Styles.icon} src={Ourservice9} alt='' />
                        <img src={T03} alt='' /> 
                        </div>
                            <h3 > <Link to={"/GIS_Service"}> Photogammetry Services </Link></h3>
                            <p>With the accumulated experience of more then 20 years, Our team is well equipped to help you solve all possible challenges in the customer management field</p>
                      
                      </div>

                        <div className={Styles.card4}>
                        <div className={Styles.testimg1}>
                            <img className={Styles.icon} src={Ourservice8} alt='' />
                            <img src={T04} alt='' />
                            </div>
                            <h3 > <Link to={"/GIS_Service"}> Web GIS Services </Link></h3>
                            <p>With the accumulated experience of more then 20 years, Our team is well equipped to help you solve all possible challenges in the customer management field</p>
                      
                        </div>

                        <div className={Styles.card5}>
                        <div className={Styles.testimg1}>
                            <img className={Styles.icon} src={Ourservice7} alt='' />
                            <img src={T04} alt='' />
                            </div>
                            <h3 > <Link to={"/GIS_Service"}> Drone Services</Link></h3>
                            <p>With the accumulated experience of more then 20 years, Our team is well equipped to help you solve all possible challenges in the customer management field</p>
                      
                           </div>

                        <div className={Styles.card6}>
                        <img src={Ourservice6} alt='' />
                     </div>


                       

                    </div>
                </div>



                <div className={Styles.harbour}>
                        <h1 className={Styles.heading}>Our IT Services</h1>
                    <div className={Styles.main}>

                        <div className={Styles.card7}>
                        <div className={Styles.testimg1}>
                        <img src={Ourservice11} alt='' /> 
                        <img src={T01} alt='' />
                        </div>
                            <h3>Web Development Services</h3>
                            <p>With the accumulated experience of more than 20 years, our team is well equipped to help you solve all possible challenges in the customer management field... </p>
                        </div>

                        <div className={Styles.card8}>
                        <div className={Styles.testimg1}>
                        <img src={Ourservice4} alt='' />
                        <img src={T02} alt='' />
                        </div> 
                            <h3 to={"/GIS_Service"}>Mobile Application Development</h3>
                            <p>With global competition and greater customer expectations companies look forward to enhance customer relationship and experience,many business entities..</p>
                        </div>


                        <div className={Styles.card9}>
                        <div className={Styles.testimg1}>
                        <img src={Ourservice3} alt='' />
                        <img src={T03} alt='' />
                        </div> 
                            <h3 to={"/GIS_Service"}>CRM/ERP</h3>
                            <p>At custom CRM consulting we understand your current capabilities, map your organisation's desired future state, and then recommend CRM implentation</p>
                        </div>

                        
                         <div className={Styles.card10}>
                         <div className={Styles.testimg1}>
                         <img src={Ourservice2} alt='' />
                         <img src={T04} alt='' />
                        </div> 
                            <h3 to={"/GIS_Service"}>IT Consulting Services</h3>
                            <p>At custom CRM consulting we understand your current capabilities,map your organisation's desired future state, and then recommend CRM implementation</p>
                        </div>

                        

                    </div>
                    <div className={Styles.Squared_img}>
                        <img src={Ourservice1} alt='' />
                        </div>
                    
                </div>


            </section>
        </div>
    )
}

export default Service_main