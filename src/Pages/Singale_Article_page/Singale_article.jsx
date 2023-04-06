import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SinglePost.css";
import CommentForm from "./CommentForm";
import RecentPosts from "./RecentPosts";
import RelatedPosts from "./RelatedPosts";
import Search from "./Search";
import { useParams } from "react-router-dom";
function SinglePost() {
  const [post, setPost] = useState(null);
  const [searchQuery, setsearchQuery] = useState();
  const [error, setError] = useState(null);
  const { id} = useParams();
  const postId= id
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/article/posts/${postId}`
        );
        setPost(response.data);
        
      } catch (err) {
        setError("Failed to fetch post");
      }
    };

    fetchPost();
  }, [postId]);



  const  fetchSearchResults=async ()=> {
    console.log(searchQuery && searchQuery)
    try {
      const response = await axios.get(
        `http://localhost:8080/article/search?search=${searchQuery}`
      );
      setPost(response.data);
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  }


const handalesearch=(e)=>{
  setsearchQuery(e.target.value)
}


const handalesearchsubmit=()=>{
  fetchSearchResults()
  setsearchQuery("");
}

useEffect(() => {
  const options = {
    top: 0,
    left: 0,
    behavior: 'smooth'
  };
  window.scrollTo(options);
}, [postId]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="main_contaner">
    <div className="SinglePost">
      <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
      {post.imgUrl && <img src={post.imgUrl} alt={post.title} />}
      <div dangerouslySetInnerHTML={{ __html: post.description }} />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <p className="author">
        By: <a href={post.author.link}>{post.author.name}</a>
      </p>
      <CommentForm postId={postId} />
    </div>
    <div className="related_recentpost">
      <div>
      <input value={searchQuery} placeholder="search" onChange={handalesearch}/>
      <button onClick={handalesearchsubmit}>Search</button>
      </div>
      <RelatedPosts postId={postId} />
      <RecentPosts />
      </div>
    </div>
  );
}

export default SinglePost;
