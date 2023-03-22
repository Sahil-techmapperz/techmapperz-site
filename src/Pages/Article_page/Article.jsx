import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Styles from "./Article.module.css";
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
function Article() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:8080/article');
        let data=await response.json();
        setPosts(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className={Styles.article}>

        <div className={Styles.top_part}>
        <h1>Blog Articals</h1>
        <p>Home / Blog Articals</p>
        </div>

        <div className={Styles.contaner}>
         <Link className={Styles.create_btn} to={"https://sahilreviews.com/wp-admin/edit.php?post_type=post"} target={"_blank"} > <button>Create Post</button></Link>
             {posts && posts.map(post => (
        <div className={Styles.card} key={post.id}>
          <img src={post.img_url && post.img_url.rendered} alt=""/>
          <div className={Styles.Article_details}>
          <h2>{post.title.rendered}</h2>

          {console.log(post.excerpt.rendered.split(/(<[^>]+>)/)[2])}
          <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered.split(/(<[^>]+>)/)[2]}} />
          <Link  className={Styles.readmore_btn} to={`/singal_article/${post.id}`}><button>Read more...</button></Link>
          <div><Moment fromNow>{post.date}</Moment></div>
          </div>
        </div>
      ))}
        </div>


    </div>
  );
}

export default Article;
