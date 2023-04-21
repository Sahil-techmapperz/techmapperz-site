import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Styles from "./Web_GIS.module.css";
import Geospatial_Mapping from '../../Photos/Geospatial_Mapping.png';
import Geo_health from '../../Photos/Geo_health.png';
import WebGis1 from '../../Photos/WebGis1.png';
import WebGis2 from '../../Photos/WebGis2.png';



const Web_GIS = () => {
    useEffect(() => {
        const options = {
            top: 0,
            left: 0,
            behavior: 'smooth'
        };
        window.scrollTo(options);
    }, []);
    return (
        <div className={Styles.Web_GIS}>
            <div className={Styles.top}>
                <h1>Web GIS Services</h1>
                <p><Link to={"/"}>Home</Link> / <Link to={"service"}>Services</Link>  / Geospatial programming & Web Map Development</p>
            </div>
            <div className={Styles.contaner}>
                <div className={Styles.contaner_first}>
                    <p className={Styles.into}>WebGIS is an advanced form of Geospatial Information System (most commonly known as Geographic Information System) this is available on the web platform. This system comprises of computer hardware, software and applications that capture, edit, analyse, manipulate and visualize geo-referenced data. Geospatial Intelligence maps provide a new prototype for how people everywhere access and use geographic information to take significant decisions, plan and execute operations. People use GIS maps on their desktops, tablets, and smartphones to perform a sophisticated range of activities.</p>

                    <div className={Styles.card_contaner}>
                        <div className={`${Styles.card} ${Styles.card_one}`}>
                            <div className={`${Styles.Image} ${Styles.Image_1}`}>
                                <h1>Geospatial programming & Web Map Development</h1>
                                <img src={WebGis1} alt='' />
                            </div>

                            <div className={Styles.details}>
                                <p>Geographic Information System (GIS) has the potential to go beyond mapping. GIS offers a diverse set of analytical functions.</p>
                                <div className={Styles.list_div_two}>
                                    <ul>
                                        <li><p>Assessing optimal driving path</p></li>
                                        <li style={{ paddingBottom: "30px" }}><p>Discovering the nearest ATM,<br/> restaurant, shops and hotels etc.</p></li>
                                        <li><p>Planning projects</p></li>
                                   
                                        <li><p>Forest mapping</p></li>
                                        <li><p>Flood management</p></li>
                                        <li><p>Location: specific advertising</p></li>
                                    </ul>


                                </div>
                                <div className={Styles.knowmore_btn}>
                                <Link to={"/contact"}>
                                    <div className={Styles.btn}><div></div><h2>Know More</h2></div>
                                </Link>
                                </div>
                            </div>
                        </div>


                        <div  className={Styles.lastPart}>

                        <div className={`${Styles.card} ${Styles.card_two}`}>


                            <div className={Styles.details}>
                                <p>Geographic Information System (GIS) has the potential to go beyond mapping. GIS offers a diverse set of analytical functions.</p>
                                <div className={Styles.list_div}>

                                    <div className={Styles.list_div_one}>
                                        <ul>
                                            <li><p>Web GIS</p></li>
                                            <li><p>Mobile GIS</p></li>
                                            <li><p>GIS Enable Dashboard development</p></li>
                                            <li><p>Geo-Server</p></li>

                                        </ul>
                                    </div>


                                </div>
                                <Link to={"/contact"}>
                                    <div className={Styles.btn}><div></div><h2>Know More</h2></div>
                                </Link>
                            </div>

                            <div className={`${Styles.Image} ${Styles.Image_1}`}>
                                <img src={WebGis2} alt='' />
                            </div>

                            <div>

                            </div>
                        </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Web_GIS