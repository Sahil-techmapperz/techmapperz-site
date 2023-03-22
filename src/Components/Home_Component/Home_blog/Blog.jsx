import React from "react";
import SlidingDeep from "../../Roling_slideshow_Component/SlidingDeep";
import styles from "./Blog.module.css"


const Blog = () => {
    let Image = [
        "https://www.pngall.com/wp-content/uploads/11/Apple-Logo-PNG-Pic.png",
        "https://www.freepnglogos.com/uploads/company-logo-png/bmw-car-company-logo-png-transparent-image-3.png",
        //  "https://www.freepnglogos.com/uploads/company-logo-png/bmw-car-company-logo-png-transparent-image-3.png" ,
        //  "https://pngimg.com/uploads/nissan/small/nissan_PNG77.png" ,
    ]
    return (
        <div className={styles.main}>
            
            <div className={styles.ourblog}>
                <div className={styles.totalTag}>
                    <SlidingDeep images={Image} />
                </div>

                <div className={styles.Blog_2}>
                <p className={styles.tag1}>Technology</p>
                <h1 className={styles.tag6}>Our Brand Partners</h1>
                </div>
            </div>
        </div>

    )
}

export default Blog