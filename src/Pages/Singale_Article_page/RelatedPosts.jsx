import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SinglePost.css";

function RelatedPosts({ postId }) {
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [showPosts, setShowPosts] = useState(true);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/article/related-posts/${postId}`
        );
        if(response.data.length==0){
          setShowPosts(false);
        }
        setRelatedPosts(response.data);
        
      } catch (err) {
        console.error("Failed to fetch related posts:", err);
      }
    };

    fetchRelatedPosts();
  }, [postId]);


  useEffect(() => {
    const options = {
      top: 0,
      left: 0,
      behavior: 'smooth'
    };
    window.scrollTo(options);
  }, []);

  if(showPosts==false){
    return;
  }
  return (
    <div className="RelatedPosts">
      <h2>Related Posts</h2>
      <ul>
        {relatedPosts.map((post) => (
          <div>
         {post.imgUrl&&<img src={post.imgUrl} alt=""/>}
          <li key={post.id}>
            <Link
              to={`/singal_article/${post.id}`}
              dangerouslySetInnerHTML={{ __html: post.title }}
            />
          </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default RelatedPosts;
