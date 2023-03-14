import React from 'react';
import Styles from "./roling_slideshow.module.css"
function Logo({ src }) {
  return (
    <div  className={Styles.logo}>
      <img src={src}  alt="logo" />
    </div>
  );
}

export default Logo;
