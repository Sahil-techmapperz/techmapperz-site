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
import T05 from '../../Photos/05.png';
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
import Drone_race_gif from '../../Photos/Our Services/Drone_race.gif';
import Coworking_gif from '../../Photos/Our Services/Coworking.gif';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


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
            <Helmet>
        <title>{"Techmapperz"}</title>
        <meta name="description" content={"Techmapperz map your business"} />
        <meta property="og:title" content={"Techmapperz"} />
      </Helmet>
            <section className={Styles.first_part}>
                <h1>Our Services</h1>
                <p><Link to={"/"}>Home</Link> / Services</p>
            </section>



            <section className={Styles.secand_part}>

                <p className={Styles.title}>To assist companies in thriving in the digital age, we provide a variety of technological services. Drone, GIS, and remote sensing services, mobile app development, website design, CRM solutions, and IT consulting are just a few of the things we offer. We can assist businesses in managing their resources, connecting with their audiences online, and optimising their operations thanks to our knowledge and expertise.</p>

                <div className={Styles.newmain}>
                    <h1 className={Styles.heading}>Our GIS Services</h1>
                    <div className={Styles.design}>


                        <div className={Styles.card1}>
                            <div className={Styles.testimg1}>
                             <img  className={Styles.icon} src={Ourservice11} alt='' /> 
                             <img className={Styles.num} src={T01} alt='' /> 
                             </div>
                            <h3  > <Link to={"/GIS_Service"}> GIS Services </Link></h3>
                            <p className={Styles.service_mobile}>Techmapperz offers GIS services with a complete solution for spatial data storing, management and analysis to Government and Enterprise sectors through GIS services.</p>
                            <p className={Styles.service_web}>Techmapperz offers GIS services with an end-to-end solution for spatial data storing, management and analysis to Government and Enterprise sectors through GIS services.</p>
                        </div>


                        <div className={Styles.card2}>
                        <div className={Styles.testimg1}>
                        <img className={Styles.icon} src={Ourservice10} alt='' />
                        <img className={Styles.num} src={T02} alt='' />   
                        </div>
                            <h3 ><Link to={"/Remote_Sensing"}> Remote Sensing  Services</Link></h3>
                            <p>Techmapperz has extensive expertise in Satellite Image Processing & Interpretation. We use some of the best software and hardware available commercially to process high-quality images .</p>
                        </div>


                        <div className={Styles.card3}>
                        <div className={Styles.testimg1}>
                        <img className={Styles.icon} src={Ourservice9} alt='' />
                        <img className={Styles.num} src={T03} alt='' /> 
                        </div>
                            <h3 > <Link to={"/Photogrammetry"}> Photogammetry Services </Link></h3>
                            <p className={Styles.service_web}>Photogrammetry is the process to obtain  information and measurements of physical objects from photographs and use them for the development of maps, drawings, or 3D models.</p>
                            <p className={Styles.service_mobile}>Photogrammetry is the process to obtain information from photographs and use them for the development of maps, drawings, or 3D models.</p>   
                      </div>

                        <div className={Styles.card4}>
                        <div className={Styles.testimg1}>
                            <img className={Styles.icon} src={Ourservice8} alt='' />
                            <img className={Styles.num} src={T04} alt='' />
                            </div>
                            <h3 > <Link to={"/Web_GIS"}> Web GIS Services </Link></h3>
                            <p>WebGIS is an advanced form of Geospatial Information System this is available on the web platform. WebGIS offers a diverse set of analytical functions.</p>
                      
                        </div>

                        <div className={Styles.card5}>
                        <div className={Styles.testimg1}>
                            <img className={Styles.icon} src={Ourservice7} alt='' />
                            <img className={Styles.num} src={T05} alt='' />
                            </div>
                            <h3 > <Link to={"/Drone_Service"}> Drone Services</Link></h3>
                            <p>Techmapperz has expertise in cutting-edge drone technology, and high-quality data processing techniques to provide spatial services for a range of requirements.</p>
                      
                           </div>

                        <div className={Styles.card6}>
                        <img src={Drone_race_gif} alt='' />
                     </div>


                       

                    </div>
                </div>



                <div className={Styles.harbour}>
                        <h1 className={Styles.heading}>Our IT Services</h1>
                    <div className={Styles.main}>

                        <div className={Styles.card7}>
                        <div className={Styles.testimg1}>
                        <img src={Ourservice11} alt='' /> 
                        <img className={Styles.num} src={T01} alt='' />
                        </div>
                            <h3><Link to={"/web_development"}>Web Development Services</Link> </h3>
                            <p>Website development is an umbrella term for two major parts-Design & Development, Design represents the look and feel wherwas Development determines how it functions.</p>
                        </div>

                        <div className={Styles.card8}>
                        <div className={Styles.testimg1}>
                        <img src={Ourservice4} alt='' />
                        <img className={Styles.num} src={T02} alt='' />
                        </div> 
                        <h3 > <Link to={"/mobile_app_development"}> Mobile Application Development </Link></h3>
                        <p className={Styles.service_mobile}>The mobile app software intelligently combines the latest technology,and design solutions which constantly get updated.It incorporates API, GPS, Camera, Microphone, AI and other latest technologies and becomes a Launchpad hurling your business to then ext level.</p>
                            <p className={Styles.service_web}>With global competition and greater customer expectations companies look forward to enhance customer relationship and experience, many business entities.</p>
                        </div>


                        <div className={Styles.card9}>
                        <div className={Styles.testimg1}>
                        <img src={Ourservice3} alt='' />
                        <img className={Styles.num} src={T03} alt='' />
                        </div> 
                        <h3 > <Link to={"/crm_page"}> CRM/ERP </Link></h3>
                            <p>At custom CRM consulting we understand your current capabilities, map your organisation's desired future state, and then recommend CRM implentation.</p>
                        </div>

                        
                         <div className={Styles.card10}>
                         <div className={Styles.testimg1}>
                         <img src={Ourservice2} alt='' />
                         <img className={Styles.num} src={T04} alt='' />
                        </div> 
                        <h3 > <Link to={"/It_consulting"}> IT Consulting Services </Link></h3>
                           <p className={Styles.service_mobile}>We provide IT consulting services to business in a wide range of industries. We use our expertise to identify your opportunities and deliver solutions that will help you outperform your competitors.</p>
                            <p className={Styles.service_web}>At custom CRM consulting we understand your current capabilities, map your organisation's desired future state, and then recommend CRM implementation.</p>
                        </div>

                        

                    <div className={Styles.Squared_img}>
                        <img src={Coworking_gif} alt='' />
                        </div>
                    
                </div>
                    </div>


            </section>
        </div>
    )
}

export default Service_main