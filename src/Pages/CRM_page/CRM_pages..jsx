import React, {useEffect} from 'react';
import Styles from './CRM_page.module.css'
import Development6 from '../../Photos/Development6.png';
import Development7 from '../../Photos/Development7.png';
import Combind1 from '../../Photos/Combind1.png';
import Combind4 from '../../Photos/Combind4.png'
import Combind3 from '../../Photos/Combind3.png'
import Combind5 from '../../Photos/Combind5.png';
import Webdevelop from '../../Photos/Webdevelop.png';
import Vector7 from '../../Photos/Develop1.png';
import Vector8 from '../../Photos/Develop2.png';
import Vector9 from '../../Photos/Develop3.png';


const CRM_pages = () => {


    useEffect(() => {
        const options = {
            top: 0,
            left: 0,
            behavior: 'smooth'
        };
        window.scrollTo(options);
    }, []);

    return (
        <div className={Styles.Mobile_development}>
                     <section className={Styles.first_part}>
                         <h1>CRM-ERP</h1>
                        <p>Service / IT /CRM-ERP</p>
                    </section>
        


            <section className={Styles.secand_part}>
                
                <div className={Styles.harbour}>
                <p className={Styles.heading}>Everything CRM, All-round assistance,We are one stop solution for your CRM needs</p>
                    <div className={Styles.design}>

                        <div className={Styles.card1}>
                        <img src={Webdevelop} alt='' />
                        <h3>CRM Consulting</h3>
                      <p>With the accumlated experince of more than 20 years,our team is well equipped to help you slove all possible challenges in the coustomer management field...<h5>Know More</h5></p>
                        </div>


                        <div className={Styles.card1}>
                        <img src={Vector7} alt='' />
                        <h3>CRM Implementation</h3>
                         <p>With global competition and greater customer expectations companies look forward to enhance customer relationship and experience,many business entities...Know More</p>
                     
                        </div>


                        <div className={Styles.card1}>
                        <img src={Vector8} alt='' />
                        <h3>Custom CMR Consulting </h3>
                             <p>AT customer CMR Consulting we understand your current capabilities,map your organisation's desired future state, and then recommend CRM implementation...Know More</p>
                        
                         </div>


                        <div className={Styles.card1}>
                        <img src={Vector9} alt='' />
                        <h3>CRM Integration</h3>
                        <p>CRM integration is connecting all the applications you use to run your business to customer Information,It's a 360-degree view of customer data that can be seamlessly...Know More </p>
                       
      
                         </div>

                    </div>
                </div>


               



                

                <div className={Styles.harbour}>
                    <h3 className={Styles.heading}>Types of Mobile Application</h3>
                    <div className={Styles.design}>


                        <div className={Styles.card5}>
                        
                        <img src={Combind1} alt='' />
                             <h3>Operational</h3>
                             <p>This is a prime tool to manage your business,more efficiently with maximum utilization of customer data.</p>                           
                        </div>


                        <div className={Styles.card6}>
                        <img src={Combind5} alt='' />
                        <h3>Analytical</h3>
                             <p>An analytic CRM is for better interactions with your customers and new business possibilities based on customer data. </p>
                       
                           </div>


                        <div className={Styles.card7}>
                        <img src={Combind3} alt='' />  
                        <h3>Colaberetive</h3>
                          <p>This CRM is the framework for vendor distributor interaction and business opportunities.</p>
                     </div>


                        <div className={Styles.card8}>
                        <img src={Combind1} alt='' />
                        <h3>Campaign Management</h3>
                             <p>Campaign CMR is primarly for campaign management which combines anaytical and operational CRMs.</p>
                          </div>

                          <div className={Styles.card9}>
                          <img src={Combind1} alt='' />
                             <h3>Strategic</h3>
                             <p>This is a market study CMR, which helps you to understand and fellow market trends and demands, crucial for the customer demand supply efficiency.</p>
                         </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default CRM_pages

