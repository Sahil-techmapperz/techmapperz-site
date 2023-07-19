import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FormattedDateComponent from "./formatDate";
import Styles from "./techBlog.module.css"

const TechBlog = ({ postdata=[] }) => {







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
                                            <FormattedDateComponent dateString={post.created_at} />
                                        </th>
                                        <th className={Styles.row_2}>

                                            <Link to={`/article`}> <h1 > {post.title.slice(0, 30) + "..." }</h1></Link>
                                            <div>{post.content.slice(0, 100) + "..." }</div>
                                        </th>
                                    </tr>
                                )
                            })}

                        

                        <div className={Styles.getintouch_btn}>
                            <Link to={"/contact"} >
                                <div className={Styles.Submit_btn}>
                                    <div></div>
                                    <h2>Get in touch</h2>
                                </div>
                            </Link>
                        </div>
                        </table>
                        
                    </div>

                </div>

            </div>
        </div>


    )
}

export default TechBlog