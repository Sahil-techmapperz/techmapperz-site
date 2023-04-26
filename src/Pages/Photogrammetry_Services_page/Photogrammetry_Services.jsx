import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Photogrammetry_Services.module.css'
import Geospatial_Mapping from '../../Photos/Geospatial_Mapping.png'
import Geo_health from '../../Photos/Geo_health.png'
// import Geogoverence from '../../Photos/Geogoverence.png'
import GIS_Suvey from '../../Photos/GIS_Suvey.png'
import Photogametry1 from '../../Photos/Photogametry1.png';
import Photogametry2 from '../../Photos/Photogametry2.png';


const Photogrammetry_Services = () => {


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
                <h1>Photogrammetry Services</h1>
                <p><Link to={"/"}>Home</Link> / <Link to={"/service"}>Services</Link> / Photogrammetry Services</p>
            </section>

            <section className={styles.secand_part}>
                <div className={styles.info}>
                    <p>Photogrammetry is the process to obtain dependable information and measurements of physical objects from photographs and use them for the development of maps, drawings, or 3D models of terrains.
                    Aerial images require pre- and post-processing using Photogrammetry before they can be used to extract valuable geo-data. Techmapperz offers the following Photogrammetry services:</p>

                </div>
                <div className={styles.contaner}>
                    <h1 className={styles.heading}>Aerial Triangulation &<br /> Ortho Photo generation</h1>
                    <div className={styles.product}>
                        <img src={Photogametry1} alt="Photogametry1.png" />
                        <div className={styles.product_info}>
                            <p>Aerial Triangulation in Photogrammetry is a method of determining and calculating 3-dimensional object coordinates by photogrammetric means, by using photographs exposed from different positions, covering the same object. We follow a highly automated aerial triangulation method that minimizes the manual intervention and increases accuracy towards a combination of point selection, point measurement, point transfer and block adjustment in a single process.</p>

                            <Link> <div className={styles.btn}>
                                <div></div>
                                <h2>Know More</h2>
                            </div></Link>
                        </div>
                    </div>
                </div>


                <div className={styles.service}>
                    <div className={styles.product}>
                        <div className={styles.product_info}>
                            <h1 className={styles.heading2}>Digital Terrain model &<br />3D Visualition</h1>
                            <p>A DTM (Digital Terrain Models) is a highly enhanced and filtered topographic model of the bare earth where vegetation, buildings and other man-made components are removed digitally – leaving just the underlying terrain for specialized applications such as 3D modelling, volumetric calculations, and power line surveys. DTMs are typically created through photogrammetry it also uses LiDAR, LiDAR measures reflected light that bounces off the ground and back to the sensor to obtain the elevation of the Earth’s surface.
                                We use sophisticated post-processing tools and methods to detect errors and anomalies in DTM. The final delivery is in a client-specific format.
                                Common uses of models include:</p>
                            <div className={styles.project}>
                                <ul>
                                    <li><p>Extracting terrain counter</p></li>
                                    <li><p>Creation of relief maps</p></li>
                                    <li><p>3D visualitions of the terrain</p></li>
                                    <li><p>Terrain analysis</p></li>
                                    <li><p>Geomarphology and physical geography of the terrain</p></li>
                                </ul>
                            </div>
                            <Link> <div className={styles.btn}>
                                <div></div>
                                <h2>Know More</h2>
                            </div></Link>
                        </div>
                        <div>
                            <img src={Photogametry2} className={styles.Img_two} alt="Photogametry2.png" />
                        </div>
                    </div>
                </div>


                <div className={styles.contaner}>
                    <div className={styles.card}>
                        <div className={styles.card_info}>
                            <h1 className={styles.heading3}>Contour Maps</h1>
                            <div className={styles.card1}><p>Based on the project requirenments, either the DMT or DSM model,with custom cantour lines map,giving you on
                                improved understanding of the surface of
                                the image taken by the drone</p>
                            </div>
                        </div>
                        <div>
                            <img src={GIS_Suvey} className={styles.Img_four} alt="Geospatial_Mapping.png" />
                        </div>
                    </div>
                </div>


            </section>
        </div>

    )
}

export default Photogrammetry_Services;
