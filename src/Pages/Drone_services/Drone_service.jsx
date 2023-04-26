import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Drone.module.css';
import Geospatial_Mapping from '../../Photos/Geospatial_Mapping.png';
import Geo_health from '../../Photos/Geo_health.png';
import Geogoverence from '../../Photos/Geogoverence.png';
import Drone_Service1 from '../../Photos/DroneService1.png';
import Drone_Service2 from '../../Photos/DroneService2.png';
import Drone_Service3 from '../../Photos/DroneService3.png';
import Drone_Service4 from '../../Photos/DroneService4.png';


const Drone_Service = () => {


    useEffect(() => {
        const options = {
            top: 0,
            left: 0,
            behavior: 'smooth'
        };
        window.scrollTo(options);
    }, []);


    return (
        <div className={styles.drone}>
            <section className={styles.part1}>
                <h1>Drone Services</h1>
                <p><Link to={"/"}>Home</Link> / <Link to={"/service"}>Services</Link> / Drone Services</p>
            </section>



            <section className={styles.secand_part}>
                <div className={styles.info}>
                    <p>Techmapperz has expertise in cutting-edge drone technology, and high-quality data processing techniques to provide spatial services for a range of requirements.
                    Since drones can provide current and high-quality data at low costs they becoming used more frequently for the collection of data. Our drone technology can capture high resolution orthoimagery, video and elevation data with the use of various cameras and sensors. Techmapperz can capture multispectral imagery (NDVI), thermal imagery and video and precision LiDAR imagery on a substantial high level with additional payloads.</p>
                </div>
                <h1 className={styles.water_mark}>Drone</h1>
                <div className={styles.contaner}>
                    <div className={styles.para1}>

                        <h1 className={styles.heading1}>Data Acquisition & Processing</h1>
                        <img src={Drone_Service4} alt="" />
                    </div>
                    <div className={styles.process}>
                        <div> <img src={Drone_Service1} alt="Geospatial_Mapping.png" /></div>
                        <div className={styles.process_info}>
                            <p>Our experienced and skilled pilots and high configured Drone allow us to acquire Drone data faster than any other traditional methods. We have a team of skilled GIS analysts for Drone data processing and analysis. We use high-power processing workstations and sophisticated post-processing tools and methods to process the high-resolution drone dataset. We can deliver Seamless orthophotos, Topographic survey, DTM, DSM, and contour maps as per your requirement within short time intervals.</p>

                            <p>Eventually, we do different types of analysis like volumetric analysis, haul road management, cut fill estimation, 3D feature extraction, and base map generation for the various sectors such as urban planning, land record digitization, mining, smart city etc. Our expertise in GIS and UAV data handling team can also help you to integrate drone data with cadastral maps, topographical maps, satellite imagery and report generation.</p>
                            <Link to={"/contact"}> <div className={styles.btn}>
                                <div></div>
                                <h2>Know More</h2>
                            </div></Link>
                        </div>
                    </div>
                </div>



                <div className={styles.lastPart}>
                    <div className={styles.product}>
                        <div className={styles.details1}>
                            <h1 className={styles.heading}>2D/3D Feature Extraction</h1>
                            <p>Techmapperz uses drone survey with 2D & 3D feature extraction to assist you in survey and planning. We provide you Site Monitoring with a comprehensive base map and topography data analysis to manage complex issues associated with large infrastructure projects and land record management. Our photogrammetry experts can even support you in any remote sensing projects or drone data processing.</p>

                            <p>2D/3D Feature Extraction can be used in:</p>
                            <div className={styles.project}>
                                <ul>
                                    <li><p>High-Resolution Base Map.</p></li>
                                    <li><p>Volumetric Calculation.</p></li>
                                    <li><p>Multiple GIS layers.</p></li>
                                    <li><p>KMZ,KML,SHP,DWG files</p></li>
                                    <li><p>Cadastral data integration.</p></li>
                                    <li><p>Spot Level</p></li>
                                    <li><p>3D Feature Extraction.</p></li>
                                    <li><p>Cross Sections</p></li>
                                </ul>
                            </div>
                            <Link to={"/contact"}> <div className={styles.btn}>
                                <div></div>
                                <h2>Know More</h2>
                            </div></Link>
                        </div>
                        <div>
                            <img src={Drone_Service2} className={styles.Img_two} alt="Geospatial_Mapping.png" />
                        </div>
                    </div>
                </div>










                <div className={`${styles.contaner} ${styles.contaner2}`}>
                    <div className={styles.product}>
                        <div>
                            <img src={Drone_Service3} className={styles.Img_three} alt="Geospatial_Mapping.png" />
                        </div>
                        <div className={styles.product_info}>

                            <div className={styles.para2}>
                                <h1 className={styles.heading}>3D Modelling</h1>
                                <img src={Drone_Service4} alt="" />
                            </div>
                            <p>3D Modelling uses aerial photogrammetry to generate a 3D model. It uses a series of photographs taken by a drone to measure everything in the 3D model such as volumetric calculation, distance measurement and etc. 3D modelling can visualize the building before they start the projects, helping us to capture details, intricacies, and beauty of a structure not easily seen from the ground level. We are a drone specialist with a team to provide solutions to our clients. We can also provide 2D and 3D mapping services to the clients.</p>

                            <Link to={"/contact"}> <div className={styles.btn}>
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

export default Drone_Service;



