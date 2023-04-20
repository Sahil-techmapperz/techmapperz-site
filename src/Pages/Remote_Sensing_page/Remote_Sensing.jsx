import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import Styles from "./Remote_Sensing.module.css";
import Geospatial_Mapping from '../../Photos/Geospatial_Mapping.png';
import Geo_health from '../../Photos/Geo_health.png';
import RemoteSence1 from '../../Photos/RemoteSence1.png';
import RemoteSence2 from '../../Photos/RemoteSence2.png';

const Remote_Sensing = () => {
    
    useEffect(() => {
        const options = {
            top: 0,
            left: 0,
            behavior: 'smooth'
        };
        window.scrollTo(options);
    }, []);


    return (
        <div className={Styles.Remote_Sensing}>
            <div className={Styles.top}>
                <h1>Remote Sensing Services</h1>
                <p><Link to={"/"}>Home </Link>/ <Link to={"/service"}>Services</Link> / Remote Sensing Services</p>
            </div>
            <div className={Styles.contaner}>
                <div className={Styles.contaner_first}>
                    <p className={Styles.into}>Measuring the physical characteristics of an area by measuring it's reflected and emitted radiation from satellite or aircraft is Remote sensing, this help researchers "sense" things about the Earth. Techmapperz has extensive expertise in Satellite Image Processing & Interpretation. Various Remote Sensing services offered by Techmapperz are:</p>

                    <div className={Styles.card_contaner}>
                    <div className={`${Styles.card} ${Styles.card_one}`}>
                        <div className={`${Styles.Image} ${Styles.Image_1}`}>
                            <h1>Image Processing</h1>
                           
                            <img src={RemoteSence1} alt='' />
                        </div>

                        <div className={`${Styles.details} ${Styles.details1}`}>
                        <p>Most remote sensing data are recorded in the digital format in today's world of advanced technology, almost all image interpretation and analysis involves some element of digital processing it involves various processes to enhance the image, we at Techmapperz use some of the best software and hardware available commercially to process high-quality images for commercial use.</p>
                        <Link to={"/contact"}> 
                        <div className={Styles.btn}><div></div><h2>Know More</h2></div>
                        </Link>
                        </div>

                        <div>

                        </div>
                    </div>
                    <div className={`${Styles.card} ${Styles.card_tow}`}>
                        <div className={Styles.details}>
                         <h1>Land Use / Land Cover Mapping</h1>
                        <p>Land use and land cover may sound the same but there is a slight difference between them, Land cover refers to the surface cover on the ground like vegetation, urban infrastructure, water, bare soil etc. wherein Land use refers to the purpose the land serves, for example, recreation, wildlife habitat, or agriculture. Land use and Land cover, mapping plays a significant role in economic development. It is required for a better understanding and use of land in urban and rural areas.</p>
                        <Link to={"/contact"}> 
                        <div className={Styles.btn}><div></div><h2>Know More</h2></div>
                        </Link>
                        </div>

                        <div className={`${Styles.Image} ${Styles.Image_2}`}>
                            <img src={RemoteSence2} alt='' />
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
                        <li><p>Change Detection Mapping & Analysis</p></li>
                        <li><p>Slope aspect analysis</p></li>
                        <li><p>Coastal ecosystem management</p></li>
                        <li><p>Feature extraction and Digital terrain and surface modelling etc.</p></li>
                        </ul>
                    </div>
                    <div className={Styles.list_div_tow}>
                        <ul>
                        <li style={{paddingBottom:"0"}}><p>Agriculture Crop acreage estimation and Crop yield estimation</p></li>
                        <li><p>Forest Mapping</p></li>
                        <li><p>Forest Fire Mapping</p></li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Remote_Sensing