import React, { useEffect, useState } from "react";
import client from "../../../Photos/client.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from "./testimonial.module.css";

const Testimonial = () => {
  const[Testimonial,setTestimonial]=useState([]);




useEffect(()=>{
  fetch('http://localhost:8080/Testimonial')
            .then(res => res.json())
            .then(data => {
                setTestimonial(data);
            });
},[])


  return (
    <div className={styles.Testimonial}>
      <div className={styles.main}>
        <div className={styles.titel_contaner}>
          <p className={styles.title}>Testimonial</p>
          <h1 className={styles.heading}>What our Clients Say</h1>
        </div>
        <div className={styles.cardcontener}>
          <Carousel
             className={styles.carousel}
             showStatus={false}
             infiniteLoop={true}
             autoPlay={true}
             showArrows={false}
             showThumbs={false}
             stopOnHover={true}
             showIndicators={false}
             useKeyboardArrows={true}
            
          >
          {Testimonial.map(data=>{
            return(
              <div className={styles.card}>
              <h2>{data.message}</h2>
  
              <div className={styles.client}>
                <img src={data.avater} />
                <div>
                <p>{data.name}</p>
                <p>{data.Companyname}</p>
                </div>
              </div>
  
            </div>
            )
          })}
          
        
          </Carousel>
        </div>

      </div>
    </div>

  )
}

export default Testimonial