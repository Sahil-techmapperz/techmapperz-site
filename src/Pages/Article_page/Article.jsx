import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Styles from "./Article.module.css";
import { Link } from 'react-router-dom';
import moment from 'moment';
import { AiOutlineRight, AiOutlineLeft, AiOutlineSearch } from 'react-icons/ai';
import FormattedDateComponent from '../../Components/Home_Component/Home_technoBlog/formatDate';
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';



let BlogPost = [
  {
    "_id": "6465d5aaf81eb99c4bddff42",
    "title": "We provide advanced solution growin your online",
    "content": ["There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful.", "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,"],
    "images": [
      "https://consoel-react.wpocean.com/static/media/img-1.5764a05b00e16d951b6a.jpg",
      "https://consoel-react.wpocean.com/static/media/img-2.e993995002944a692023.jpg"
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
      }
    ],
    "created_at": "2023-05-18T07:37:14.214Z",
    "__v": 1
  },
  {
    "_id": "6465d5aaf81eb99c4bddff42",
    "title": "We provide advanced solution growin your online",
    "content": ["There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful.", "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,"],
    "images": [
      "https://consoel-react.wpocean.com/static/media/img-1.5764a05b00e16d951b6a.jpg",
      "https://consoel-react.wpocean.com/static/media/img-2.e993995002944a692023.jpg"
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
      }
    ],
    "created_at": "2023-05-18T07:37:14.214Z",
    "__v": 1
  },

]



let categories = [
  "IT",
  "web"
]


function Article() {
  const [posts, setPosts] = useState();
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setsearch] = useState("");
  const [searching, setsearching] = useState(false);
  const[recentposts, setrecentposts] = useState([]);




  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_Backend_baseUrl}/Newblogpost/${page}?perPage=2`
      );
      setPosts(response.data.blogPosts);
      setTotalPages(response.data.totalPages);
    } catch (err) {
      setError("Failed to fetch posts");
    }
  };
  const fetchrecentPosts = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_Backend_baseUrl}/Newblogpost/recent`
      );
      setrecentposts(response.data)
    } catch (err) {
      setError("Failed to fetch posts");
    }
  };

  const handaleSearch = async () => {
    if (search) {
      setsearching(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_Backend_baseUrl}/Newblogpost/search/${search}`
        );
        setPosts(response.data);
        setTotalPages(1);
        setsearching(false);
      } catch (err) {
        setError("Failed to fetch posts");
        setsearching(false);
      }
    } else {
      fetchPosts();
    }
  }




  useEffect(() => {
    fetchPosts();
    fetchrecentPosts();
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
      <Helmet>
        <title>{"Techmapperz"}</title>
        <meta name="description" content={"Techmapperz map your business"} />
        <meta property="og:title" content={"Techmapperz"} />
      </Helmet>

      <div className={Styles.top_part}>
        <h1>News & Articles</h1>
        <p> <Link to={"/"}>Home</Link> / News & Articles</p>
      </div>




      <div className={Styles.contaner_main}>
        <div className={Styles.contaner_left}>
          {posts && posts.map((post) => {
            return (
              <div className={Styles.singale_post}>
                <img src={post.images[0]} />
                <div className={Styles.post_metadata}>
                  <div>{`BY ${post.author.name.toUpperCase()}`}</div>
                  <div>{`COMMENTS ${post.comments.length}`}</div>
                  <div>{`${post.created_at.split("T")[0]}`}</div>
                </div>
                <div className={Styles.title}><Link to={`/singal_article/${post._id}`} >{post.title}</Link></div>
                <div className={Styles.contant}>{post.content.slice(0, 200) + "..."}</div>
                <Link to={`/singal_article/${post._id}`} className={Styles.reae_btn}>Read more...</Link>
              </div>
            )
          })}
          <div className={Styles.pagination}>
        <div> <button disabled={page === 1} onClick={handlePreviousPage} >
          <AiOutlineLeft />
        </button></div>
        <div className={Styles.pages}>
          {page} of {totalPages}
        </div>
        <div>  <button onClick={handleNextPage} disabled={page === totalPages}>
          <AiOutlineRight />
        </button></div>
      </div>
        </div>
        <div className={Styles.contaner_rigth}>
          <div className={Styles.search_contaner}>
            <h1 className={Styles.search_contaner_heading}>Search Here</h1>
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                placeholder='Search by title'
                onChange={(e) => setsearch(e.target.value)}
              />
              <InputRightElement width='5rem'>
                <Button h='1.75rem' size='md' colorScheme='gray' variant='link' fontSize={"30px"} onClick={handaleSearch} >
                  < AiOutlineSearch />
                </Button>
              </InputRightElement>
            </InputGroup>
            {searching && <h1>Searching......</h1>}
          </div>
          <div className={Styles.recentPost_contanet}>
            <h1 className={Styles.recent_contaner_heading}>Recent Posts</h1>
            {recentposts.map((recent)=>{
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
        </div>
      </div>

      
    </div>



  );
}

export default Article;