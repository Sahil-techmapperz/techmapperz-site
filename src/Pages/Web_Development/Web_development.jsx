import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Geospatial_Mapping from '../../Photos/Geospatial_Mapping.png';
import Geo_health from '../../Photos/Geo_health.png';
import Geogoverence from '../../Photos/Geogoverence.png';
import Styles from './Web.module.css';
import Development1 from '../../Photos/Development1.png';
import Development2 from '../../Photos/Development2.png';
import Development3 from '../../Photos/Development3.png';
import Combind5 from '../../Photos/Combind5.png';
import Combind3 from '../../Photos/Combind3.png';
import Combind1 from '../../Photos/Combind1.png';
import Combind4 from '../../Photos/Combind4.png';
import Webdevelop from '../../Photos/Webdevelop.png'
import Vector7 from '../../Photos/Develop1.png';
import Vector8 from '../../Photos/Develop2.png';
import Vector9 from '../../Photos/Develop3.png';
import T01 from '../../Photos/01.png';
import T02 from '../../Photos/02.png';
import T03 from '../../Photos/03.png';
import T04 from '../../Photos/04.png';


const Web_Development = () => {


    useEffect(() => {
        const options = {
            top: 0,
            left: 0,
            behavior: 'smooth'
        };
        window.scrollTo(options);
    }, []);

    return (
        <div className={Styles.development}>
            <section className={Styles.first_part}>
                <h1>Website Development</h1>
                <p>Home / Services / IT Services / Website Development</p>
            </section>


            <section className={Styles.secand_part}>
                <div className={Styles.contaner}>
                    <h1 className={Styles.heading}>What is Website Design <br />& Development</h1>
                    <div className={Styles.product}>
                        <img src={Development1} alt="Development1.png" />
                        <div className={Styles.product_info}>
                            <p>One of the first websites was created in 1991, and since then, the website and its design have evolved manifold.Today it is complex and involves an entire ecosystem of roles and skill sets. Website development is an umbrella term for two major parts-Design & Development, Design represents the look and feel wherwas Development determines how it functions</p>
                            <Link to={"/contact"}> <div className={Styles.btn}>
                                <div></div>
                                <h2>Know More</h2>
                            </div></Link>
                        </div>
                    </div>
                </div>



                <div className={`${Styles.contaner} ${Styles.contaner_card2} `}>
                    <div className={Styles.product}>
                        <div className={Styles.product_info}>
                            <h1 className={Styles.heading}>Why Web Design and & <br />Development is Important?</h1>
                            <p>Today the world is connected online,people get to the internet for any kind of need they may have,in this are Web design and web development are crucial for any business that wants to create an online presence.it is the first impression of your company,make sure it is a good one, and a functioning one as well.A A good web design and functionality is also a key element in good sales and business growth. </p>

                            <Link to={"/contact"}> <div className={Styles.btn}>
                                <div></div>
                                <h2>Know More</h2>
                            </div></Link>
                        </div>
                        <div>
                            <img src={Development2} className={Styles.Img_two} alt="Development2.png" />
                        </div>
                    </div>
                </div>





                <div className={Styles.contaner}>
                    <h1 className={Styles.heading}>The Right Web Design <br />and Development Team</h1>
                    <div className={Styles.product}>
                        <div>
                            <img src={Development3} className={Styles.Img_three} alt="Development3.png" />
                        </div>
                        <div className={Styles.product_info}>
                            <p>With so much at state,it is important that your web designing and development company is reliable and has a team that is experienced and can be trusted. We at Techmapperz, have some of the best developers in the field with a combined experience of more than 100 years; we have worked in various fields in a wide range of segments from small business owners to restourents,corporates,government sectors and professionals. Our team compatibility and pooled experience is our biggest asset and the major reason that we use them in creating masterpiece websites. </p>
                            <Link to={"/contact"}> <div className={Styles.btn}>
                                <div></div>
                                <h2>Know More</h2>
                            </div></Link>
                        </div>
                    </div>
                </div>



                <div className={Styles.harbour}>
                    <h3 className={Styles.heading}>Elements of Web Design</h3>
                    <div className={Styles.design}>


                        <div className={Styles.card1}>
                        <div className={Styles.testimg1}>
                        <img src={Combind1} alt='' />
                        <img src={T01} alt='' />
                        </div> 
                            
                            <h1>Graphics</h1>
                            <p> It is a collective term used to describe everything visual,like the photos,logos,and icons on a website.The rule of thumb is for graphics to complement the website's... </p>
                        </div>


                        <div className={Styles.card2}>
                        <div className={Styles.testimg1}>
                        <img src={Combind5} alt='' />
                        <img src={T02} alt='' />
                        </div> 
                          
                            <h1>Navigation</h1>
                            <p>Ease of navigation is the glue that keeps the website visitor on the website,it should to be simple and effective and precise since the navigation tools to help users... </p>
                        </div>


                        <div className={Styles.card3}>
                        <div className={Styles.testimg1}>
                        <img src={Combind3} alt='' />
                        <img src={T03} alt='' />
                        </div> 
                           
                            <h1>Colour</h1>
                            <p>Colours are the most essential side of a website,it has a psychological impact on the visitors to take action appart from giving the website personality </p>
                        </div>


                        <div className={Styles.card4}>
                        <div className={Styles.testimg1}>
                        <img src={Combind4} alt='' />
                        <img src={T04} alt='' />
                        </div> 
                           
                            <h1>Speed</h1>
                            <p>This may be the last point but this is the first things customers and visitors notice in a website,content and the coding of the website should accommodate and understand...</p>
                        </div>

                    </div>
                </div>


                <div className={Styles.contaner}>
                    <h1 className={`${Styles.heading} ${Styles.class2}`}>Things to Consider</h1>
                    <div className={Styles.main}>
                        <div className={Styles.card}>
                            <img src={Webdevelop} />
                            <h3>Original Content</h3>
                            <p>It is heighly recommended that the content of the website is original and of high quality, this is not only helps your coustomers find you quickly but also effects the ranking of your website,ensure this for your website.</p>
                        </div>

                        <div className={`${Styles.card}  ${Styles.class1}`}>
                        <img src={Webdevelop} />
                            <h3>Call to Action</h3>
                            <p>Call to action is as simple as setting up a contact now button,this invariably motivates customers and visitors to get in touch with your company and promotes building relationships.</p>
                        </div>


                        <div className={Styles.card}>
                        <img src={Webdevelop} />
                            <h3>Compatibility</h3>
                            <p>Compatibility With time the inter has evolved a lot and so will it with time,and with this internet browsers also change, your website should be flexible enough to adapt itself to run a new browser as well as...</p>
                        </div>
                    </div>
                </div>



                <div className={Styles.contaner}>
                    <h1 className={Styles.heading}>Benefits of Getting Web <br/>Development Professionally</h1>
                    <div className={Styles.product}>
                        <img src={Geospatial_Mapping} alt="Geospatial_Mapping.png" />
                        <div className={Styles.product_info}>
                            <p>We Techmapperz,get the best-customized web development for your company with the maximum customization to its needs.We develop a strategy to make your goals a reality, business ownears, not always understand how website functions and can be easily cheated.A professional web design and development company with years of experties and experience can help you build a website that will attract potential customers and grow your web presence.Some of the section that our website makes you stand apart are: </p>
                            <ul>
                                <li>Drive Social Media Growth</li>
                                <li>Leveraging SEO</li>
                                <li>Drivr Wider Reach</li>
                                <li>Tapping on the Brand Power</li>
                                <li>Boost Sales</li>
                                <li>Stay ahead of Competitors</li>
                            </ul>
                            <Link to={"/contact"}> <div className={Styles.btn}>
                                <div></div>
                                <h2>Know More</h2>
                            </div></Link>
                        </div>
                    </div>
                </div>

                <div className={Styles.harbour}>
                    <h3 className={Styles.heading}>Why Choose Techmapperz for your Development</h3>
                    <div className={Styles.project}>
                        <div className={Styles.card5}>
                        <div className={Styles.testimg1}>
                        <img src={Webdevelop} alt='' />
                        <img src={T01} alt='' />
                        </div> 
                           
                            <h3>Flexibility</h3>
                            <p>We understand your need,and sometime we know that it can we time critical yet should affordable,that is why we have custom designed package to suit your demands of time and money.</p>
                        </div>


                        <div className={Styles.card5}>
                        <div className={Styles.testimg1}>
                        <img src={Vector7} alt='' />
                        <img src={T02} alt='' />
                        </div> 
                           
                            <h1>Friendly</h1>
                            <p>Nothing is more important that a customer oritented business model,we at Techmapperz  love what we do, and we are always passeonate about putting our customers first.</p>
                        </div>

                        <div className={Styles.card5}>
                        <div className={Styles.testimg1}>
                        <img src={Vector8} alt='' />
                        <img src={T03} alt='' />
                        </div> 
                           
                            <h1>Quality</h1>
                            <p>Quality makes us excel.our approach is designed to provide it at all levels of functioning up-to the micro level details,that extra ounce of effort in effective communication....</p>
                        </div>


                        <div className={Styles.card5}>
                        <div className={Styles.testimg1}>
                        <img src={Vector9} alt='' />
                        <img src={T04} alt='' />
                        </div> 
                           
                            <h1>Reduce cost</h1>
                            <p>Our team planning is so efficient that the project overall time in not extended and thus keeping the overall coast in check.</p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Web_Development
