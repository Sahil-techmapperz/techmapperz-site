import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Styles from "./Article.module.css";
import { Link } from 'react-router-dom';
import moment from 'moment';
function Article() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);



  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_Backend_baseUrl}/article/posts?page=${page}&&perpage=6`
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

 

  return (
    <div className={Styles.article}>

      <div className={Styles.top_part}>
        <h1>Blog Articals</h1>
        <p>Home / Blog Articals</p>
      </div>

      <div className={Styles.contaner}>
        {posts && posts.map(post => (
          <div className={Styles.card} key={post.id}>
            <div className={Styles.Img}>{post.imgUrl&&<img src={post.imgUrl && post.imgUrl} alt="" />}</div>
            <div className={Styles.Article_details}>
             <Link  to={`/singal_article/${post.id}`}> <h2 title={post.title}>{post.title}</h2></Link>
            <h1>- By {post.author.name}</h1>
              
              {/* <div dangerouslySetInnerHTML={{ __html: post.description.split(/(<[^>]+>)/)[2] }} /> */}
              <div>{moment(post.date.split("T")[0]).fromNow()}</div>
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