import React from 'react';
import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.Home}>
      <header>
        <section>
          <div className="main">
            <div className={styles.navbar}>
              <div className={styles.leftNav}>
                <img className={styles.logo} src="https://www.techmapperz.com/images/v421_18528.png" alt="" />
              </div>


              {/* <div className={styles.rightNav}>
                <ul>
                  <li><a href="a">Home</a></li>
                  <li><a href="a">Service</a></li>
                  <li><a href="a">News&Articles</a></li>
                  <li><a href="a">About us</a></li>
                  <li><a href="a">Careers</a></li>
                  <li><a href="a">Contact us</a></li>
                </ul>
              </div> */}

            </div>

            <div className={styles.middleBar}>
              <h1>MOBILE & WEB APPLICATION <br /> DEVELOPMENT</h1>
            </div>

            <div className={styles.paragraph}>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit culpa minus sinexerci <br />
                non et quibusdam voluptatem. Laborum fugiat atque easimilique repelladeserunt <br />
                distinctio recusandae libero praesentium eum corrupti.
              </p>
            </div>

            <div className={styles.buttomBar}>
              <button><h2>Get in touch</h2></button>
            </div>


            <div className={styles.buttom}>
              <h3>SCROLL DOWN</h3>
            </div>


            <div className={styles.imageSlide}>
            </div>

          </div>
        </section>
      </header>


      <section>
        <div className={styles.features}>
          <div className={styles.uppersite}>
            <div className={styles.feat}>
              <li><b>features</b></li>
            </div>
            <div className={styles.headtag1}>
              <h1><b>These Services <br /> to Expand Your Business</b></h1>
            </div>
            <div className={styles.paragraph1}>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aliquid quod. Pariatur earum error quis.</p>
            </div>
            <div className={styles.headtag2}>
              <button><h2>know more</h2></button>
            </div>

            <div className={styles.headtag3}><h2>GIS Services</h2></div>
            <li>

              <div className={styles.headtag4}><h2>View All Services</h2></div>
              <div className={styles.headtag5}><h2>Drone Service</h2></div>
              <div className={styles.headtag6}><h2>IT Services</h2></div>
            </li>
          </div>
          <div className={styles.technology}>

            <div className={styles.headtag7}><p>Technology</p></div>

            <div className={styles.headtag8}><h1>Latest technology <br />that we used</h1></div>
            <div className={styles.headtag9}><p>Let Your Data Take Your Business To Higher <br />Grounds</p>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className={styles.about}>
          <li>About Us</li>

          <div className={styles.headtag10}><h1>Why Choose Techmapperz</h1></div>

          <div className={styles.headtag11}><p>We are a learn of free-thinking individuals who believe that <br />the solution to a complex problem need not be complex,<br />
            that complex issues should have very simple solutions,and<br /> this is the change that we all beleive in.we aim for a digital<br />
            transformation towards innovation with simplicity.</p></div>

          <div className={styles.headtag12}><p>We strive to be a software Development Company that<br /> delivers cutting edge solutions,helping not just Fortune 500<br />
            companies and enterprise clients on their digital evolution journey.</p></div>

          <div className={styles.headtag13}>
            <button><h2>Know More</h2></button>
          </div>
        </div>
      </section>


      <section>
        <div className={styles.acro}><div className={styles.tag3}><li>Our Blog</li></div>
          <div className={styles.tag4}><h2>Latest News <br />& Articles</h2></div> </div>

        <div className={styles.tabet}>
          <table border="1" >
            <tr>
              <th>20-feb-2022</th>
              <th>
                <h3>Data Automization</h3>
                <p>Business Inteligience and Data Analytics with the help of AI and MI</p>
              </th>
            </tr>

            <tr>
              <th>22-feb-2022</th>
              <th>
                <h3>Use of Drones in Minning Sector</h3>
                <p>Developing Profit Base Quarry Operation and Improving Warker's Safety in Minig by using Drone Data</p>
              </th>
            </tr>

            <tr>
              <th>23-feb-2022</th>
              <th>
                <h3>GIS:A New Technology</h3>
                <p>Application of GIS as a new edge technology in Land Record Management System</p>
              </th>
            </tr>
          </table>
        </div>


        <img />
        <img />
        <img />
        <img />
        <img />

      </section>


      <section>
        <div className={`${styles.our} ${styles.vlog}`}>
          <img />
          <img />
          <img />
          <img />
          <div className={styles.tag1}><li>Technology</li></div>
          <div className={styles.tag2}><h1>Our Brand Partners</h1></div>

          <div className={styles.tag5}><button><h3>Read More</h3></button></div>

        </div>
      </section>


      <section>
        <div className={styles.Testimonial}>
          <div className={styles.get1}><li>Testimonial</li></div>
          <div className={styles.get2}><h1>What our Clients Say</h1></div>
          <div className={styles.get3}><h2>They are the best of the best, and expertly trained team members who take <br />the extra step and go the extra mile, all to fulfill
            our dedicated promise to deliver <br />innovative and dynamic solutions to our customers to fit the needs of a rapidly <br />changing global
            environment which was perfect for our needs!!.</h2></div>
          <img />
        </div>
      </section>


      <section>
        <div className={styles.lastpart}>

          <div className={styles.get4}><li>Let's Have a talk about your project.</li></div>
          <div className={styles.cards}>
            <div className={styles.get6}><li>About</li></div>
            <div className={styles.get7}><li>Explore More</li></div>
          </div>


          <div className={styles.get5}><h1>Need more information or<br /> want to get in touch?</h1></div>
          <div className={styles.city}>
            <div className={styles.king}>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>News&Article</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className={styles.queen}>
              <ul>
                <li>Support</li>
                <li>Privacy & policy</li>
                <li>Terms of Use</li>
                <li>Help</li>
                <li>Sitwemap</li>
              </ul>
            </div>
          </div>
          <div className={styles.get9}><p>There are many variation of passages <br /> of lorem ipsum available, but the majority suffered.</p></div>

          <div className={styles.get8}><button><h1>Get in touch</h1></button></div>

          <div className={styles.get10}><h3>Follow on-</h3></div>


        </div>
      </section>
    </div>

  )
}

export default Home