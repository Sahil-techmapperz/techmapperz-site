import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SinglePost.css";
function RecentPosts() {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_Backend_baseUrl}/article/recent-posts`
        );
        setRecentPosts(response.data);
      } catch (err) {
        console.error("Failed to fetch recent posts:", err);
      }
    };

    fetchRecentPosts();
  }, []);
  useEffect(() => {
    const options = {
      top: 0,
      left: 0,
      behavior: 'smooth'
    };
    window.scrollTo(options);
  }, []);

  return (
    <div className="RecentPosts">
      <h2>Recent Posts</h2>
      <ul>
        {recentPosts.map((post) => (
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

export default RecentPosts;
