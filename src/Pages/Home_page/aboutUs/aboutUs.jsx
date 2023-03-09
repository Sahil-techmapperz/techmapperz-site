import React from "react";
import { Link } from "react-router-dom";
import Rectangle_6 from "../../../Photos/Rectangle_6.png";
import Rectangle_7 from "../../../Photos/Rectangle_7.png";
import Group from "../../../Photos/Group.png";


import styles from "./aboutUs.module.css";

// const About= ()=> {
//     retutn (
//         <div className={styles.About}>

//             <section>
//         <div className={styles.about}>

//         <div className="main">
//             <div className={styles.pvector}>
//                 <img className={styles.vectorImage} src=""/>

//             </div>

//             <div className={styles.finalvector}>


//             <div className={styles.firstVector}>


//               <img className={styles.navbar1} src={Rectangle_6}/>
//               <img className={styles.image} src="" />
//               <img className={styles.image} src=""/>
//               <img className={styles.image} src="" />
//               </div>


//             <div className={styles.lastVector}>

//           <li>About Us</li>

//           <div className={styles.headtag10}><h1>Why Choose Techmapperz</h1></div>

//           <div className={styles.headtag11}><p>We are a learn of free-thinking individuals who believe that <br />the solution to a complex problem need not be complex,<br />
//             that complex issues should have very simple solutions,and<br /> this is the change that we all beleive in.we aim for a digital<br />
//             transformation towards innovation with simplicity.</p></div>

//           <div className={styles.headtag12}><p>We strive to be a software Development Company that<br /> delivers cutting edge solutions,helping not just Fortune 500<br />
//             companies and enterprise clients on their digital evolution journey.</p></div>

//           <div className={styles.headtag13}>
//             <button><h2>Know More</h2></button>

//             </div>





//             </div>
//             </div>
//           </div>

//         </div>
//       </section>


//         </div>

//     )
// }
const AboutUs = () => {
  return (
    <div className={styles.About}>


          <div className="main">
            
            <div className={styles.pvector}>
              <img className={styles.vectorImage} src={Group} />

            </div>

            <div className={styles.finalvector}>


              <div className={styles.firstVector}>


                <div className={styles.navbar1}></div>
                <div className={styles.navbar2}></div>
                <img className={styles.navbar3} src={Rectangle_6} />
                <img className={styles.navbar4} src={Rectangle_7}/>
                
              </div>


              <div className={styles.lastVector}>
                 <ul><li>About Us</li></ul>
                

                <div className={styles.headtag10}><h1>Why Choose Techmapperz</h1></div>

                <div className={styles.headtag11}><p>We are a learn of free-thinking individuals who believe that <br />the solution to a complex problem need not be complex,<br />
                  that complex issues should have very simple solutions,and<br /> this is the change that we all beleive in.we aim for a digital<br />
                  transformation towards innovation with simplicity.</p></div>

                <div className={styles.headtag12}><p>We strive to be a software Development Company that<br /> delivers cutting edge solutions,helping not just Fortune 500<br />
                  companies and enterprise clients on their digital evolution journey.</p></div>

                  <Link> <div className={styles.Submit_btn}>
            <div></div>
            <h2>Get in touch</h2>
        </div></Link>





              </div>
            </div>
          </div>


    </div>


  )
}



export default AboutUs