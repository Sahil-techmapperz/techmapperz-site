import React from "react";
import { Link } from "react-router-dom";
import styles from "./techBlog.module.css"

const TechBlog = () => {
    return (

        <section>
            <div className="main">

               <div className={styles.subMain}>
                
                <div className={styles.navin}>
                <div className={styles.acro}><div class="tag3"><li>Our Blog</li></div>

                    <div className={styles.tag4}><h2>Latest News <br />& Articles</h2></div> </div>

                    </div>


                  <div className={styles.navName}><Link> <div className={styles.Submit_btn}>
                    <div></div>
                    <h2>Get in touch</h2>
                </div></Link></div>

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


                </div>



            </div>
        </section>


    )
}

export default TechBlog