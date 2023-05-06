import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

import CRM_Implement1 from '../../Photos/CRM_Implement1.gif';
import CRM_Implement2 from '../../Photos/CRM_Implement2.gif';
import CRM_Implement3 from '../../Photos/CRM_Implement3.gif';



import Styles from "./CRM_Impliment.module.css";


const CRM_Implement = () => {


    useEffect(() => {
        const options = {
          top: 0,
          left: 0,
          behavior: 'smooth'
        };
        window.scrollTo(options);
      }, []);

    return (
        <div className={Styles.CRM_Consulting}>
            <section className={Styles.first_part}>
                <h1>CRM Implementation</h1>
                <p><Link to={"/service"}>Services</Link>  /<Link to={"/crm_page"}>CRM-ERP</Link>  / CRM Implementation</p>
            </section>


            <section className={Styles.secand_part}>
                

                <div className={Styles.contaner}>
                    <div className={Styles.product}>
                        <div className={Styles.product_info}>
                            <h1 className={Styles.heading}>CRM Implementation</h1>
                            <p>With global competition and greater customer expections companies look forward to enhance customer relationships and experience, many business entities and enterprises are moving towards customer relationship management (CRM) software to refine their sales stratigies. CRM includes features designed to manage front-end operations and data, including customer data, sales automation, lead tracking and customer support. No matter the size of your business, our all-inclusive CRM tools can effectively maintain the integrity of customer data and optimize buyer's journeys.  </p>

                            <Link to={"/contact"}> <div className={Styles.btn}>
                                <div></div>
                                <h2>Know More</h2>
                            </div></Link>
                        </div>
                        <div>
                            <img src={CRM_Implement2} className={Styles.Img_two} alt="" />
                        </div>
                    </div>
                </div>



                <div className={Styles.contaner}>
                <h1 className={Styles.heading1}>What Do We Help You With?</h1>
                <div className={Styles.design}>
             
                    <div>
                            <img src={CRM_Implement1} className={Styles.Img_one} alt="" />
                        </div>
                        <div className={Styles.product_info}>
                            <h1 className={Styles.heading}>Quick Implementation</h1>
                            <p>Our Team is organised to deliver the CRM within the shortest span of time, we concentrate on the core issues and move to evolution mode wherein we keep adding more functionality to your CRM,ensuring that your requirenments are met and your organisation achieves  process automation capabilities. </p>

                            <Link to={"/contact"}> <div className={Styles.btn}>
                                <div></div>
                                <h2>Know More</h2>
                            </div></Link>
                        </div>
                       
                    </div>
                </div>


                <div className={Styles.contaner}>
                    <div className={Styles.product}>
                        <div className={Styles.product_info}>
                            <h1 className={Styles.heading}>Customised Implementation</h1>
                            <p>Our team will try and understand your requirenment before we start with the designing of the CRM, usually, we will have multiple meetings and study your work model before we start with the designing, this is to ensure that we know what exactly your requirenment and services needed.</p>

                            <Link to={"/contact"}> <div className={Styles.btn}>
                                <div></div>
                                <h2>Know More</h2>
                            </div></Link>
                        </div>
                        <div>
                            <img src={CRM_Implement3} className={Styles.Img_three} alt="" />
                        </div>
                    </div>
                </div>
                


                
            </section>
        </div>
    )
}

export default CRM_Implement
