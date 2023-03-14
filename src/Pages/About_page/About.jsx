import React from 'react'
import styles from "./About.module.css"
const About = () => {
  return (
    <div className={styles.about}>
      <header>
        <h1>About US</h1>
        <p>Home / About us</p>
      </header>

      <section className={styles.first_part}>
        <div className={styles.first_part_main}>

      <div className={styles.video_contaner}>
        <video autoplay controls loop muted>
        <source src="https://techmapperz.com/media/videos/2022/07/04/whatsapp-video-2022-07-04-at-10.57.43-am.mp4" type="video/mp4"></source>
        </video>
      </div>

      <div className={styles.company_info}>
        <h2 className={styles.heading}>About Company</h2>
        <p>Let your imagination fly, this has always been the spirit that made Techmapperz possible, we were always free-thinkers, a team that believed that the solution to a complex problem need not be complex, that complex issues should have very simple solutions, and this is the change that we all believe in.</p>
        <p>We aim for a Digital transformation toward innovation with simplicity, striving to be a Company that delivers cutting-edge solutions, helping the world, mankind, enterprise and fortune 500 companies, all in one go.</p>
      </div>

      </div>
      </section>

      <section className={styles.secend_part}>
        <div className={styles.secend_part_main}>

      <div className={styles.Mission}>
        <h2 className={styles.heading}>Mission</h2>
        <p>We at Techmapperz, understand that each organisation is different, and so are their challenges, so when we tailor solutions, we ensure that it is as simplified as it can be. Our mission is simplified solutions for complex problems.</p>
      </div>

      <div className={styles.Vision}>
        <h2 className={styles.heading}>Vision</h2>
        <p>With technology becoming the most important part of our day to day life, we are driven by the commitment to deliver the best of IT solutions, to be a trusted provider of end-to-end IT services and solutions to businesses globally.</p>
      </div>

      </div>
      </section>

      <section className={styles.thrd_part}>
        <div className={styles.thrd_part_main}>

      <div className={styles.first_section}>
         <img src='https://techmapperz.com/images/2022/06/30/why-choose-us.jpg' alt='banner'/>
         <p>All the services that TechMapperz offers ensure that this four-step methodology is followed, one of the many reasons that most of our clients are either referred by our existing clients or are returning clients.</p>
         <p>Working with us will always make you feel a sense of calmness and confidence, we treat our clients this way because we would want to be treat this way.</p>
      </div>

      <div className={styles.secend_section}>
        <h2 className={styles.heading}>Why Choose Techmapperz</h2>
        <p>The smaller things make big difference in everything that we do, we at Techmapperz also believe in the attention to detail methodology, and our eye to the detail in every project that we manage is what makes us stand out from the rest, we have a 4 step approach on how we execute a project</p>
      </div>

      </div>
      </section>

      <section className={styles.four_part}>
        <div className={styles.four_part_main}>

        <div className={styles.first_section}>
        <h2 className={styles.heading}>How Do we Work</h2>
        <p>We are constantly looking for ways to keep us updated with the changing technology and evolving markets and demands. We believe that our performance should be more efficient, nimble and flexible than before. That's where the Agile methodology comes in.</p>
        <p>We follow the 4 values of Agile:</p>
        <ul>
          <li>Individuals and interactions over processes and tools.</li>
          <li>Working software over comprehensive documentation.</li>
          <li>Customer collaboration over contract negotiation.</li>
          <li>Responding to change over following a plan.</li>
        </ul>

        <p>Following Agile methodology gives us a high degree of understanding of client requirements and collaboration between the client and the development team. We have happier clients because we maintain transparency throughout the process and our teams know and understand the client requirements and limitations better.</p>
      </div>

      <div className={styles.secend_section}>
         <img src='https://techmapperz.com/images/2022/06/19/agiele.jpg' alt='banner'/>
         <p>Some of the benefits that we would like to highlight of using the Agile methodology in our work are:</p>
         <ul>
          <li>Cost protection and the time frame required</li>
          <li>Possibility of change during the process</li>
          <li>Constant feedback and a superior product result</li>
          <li>Reduce the risk of error and the investment</li>
         </ul>
      </div>

     

      </div>
      </section>

      <section className={styles.five_part}>
        <img src='https://techmapperz.com/images/whatsapp-image-2022-06-20-at-8.jpg' alt='banner'/>
      </section>

    </div>
  )
}

export default About
