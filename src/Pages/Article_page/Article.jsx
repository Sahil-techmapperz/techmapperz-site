import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Styles from "./Article.module.css";
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
function Article() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);



  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/article/posts?page=${page}`
        );
        setPosts(response.data.posts);
        setTotalPages(response.data.totalPages);
      } catch (err) {
        setError("Failed to fetch posts");
      }
    };

    fetchPosts();
  }, [page]);


  useEffect(() => {
    const options = {
      top: 0,
      left: 0,
      behavior: 'smooth'
    };
    window.scrollTo(options);
  }, []);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  // const CreatedAt=(date)=>{
  //   let Time= Moment(date.split("T")[0]).fromNow();
  //   console.log(Time);
  // }

  return (
    <div className={Styles.article}>

      <div className={Styles.top_part}>
        <h1>Blog Articals</h1>
        <p>Home / Blog Articals</p>
      </div>

      <div className={Styles.contaner}>
        {posts && posts.map(post => (
          <div className={Styles.card} key={post.id}>
            <img src={post.imgUrl && post.imgUrl} alt="" />
            <div className={Styles.Article_details}>
             <Link  to={`/singal_article/${post.id}`}> <h2 title={post.title}>{post.title}</h2></Link>

              
              {/* <div dangerouslySetInnerHTML={{ __html: post.description.split(/(<[^>]+>)/)[2] }} /> */}
              {/* <div style={{"color":"black"}}><Moment fromNow>{post.date.split("T")[0]}</Moment></div> */}
              <Link className={Styles.readmore_btn} to={`/singal_article/${post.id}`}><button>Read more...</button></Link>
            </div>
          </div>
        ))}
      </div>


      <div className={Styles.pagination}>
        <div> <button disabled={page === 1} onClick={handlePreviousPage} >
          Previous
        </button></div>
        <div>
          Page {page} of {totalPages}
        </div>
        <div>  <button onClick={handleNextPage} disabled={page === totalPages}>
          Next
        </button></div>
      </div>
    </div>
  );
}

export default Article;