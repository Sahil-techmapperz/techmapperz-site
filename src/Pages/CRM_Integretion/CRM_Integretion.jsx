import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import CRM_Integration from './CRM_Integretion.module.css'

import CRM_Integretion1 from '../../Photos/CRM_Integration1.png';
import CRM_Integretion2 from '../../Photos/CRM_Integration2.png';
import CRM_Integretion3 from '../../Photos/CRM_Integration3.png';
import CRM_Integretion4 from '../../Photos/CRM_Integration4.png';
import CRM_Integretion5 from '../../Photos/CRM_Integration5.png';
import CRM_Integretion6 from '../../Photos/CRM_Integration6.png';
import CRM_Integretion7 from '../../Photos/CRM_Integration7.png';
import CRM_Integretion8 from '../../Photos/CRM_Integration8.png';
import CRM_Integretion9 from '../../Photos/CRM_Integration9.png';
import CRM_Integretion10 from '../../Photos/CRM_Integration10.png';

import CRM_Integretion11 from '../../Photos/CRM_Integration11.png';
import CRM_Integretion12 from '../../Photos/CRM_Integration12.png';
import CRM_Integretion13 from '../../Photos/CRM_Integretion13.gif';
import CRM_Integretion14 from '../../Photos/CRM_Integretion14.gif';
import CRM_Integretion15 from '../../Photos/CRM_Integretion15.png';
import CRM_Integretion16 from '../../Photos/CRM_Integration16.png';
import CRM_Integretion17 from '../../Photos/CRM_Integration17.png';





import Styles from "./CRM_Integretion.module.css";


const CRM_Integretion = () => {


    useEffect(() => {
        const options = {
            top: 0,
            left: 0,
            behavior: 'smooth'
        };
        window.scrollTo(options);
    }, []);

    return (
        <div className={Styles.CRM_Integretion}>
            <section className={Styles.first_part}>
                <h1>CRM Integration</h1>
                <p><Link to={"/service"}>Services</Link> / <Link to={"/crm_page"}>CRM-ERP</Link> /  CRM Integration</p>
            </section>


            <section className={Styles.secand_part}>


                <div className={Styles.contaner}>
                    <div className={Styles.product}>
                        <div className={Styles.product_info}>
                            <h1 className={Styles.heading}>Why is CRM <br /> Integration important? </h1>
                            <p>CRM integration is connecting all the applications you use to run your business to customer information, it's a 360-degree view of customer data that can be seamlessly integrated with third-party systems related or unrelated to the host CRM system since your data synchronizes across all systems. CRM integration creates an accurate, comprehensive picture of your customers and prospects to make CRM work better, and vice versa.  </p>

                            <Link to={"/contact"}> <div className={Styles.btn}>
                                <div></div>
                                <h2>Know More</h2>
                            </div></Link>
                        </div>
                        <div>
                            <img src={CRM_Integretion13} className={Styles.Img_two} alt="" />
                        </div>
                    </div>
                </div>



                <div className={`${Styles.contaner} ${Styles.contaner2}`}>
                    <div className={Styles.product}>
                       
                        <div>
                            <img src={CRM_Integretion14} className={Styles.Img_three} alt="" />
                        </div>
                        <div className={Styles.product_info}>
                        <h1 className={Styles.heading3}>Here are the benefits you get <br /> with CRM integrations</h1>
                            <ul>
                                <li><p>Better data</p></li>
                                <li><p>Reduced changes of error</p></li>
                                <li><p>Efficient resource allocation</p></li>
                                <li><p>Increased productivity</p></li>
                                <li><p>Improved customer care</p></li>
                                <li><p>Overall automation</p></li>
                                

                            </ul>

                        </div>

                    </div>
                </div>



                <div className={Styles.Application}>
                    <h3 className={Styles.heading1}>The CRM integrations for optimising <br/> your business services are:</h3>
                    <div className={Styles.design}>



                        <div className={Styles.card1}>

                            <img src={CRM_Integretion1} alt='' />
                            <h3>Email Integrations</h3>
                        </div>


                        <div className={Styles.card2}>
                            <img src={CRM_Integretion2} alt='' />
                            <h3>Calender Integrations</h3>
                        </div>


                        <div className={Styles.card3}>
                            <img src={CRM_Integretion3} alt='' />
                            <h3>Software Integrations</h3>
                        </div>

                        <div className={Styles.card4}>
                            <img src={CRM_Integretion4} alt='' />
                            <h3>Event Integrations</h3>
                        </div>


                        <div className={Styles.card5}>
                            <img src={CRM_Integretion5} alt='' />
                            <h3>Live Chat <br /> Integrations</h3>
                        </div>

                        <div className={Styles.card6}>
                            <img src={CRM_Integretion6} alt='' />
                            <h3>Vedio <br /> Integrations</h3>
                        </div>
                        <div className={Styles.card7}>
                            <img src={CRM_Integretion7} alt='' />
                            <h3>E commerce Integrations</h3>
                        </div>
                        <div className={Styles.card8}>
                            <img src={CRM_Integretion8} alt='' />
                            <h3>Calling Software <br/>Integrations</h3>
                        </div>
                        <div className={Styles.card9}>
                            <img src={CRM_Integretion9} alt='' />
                            <h3>Customer Success <br /> Integrations</h3>
                        </div>
                        <div className={Styles.card10}>
                            <img src={CRM_Integretion10} alt='' />
                            <h3>Web From<br /> Integrations</h3>
                        </div>
                        <div className={Styles.card11}>
                            <img src={CRM_Integretion11} alt='' />
                            <h3>Connetor <br /> Integrations</h3>
                        </div>
                        <div className={Styles.card13}>
                            <img src={CRM_Integretion12} alt='' />
                            <h3>Social Media <br />Integrations</h3>
                        </div>

                        <div className={Styles.card14}>
                            <img src={CRM_Integretion15} alt='' />
                            <h3>Team Communication <br /> Integrations</h3>
                        </div>


                        <div className={Styles.card15}>
                            <img src={CRM_Integretion16} alt='' />
                            <h3>Proposal and Document Integrations</h3>
                        </div>


                        <div className={Styles.card16}>
                            <img src={CRM_Integretion17} alt='' />
                            <h3>Forms and Data <br /> Collection Integrations</h3>
                        </div> 


                       





                    </div>
                </div>



            </section>
        </div>
    )
}

export default CRM_Integretion
