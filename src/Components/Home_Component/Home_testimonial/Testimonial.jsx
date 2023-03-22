import React from "react";
import client from "../../../Photos/client.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from "./testimonial.module.css";

const Testimonial = () => {
  return (
    <div className={styles.Testimonial}>
      <div className={styles.main}>
        <div>
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
            
          >
          <div className={styles.card}>
            <h2>They are the best of the best, and expertly trained team members who take the extra step and go the extra mile, all to fulfill
              our dedicated promise to deliver innovative and dynamic solutions to our customers to fit the needs of a rapidly changing global
              environment which was perfect for our needs!!.</h2>

            <div className={styles.client}>
              <img src={client} />
              <div>
              <p>John Peter</p>
              <p>7aroof Inc</p>
              </div>
            </div>

          </div>
          <div className={styles.card}>
            <h2>They are the best of the best, and expertly trained team members who take the extra step and go the extra mile, all to fulfill
              our dedicated promise to deliver innovative and dynamic solutions to our customers to fit the needs of a rapidly changing global
              environment which was perfect for our needs!!.</h2>

            <div className={styles.client}>
              <img src={client} />
              <div>
              <p>John Peter</p>
              <p>7aroof Inc</p>
              </div>
            </div>

          </div>
          <div className={styles.card}>
            <h2>They are the best of the best, and expertly trained team members who take the extra step and go the extra mile, all to fulfill
              our dedicated promise to deliver innovative and dynamic solutions to our customers to fit the needs of a rapidly changing global
              environment which was perfect for our needs!!.</h2>

            <div className={styles.client}>
              <img src={client} />
              <div>
              <p>John Peter</p>
              <p>7aroof Inc</p>
              </div>
            </div>

          </div>

          </Carousel>
        </div>

      </div>
    </div>

  )
}

export default Testimonial