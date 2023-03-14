import React from 'react'
import { Link } from 'react-router-dom'
import GIS_Services from '../../../Photos/GIS_Services.png';
import IT_Services from '../../../Photos/IT_Services.png';
import Drone_Services from '../../../Photos/Drone_Services.png';
import Vector from '../../../Photos/Vector.png';
import Styles from "./Home_Features.module.css";

const Home_Features = () => {
  return (
    <div className={Styles.feature}>
      <div className={Styles.main}>
      <p className={Styles.heading}>Features</p>
      <div className={Styles.first_part}>
        <h3>These Services to Expand your Business</h3>
        <div className={Styles.info}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
            <Link to={"/service"}> <div className={Styles.Submit_btn}>
            <div></div>
            <h2>Know More</h2>
        </div></Link>
        </div>
      </div>


        <div className={Styles.products}>
            <div className={Styles.card_1}>
                <img src={IT_Services}/>
                <p>IT Services</p>
            </div>
            <div className={Styles.card_2}>
                <img src={GIS_Services}/>
                <p>GIS Services</p>
            </div>
            <div className={Styles.card_3}>
                <img src={Drone_Services}/>
                <p>Drone Services</p>
            </div>
        </div>
        <div className={Styles.all_service_btn}>
        <Link to={"/service"}> <div className={Styles.Submit_btn}>
            <div></div>
            <h2>View All Services</h2>
        </div></Link></div>
        <div className={Styles.Vector}>
        <img src={Vector}/>
        </div>
        </div>
    </div>
  )
}

export default Home_Features
