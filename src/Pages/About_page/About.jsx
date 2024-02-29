import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import styles from "./About.module.css"
import Rectangle_6 from "../../Photos/Rectangle_6.png";
import Choose from './choose';
import Group1 from '../../Photos/Group1.png'
import Career4 from '../../Photos/career_idea-4.png'
import Career5 from '../../Photos/career_idea-5.png'
import video from '../../media/Introducation_video.mp4'
import { Helmet } from 'react-helmet';





const About = () => {

  useEffect(() => {
    const options = {
      top: 0,
      left: 0,
      behavior: 'smooth'
    };
    window.scrollTo(options);
  }, []);
  return (

    <div className={styles.container}>
      <Helmet>
        <title>{"Techmapperz"}</title>
        <meta name="description" content={"Techmapperz map your business"} />
        <meta property="og:title" content={"Techmapperz"} />
      </Helmet>
      <div className={styles.about}>
        
        <div className={styles.main}>
          <header>
            <h1>About US</h1>
            <p><Link to={"/"}> Home </Link>/ About us</p>
          </header>

          <div className={styles.top_part}>
            <h1>Chasing the Vision for a better tomorrow where technology simplifies complex functions</h1>
          </div>
          <div className={styles.watermark}>About Company</div>

          <section className={styles.first_part}>
            <div className={styles.first_part_main}>

              <div className={styles.video_contaner}>
                <video autoplay controls loop muted>
                  <source src={video} type="video/mp4"></source>
                </video>
              </div>

              <div className={styles.company_info}>
                <h1 className={styles.title}>Get known us</h1>
                <h2 className={styles.heading}>About Company</h2>
                <p>Let your imagination fly, this has always been the spirit that made Techmapperz possible, we were always free-thinkers, a team that believed that the solution to a complex problem need not be complex, that complex issues should have very simple solutions, and this is the change that we all believe in.</p>
                
                <Link> <div className={styles.Submit_btn}>
                  <div></div>
                  <h2>Know More</h2>
                </div></Link>
              </div>


            </div>
          </section>

          <section className={styles.secend_part}>
            <div className={styles.secend_part_main}>

              <div className={styles.Mission}>
                <img className={styles.Mission_part_one} src={Career4} />
                <h2 className={styles.heading}> Our Mission</h2>
                <p>We at Techmapperz, understand that each organisation is different, and so are their challenges, so when we tailor
                  solutions, we ensure that it is as simplified as it can be. Our mission is  simplified solutions for complex problems.</p>
                <Link to={"/contact"}> <div className={styles.Submit_btn}>
                  <div></div>
                  <h2>Know More</h2>
                </div></Link>
              </div>

              <div className={styles.Vision}>
                <div className={styles.subVission}>
                  <img className={styles.vission_one} src={Career5} />
                  <h2 className={styles.heading}> Our Vision</h2>
                  <p>With technology becoming the most important part of our day to day life, we are driven by the commitment to deliver
                    the best of IT solutions, to be a trusted provider of end-to-end IT services and solutions to businesses globally.</p>
                  <Link to={"/contact"}> <div className={styles.Submit_btn}>
                    <div></div>
                    <h2>Know More</h2>
                  </div></Link>

                </div>
              </div>



            </div>
          </section>

          <section>
            <Choose />
          </section>


          <div className={styles.totalVector}>
            <div className={styles.finalvector}>

              <div className={styles.firstVector}>
                <div className={styles.navbar1}></div>
                <div className={styles.navbar2}></div>
                <img className={styles.navbar3} src={Rectangle_6} />
              </div>

              <div className={styles.lastVector}>
                <div className={styles.headtag10}><h1>How Do We Work</h1></div>

                <div className={styles.headtag11}>
                  <p>
                    We are constantly looking for ways to keep us updated with the changing technology and
                    evolving markets and demands. We believe that our performance should be more efficient, nimble and flexible then
                    before. That's where the Agile methodology comes in. We follow 4 values of Agile:
                  </p>
                  <ul className={styles.lists}>
                    <li><p>Individual and interactions over processes and tools.</p></li>
                    <li><p>Working software over complete documentation.</p></li>
                    <li><p>Customer collaboration over contract negotiation.</p></li>
                    <li><p>Responding to change over following a plan.</p></li>
                  </ul>


                </div>

              </div>
            </div>

          </div>



          <section className={styles.methodology}>

            <div className={styles.methodology1}>
              <p>Following Agile methodology gives us a high degree of understanding of client requirements and collection between
                the client and the development team. We have happier clients because we maintain transparency throughout the process and
                our teams know and understand the client requirements and limitions better.</p>
            </div>
            <div className={styles.methodology2}>
              <p>Some of the benefits that we would like to highlight of using the Agile methodology in our work are:</p>
            </div>
              <ul className={styles.lists}>
                <li><p>Cost protection and the time frame required.</p></li>
                <li><p>Constant feedback and asuperior product result.</p></li>
                <li><p>Possibility of change during the process.</p></li>
                <li><p>Reduce the risk of error and the investment.</p></li>
              </ul>

          </section>








          <section className={styles.five_part}>
            <div className={styles.five_first_part}>
              <h1>Company value</h1>
            </div>
            <img className={styles.five_last_part} src={Group1} />
          </section>





        </div >


      </div >

    </div>
  )
}

export default About
