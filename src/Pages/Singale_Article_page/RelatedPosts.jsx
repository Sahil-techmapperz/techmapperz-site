import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Styles from "./Relatedpost.module.css";
function RelatedPosts({ postId }) {
  const [relatedPosts, setRelatedPosts] = useState([]);

 

 


  useEffect(() => {
    const options = {
      top: 0,
      left: 0,
      behavior: 'smooth'
    };
    window.scrollTo(options);
  }, []);

  const fetchrelatedPosts = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_Backend_baseUrl}/Newblogpost/related/${postId}`
      );
      setRelatedPosts(response.data)
    } catch (err) {
      console.log("Failed to fetch posts");
    }
  };

  return (
    <div className="RelatedPosts">
      <div className={Styles.releted_post}>
            <h1 className={Styles.recent_contaner_heading}>Releted Posts</h1>
            {relatedPosts&&relatedPosts.length!==0?relatedPosts.map((recent)=>{
              return(
                <div className={Styles.recentpost}>
                  <img src={recent.images[0]}/>
                    <div>
                      <h1 onClick={()=>fetchrelatedPosts()}>{recent.title.slice(0, 100) + "..."}</h1>
                      <h1>{`${recent.created_at.split("T")[0]}`}</h1>
                    </div>
                </div>
              )
            }):<h1 >No related post found</h1>
            }
            </div>
    </div>
  );
}

export default RelatedPosts;
