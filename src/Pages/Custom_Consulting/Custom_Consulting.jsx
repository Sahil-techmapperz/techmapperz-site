import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

import Custom_Consulting5 from '../../Photos/Custom_Consulting5.gif'
import Custom_Consulting6 from '../../Photos/Custom_Consulting6.gif';





import Styles from "./Custom_Consulting.module.css";


const Custom_Consulting = () => {


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

                <div className={Styles.newadd}>
                

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
                            <img src={ Custom_Consulting5} className={Styles.Img_two} alt="" />
                        </div>
                    </div>
                </div>



                <div className={Styles.contaner}>
                <h1 className={Styles.heading1}>Custom Control Included</h1>
                    <div className={Styles.product}>
                        
                    <div>
                            <img src={ Custom_Consulting6} className={Styles.Img_two} alt="" />
                        </div>
                        <div className={Styles.product_info}>
                           
                            <ul>
                                <li>We analyse your business goals, identity opportunities and possibilities for improvement, to develop solutions on your needs.</li>
                                <li>We can channel synchronizing with other departments within organizations such as human resources, accounting, and IT to ensure that the client gets high-quality service. </li>
                                <li>We can channel synchronizing with other departments within organizations such as human resources, accounting, and IT to ensure that the client gets high-quality service. </li>
                                <li>We can create detailed reports on clients activities and progress toward goals, including references for development.</li>
                                <li>Communicating with clients to determine their needs and discuss the results of their work with them.</li>
                                <li>We can conduct studies on potential clients,identity their needs, and present solutions to help meet those needs.</li>
                                <li>We can help you scheme and implement plans to increase customer satisfaction and loyalty through improved service offering, products, pricing, etc</li>
                                <li>We help in designing database, configuring software programs, and training staff members on new systems.</li>
                                <li>We can create effective marketing campaigns by developing targetd massages and identifying effective channels for delivery.</li>
                                <li>We do market research on industry and market btrends that could affect your company's business model, including changes in technology or competition from other companies.</li>
                                
                            </ul>
                            
                        </div>
                       
                    </div>
                </div>


                
                

                </div>
                
            </section>
        </div>
    )
}

export default Custom_Consulting
