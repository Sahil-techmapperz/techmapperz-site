import React from 'react'
import { Link } from 'react-router-dom'
import Styles from "./Photogrammetry_Services.module.css";
import Geospatial_Mapping from '../../Photos/Geospatial_Mapping.png';
import Geo_health from '../../Photos/Geo_health.png';
const Photogrammetry_Services = () => {
  return (
    <div className={Styles.Remote_Sensing}>
    <div className={Styles.top}>
        <h1>Photogrammetry Services</h1>
        <p>Services / GIS Service / Photogrammetry Services</p>
    </div>
    <div className={Styles.contaner}>
        <div className={Styles.contaner_first}>
            <p className={Styles.into}>Photogrammetry is the process to obtain dependable information and measurements of physical objects from photographs and use them for the development of maps, drawings, or 3D models of terrains.</p>
            <p className={Styles.into}>Aerial images require pre- and post-processing using Photogrammetry before they can be used to extract valuable geo-data. Techmapperz offers the following Photogrammetry services</p>

            <div className={Styles.card_contaner}>
            <div className={`${Styles.card} ${Styles.card_one}`}>
                <div className={`${Styles.Image} ${Styles.Image_1}`}>
                    <h1>Aerial Triangulation & Ortho Photo generation</h1>
                    <img src={Geospatial_Mapping} alt='' />
                </div>

                <div className={Styles.details}>
                <p>Aerial Triangulation in Photogrammetry is a method of determining and calculating 3-dimensional object coordinates by photogrammetric means, by using photographs exposed from different positions, covering the same object. We follow a highly automated aerial triangulation method that minimizes the manual intervention and increases accuracy towards a combination of point selection, point measurement, point transfer and block adjustment in a single process.</p>
                <Link> 
                <div className={Styles.btn}><div></div><h2>Know More</h2></div>
                </Link>
                </div>

                
            </div>
            <div className={`${Styles.card} ${Styles.card_tow}`}>
                <div className={Styles.details}>
                    <h1>Land Use / Land Cover Mapping</h1>
                <p>Land use and land cover may sound the same but there is a slight difference between them, Land cover refers to the surface cover on the ground like vegetation, urban infrastructure, water, bare soil etc. wherein Land use refers to the purpose the land serves, for example, recreation, wildlife habitat, or agriculture. Land use and Land cover, mapping plays a significant role in economic development. It is required for a better understanding and use of land in urban and rural areas.</p>
                <Link> 
                <div className={Styles.btn}><div></div><h2>Know More</h2></div>
                </Link>
                </div>

                <div className={`${Styles.Image} ${Styles.Image_2}`}>
                    <img src={Geo_health} alt='' />
                </div>

                <div>

                </div>
            </div>
            </div>
        </div>
        <div className={Styles.contaner_secend}>
        <h1>Techmapperz's Remote sensing services include</h1>
        <div className={Styles.list_div}>
            <div className={Styles.list_div_one}>
                <ul>
                <li>Change Detection Mapping & Analysis</li>
                <li>Slope aspect analysis</li>
                <li>Coastal ecosystem management</li>
                <li>Feature extraction and Digital terrain and surface modelling etc.</li>
                </ul>
            </div>
            <div className={Styles.list_div_tow}>
                <ul>
                <li style={{paddingBottom:"0"}}>Agriculture Crop acreage estimation and Crop yield estimation</li>
                <li>Forest Mapping</li>
                <li>Forest Fire Mapping</li>
                </ul>
            </div>
        </div>
        </div>
    </div>
</div>
  )
}

export default Photogrammetry_Services
