import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Geospatial_Mapping from '../../Photos/Geospatial_Mapping.png';
import Geo_health from '../../Photos/Geo_health.png';
import CRM_Consulting1 from '../../Photos/CRM_Consulting1.png';
import CRM_Consulting2 from '../../Photos/CRM_Consulting2.png';
import CRM_Consulting3 from '../../Photos/CRM_Consulting3.png';
import CRM_Consulting4 from '../../Photos/CRM_Consulting4.png';
import CRM_Consulting5 from '../../Photos/CRM_Consulting5.gif';
import CRM_Consulting6 from '../../Photos/CRM_Consulting6.png';
import GIS_Suvey from '../../Photos/GIS_Suvey.png';
import Styles from "./CRM_Consulting.module.css";
import T01 from '../../Photos/01.png';
import T02 from '../../Photos/02.png';
import T03 from '../../Photos/03.png';
import T04 from '../../Photos/04.png';
import { Helmet } from 'react-helmet';

const CRM_Consulting = () => {


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
            <Helmet>
        <title>{"Techmapperz"}</title>
        <meta name="description" content={"Techmapperz map your business"} />
        <meta property="og:title" content={"Techmapperz"} />
      </Helmet>
            <section className={Styles.first_part}>
                <h1>CRM Consulting</h1>
                <p><Link to={"/service"}>Services</Link> / <Link to={"/crm_page"}>CRM-ERP</Link> / CRM Consulting</p>
            </section>


            <section className={Styles.secand_part}>
                <div className={Styles.watermark}>?</div>

                <div className={Styles.contaner}>
                    <div className={Styles.product}>
                        <div className={Styles.product_info}>
                            <h1 className={Styles.heading}>CRM Consulting</h1>
                            <p>With the accumulated experience of more than 20 years, our team is well equipped to help you solve all possible challenges in customer management field. We have successully under taken and implemented numerous CRM solutions in the field of Healthcare, IT, Ecommerce to mention a few. </p>

                            <Link to={"/contact"}> <div className={Styles.btn}>
                                <div></div>
                                <h2>Know More</h2>
                            </div></Link>
                        </div>
                        <div>
                            <img src={CRM_Consulting5} className={Styles.Img_two} alt="" />
                        </div>
                    </div>
                </div>


                
                
                <div claassName={Styles.harbour}>
                    <h3 className={Styles.heading1}>What Do We Help You With?</h3>
                    <div className={Styles.design}>


                        <div className={Styles.card1}>
                        <div className={Styles.testimg1}>
                        <img src={CRM_Consulting2} alt='' />
                        <img src={T01} alt='' />
                        </div> 
                            
                            <h3>Selection</h3>
                            <p>We help you with the analysis of ypur requirenment and design the best CRM suited for your needs.</p>
                        </div>


                        <div className={Styles.card2}>
                        <div className={Styles.testimg1}>
                        <img src={CRM_Consulting6} alt='' />
                        <img src={T02} alt='' />
                        </div> 
                          
                            <h3>Implementation</h3>
                            <p>This is the most crucial step wherein we help you implement the CRM with custom support.</p>
                        </div>


                        <div className={Styles.card3}>
                        <div className={Styles.testimg1}>
                        <img src={CRM_Consulting3} alt='' />
                        <img src={T03} alt='' />
                        </div> 
                           
                            <h3>Migration</h3>
                            <p>We help you migrate to a better CRM, in case your CRM has become out dated of obsolate.</p>
                        </div>


                        <div className={Styles.card4}>
                        <div className={Styles.testimg1}>
                        <img src={CRM_Consulting4} alt='' />
                        <img src={T04} alt='' />
                        </div> 
                           
                            <h3>Improvement</h3>
                            <p>We deal with flaws of your CRM and help you maximise the utilities of your current CRM.</p>
                        </div>

                    </div>
                </div>


                
            </section>
        </div>
    )
}

export default CRM_Consulting
