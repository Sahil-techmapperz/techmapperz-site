import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Geospatial_Mapping from '../../Photos/Geospatial_Mapping.png';
import Geo_health from '../../Photos/Geo_health.png';
import Geogoverence from '../../Photos/Geogoverence.png';
import GIS_Suvey from '../../Photos/GIS_Suvey.png';
import Styles from "./GIS_Services.module.css";

const GIS_Services = () => {


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
                <h1>GIS Services</h1>
                <p><Link to={"/"}>Home</Link> / <Link to={"/service"}>Services</Link> / GIS Services</p>
            </section>


            <section className={Styles.secand_part}>
                <div className={Styles.info}>
                    <p>GIS (Geographical Information System) is a process that stores, creates, manages, analyses, and displays different types of spatial data. Geospatial services describe objects, events or other features with a location on or near the surface of the earth typically combining coordinates on the earth and the characteristics of the object, event or The location information provided may be static in the short or dynamic (for example, a moving vehicle or pedestrian, the spread of an infectious disease).</p>
                    <p>Techmapperz offers GIS services with an end-to-end solution for spatial data storing, management and analysis to Government and Enterprise sectors through GIS services. Techmapperz uses new-edge technology, deep research and innovation that are implemented by high skilled and experienced GIS analysts to create a simple solutions for a complex problems. The various GIS Data services offered by Techmapperz are:</p>
                </div>
                <div className={Styles.contaner}>
                    <h1 className={Styles.heading}>Geospatial Mapping</h1>
                    <div className={Styles.product}>
                        <img src={Geospatial_Mapping} alt="Geospatial_Mapping.png" />
                        <div className={Styles.product_info}>
                            <p>Geospatial mapping is a type of spatial analysis technique that typically employs software capable of rendering maps processing spatial data, and applying analytical methods to terrestrial or geographic datasets, including the use of geographic information systems. Techmapperz offers different kinds of GIS mapping Services:</p>
                            <ul>
                                <li>Topographical Mapping</li>
                                <li>Utility Mapping</li>
                                <li>Cadastral Mapping</li>
                                <li>Navigation Mapping</li>
                                <li>Parcel Mapping</li>
                            </ul>
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
                            <h1 className={Styles.heading}>Geo-health</h1>
                            <p>GIS plays a very vital role in the modern health sector. A GIS can play an important role in the surveillance, management and analysis of diseases. Techmapperz's GIS-based Health solution will help you to monitor and management of both diseases and health programs. We use the latest software and accurate GIS data to improve your strategic planning, research and evaluation, emergency preparedness and both response and location of health care service too.</p>

                            <Link to={"/contact"}> <div className={Styles.btn}>
                                <div></div>
                                <h2>Know More</h2>
                            </div></Link>
                        </div>
                        <div>
                            <img src={Geo_health} className={Styles.Img_two} alt="Geospatial_Mapping.png" />
                        </div>
                    </div>
                </div>
                <div className={Styles.contaner}>
                    <div className={Styles.product}>
                        <div>
                            <img src={Geogoverence} className={Styles.Img_three} alt="Geospatial_Mapping.png" />
                        </div>
                        <div className={Styles.product_info}>
                            <h1 className={Styles.heading}>Geogoverence</h1>
                            <p>GIS, a new edge technology, has opened several new prospects for the day-to-day life of civil society. GIS is rapidly becoming a digital revolution for different transformational changes in the world. It improves the Decesion making system of the government body. Governments body are using GIS technology to manage different govermnet programe and policy. With the help of deep GIS knowladge, Techmapperz integrates different types of data in GIS systems to derive understanding, operationalize solutions and engage the Government and public.</p>

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
                            <h1 className={Styles.heading}>GIS Field Survey</h1>
                            <p>Techmapperz offers a wide range of GIS surveying services using both Traditional and modern survey techniques. We have a very highly experienced and skilled team for the survey. We help clients across the different sectors by providing accurate, precise and up-to-date GIS survey data. Our range of GIS field survey services includes all types of Land surveys, Total Station Survey, DGPS surveys, Drone Survey, Household surveys, Road surveys & Networking Survey, Utility Survey, Hydrological surveys etc.</p>

                            <Link to={"/contact"}> <div className={Styles.btn}>
                                <div></div>
                                <h2>Know More</h2>
                            </div></Link>
                        </div>
                        <div>
                            <img src={GIS_Suvey} className={Styles.Img_two} alt="Geospatial_Mapping.png" />
                        </div>
                    </div>
                </div>


                
            </section>
        </div>
    )
}

export default GIS_Services
