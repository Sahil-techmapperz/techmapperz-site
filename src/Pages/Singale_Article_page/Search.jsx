import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SinglePost.css";
function Search({ searchQuery }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchSearchResults() {
      try {
        const response = await axios.get(
          `http://localhost:8080/posts/search?search=${searchQuery}`
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }

    if (searchQuery) {
      fetchSearchResults();
    } else {
      setPosts([]);
    }
  }, [searchQuery]);

  return (
    <div className="PostList">
      {posts.map((post) => (
        <div key={post.id} className="PostList-item">
          <h2 dangerouslySetInnerHTML={{ __html: post.title }} />
          {post.imgUrl && <img src={post.imgUrl} alt={post.title} />}
          <div dangerouslySetInnerHTML={{ __html: post.description }} />
          <Link to={`/post/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}

export default Search;
