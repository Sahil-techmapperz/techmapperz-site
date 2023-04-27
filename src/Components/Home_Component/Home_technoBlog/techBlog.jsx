import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FormattedDateComponent from "./formatDate";
import Styles from "./techBlog.module.css"

const TechBlog = ({ postdata }) => {







    return (
        <div className={Styles.techblog}>
            <div className={Styles.main}>

                <div className={Styles.subMain_1}>
                    <p >Our Blog</p>
                    <h2>Latest News & Articles</h2>


                </div>


                <div className={Styles.subMain_2}>
                    <div className={Styles.tabet}>
                        <table border="1" >
                            {postdata && postdata.map(post => {
                                return (
                                    <tr>
                                        <th className={Styles.row_1}>
                                            <FormattedDateComponent dateString={post.date} />
                                        </th>
                                        <th className={Styles.row_2}>

                                            <Link to={`/article`}> <h1 dangerouslySetInnerHTML={{ __html: post.title.slice(0, 30) + "..." }}></h1></Link>
                                            <div dangerouslySetInnerHTML={{ __html: post.description.split(/(<[^>]+>)/)[2].slice(0, 100) + "..." }}></div>
                                        </th>
                                    </tr>
                                )
                            })}

                        </table>

                        <div className={Styles.getintouch_btn}>
                            <Link to={"/contact"} >
                                <div className={Styles.Submit_btn}>
                                    <div></div>
                                    <h2>Get in touch</h2>
                                </div>
                            </Link>
                        </div>

                        
                    </div>

                </div>

            </div>
        </div>


    )
}

export default TechBlog