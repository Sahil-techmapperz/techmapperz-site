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
          "http://localhost:8080/article/recent-posts"
        );
        setRecentPosts(response.data);
      } catch (err) {
        console.error("Failed to fetch recent posts:", err);
      }
    };

    fetchRecentPosts();
  }, []);

  return (
    <div className="RecentPosts">
      <h2>Recent Posts</h2>
      <ul>
        {recentPosts.map((post) => (
          <li key={post.id}>
            <Link
              to={`/post/${post.id}`}
              dangerouslySetInnerHTML={{ __html: post.title }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentPosts;
