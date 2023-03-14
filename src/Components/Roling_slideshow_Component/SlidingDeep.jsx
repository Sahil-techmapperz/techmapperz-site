import React from 'react';
import Logo from './Logo';
import Styles from  "./roling_slideshow.module.css"
const SlidingDeep=({ images }) =>{
  return (
    <div className={Styles.sliding_deep_wrapper}>
      <div className={Styles.sliding_deep}></div>
      <div className={Styles.logos_wrapper}>
        {images.map((src, index) => (
          <Logo key={index} src={src} />
        ))}
      </div>
    </div>
  );
}

export default SlidingDeep;
