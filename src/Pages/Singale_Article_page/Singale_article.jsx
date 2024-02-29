import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SinglePost.css";
import Styles from "./Singale_article.module.css"

import CommentForm from "./CommentForm";
import Search from "./Search";
import { Link, useParams } from "react-router-dom";
import FormattedDateComponent from "../../Components/Home_Component/Home_technoBlog/formatDate";
import { AiFillLinkedin,AiFillTwitterSquare,AiFillFacebook } from 'react-icons/ai';
import { Helmet } from 'react-helmet';

const Singalposts = {
  "_id": "6465d5aaf81eb99c4bddff42",
  "title": "We provide advanced solution growin your online",
  "content": "Law is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge.",
  "images": [
    "https://consoel-react.wpocean.com/static/media/img-1.5764a05b00e16d951b6a.jpg"
  ],
  "author": {
    "socialLinks": {
      "facebook": "",
      "twitter": "",
      "linkedin": ""
    },
    "_id": "64660dd7d6b65e806656f0c0",
    "name": "Sahil Laskar",
    "picture": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    "authorDetails": " Hello everyone my name is Sahil Laskar and I have experience in this field",
    "password": "$argon2id$v=19$m=65536,t=3,p=4$15IvkVwQEFozK1xFiDCbWA$865jh2ZDZAszMa05o8oASUAFJ/1e12bOkGqddUqj3xU",
    "email": "sl713430@gmail.com",
    "__v": 0
  },
  "category": "IT",
  "comments": [
    {
      "_id": "6465d628f81eb99c4bddff48",
      "content": "This post is very good",
      "name": "Rohan",
      "email": "Rohan@gmail.com",
      "postId": "6465d5aaf81eb99c4bddff42",
      "replies": [
        {
          "content": "Good",
          "name": "Sakil",
          "email": "sl713430@gmail.com",
          "_id": "6465d673f81eb99c4bddff50",
          "created_at": "2023-05-18T07:40:35.874Z"
        }
      ],
      "created_at": "2023-05-18T07:39:20.036Z",
      "__v": 1
    },
    {
      "_id": "6465d628f81eb99c4bddff48",
      "content": "Good Blog",
      "name": "Sahil Laskar",
      "email": "Rohan@gmail.com",
      "postId": "6465d5aaf81eb99c4bddff42",
      "replies": [
        {
          "content": "Good",
          "name": "Sakil",
          "email": "sl713430@gmail.com",
          "_id": "6465d673f81eb99c4bddff50",
          "created_at": "2023-05-18T07:40:35.874Z"
        }
      ],
      "created_at": "2023-05-18T07:39:20.036Z",
      "__v": 1
    }
  ],
  "created_at": "2023-05-18T07:37:14.214Z",
  "__v": 1
}
function SinglePost() {
  const [post, setPost] = useState([]);
  const [searchQuery, setsearchQuery] = useState();
  const[RelatedPosts,setRelatedPosts] = useState();
  const[Resent,setResent] = useState([]);
  const[categories,setcategories] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const postId = id;




  const fetchPost = async () => {
    try {
      const response = await axios.get( `${process.env.REACT_APP_Backend_baseUrl}/Newblogpost/singalepost/${postId}`)
      setPost(response.data);
      console.log(response.data)
      fetchrelatedPosts(response.data._id);
    } catch (err) {
      setError("Failed to fetch post");
    }
  };


  const fetchrecentPosts = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_Backend_baseUrl}/Newblogpost/recent`
      );
      setResent(response.data)
    } catch (err) {
      setError("Failed to fetch posts");
    }
  };
  const fetchrelatedPosts = async (id) => {
    console.log(post)
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_Backend_baseUrl}/Newblogpost/related/${id}`
      );
        setRelatedPosts(response.data)
      
    } catch (err) {
      setError("Failed to fetch posts");
    }
  };


  useEffect(() => {
    fetchPost();
    fetchrecentPosts();
    console.log("Fetching post");
  },[id]);



  // const  fetchSearchResults=async ()=> {
  //   console.log(searchQuery && searchQuery)
  //   try {
  //     const response = await axios.get(
  //       `${process.env.REACT_APP_Backend_baseUrl}/article/search?search=${searchQuery}`
  //     );
  //     setPost(response.data);
  //     console.log(response.data)
  //   } catch (error) {
  //     console.error("Error fetching search results:", error);
  //   }
  // }


  // const handalesearch = (e) => {
  //   setsearchQuery(e.target.value)
  // }


  // const handalesearchsubmit=()=>{
  //   fetchSearchResults()
  //   setsearchQuery("");
  // }

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
    <div className={Styles.Singalearticle}>
       <Helmet>
        <title>{post&&post.title}</title>
        <meta name="description" content={post&&post.content&&post.content.substring(0, 155)} />
        <meta property="og:title" content={post&&post.title&&post.title} />
        <meta property="og:description" content={post&&post.content&&post.content.substring(0, 155)} />
        <meta property="og:image" content={post&&post.images&&post.images[0]} />
      </Helmet>
      <div className={Styles.top_part}>
        <h1>Article</h1>
        <p> <Link to={"/"}>Home</Link> / <Link to={"/article"}>News & Article</Link>/Article</p>
      </div>
      <div className={Styles.contaner_main}>
        <div className={Styles.contaner_left}>
          <div className={Styles.singale_post}>
            <img src={post&&post.images&&post.images[0]} />
            <div className={Styles.post_metadata}>
              <div>{`BY ${post&&post.author&&post.author.name.toUpperCase()}`}</div>
              <div>{`COMMENTS ${post&&post.comments&&post.comments.length}`}</div>
              <div>{`${post&&post.created_at&&post.created_at.split("T")[0]}`}</div>
              {/* <div>{`CATEGORY ${post&&post.category&&post.category.toUpperCase()}`}</div> */}
            </div>
            <div className={Styles.title}>{post&&post.title&&post.title}</div>
            <div className={Styles.contant}>{post&&post.content&&post.content}</div>
            <div  dangerouslySetInnerHTML={{ __html:post&&post.maincontent&& post.maincontent}} />
          </div>

          <div className={Styles.comments_list}>
            <h1>Comments</h1>
            {post&&post.comments&&post.comments.map(com=>{
              return(
                <div className={Styles.comment}>
                  {console.log(com.name)}
                  <div className={Styles.avater}>{com.name.split("")[0].toUpperCase()}</div>
                  <div>
                    <div className={Styles.comment_name}>{com.name}</div>
                    <div> {com.content}</div>
                    </div>
                </div>
              )
            })}
          </div>
          <CommentForm postId={post._id} fetchPost={fetchPost}/>
        </div>
        <div className={Styles.contaner_rigth}>

            <div className={Styles.author_details}>
              <img src={post&&post.author&&post.author.picture}/>
              <h1>{post&&post.author&&post.author.name}</h1>
              <h3>{post&&post.author&&post.author.authorDetails}</h3>
              <div className={Styles.socialLinks}>
                <Link target={"_blank"} to={post&&post.author&&post.author.socialLinks.facebook&&post.author.socialLinks.facebook}><AiFillFacebook/></Link>
                <Link target={"_blank"} to={post&&post.author&&post.author.socialLinks.twitter&&post.author.socialLinks.twitter}><AiFillTwitterSquare/></Link>
                <Link target={"_blank"} to={post&&post.author&&post.author.socialLinks.linkedin&&post.author.socialLinks.linkedin}><AiFillLinkedin/></Link>
              </div>
            </div>


            <div className={Styles.releted_post}>
            <h1 className={Styles.recent_contaner_heading}>Releted Posts</h1>
            {RelatedPosts&&RelatedPosts.length!==0?RelatedPosts.map((recent)=>{
              return(
                <div className={Styles.recentpost}>
                  <img src={recent.images[0]}/>
                    <div>
                      <h1><Link to={`/singal_article/${recent._id}`}>{recent.title.slice(0, 100) + "..."}</Link></h1>
                      <h1>{`${recent.created_at.split("T")[0]}`}</h1>
                    </div>
                </div>
              )
            }):<h1 >No related post found</h1>
            }
            </div>
            <div className={Styles.resent_post}>
            <h1 className={Styles.recent_contaner_heading}>Recent Posts</h1>
            {Resent&&Resent.map((recent)=>{
              return(
                <div className={Styles.recentpost}>
                  <img src={recent.images[0]}/>
                    <div>
                      <h1><Link to={`/singal_article/${recent._id}`}>{recent.title.slice(0, 100) + "..."}</Link></h1>
                      <h1>{`${recent.created_at.split("T")[0]}`}</h1>
                    </div>
                </div>
              )
            })}
            </div>
            
            <div className={Styles.category}></div>
        </div>
            
      </div>
     
    </div>


  );
}

export default SinglePost;
