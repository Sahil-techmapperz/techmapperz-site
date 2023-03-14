import React from 'react'
import Styles from "./Home_Technology.module.css";
import technology_banner from '../../../Photos/technology_banner.png';
import Strategic from '../../../Photos/Strategic.png';
import { FaPython,FaJava,FaVuejs,FaAngular,FaReact,FaPhp,FaCss3Alt,FaNodeJs,FaSwift,FaHtml5 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiSolidity } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { SiKotlin} from "react-icons/si";
const Home_Technology = () => {
  return (
    <div className={Styles.technology}>
      <div className={Styles.main}>
        <div className={Styles.technology_info}>
            <p className={Styles.title}>Technology</p>
            <h3>Latest Technology That we used</h3>
            <p className={Styles.info}>Let Your Data Take Your Business to Higher Grounds</p>
           
            <img src={Strategic}/>
        </div>
        <div className={Styles.banner}>
            {/* <img src={technology_banner}/> */}

            <div><FaJava className={Styles.logo}/> <p>Java</p></div>
            <div><TbBrandJavascript className={Styles.logo}/><p>Javascript</p></div>
            <div><FaVuejs className={Styles.logo}/><p>Vuejs</p></div>
            <div><FaAngular className={Styles.logo}/><p>Angular</p></div>
            <div><FaReact className={Styles.logo}/><p>React</p></div>
            <div><SiSolidity className={Styles.logo}/><p>Solidity</p></div>
            <div><FaPhp className={Styles.logo}/><p>PHP</p></div>
            <div><TbBrandReactNative className={Styles.logo}/><p>ReactNative</p></div>
            <div><FaCss3Alt className={Styles.logo}/><p>CSS</p></div>
            <div><FaNodeJs className={Styles.logo}/><p>Node.js</p></div>
            <div><FaSwift className={Styles.logo}/><p>Swift</p></div>
            <div><FaHtml5 className={Styles.logo}/><p>HTML</p></div>
            <div><FaPython className={Styles.logo}/><p>Python</p></div>
            <div><SiKotlin className={Styles.logo}/><p>Kotlin</p></div>

        </div>
      </div>
    </div>
  )
}

export default Home_Technology
