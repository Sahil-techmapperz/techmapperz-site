import React, {useEffect} from 'react';
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
                <p>Home / Services /GIS Services / Drone Services</p>
            </section>



            <section className={styles.secand_part}>
                <div className={styles.info}>
                <p>Techmapperz has expertise in cutting-edge drone technology, and high-quqlity data processing techniques to provide spetial
                        services for a range of requirenments.</p>
                        <p>Since drones can provide current and high-quality data at low costs they becoming used more frequently for the collection
                            of data.Our drone technology can capture high resolution orthoimagery,vedio and evevation data with the use of various
                            cameras and sensors. Techmapperz can capture multispectral imagery(NDVI),thermal imagery and vedio vedio recision LiDAR
                            imagery on a substantial high level with additional payloads.</p>
                  </div>
                <div className={styles.contaner}>
                <div  className={styles.para1}>
                    <h1 className={styles.heading}>Data Acquisition & Processing</h1>
                    <img src={Drone_Service4} alt="" /></div>
                    <div className={styles.product}>
                       <div> <img src={Drone_Service1} alt="Geospatial_Mapping.png" /></div>
                        <div className={styles.product_info}>
                        <p>Our experienced and skilled pilots and high configered Drone allow us to acquire Drone data faster than any other
                            traditional methods. We have a team of skiled GIS analysts for Drone data processing and analysis.We use high-power
                            processing workstations drone dataset.We can deliver seamless orthophotos, Topogrraphic survey, DTM,DSM,  and contour
                            maps as per your requirenment within short time intervals</p>

                            <p>Eventually,we do different types of analysis like volumetric analysis,haul road management, cut fill estimation, 3D
                            feature extraction,and base mapgeneration for thevarious sectors such as urban planing,land record digition,mining,smart
                            city etc.Our expertise in GIS and UAV data handling team can also help you to integrate dronedata with cadastral maps,
                            satellite imagery and report generation.</p>
                            <Link to={"/contact"}> <div className={styles.btn}>
                                <div></div>
                                <h2>Know More</h2>
                            </div></Link>
                        </div>
                    </div>
                </div>
                
                        

                   <div className={styles.contaner}>
                    <div className={styles.product}>
                        <div className={styles.product_info}>
                            <h1 className={styles.heading}>2D/3D Feature Extraction</h1>
                           <p>Techmapperz uses drone survey with 2d & 3d feature extraction to assist you in survey and planning.We provide you Site
                    Monitoring with a comprehensive base map and topography data analysis to manage complex issues associated with large infrasture
                    exports can even support you in any remote sensing projects or drone data processing.</p>

                    <p>2D/3D Feature Extraction can be used in:</p>

                    <ul>
                        <li>High-Resolution Base Map.</li>
                        <li>Volumetric Calculation.</li>
                        <li>Multiple GIS layers.</li>
                        <li>KMZ,KML,SHP,DWG files</li>
                        <li>Cadastral data integration.</li>
                        <li>Spot Level</li>
                        <li>3D Feature Extraction.</li>
                        <li>Cross Sections</li>
                    </ul>
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








            

<div className={styles.contaner}>
                    <div className={styles.product}>
                        <div>
                            <img src={Drone_Service3} className={styles.Img_three} alt="Geospatial_Mapping.png" />
                        </div>
                        <div className={styles.product_info}>
                        {/* <div  className={styles.para1}> */}
                            <h1 className={styles.heading}>3D Modelling</h1>
                            {/* <img src={Drone_Service4} alt="" />
                            </div> */}
                            <p>uses aerial photogrammetry to generate a 3D model. It uses a series ofphotographs taken by a drone to
                    measure everything in the 3D model such asvolumetric calculation,distance measurenment and etc.3D modelling can visualize
                    building before they start thr projects,helping us to capture details,intricies,and beauty of a structure not easily seen from the
                    ground level.We are a drone specialist with a team to provide solutions to our clients.We can also provide 2D and 3D mapping
                    services to the clients.</p>
                          
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



