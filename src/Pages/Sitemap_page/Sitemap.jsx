import React from 'react'
import Styles from "./Sitemap.module.css";
const Sitemap = () => {
  return (
    <div className={Styles.sitemap}>
      <div className={Styles.Top}>
      <h1>Sitemap</h1>
        <p>Home / Sitemap</p>
      </div>
      <div className={Styles.bottem}>
        <h1>Sitemap</h1>
        <div className={Styles.card_contanier}>
            <div className={Styles.card}>
                <h2>About us</h2>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sitemap
