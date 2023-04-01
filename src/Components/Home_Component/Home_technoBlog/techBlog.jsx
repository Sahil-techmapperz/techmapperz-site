import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FormattedDateComponent from "./formatDate";
import Styles from "./techBlog.module.css"

const TechBlog = ({postdata=[]}) => {



 
      


    return (
        <div className={Styles.techblog}>
            <div className={Styles.getintouch_btn}>
            <Link to={"/contact"} >
                <div className={Styles.Submit_btn}>
                    <div></div>
                    <h2>Get in touch</h2>
                </div>
            </Link>
            </div>

            <div className={Styles.main}>

                <div className={Styles.subMain_1}>
                    <p >Our Blog</p>
                    <h2>Latest News & Articles</h2>


                </div>


                <div className={Styles.subMain_2}>
                    <div className={Styles.tabet}>
                        <table border="1" >
                            {postdata.map(post=>{
                                return(
                                    <tr>
                                <th className={Styles.row_1}>
                                <FormattedDateComponent dateString={post.date} />
                                </th>
                                <th className={Styles.row_2}>
                                <Link to={`/singal_article/${post.id}`}> <h1>{post.title}</h1></Link>
                                    <div dangerouslySetInnerHTML={{ __html: post.description.split(/(<[^>]+>)/)[2] }} />
                                </th>
                            </tr>
                                )
                            })}
                            

                            {/* <tr>
                                <th className={Styles.row_1}>22-feb-2022</th>
                                <th className={Styles.row_2}>
                                    <h3>Use of Drones in Minning Sector</h3>
                                    <p>Developing Profit Base Quarry Operation and Improving Warker's Safety in Minig by using Drone Data</p>
                                </th>
                            </tr>

                            <tr>
                                <th className={Styles.row_1}>23-feb-2022</th>
                                <th className={Styles.row_2}>
                                    <h3>GIS:A New Technology</h3>
                                    <p>Application of GIS as a new edge technology in Land Record Management System</p>
                                </th>
                            </tr> */}
                        </table>
                    </div>

                </div>

            </div>
        </div>


    )
}

export default TechBlog