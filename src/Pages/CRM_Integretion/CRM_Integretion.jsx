import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

import CRM_Implement1 from '../../Photos/CRM_Implement1.gif';
import CRM_Implement2 from '../../Photos/CRM_Implement2.gif';
import CRM_Implement3 from '../../Photos/CRM_Implement3.gif';



import Styles from "./CRM_Implement.module.css";


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
                <h1>CRM Implementation</h1>
                <p>Services / CRM-ERP / Custom CRM Consulting</p>
            </section>


            <section className={Styles.secand_part}>
                

                <div className={Styles.contaner}>
                    <div className={Styles.product}>
                        <div className={Styles.product_info}>
                            <h1 className={Styles.heading}>Custom CRM Consulting </h1>
                            <p>At custom CRM consulting we understand your capabilities, mapping your organization's desired future state, then recommend CRM implementation or upgrading in line with your customer management approach, With a good CRM, you get wide-ranging customer analytics; you can maintain communication history and always stay up-to-date with process automation.</p>

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
                    <div className={Styles.product}>
                        <h1>Custom Control Included</h1>
                    <div>
                            <img src={CRM_Implement1} className={Styles.Img_two} alt="" />
                        </div>
                        <div className={Styles.product_info}>
                           
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                
                            </ul>
                            <Link to={"/contact"}> <div className={Styles.btn}>
                                <div></div>
                                <h2>Know More</h2>
                            </div></Link>
                        </div>
                       
                    </div>
                </div>


                
                


                
            </section>
        </div>
    )
}

export default CRM_Integretion
