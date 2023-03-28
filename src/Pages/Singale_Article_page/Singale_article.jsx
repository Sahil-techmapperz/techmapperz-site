import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Styles from "./Singale_article.module.css";
const Singalearticle = () => {
    const [Singalearticle,setsingalearticle]=useState();
    let id= useParams();
   

    let Fetchdata=async()=>{
      fetch("http://localhost:8080/article/singale_artical", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(id)
      }).then((res)=>res.json()).then((data)=>{
        
        setsingalearticle(data);
      }).catch((err)=>{
       
      })
      
    }


    useEffect(()=>{
        Fetchdata();
    },[])
  return (
    <div className={Styles.Singalearticle}>
        <div className={Styles.top_part}>
        <h1>Singale artical</h1>
        <p>Home / Blog Articals / Singale artical</p>
        </div>
        <div className={Styles.singale_artical_card}>
        <h1>{Singalearticle&&Singalearticle.title.rendered}</h1>
        {Singalearticle&&<div  dangerouslySetInnerHTML={{__html: Singalearticle.content.rendered}} />}
    </div>
    </div>
  )
}

export default Singalearticle
