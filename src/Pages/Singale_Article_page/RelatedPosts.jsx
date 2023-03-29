import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SinglePost.css";

function RelatedPosts({ postId }) {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/article/related-posts/${postId}`
        );
        setRelatedPosts(response.data);
      } catch (err) {
        console.error("Failed to fetch related posts:", err);
      }
    };

    fetchRelatedPosts();
  }, [postId]);

  return (
    <div className="RelatedPosts">
      <h2>Related Posts</h2>
      <ul>
        {relatedPosts.map((post) => (
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

export default RelatedPosts;
